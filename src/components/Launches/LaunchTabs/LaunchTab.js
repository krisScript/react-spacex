import React from 'react';
import PropTypes from 'prop-types';
import Launch from '../Launch';
import GridContainer from '../../../HOC/GridContainer';
import GridItem from '../../../HOC/GridItem';
const LaunchTab = props => (
  <GridContainer>
    {props.launches.map(launch => {
      return (
        <GridItem key={`${launch.flight_number}-${launch.launch_date_unix}`}>
          <Launch launch={launch} />
        </GridItem>
      );
    })}
  </GridContainer>
);

LaunchTab.propTypes = {
  launches: PropTypes.array.isRequired
};
export default LaunchTab;
