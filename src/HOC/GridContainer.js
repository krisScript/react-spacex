import React from 'react';
import Grid from '@material-ui/core/Grid';
const GridContainer = props => (
  <Grid container spacing={24} style={{ padding: 24 }}>
    {props.children}
  </Grid>
);

export default GridContainer;
