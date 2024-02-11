import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetUsers } from "../hooks/useUsers";
import { IUser } from "../types";
import {
  Avatar,
  Box,
  CircularProgress,
  Typography,
  styled,
} from "@material-ui/core";
import { ErrorAlert } from "./shared";

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
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  position: "absolute",
  left: "42%",
  top: "70px",
  gap: "32px",
});
const ProfileImage = styled(Avatar)({
  width: "200px",
  height: "200px",
  "& .MuiAvatar-fallback": {
    height: "100%",
    width: "100%",
  },
});

const Name = styled(Typography)({
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
  console.log("uuid", uuid);
  useEffect(() => {
    if (!isLoading) {
      const userResult = data?.find((item) => item.login.uuid == uuid);
      if (userResult) {
        setUser(user);
      }
      console.log("userResult", userResult);
    }
  }, [data]);

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
            <ProfileImage alt="profile picture" src={user?.picture.large} />
            <Box>
              <Typography variant="subtitle1"> Hi, My Name is</Typography>
              <Name variant="h4">
                {user?.name.first} {user?.name.last} Ava Pierce
              </Name>
            </Box>
          </>
        )}
      </ProfileContent>
    </Container>
  );
};

export default Profile;
