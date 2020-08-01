import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));


function Footer() {
    const classes = useStyles();
    return (
<footer className={classes.footer}>
<Typography variant="subtitle1" align="center" gutterBottom>
Copyright BCS Bootcamp
</Typography>
<Typography variant="subtitle1" align="center" color="textSecondary" component="p">
Thoughtfully created by Cameron DeChand, Daniel Villarroel, Darryl Williams, Nathan Bowdish, Sveta Demkovich
</Typography>

</footer>
    );
}

export default Footer;