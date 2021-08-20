import {
  createMuiTheme,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import "./Header.css";
import categories from "../../data/category";
import MenuItem from '@material-ui/core/MenuItem'

const Header = ({category,setCategory,word,setWord,LightTheme}) => {
  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        main: LightTheme ? "#000" : "#fff",
      },
      type: LightTheme ? "light" : "dark",
    },
  });

  const handleChange = (e) => {
    setCategory(e.target.value);
    setWord("");
  };


  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            id="filled-basic"
            value={word}
            label="Search a Word"
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            select
                label="Language"
                value={category}
                onChange={(e)=>handleChange(e)}
                className="select"
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
