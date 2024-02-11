import React, { useState } from "react";
import { Box, styled } from "@material-ui/core";
import Listing from "./Listing";
import Header from "./Header";
import Trending from "./TrendingPosts";
import Destinations from "./Destination";
import { IPostsProps } from "../types";
import Navbar from "./NavBar";

const Main = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  margin: "40px 80px",
});

const Landing: React.FC = () => {
  const [search, setSearch] = useState("");
  const [showFiltered, setShowFiltered] = useState(false);
  return (
    <>
      <Navbar setShowFiltered={setShowFiltered} setSearch={setSearch} />
      <Main>
        {!showFiltered && <Header />}
        <Listing showFiltered={showFiltered} search={search} />
        <Trending search={search} />
      </Main>
      {!showFiltered && <Destinations />}
    </>
  );
};

export default Landing;
