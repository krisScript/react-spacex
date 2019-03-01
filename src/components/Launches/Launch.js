import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter , Route, Link,Switch, } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
const Launch = (props) => {
    const {launch} = props
    return(
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
                        <Button size="small" color="primary" to={`/launch/${launch.flight_number}`} component={Link}>
                            Learn More
                        </Button> 
                    </CardActions>
                </Card>
        
    )
}
export default Launch;