import React from 'react'
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import LandingPageImage from '../assets/landing-page-img.jpg'
const Home = () => (
    <div>
            <Grid container    justify="center" style={{height:'93.4vh',width:"100vw",background:`url(${LandingPageImage})`}} >
            <Grid item xs={12} sm={6} lg={4} xl={4}  >
            <Card style={{margin:'5rem'}}>
            <CardContent style={{textAlign:'center'}}>
            <Typography component="h1" variant="h4" >SpaceX</Typography>
            <Typography variant="p" variant="h6"  style={{padding:'1rem'}}>
            SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets
      </Typography>
        </CardContent>
            </Card>
                </Grid>
            </Grid>
    </div>
)

export default Home

