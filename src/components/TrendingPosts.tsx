// Trending posts component
import React, { useState, useEffect } from "react";
import { ITrendingProps, IUser } from "../types";
import { useGetUsers } from "../hooks/useUsers";
import { Card, Heading } from "./shared";
import { Box, styled } from "@material-ui/core";

const CardContainer = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "36px",
});

const TrendingPosts: React.FC<ITrendingProps> = ({ search }) => {
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);
  const { data, isLoading } = useGetUsers();

  useEffect(() => {
    if (!isLoading) {
      setFilteredUsers(data?.slice(0, 8)!); //slicing only 8 as per design
    }
  }, [data]);

  return (
    <Box>
      {!isLoading && (
        <>
          <Heading>Trending</Heading>

          <CardContainer>
            {filteredUsers
              ?.filter((user) =>
                search.toLowerCase() === ""
                  ? user
                  : user.name.first.toLowerCase().includes(search)
              )
              .map((user) => (
                <Card
                  key={user.login.uuid}
                  user={user}
                  imgURL="https://picsum.photos/200/200"
                  type="Trending"
                />
              ))}
          </CardContainer>
        </>
      )}
    </Box>
  );
};

export default TrendingPosts;
