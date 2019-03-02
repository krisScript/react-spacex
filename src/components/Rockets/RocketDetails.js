import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Loader from '../Loader';
import { Consumer } from '../../Context';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import RocketDetail from './RocketDetail';
import getDetailComponentsArr from './getDetailComponentsArr';
import Typography from '@material-ui/core/Typography';
const RocketDetails = props => {
  const { rocketId } = props.match.params;
  console.log(rocketId);
  return (
    <Consumer>
      {contextValue => {
        let content;
        if (contextValue.data) {
          const rocket = contextValue.data.rockets.filter(compareRocket => {
            return compareRocket.id === parseInt(rocketId);
          })[0];

          console.log(rocket);
          const rocketDetailComponentsArr = getDetailComponentsArr(rocket);
          const rocketEnginesDetailComponentsArr = getDetailComponentsArr(
            rocket.engines
          );
          const firstStageDetailComponentsArr = getDetailComponentsArr(
            rocket.first_stage
          );
          const secondStageDetailComponentsArr = getDetailComponentsArr(
            rocket.second_stage
          );
          console.log(rocketDetailComponentsArr);

          content = (
            <>
              <Grid container spacing={24} style={{ padding: 24 }}>
                <Grid item xs={12} sm={6} lg={4} xl={4}>
                  <Card style={{ height: '100%' }}>
                    <CardHeader title={rocket.rocket_name} />
                    <CardContent>
                      {rocketDetailComponentsArr}
                      <RocketDetail
                        detailName="height"
                        detailValue={`meters: ${rocket.height.meters}, feet: ${
                          rocket.height.feet
                        }`}
                      />
                      <RocketDetail
                        detailName="diameter"
                        detailValue={`meters: ${
                          rocket.diameter.meters
                        }, feet: ${rocket.diameter.feet}`}
                      />
                      <RocketDetail
                        detailName="mass"
                        detailValue={`kg: ${rocket.mass.kg}, lb: ${
                          rocket.mass.lb
                        }`}
                      />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} xl={4}>
                  <Card style={{ height: '100%' }}>
                    <CardHeader title="Engines" />
                    <CardContent>
                      {rocketEnginesDetailComponentsArr}
                      <RocketDetail
                        detailName="thrust vacuum"
                        detailValue={`Kn: ${
                          rocket.engines.thrust_vacuum.kN
                        }, lbf: ${rocket.engines.thrust_vacuum.lbf}`}
                      />
                      <RocketDetail
                        detailName="thrust sea level"
                        detailValue={`Kn: ${
                          rocket.engines.thrust_sea_level.kN
                        }, lbf: ${rocket.engines.thrust_sea_level.lbf}`}
                      />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} xl={4}>
                  <Card style={{ height: '100%' }}>
                    <CardHeader title="Stages" />
                    <CardContent>
                      <Typography component="h3" variant="h6" gutterBottom>
                        Stage 1
                      </Typography>
                      {firstStageDetailComponentsArr}
                      <RocketDetail
                        detailName="thrust vacuum"
                        detailValue={`Kn: ${
                          rocket.first_stage.thrust_vacuum.kN
                        }, lbf: ${rocket.first_stage.thrust_vacuum.lbf}`}
                      />
                      <RocketDetail
                        detailName="thrust sea level"
                        detailValue={`Kn: ${
                          rocket.first_stage.thrust_sea_level.kN
                        }, lbf: ${rocket.first_stage.thrust_sea_level.lbf}`}
                      />
                      <Typography component="h3" variant="h6" gutterBottom>
                        Stage 2
                      </Typography>
                      {secondStageDetailComponentsArr}
                      <RocketDetail
                        detailName="thrust "
                        detailValue={`Kn: ${
                          rocket.second_stage.thrust.kN
                        }, lbf: ${rocket.second_stage.thrust.lbf}`}
                      />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </>
          );
        } else {
          content = <Loader />;
        }
        return <>{content}</>;
      }}
    </Consumer>
  );
};

RocketDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      rocketId: PropTypes.string.isRequired
    })
  })
};

export default RocketDetails;
