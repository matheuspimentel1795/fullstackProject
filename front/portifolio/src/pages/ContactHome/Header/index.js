import { Grid, TextField } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
export const HeaderContacts = ({onChangeFunction}) => {
  const [filter, setFilter] = useState(false);
  const changeFilter = () => {
    setFilter(!filter);
  };
  return (
    <Grid sx={{ backgroundColor: filter ? "white" : "#128C7E" }} padding="2%">
      {filter ? (
        <Grid
          display={"flex"}
          alignItems="flex-end"
          gap={2}
          justifyContent="flex-end"
        >
          <ArrowBackIcon onClick={changeFilter} />
          <TextField
            onChange={(e)=>onChangeFunction(e)}
            sx={{ backgroundColor: "white" }}
            fullWidth
            variant="standard"
          />
        </Grid>
      ) : (
        <Grid
          item
          xs={12}
          display={"flex"}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <h4>Contatos</h4>
          <SearchIcon onClick={changeFilter} />
        </Grid>
      )}
    </Grid>
  );
};
