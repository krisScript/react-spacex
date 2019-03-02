import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Loader from '../Loader';
import { Consumer } from '../../Context';
import YouTubeComponent from './YouTubeComponent';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ImageGallery from '../ImageGallery';
const LaunchDetails = props => {
  const { flightNumber } = props.match.params;
  return (
    <Consumer>
      {contextValue => {
        let content;
        if (contextValue.data) {
          const launch = contextValue.data.launches.filter(compareLaunche => {
            return compareLaunche.flight_number === parseInt(flightNumber);
          })[0];
          console.log(launch);
          content = (
            <>
              <Grid container spacing={24} style={{ padding: 24 }}>
                <Grid item xs={12} sm={6} lg={4} xl={4}>
                  <Card style={{ height: '100%' }}>
                    {launch.upcoming ? (
                      ''
                    ) : (
                      <CardMedia
                        style={{ height: 0, paddingTop: '30rem' }}
                        image={launch.links.mission_patch}
                        title={launch.mission_name}
                      />
                    )}
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6} lg={4} xl={4}>
                  <Card style={{ height: '100%' }}>
                    <CardHeader
                      avatar={<Avatar src={launch.links.mission_patch} />}
                      title={launch.mission_name}
                      subheader={new Date(
                        Date.parse(launch.launch_date_local)
                      ).toDateString()}
                    />
                    <CardMedia
                      image="/static/images/cards/paella.jpg"
                      title="Paella dish"
                    />
                    <CardContent>
                      <Typography component="p">{launch.details}</Typography>
                    </CardContent>
                    <CardContent>
                      <Typography paragraph>
                        Flight Number: {launch.flight_number}
                      </Typography>

                      <Typography paragraph>
                        Launch Year: {launch.launch_year}
                      </Typography>
                      <Typography paragraph>
                        Launch Site Short Name: {launch.launch_site.site_name}
                      </Typography>
                      <Typography paragraph>
                        Launch Site Full Name:{' '}
                        {launch.launch_site.site_name_long}
                      </Typography>
                      <Typography paragraph>
                        Rocket Name: {launch.rocket.rocket_name}
                      </Typography>
                      <Typography paragraph>
                        Rocket Type: {launch.rocket.rocket_type}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6} lg={4} xl={4}>
                  <Card style={{ height: '100%' }}>
                    <CardHeader
                      avatar={<Avatar src={launch.links.mission_patch} />}
                      title="Media"
                      subheader="Links and Resources"
                    />
                    <CardMedia
                      image="/static/images/cards/paella.jpg"
                      title="Paella dish"
                    />
                    <CardContent />
                    <CardContent>
                      <YouTubeComponent youtubeId={launch.links.youtube_id} />
                      <Typography paragraph align="center">
                        <Button
                          color="primary"
                          href={launch.links.article_link}
                        >
                          Article
                        </Button>
                        <Button color="primary" href={launch.links.wikipedia}>
                          Wikipedia
                        </Button>
                        <Button color="primary" href={launch.links.video_link}>
                          YouTube
                        </Button>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                {launch.links.flickr_images.length > 0 ? (
                  <Grid item xs={12} sm={6} lg={12} xl={12}>
                    <ImageGallery images={launch.links.flickr_images} />
                  </Grid>
                ) : (
                  <></>
                )}
              </Grid>
            </>
          );
        } else {
          console.log('No data');
          content = <Loader />;
        }
        return <>{content}</>;
      }}
    </Consumer>
  );
};

LaunchDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      flightNumber: PropTypes.string.isRequired
    })
  })
};

export default LaunchDetails;
