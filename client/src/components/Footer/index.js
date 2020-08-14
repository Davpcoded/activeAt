import React from "react";
import Typography from '@material-ui/core/Typography';
import Link from "@material-ui/core/Link";
import { makeStyles } from '@material-ui/core/styles';


  const useStyles = makeStyles((theme) => ({
    footer: {
      marginTop: 40,
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
Thoughtfully created by  
<Link href="https://github.com/C1DeChand"> Cameron DeChand,</Link>
<Link href="https://github.com/Davpcoded"> Daniel Villarroel,</Link> 
<Link href="https://github.com/Eugenius760"> Darryl Williams,</Link> 
<Link href="https://github.com/djnatronic"> Nathan Bowdish,</Link> 
<Link href="https://github.com/sdemkovich"> Sveta Demkovich</Link> 
</Typography>

</footer>
    );
}

export default Footer;