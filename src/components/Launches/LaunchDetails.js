import React ,{Fragment,Component} from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Loader from '../Loader'
import {Consumer} from '../../Context';
import { renderComponent } from 'recompose';


const LaunchDetails = (props) => {
    console.log(props)
   const {flightNumber} = props.match.params
   console.log(flightNumber)
  return (
      <Consumer>
          {contextValue => {
              let content
              if(contextValue.data){
                    const launch = contextValue.data.launches.filter(compareLaunche => {
                        return compareLaunche.flight_number === parseInt(flightNumber)})[0]
                    
                    console.log(flightNumber)
                    console.log(launch)

                  content = <>
                  <Card >
                  {launch.upcoming ? '' :   <CardMedia  style={{height: 0, paddingTop: '56.25%'}}
                          image={launch.links.mission_patch}
                          title={launch.mission_name}
                          /> }
                    
                      <CardContent>
                          <Typography gutterBottom variant="headline" component="h2">
                              {launch.mission_name}
                          </Typography>
                          
                      </CardContent>
                      <CardActions>
                          <Button size="small" color="primary" >
                              Learn More
                          </Button> 
                      </CardActions>
                  </Card> </>
                
              }else {
                  console.log('No data')
                  content = 
<Loader />
              }
              return (
                  <>
                 {content}
                 </>
              )
          }}
      </Consumer>
  
  )
}

export default LaunchDetails



