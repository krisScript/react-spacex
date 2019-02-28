import React from 'react';
import { Consumer } from '../Context';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import styles from '../styles/headingPaper';
import CircularProgress from '@material-ui/core/CircularProgress';
import GridListTile from '@material-ui/core/GridListTile'
import GridList from '@material-ui/core/GridList';
import IconButton from '@material-ui/core/IconButton';

const Launches = props => {
  const { classes } = props;
 
  return (
    <div>
      <Consumer>
        {value => {
          let content;
          console.log(value);
          if (value.data) {
           const {launches} = value.data
           console.log(launches)
        content =     <div className={classes.grid}>
        <Grid container spacing={24}>
        {launches.map(launch => {
           return <Grid item xs={6} key={launch.flight_number}>
            <Paper className={classes.paper}>xs</Paper>
             </Grid>
         
        })}
          
        </Grid>
      </div>
          } else {
            content = (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '5rem',
                }}
              >
                <CircularProgress />
              </div>
            );
          }
          return (
            <div>
              <Paper className={classes.paper} elevation={3}>
                <Typography variant="h5">Launches</Typography>
              </Paper>
              {content}
            </div>
          );
        }}
      </Consumer>
     
    </div>
  );
};
export default withStyles(styles)(Launches);
