import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
//import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import CardActionArea from "@material-ui/core/CardActionArea";
import Bball from "../../assets/bball.jpg";
import Hiking from "../../assets/hiking.jpg";
import Chess from "../../assets/chess.jpg";
import Band from "../../assets/band.jpg";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    margin: 0,
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  root: {
    maxWidth: 345,
    margin: "20px",
  },
  media: {
    height: 140,
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container>
            <Grid sm={6}>
              <Container maxWidth="sm">
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="textPrimary"
                  gutterBottom
                >
                  Active@
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  color="textSecondary"
                  paragraph
                >
                  Active@ is the app that we are currently creating, we'll put
                  something dope here.
                </Typography>
                <div className={classes.heroButtons}>
                  <Grid container spacing={2} justify="center">
                    <Grid item>
                      <Button href="/login" variant="contained" color="primary">
                        Login
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button href="/signup" variant="outlined" color="primary">
                        Sign Up
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </Container>
            </Grid>
            <Grid sm={6}>
              <Container>
                <Typography>test</Typography>
              </Container>
            </Grid>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={8}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Hiking}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Leisurely Hike
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Location: Winding Trails
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Date: Thurs. 8/13
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Time: 4 PM
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Looking for a small group of people to go on very easy hike,
                    because why hike by yourself when can hike with new friends!
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button href="/signup" size="small" color="primary">
                  Details
                </Button>
                <Button href="/signup" size="small" color="primary">
                  Join
                </Button>
              </CardActions>
            </Card>
            {/* break */}
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Bball}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    3 On 3 Basketball
                  </Typography>
                  <Typography variant="body2" color="black" component="p">
                    Location: Seaside Park
                  </Typography>
                  <Typography variant="body2" color="green" component="p">
                    Date: Sat. 8/15
                  </Typography>
                  <Typography variant="body2" color="red" component="p">
                    Time: 3:30 PM
                  </Typography>
                  <Typography variant="body2" color="black" component="p">
                    Looking for 3 more people to join on a 3 on 3 basketball
                    game. This game isn't for the weak at heart, we play rough.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button href="/signup" size="small" color="primary">
                  Details
                </Button>
                <Button href="/signup" size="small" color="primary">
                  Join
                </Button>
              </CardActions>
            </Card>
            {/* break */}
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Chess}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Chess
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Location: City Park
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Date Mon. 8/18
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Time: 10:30 AM
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Come out and play a game of chess with me. I'm no master but
                    I'm pretty good. We can play timed or untimed.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button href="/signup" size="small" color="primary">
                  Details
                </Button>
                <Button href="/signup" size="small" color="primary">
                  Join
                </Button>
              </CardActions>
            </Card>
            {/* Break */}
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Band}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Jam Session
                  </Typography>
                  <Typography variant="body2" color="black" component="p">
                    Location: Loud Pack Studios
                  </Typography>
                  <Typography variant="body2" color="green" component="p">
                    Date: Wed. 8/12
                  </Typography>
                  <Typography variant="body2" color="red" component="p">
                    Time: 8 PM
                  </Typography>
                  <Typography variant="body2" color="black" component="p">
                    Are you ready to ROCK! Me and a buddy are looking other
                    muscians to jam with. I play the drums, she plays the bass.
                    We already have studio time booked and your instument
                    doesn't matter. We just want to rock!
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button href="/signup" size="small" color="primary">
                  Details
                </Button>
                <Button href="/signup" size="small" color="primary">
                  Join
                </Button>
              </CardActions>
            </Card>
            {/* break */}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
