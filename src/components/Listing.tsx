// Blog post listing component
import React, { useState, useEffect } from "react";
import { IListingProps, IUser } from "../types";
import { useGetUsers } from "../hooks/useUsers";
import { Card, ErrorAlert } from "./shared";
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from "@material-ui/core";

const FilterContainer = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
});

const CardContainer = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "36px",
});
const FilterFormControl = styled(FormControl)({
  width: "245px",
  "& .MuiFormLabel-root.Mui-focused": {
    color: "#797878",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(0, 0, 0, 0.23)",
  },
});
const ButtonContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "20px 0px",
});
const ViewMoreButton = styled(Button)({
  "& .MuiButton-root": {
    borderRadius: "32px !important",
  },
});

const Listing: React.FC<IListingProps> = ({ showFiltered, search }) => {
  const [usersList, setUsersList] = useState<IUser[]>([]);
  const [genderFilter, setGenderFilter] = useState<string | null>(null);
  const [viewMoreCount, setViewMoreCount] = useState(0);

  // getting only 50 records to meet the functional requirement, we can add more if needed.
  const { data, isLoading, isError } = useGetUsers();

  // slicing data array to show only 9 record as per design on mount
  useEffect(() => {
    if (!isLoading) {
      setUsersList(data?.slice(0, 9)!);
    }
  }, [data]);

  // filtering data as per gender filter
  useEffect(() => {
    if (genderFilter) {
      setUsersList(
        data
          ?.slice(viewMoreCount, 9)
          .filter((user) => user.gender === genderFilter)!
      );
    } else {
      setUsersList(usersList);
    }
  }, [genderFilter]);

  //  handled pagination with simple technique
  //  as per design first time visible records are 9, so
  //  i decided to add 9 more on every click on see more article button
  // see more button will be disabled once all record shown
  const handleViewMore = () => {
    if (genderFilter) {
      setUsersList(
        data
          ?.slice(0, viewMoreCount + 9)
          .filter((user) => user.gender === genderFilter)!
      );
    } else {
      setUsersList(data?.slice(0, viewMoreCount + 9)!);
    }
    setViewMoreCount(viewMoreCount + 9);
  };
  return !isLoading ? (
    <>
      <FilterContainer>
        <FilterFormControl variant="outlined" size="small">
          <InputLabel id="gender-filter-label">Gender</InputLabel>
          <Select
            labelId="gender-filter-label"
            id="gender-filter"
            value={genderFilter || ""}
            label="Gender"
            onChange={(e) =>
              setGenderFilter((e.target.value as string) || null)
            }
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
        </FilterFormControl>
      </FilterContainer>
      {!isLoading && (
        <CardContainer>
          {usersList
            ?.filter((user) =>
              search.toLowerCase() === ""
                ? user
                : user.name.first.toLowerCase().includes(search)
            )
            .map((user) => (
              <Card
                key={user.login.uuid}
                user={user}
                imgURL="https://picsum.photos/500/300"
                type="Stories"
              />
            ))}
        </CardContainer>
      )}
      {!showFiltered && (
        <ButtonContainer>
          <ViewMoreButton
            onClick={handleViewMore}
            variant="outlined"
            disabled={data ? data.length === usersList.length : false}
          >
            View More Article
          </ViewMoreButton>
        </ButtonContainer>
      )}
    </>
  ) : (
    <></>
  );
};

export default Listing;
