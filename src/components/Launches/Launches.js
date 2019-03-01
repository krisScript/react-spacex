import React from 'react';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import styles from '../../styles/styles';

import GridListTile from '@material-ui/core/GridListTile'
import GridList from '@material-ui/core/GridList';
import IconButton from '@material-ui/core/IconButton';
import Launch from './Launch'
import LaunchTabs from './LaunchTabs/LauchTabs'
const Launches = props => {
  const { classes } = props;
 
  return (
    <div>
      <Paper className={classes.paper} elevation={3}>
                <Typography variant="h5">Launches</Typography>
              </Paper>
              <LaunchTabs />
    </div>
  );
};
export default withStyles(styles)(Launches);


// <Consumer>
// {value => {
//   let content;

//   if (value.data) {
//    const {launches} = value.data
// content =   ''
// //  <Grid container spacing={24} style={{padding: 24}}>
// // {launches.map(launch => {
// //    return  <Grid  item xs={12} sm={6} lg={4} xl={3} key={launch.flight_number}>
// //    <Launch  launch={launch} /></Grid>
 
// // })}
  
// // </Grid>
//   } else {
//     content = (
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'center',
//           marginTop: '5rem',
//         }}
//       >
//         <CircularProgress />
//       </div>
//     );
//   }
//   return (
//     <div>
      
//       {content}
//     </div>
//   );
// }}
// </Consumer>