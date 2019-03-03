import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const Event = props => {
  const { event } = props;
  const { title, flight_number, details, event_date_utc } = event;
  return (
    <Card>
      <CardHeader
        title={title}
        subheader={new Date(Date.parse(event_date_utc)).toDateString()}
      />
      <CardContent>
        <Typography component="p">Details: {details}</Typography>
        <Typography paragraph align="center">
          {event.links.reddit ? (
            <Button color="primary" href={event.links.reddit}>
              Reddit
            </Button>
          ) : (
            ''
          )}
          {event.links.wikipedia ? (
            <Button color="primary" href={event.links.wikipedia}>
              Wikipedia
            </Button>
          ) : (
            ''
          )}
          {event.links.article ? (
            <Button color="primary" href={event.links.article}>
              Article
            </Button>
          ) : (
            ''
          )}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default Event;
