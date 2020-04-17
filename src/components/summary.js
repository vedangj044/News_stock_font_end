import React, { useState, useEffect } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Skeleton from "@material-ui/lab/Skeleton";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";


export default function Graph(props){

  const [loading, setLoading] = useState(true)
  const [summary, setSummary] = useState("")

  useEffect(() => {
    var value = props.query.slice(-1)[0];
    setLoading(true);
    fetch(props.url+'/get-summary?query='+value)
    .then(resp => resp.json())
    .then(res => {
      setLoading(false);
      setSummary(res);
    })
  }, [props.query]);

  return (
    <Grid container>
      <CssBaseline />
      <Container align="center">
        <Paper style={{marginTop:"50px",  maxWidth: "600px"}}>
          <h3> {props.query.slice(-1)[0].toUpperCase()} </h3>

            <Box>
              <Skeleton variant="rect" style={{height:"400px", display: loading?"block":"none"}}/>
              <Typography variant="h6" color="textSecondary" style={{display: loading?"none":"block"}}>
                {summary}
              </Typography>
            </Box>


        </Paper>
      </Container>
    </Grid>
  );
}
