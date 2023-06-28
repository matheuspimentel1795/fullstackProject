import { Grid } from "@mui/material";
import { useMemo } from "react";
import profile from "../assets/profile.jpg";
import { ProfileImage } from "./styles";
import MonitorIcon from "@mui/icons-material/Monitor";
function ProfessionalExperience() {
  const { innerWidth: screenWidth } = window;
  const isMobile = useMemo(() => screenWidth < 768, [screenWidth]);

  return (
    <Grid
      sx={{ backgroundColor: "SteelBlue" }}
      padding={"2%"}
      container
      collums={12}
    >
      <Grid sm={12} item>
        <h1>Experiência</h1>
      </Grid>
      <Grid sm={12} item>
        {isMobile ? (
          <h2>
            Desenvolvedor Full Stack - Meta Tecnologia - Setembro 2021/ Atual
          </h2>
        ) : (
          <h1>
            Desenvolvedor Full Stack - Meta Tecnologia - Setembro 2021/ Atual
          </h1>
        )}

        <p>
          Atuação em diversos projetos como Full Stack , em todos os projetos
          foi o utilizado medodologia ágil(JIRA){" "}
        </p>
        <Grid
          sm={12}
          item
          sx={{
            border: "1px solid black",
            marginTop: "1%",
            borderRadius: "10px",
          }}
          padding={"1%"}
        >
          <h2>Projeto Smartcoop </h2>
          <p>
            - Desenvolvedor Full Stack na implementação do projeto offline e
            mobile , utilizando as tecnologias ReactJs, Typescript ,React Native
            e Nest.Js.
          </p>
        </Grid>
        <Grid
          sx={{
            border: "1px solid black",
            marginTop: "1%",
            borderRadius: "10px",
          }}
          sm={12}
          item
          padding={"1%"}
        >
          <h2>Projeto Rodoil </h2>
          <p>- Desenvolvedor Full Stack, utlilizando ReactJs e NodeJs.</p>
        </Grid>
        <Grid
          sm={12}
          item
          sx={{
            border: "1px solid black",
            marginTop: "1%",
            borderRadius: "10px",
          }}
          padding={"1%"}
        >
          <h2>Projeto Grupo Tiradentes </h2>
          <p>
            - Liderei o desenvolvimento e adoção do ReactJs/Typescript para o
            dashboard de um web app, com mobile first.
          </p>
          <p>
            - Atuação como Desenvolvedor BackEnd utilizando .NetCore, Asp Net,
            bem como o banco Oracle.
          </p>
        </Grid>
      </Grid>
      <Grid sm={6} item></Grid>
    </Grid>
  );
}

export default ProfessionalExperience;
