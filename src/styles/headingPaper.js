const styles = theme => ({
   
    paper: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
   grid:{

        flexGrow: 1,
        marginTop:'5rem',
        marginLeft:"auto",
        marginRight:'auto',
        width:'90vw',
      
   }
  });


  export default styles