import React from "react";

// Mui Imports
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const Card = (props) => {
  const styles = {
    root: {
      py: 2,
    },
    gridItem: {
      p: 3,
      width: 600,
    },
    paper: {
      p: 3,
      borderRadius: 6,
    },
  };
  return (
    <Grid container justifyContent="center" sx={styles.root}>
      <Grid item sx={styles.gridItem}>
        <Paper elevation={3} sx={styles.paper}>
          {props.children}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Card;
