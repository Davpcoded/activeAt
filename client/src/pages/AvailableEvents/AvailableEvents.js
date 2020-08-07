import React from "react";
// import React, {useState, useEffect} from "react";
import Container from '@material-ui/core/Container';
import useStyles from '../../components/UseStyles/useStyles';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
// import API from '../../utils/API';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import CssBaseline from '@material-ui/core/CssBaseline';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function AvailableEvents() {

  const classes = useStyles();

  // const [events, setEvents] = useState([])

  // useEffect(() => {
  //   loadEvents()
  // }, [])

  // function loadEvents() {
  //   API.getEvents()
  //     .then(res => 
  //       setEvents(res.data)
  //     )
  //     .catch(err => console.log(err));
  // };

  return (
    <React.Fragment>
        <CssBaseline />
        <main>    
            <div className={classes.heroContent}>
                <Container maxWidth="md">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                          ActiveAt - Currently Available Events
                    </Typography>
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                  {cards.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                  {/* <Grid item key={event._id} xs={12} sm={6} md={4}> */}
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        // image={"https://source.unsplash.com/search/photos?query=" + event.eventCategory || "https://source.unsplash.com/photos" }
                        // title={event.eventName}
                        image="https://source.unsplash.com/random"
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
{/* remove between these after DB hookup */}
                        <Typography gutterBottom variant="h5" component="h2">
                          3 on 3 B-Ball
                        </Typography>
                        <Typography>
                          Location: Seaside Park
                        </Typography>
                        <Typography>
                          Date: 8/8/2020
                        </Typography>
                        <Typography>
                          Time: 3pm
                        </Typography>
{/* remove between these after DB hookup */}
                        {/* <Typography gutterBottom variant="h5" component="h2" >
                          {event.eventName}
                        </Typography>
                        <Typography>
                          {event.eventCategory}
                        </Typography>
                        <Typography>
                          {event.eventDescription}
                        </Typography> */}
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          View
                        </Button>
                        <Button size="small" color="primary">
                          Edit
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  ))}
                </Grid>
            </Container>
        </main>
    </React.Fragment>
  );
}
