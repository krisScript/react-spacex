import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import styles from '../../styles/styles';
import PropTypes from 'prop-types';
import LaunchTabs from './LaunchTabs/LauchTabs';
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
Launches.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Launches);
