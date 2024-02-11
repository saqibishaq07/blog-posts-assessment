// Navbar component
import React, { ChangeEvent } from "react";
import {
  Box,
  Button,
  IconButton,
  Link,
  styled,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { INavBarProps } from "../types";

const NavBarContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "12px 24px",
  borderBottom: "1px solid #cdcbcb",
});

const Logo = styled(Box)({
  height: "38px",
  width: "38px",
  borderRadius: "50%",
  backgroundColor: "#eee7e7",
});
const NavLink = styled(Link)({
  cursor: "pointer",
  color: "#57595d",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
});
const NavLinkContainer = styled(Box)({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "24px",
});
const NavSearchContainer = styled(Box)({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "24px",
});

const MyTextField = styled(TextField)({
  borderRadius: "20px",
  padding: "4px 12px",
  textAlign: "center",
  backgroundColor: "#eee7e7",
  "& .MuiTextField-root:hover": {
    borderBottom: "none",
  },
  "& .MuiInput-root:hover": {
    borderBottom: "none",
  },
  "& .MuiInput-underline:before": {
    borderBottom: "none",
  },
  "& .MuiInput-underline:after": {
    borderBottom: "none",
  },
  "& .MuiInput-underline:hover": {
    borderBottom: "none",
  },
});

const ArticleButton = styled(Button)({
  backgroundColor: "black",
  color: "white",
  padding: "4px 12px",
  textTransform: "none",
});

const Navbar: React.FC<INavBarProps> = ({ setShowFiltered, setSearch }) => {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      setShowFiltered(false);
    } else {
      setSearch(event.target.value);
      setShowFiltered(true);
    }
  };
  return (
    <NavBarContainer>
      <NavLinkContainer>
        <Logo />
        <NavLink underline="none">Home</NavLink>
        <NavLink underline="none">My Article</NavLink>
      </NavLinkContainer>
      <NavSearchContainer>
        <MyTextField
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearch(e)}
        />
        <ArticleButton size="medium">Create Article</ArticleButton>
        <Logo />
      </NavSearchContainer>
    </NavBarContainer>
  );
};

export default Navbar;
