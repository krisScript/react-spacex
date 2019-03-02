import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
 const Rocket = props => {
  const {rocket} = props
  const {rocket_name,rocket_type,company,first_flight,id} = rocket
  return(
    <Card>
    

    <CardContent>
      <Typography gutterBottom variant="headline" component="h2">
        {rocket_name}
      </Typography>
      <Typography component="p">Type: {rocket_type}</Typography>
      <Typography component="p">Company: {company}</Typography>
      <Typography component="p">Company: {new Date(
                        Date.parse(first_flight)
                      ).toDateString()}</Typography>
    </CardContent>
    <CardActions>
      <Button
        size="small"
        color="primary"
        to={`/rocket/${id}`}
        component={Link}
      >
        Learn More
      </Button>
    </CardActions>
  </Card>
  )
}
export default Rocket