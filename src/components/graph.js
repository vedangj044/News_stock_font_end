import React, { useState, useEffect } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Skeleton from "@material-ui/lab/Skeleton";
import Paper from "@material-ui/core/Paper";
import vegaEmbed from "vega-embed";


export default function Graph(props){

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    var value = props.query.slice(-1)[0];
    setLoading(true);

    fetch(props.url+'/news?query='+value).then(function(response) {
      if(response.ok) {
        vegaEmbed('#view', props.url+'/stock-graph?query='+value)
        .then(result => {
          result.view.width(800).height(500).run();
        })
        .then(result => setLoading(false))
        .catch(console.error)
      }
    })


  }, [props.query]);

  return (
    <Grid container>
      <CssBaseline />
      <Container align="center">
        <Paper style={{marginTop:"50px", overflow: "scroll"}}>
          <h3> {props.query.slice(-1)[0].toUpperCase()} </h3>

            <Box style={{display: loading?"block":"none"}}>
              <Skeleton variant="rect" style={{height:"400px"}}/>
              <Box pt={0.5}>
                <Skeleton />
                </Box>
            </Box>
            <div id="view" style={{display: loading?"none":"block"}}></div>

        </Paper>
      </Container>
    </Grid>
  );
}
