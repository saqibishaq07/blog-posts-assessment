// Header component
import React from "react";

import { Box, CircularProgress, Typography, styled } from "@material-ui/core";
import { lables } from "../assets/lables/lable";
import {
  ErrorAlert,
  FlexCenter,
  Heading,
  ProfileInfo,
  TechnologyChip,
} from "./shared";
import { useGetUsers } from "../hooks/useUsers";

const Container = styled(Box)({
  textAlign: "left",
});

const ImageContainer = styled(Box)({
  width: "100%",
  height: "480px",
  marginTop: "32px",
  borderRadius: "6px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
});
const HeaderContent = styled(Box)({
  width: "70%",
  padding: "40px",
});
const Title = styled(Typography)({
  margin: "0px",
  color: "white",
  fontFamily: "Inter",
  fontSize: "44px",
  fontStyle: "normal",
  fontWeight: 800,
  lineHeight: "normal",
  alignSelf: "stretch",
});

const Header: React.FC = () => {
  const { data, isLoading, isError } = useGetUsers();
  return (
    <Container>
      <Heading>Top Stories</Heading>
      <FlexCenter>
        {isLoading ? (
          <CircularProgress size={60} />
        ) : isError ? (
          <ErrorAlert />
        ) : (
          <ImageContainer
            style={{
              background: "url(https://picsum.photos/id/9/1400/480)", // adding specific tech related image as cover
              backgroundSize: "cover",
            }}
          >
            <HeaderContent>
              <TechnologyChip />
              <Title>{lables.impactOfTechnology}</Title>
              <ProfileInfo isHeaderProfile={true} user={data && data[0]} />
            </HeaderContent>
          </ImageContainer>
        )}
      </FlexCenter>
    </Container>
  );
};

export default Header;
