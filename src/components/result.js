import React, { useState, useEffect } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Skeleton from "@material-ui/lab/Skeleton";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";

export default function Result(props){

  const [predict, setPredict] = useState([]);
  const [loading, setLoading] = useState([]);
  const [compgrow, setCompGrow] = useState(true);

  useEffect(() => {
    var value = props.query.slice(-1)[0];
    fetch(props.url+'/news?query='+value)
    .then(response => response.json())
    .then(data =>
      {
        setPredict([...predict, [value, data["predict"][1], data["predict"][7], data["predict"][15], data["predict"][30]]]);
        setLoading([...loading, value]);
        if (data[1] < 0){
          setCompGrow(false);
        }
      })
  }, [props.query]);



  return (
    <Grid container>
      <CssBaseline />
      <Container align="center">
      { props.query.map(com => (
       (loading.indexOf(com) === -1) ? (
         <Grid container>
         <Container align='center'>
           <Box maxWidth={500}>
             <Skeleton variant="rect" height={400} />
             <Box pt={0.5}>
               <Skeleton />
             </Box>
           </Box>
          </Container>
         </Grid>
       ) : (
           <Paper style={{ padding: "30px", maxWidth: "600px", margin: "20px" }}>
             <Grid container spacing={8}>
               <Grid item>
                 <Typography variant="h3" style={{ color: "grey" }}>
                  Stock Analysis
                 </Typography>
               </Grid>
               <Grid item>
                 {compgrow ? (
                   <TrendingUpIcon
                     style={{ fontSize: "60px", color: "#2dc937" }}
                   />
                 ) : (
                   <TrendingDownIcon
                     style={{ fontSize: "60px", color: "#cc3232" }}
                   />
                 )}
               </Grid>
             </Grid>

             <Typography variant="h6" color="textSecondary">
               The stock for {com} is expected to{" "}
               {compgrow ? (
                 <span
                   style={{
                     fontSize: "35px",
                     borderBottom: "7px solid #2dc937",
                     fontFamily: "varela round",
                     padding: "1px",
                     color: "black",
                     borderRadius: "3px"
                   }}
                 >
                   Rise
                 </span>
               ) : (
                 <span
                   style={{
                     fontSize: "35px",
                     borderBottom: "7px solid #cc3232",
                     fontFamily: "varela round",
                     padding: "1px",
                     color: "black",
                     borderRadius: "3px"
                   }}
                 >
                   Fall
                 </span>
               )}{" "}
               about <b>{Math.round(predict[loading.indexOf(com)][1] * 1000) / 1000}</b> by tommorow,{" "}
               <b>{Math.round(predict[loading.indexOf(com)][2] * 1000) / 1000}</b> by next 7 days,{" "}
               <b>{Math.round(predict[loading.indexOf(com)][3] * 1000) / 1000}</b> in the next 15
               days, <b>{Math.round(predict[loading.indexOf(com)][4] * 1000) / 1000}</b> in the next
               30 days.
             </Typography>
             <Typography variant="h6" color="textSecondary">
               The stock for {com} is expected to{" "}
               {compgrow ? (
                 <span
                   style={{
                     fontSize: "35px",
                     borderBottom: "7px solid #2dc937",
                     fontFamily: "varela round",
                     padding: "1px",
                     color: "black",
                     borderRadius: "3px"
                   }}
                 >
                   Rise
                 </span>
               ) : (
                 <span
                   style={{
                     fontSize: "35px",
                     borderBottom: "7px solid #cc3232",
                     fontFamily: "varela round",
                     padding: "1px",
                     color: "black",
                     borderRadius: "3px"
                   }}
                 >
                   Fall
                 </span>
               )}
             </Typography>
           </Paper>
         ))
       )}
      </Container>
    </Grid>
  );
}
