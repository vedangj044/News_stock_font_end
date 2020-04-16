import React, { useState } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  tfield: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "50vw",
    maxWidth: 500
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));


export default function Form(props){

  const classes = useStyles();

  const [queryArr, setQueryArr] = useState([]);

  const handleDeleteChip = event => {
    var tempArr = [...queryArr];
    var index = tempArr.indexOf(event.target.value);
    tempArr.splice(index, 1);
    setQueryArr(tempArr);
  };

  const handleEnter = event => {
    if (event.key === "Enter") {
      var compadd = event.target.value;
      if (compadd !== "" && queryArr.indexOf(compadd) === -1) {
        setQueryArr([...queryArr, compadd])
      }

    event.preventDefault();
    }
  };

  return (
    <Grid container>
      <CssBaseline />
      <Container align="center">
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <Paper
            component="form"
            className={classes.tfield}
            style={{ borderRadius: "100px" }}
          >
            <IconButton
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon/>
            </IconButton>
            <InputBase
              className={classes.input}
              placeholder="Search Companies of interest"
              inputProps={{ "aria-label": "search companies" }}
              onKeyPress={handleEnter}
            />
          </Paper>
          {queryArr.map(comp1 => (
              <Chip
                variant="outlined"
                color="primary"
                avatar={<Avatar>{comp1.charAt(0)}</Avatar>}
                label={comp1}
                onDelete={event => handleDeleteChip(event, comp1)}
                style={{ margin: "20px" }}
                value={comp1}
                key={comp1}
              />
            ))}
        </form>
      </div>
      </Container>
    </Grid>
  );
}
