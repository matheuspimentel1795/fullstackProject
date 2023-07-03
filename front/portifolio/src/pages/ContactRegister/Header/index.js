import { Grid } from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useNavigate } from "react-router-dom";
export const HeaderContactsRegister = () => {

  const navigate = useNavigate()
  const goToHome = () => {
    navigate('/')
  };

  return (
    <Grid sx={{ backgroundColor: "#128C7E" }} padding="2%">
        <Grid
          display={"flex"}
          alignItems="flex-start"
          gap={2}
          justifyContent="flex-start"
        >
          <ArrowBackIcon onClick={goToHome} />
          
        </Grid>
    
    </Grid>
  );
};
