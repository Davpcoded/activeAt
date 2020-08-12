import React, {useState, useEffect} from "react";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import useStyles from '../../components/UseStyles/useStyles';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Axios from "axios";
import Map from "../../components/Google/Map";

function EventCreation() {
  const classes = useStyles;
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [googleState, setGoogleState] = useState({lat: 47.6062, lng: -122.3321, address: "Seattle, WA"});
  
  // console.log( "MAPS ADDRESS",googleState)

  const registerEvent = () => {
    Axios({
      method: "POST",
      data: {
        eventName: eventName,
        eventDescription: eventDescription,
        eventType: eventType,
        eventDate: eventDate,
        phoneNumber: phoneNumber,
        markerPosition: googleState
      },
      withCredentials: true,
      url: "http://localhost:3001/api/event",
    }).then((res) => console.log(res)).catch((error) => (alert("Oops! Something is missing! You must fill out all info, drag the map marker to fill in the address.")));
  };

  useEffect(() => {
    // console.log("Google Map Marker 2", googleState) 
  }, [googleState])

    return (
    <main>    
        <Box>
            <div className={classes.heroContent}>
                <Container maxWidth="md">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                          ActiveAt - Event Creation
                    </Typography>
                </Container>
            </div>
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="eventName"
                        name="eventName"
                        variant="outlined"
                        required
                        fullWidth
                        id="eventName"
                        label="Event Name"
                        autoFocus
                        onChange={(e) => setEventName(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="eventDescription"
                        name="eventDescription"
                        variant="outlined"
                        required
                        fullWidth
                        id="eventDescription"
                        label="Event Description"
                        autoFocus
                        onChange={(e) => setEventDescription(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="eventLocation"
                        type="eventLocation"
                        id="eventLocation"
                        autoComplete="eventLocation"
                        value={JSON.stringify(googleState.address)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="eventType"
                        label="Event Category (ex: Tennis, Bowling, Football)"
                        type="eventType"
                        id="eventType"
                        autoComplete="eventType"
                        onChange={(e) => setEventType(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <form className={classes.container} noValidate>
                        <TextField
                          id="eventDate"
                          name="eventDate"
                          autoComplete="eventDate"
                          type="datetime-local"
                          className={classes.textField}
                          InputLabel={{
                            shrink: true,
                          }}
                          required
                          fullWidth
                          variant="outlined"
                          onChange={(e) => setEventDate(e.target.value)}
                        />
                      </form>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="phoneNumber"
                        name="phoneNumber"
                        variant="outlined"
                        required
                        fullWidth
                        id="phoneNumber"
                        label="Contact Phone Number"
                        autoFocus
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Button fullWidth variant="contained" color="primary" onClick={registerEvent}>Submit</Button>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Map
                     fullWidth
                     variant="contained"
                     center={googleState}
                     handleChange={setGoogleState}
                     height='300px'
                     zoom={15}
                    />
                  </Grid>
                </Grid>
            </Container>
        </Box>
    </main>
    );
}

export default EventCreation;
