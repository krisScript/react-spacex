import React from 'react'
import Grid from '@material-ui/core/Grid';
 const GridItem = props => (
    <Grid item xs={12} sm={6} lg={4} xl={3} >
    {props.children}
    </Grid>
 )
  

export default GridItem