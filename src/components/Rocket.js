import React, { Fragment, Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';


import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';


 const Rocket = (params) => {
     return (
        <Card >
        <CardHeader
          avatar={
            <Avatar src={launch.links.mission_patch} >
              
            </Avatar>
          }
          
          title={rocket_name}
          subheader={rocket_type}
        />
        <CardMedia
         
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />
        <CardContent>
        <Typography component="p">
         {launch.details}
            </Typography>
        </CardContent>
          <CardContent>
          <Typography paragraph>
              Flight Number: {launch.flight_number}
            </Typography>
    
          </CardContent>
      
      </Card>

     )
}

export default Rocket