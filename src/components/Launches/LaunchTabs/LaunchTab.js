import React from 'react'
import Grid from '@material-ui/core/Grid';
import Launch from '../Launch'
 const LaunchTab = props => (
    <Grid container spacing={24} style={{padding: 24}}>
    {props.launches.map(launch => {
           return  <Grid  item xs={12} sm={6} lg={4} xl={3} key={launch.flight_number}>
           <Launch  launch={launch} /></Grid>
         
        })}
    </Grid>
 )
export default LaunchTab