import React from 'react'
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import LandingPageImage from '../assets/landing-page-img.jpg'
 const Page404 = () => (
    <Grid container    justify="center" style={{height:'93.4vh',width:"100vw",background:`url(${LandingPageImage})`}} >
    <Grid item xs={12} sm={6} lg={4} xl={4}  >
    <Card style={{margin:'5rem'}}>
    <CardContent style={{textAlign:'center'}}>
    <Typography component="h1" variant="h4" >404 NOT FOUND</Typography>
    <Typography variant="p" variant="h6"  style={{padding:'1rem'}}>
    This is not the page you are looking for!
</Typography>
</CardContent>
    </Card>
        </Grid>
    </Grid>
 )
export default Page404