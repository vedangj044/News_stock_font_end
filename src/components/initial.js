import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Zoom from "react-reveal/Zoom";
import frontimg1 from "./img/front1.jpg";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
image: {
  backgroundImage: `url(${frontimg1})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100vh"
},
}));


export default function Initial(){

  const classes = useStyles();

  return (
    <Grid container className={classes.image}>
      <CssBaseline />
      <Container>
        <Zoom duration={4000}>
          <Typography
            variant="h1"
            align="center"
            style={{
              fontFamily: "varela round",
              color: "#3c3428",
              marginTop: "20%",
              fontSize: "9vw",
            }}>
            Famulus
          </Typography>

          <Typography
            variant="h3"
            align="center"
            style={{ fontFamily: "source sans pro", color: "#3c3428",
                    fontSize: "4vw"}}>
            Your Intelligent Stock Assistant
          </Typography>
        </Zoom>
      </Container>
    </Grid>
    );
}
