import React, {useState, useEffect} from "react";
import Container from '@material-ui/core/Container';
import useStyles from '../../components/UseStyles/useStyles';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import API from '../../utils/API';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import CssBaseline from '@material-ui/core/CssBaseline';

export default function AvailableEvents() {

  const classes = useStyles();

  const [events, setEvents] = useState([])

  useEffect(() => {
    loadEvents()
  }, [])

  function loadEvents() {
    API.getEvents()
      .then(res => 
        setEvents(res.data)
      )
      .catch(err => console.log(err));
  };

  // let playerCount = 0

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
                  {events.map((event) => (
                    <Grid item key={event._id} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={"https://source.unsplash.com/search/photos?query=" + event.eventType || "https://source.unsplash.com/photos" }
                        title={event.eventName}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2" >
                          Event Title: {event.eventName}
                        </Typography>
                        <Typography>
                          Event Category: {event.eventType}
                        </Typography>
                        <Typography>
                          Event Description: {event.eventDescription}
                        </Typography>
                        <Typography>
                          Event Date and Time: {event.eventDate}
                        </Typography>
                        <Typography>
                          Address: {event.markerPosition[0].address}
                        </Typography>
                        {/* <Typography>
                          Currently Attending: {playerCount}
                        </Typography> */}
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          View
                        </Button>
                        <Button size="small" color="primary" 
                        // onClick={playerCount = ++playerCount}
                        >
                          Join Event
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
