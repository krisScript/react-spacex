import React from 'react';
import Loader from '../Loader';
import Grid from '@material-ui/core/Grid';
import { Consumer } from '../../Context';
import Event from './Event';
import GridContainer from '../../HOC/GridContainer';
import GridItem from '../../HOC/GridItem';
const HistoryList = props => {
  return (
    <Consumer>
      {consumerData => {
        let content;
        console.log(consumerData);
        if (consumerData.data) {
          const { history } = consumerData.data;

          content = (
           
              <GridContainer>
                {history.map(event => {
                  return (
                    <GridItem key={event.id}>
                      <Event event={event} />
                    </GridItem>
                  );
                })}
              </GridContainer>
            
          );
        } else {
          content = <Loader />;
        }
        return <div>{content}</div>;
      }}
    </Consumer>
  );
};

export default HistoryList;
