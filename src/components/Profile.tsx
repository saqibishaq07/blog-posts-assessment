import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetUsers } from "../hooks/useUsers";
import { IUser } from "../types";
import {
  Avatar,
  Box,
  CircularProgress,
  IconButton,
  Typography,
  styled,
} from "@material-ui/core";

import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LockIcon from "@mui/icons-material/Lock";
import { ErrorAlert } from "./shared";
import { format } from "date-fns";

const Container = styled(Box)({
  display: "flex",
  position: "relative",
  height: "atuo",
});

const Background = styled(Box)({
  width: "100%",
  height: "200px",
  backgroundColor: "#f3f1f1",
});

const ProfileContent = styled(Box)({
  display: "flex",
  width: "700px",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  position: "absolute",
  left: "25%",
  top: "70px",
  gap: "52px",
});
const ProfileImage = styled(Avatar)({
  width: "200px",
  height: "200px",
  "& .MuiAvatar-root": {
    width: "200px",
    height: "200px",
  },
  "& .MuiAvatar-fallback": {
    height: "200px",
    width: "200px",
  },
});
const ProfileInfo = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
});
const IconContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: "18px",
});

const HoveredText = styled(Typography)({
  margin: "0px",
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
});

const Profile: React.FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const { uuid } = useParams();
  const { data, isLoading, isError } = useGetUsers();
  const iconData = [
    {
      icon: <PersonIcon width="40px" height="48px" />,
      text: user ? `Hi, My Name is ${user.name.first} ${user?.name.last}` : "",
    },
    {
      icon: <EmailIcon width="40px" height="48px" />,
      text: user ? `${user.email}` : "",
    },
    {
      icon: <CalendarMonthIcon width="40px" height="48px" />,
      text: user ? format(new Date(user.dob.date), "dd/MM/yyyy") : "",
    },
    {
      icon: <LocationOnIcon width="40px" height="48px" />,
      text: user
        ? `${user.location.street.number} ${user.location.street.name} ${user.location.country}`
        : "",
    },
    {
      icon: <LocalPhoneIcon width="40px" height="48px" />,
      text: user ? `${user.phone}` : "",
    },
    {
      icon: <LockIcon width="40px" height="48px" />,
      text: user ? `${user.login.password}` : "",
    },
  ];
  const [hoveredText, setHoveredText] = useState<string>(iconData[0].text);

  useEffect(() => {
    if (!isLoading) {
      const userResult = data?.find((item) => item.login.uuid == uuid);
      if (userResult) {
        setUser(userResult);
        setHoveredText(iconData[0].text);
      }
    }
  }, []);

  const handleIconHover = (text: string) => {
    setHoveredText(text);
  };

  const handleIconLeave = () => {
    setHoveredText(iconData[0].text);
  };

  return (
    <Container>
      <Background />
      <ProfileContent>
        {isLoading ? (
          <CircularProgress size={60} />
        ) : isError ? (
          <ErrorAlert />
        ) : (
          <>
            <ProfileImage
              style={{ width: "200px", height: "200px" }}
              alt="profile picture"
              src={user?.picture.large}
            />
            <ProfileInfo>
              <HoveredText variant="h4">{hoveredText}</HoveredText>
              <IconContainer>
                {iconData.map((item, index) => (
                  <Box
                    key={index}
                    onMouseEnter={() => handleIconHover(item.text)}
                    onMouseLeave={handleIconLeave}
                  >
                    <IconButton>{item.icon}</IconButton>
                  </Box>
                ))}
              </IconContainer>
            </ProfileInfo>
          </>
        )}
      </ProfileContent>
    </Container>
  );
};

export default Profile;
