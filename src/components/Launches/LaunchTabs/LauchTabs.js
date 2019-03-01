import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import LaunchTab from './LaunchTab';
import Loader from '../../Loader';
import { Consumer } from '../../../Context';
import Launch from '../Launch';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: '100vw',
    margin: '0'
  }
});

class TabsWrappedLabel extends Component {
  state = {
    value: 'all',
    launches: null,
    pastLaunches: null,
    upcomingLaunches: null
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Consumer>
          {contextValue => {
            let content;

            if (contextValue.data) {
              const { launches } = contextValue.data;
              const pastLaunches = launches.filter(
                launch => launch.upcoming === false
              );
              const upcomingLaunches = launches.filter(
                launch => launch.upcoming === true
              );
              content = (
                <>
                  {' '}
                  <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange} centered>
                      <Tab value="past" label="Past" />
                      <Tab value="all" label="All" />
                      <Tab value="upcoming" label="Upcoming" />
                    </Tabs>
                  </AppBar>
                  {value === 'past' && <LaunchTab launches={pastLaunches} />}
                  {value === 'all' && <LaunchTab launches={launches} />}
                  {value === 'upcoming' && (
                    <LaunchTab launches={upcomingLaunches} />
                  )}
                </>
              );
            } else {
              content = <Loader />;
            }
            return <div>{content}</div>;
          }}
        </Consumer>
      </div>
    );
  }
}

export default withStyles(styles)(TabsWrappedLabel);
