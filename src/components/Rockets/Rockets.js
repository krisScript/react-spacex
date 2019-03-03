import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/styles';
import Loader from '../Loader';
import { Consumer } from '../../Context';
import GridContainer from '../../HOC/GridContainer';
import GridItem from '../../HOC/GridItem';
import Rocket from './Rocket';
const Rockets = props => {
  return (
    <Consumer>
      {consumerData => {
        let content;
        if (consumerData.data) {
          const rockets = consumerData.data.rockets;
          content = (
            <GridContainer>
              {rockets.map(rocket => {
                return (
                  <GridItem key={rocket.id}>
                    <Rocket rocket={rocket} />
                  </GridItem>
                );
              })}
            </GridContainer>
          );
        } else {
          content = <Loader />;
        }
        console.log(consumerData);
        return <div>{content}</div>;
      }}
    </Consumer>
  );
};

export default withStyles(styles)(Rockets);
