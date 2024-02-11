import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import {
  Box,
  styled,
  Card as MuiCard,
  Typography,
  CardMedia,
  CardContent,
  Chip,
  Avatar,
} from "@material-ui/core";
import { ICard, IInfoContainer } from "../types";
import { lables } from "../assets/lables/lable";
import { Alert } from "@mui/material";

const Title = styled(Typography)({
  margin: "0px",
  fontFamily: "Inter",
  fontSize: "22px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  alignSelf: "stretch",
});

const InfoContainer = styled(Box)({
  display: "flex",
  gap: "12px",
  marginTop: "16px",
  alignItems: "center",
});

export const FlexCenter = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const Heading: React.FC<{ children: string | JSX.Element }> = ({
  children,
}) => {
  const MyHeading = styled(Typography)({
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: "normal",
  });
  return (
    <MyHeading variant="h3" gutterBottom={true}>
      {children}
    </MyHeading>
  );
};

export const TechnologyChip: React.FC = () => {
  const MyChip = styled(Chip)({
    marginBottom: "16px",
    "& .MuiChip-root": {
      color: "blue !important",
      borderRadius: "4px !important",
      backgroundColor: "#ededf4 !important",
    },
  });
  return <MyChip label="Technology" />;
};

export const ErrorAlert: React.FC = () => {
  return (
    <Alert severity="error" variant="filled">
      Unknown Error while fetching Stories.
    </Alert>
  );
};

export const ProfileInfo: React.FC<IInfoContainer> = ({
  user,
  isHeaderProfile,
}) => {
  const Name = styled(Link)({
    margin: "0px",
    color: isHeaderProfile ? "white" : "#797878",
    fontFamily: "Inter",
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    alignSelf: "auto",
    textDecoration: "none",
    cursor: "pointer",
  });

  const MyDate = styled(Typography)({
    color: isHeaderProfile ? "white" : "#797878",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    alignSelf: "auto",
    marginLeft: "20px",
    "& .MuiTypography-body1": {
      fontSize: "14px",
    },
  });
  return (
    <InfoContainer>
      <Avatar alt="profile" src={user?.picture.medium} />
      <Name to={user?.login.uuid ?? ""}>
        {user?.name.first} {user?.name.last}
      </Name>
      <MyDate>
        {format(user ? new Date(user.dob.date) : new Date(), "MMMM dd yyyy")}
      </MyDate>
    </InfoContainer>
  );
};

export const Card: React.FC<ICard> = ({ user, imgURL, type }) => {
  const MyCard = styled(MuiCard)({
    display: "flex",
    flexDirection: type === "Stories" ? "column" : "row",
    gap: "8px",
    padding: "12px",
    alignItems: "center",
    maxWidth: type === "Stories" ? "375px" : "575px",
    borderRadius: "8px",
  });

  return (
    <MyCard variant="outlined">
      <CardMedia
        component="img"
        alt="random pitctue"
        height="220"
        style={{ borderRadius: "8px" }}
        image={imgURL}
      />
      <CardContent>
        <TechnologyChip />
        <Title>{lables.impactOfTechnology}</Title>
        <ProfileInfo user={user} />
      </CardContent>
    </MyCard>
  );
};
