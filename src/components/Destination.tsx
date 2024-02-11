import React from "react";

import { Box, Divider, Typography, styled } from "@material-ui/core";
import { Heading } from "./shared";
import { lables } from "../assets/lables/lable";

// added hardcoded destination
const DESTINATIONS = ["Italy", "Dubai", "China", "Germany", "Egypt"];

const Container = styled(Box)({
  textAlign: "left",
  height: "80vh",
  marginLeft: "80px",
});

const ImageContainer = styled(Box)({
  width: "100%",
  marginTop: "20px",
  display: "flex",
  alignItems: "center",
  gap: 20,
  overflow: "scroll",
  scrollBehavior: "smooth",
  scrollbarWidth: "none",
});
const Image = styled(Box)({
  minWidth: "300px",
  height: "200px",
  borderRadius: "6px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const Title = styled(Typography)({
  margin: "0px",
  color: "white",
  fontWeight: 700,
  alignSelf: "center",
});

const MyDivider = styled(Divider)({
  width: "91%",
});

const Destinations: React.FC = () => {
  return (
    <Container>
      <Heading>Top Destinations</Heading>
      <Typography variant="subtitle2" gutterBottom={true}>
        {lables.destinationDescription}
      </Typography>
      <MyDivider />
      <ImageContainer>
        {" "}
        {DESTINATIONS.map((destination, index) => (
          <Image
            key={index}
            style={{
              background: `url(https://picsum.photos/id/${43 + index}/300/200)`, // setting random images for destinations
              backgroundSize: "cover",
            }}
          >
            <Title variant="h4">{destination}</Title>
          </Image>
        ))}
      </ImageContainer>
    </Container>
  );
};

export default Destinations;
