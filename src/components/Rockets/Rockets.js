import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import styles from '../../styles/styles';
import PropTypes from 'prop-types';
import Loader from '../Loader'
import Grid from '@material-ui/core/Grid';
import {Consumer } from '../../Context';
import Rocket from './Rocket'
const Rockets = props => {
  return (
      <Consumer>
          {consumerData => {
              let content
              if(consumerData.data){
                  const rockets = consumerData.data.rockets
                  content =  <Grid container spacing={24} style={{ padding: 24 }}>
                  {rockets.map(rocket => {
                    return (
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        lg={4}
                        xl={3}
                        key={rocket.id}
                      >
                        <Rocket rocket={rocket} />
                      </Grid>
                    );
                  })}
                </Grid>
              }else {
                  content = <Loader/>
              }
              console.log(consumerData)
              return(
                <div>
                {content}
              </div>
              )
          }}
      </Consumer>
    
  );
};

export default withStyles(styles)(Rockets);
