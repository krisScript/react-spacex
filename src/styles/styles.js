import { red } from "@material-ui/core/colors";

const styles = theme => ({
   
    paper: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
    cardImage:{
        height: 'auto',
        maxHeight: '250px',
        width: 'auto',
        maxWidth: '250px',
      
    }
  });


  export default styles