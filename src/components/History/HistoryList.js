import React from 'react'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import styles from '../../styles/styles';
import PropTypes from 'prop-types';
import Loader from '../Loader'
import Grid from '@material-ui/core/Grid';
import {Consumer } from '../../Context';
import Event from './Event'
 const HistoryList = (params) => {

    return(
        <Consumer>
            {consumerData => {
                let content;
                console.log(consumerData)
                if (consumerData.data) {
                  const { history } = consumerData.data;
                  
                  content = (
                    <>
                     <Grid container spacing={24} style={{ padding: 24 }}>
    {history.map(event => {
      return (
        <Grid
          item
          xs={12}
          sm={6}
          lg={4}
          xl={3}
          key={event.id}
        >
          <Event event={event} />
        </Grid>
      );
    })}
  </Grid>
                    </>
                  );
                } else {
                  content = <Loader />;
                }
                return (
                    <div>
                        {content}
                    </div>
                )
            }}
        </Consumer>
    )
}

export default HistoryList