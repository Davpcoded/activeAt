import React, {useState} from "react";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import useStyles from '../../components/UseStyles/useStyles';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Axios from "axios";

function EventCreation() {
  const classes = useStyles;
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventLocation, setEventAddress] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  
  const registerEvent = () => {
    Axios({
      method: "POST",
      data: {
        eventName: eventName,
        eventDescription: eventDescription,
        eventLocation: eventLocation,
        eventType: eventType,
        eventDate: eventDate,
        phoneNumber: phoneNumber
      },
      withCredentials: true,
      url: "http://localhost:3001/api/event",
    }).then((res) => console.log(res));
  };

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
                        label="Event Location"
                        type="eventLocation"
                        id="eventLocation"
                        autoComplete="eventLocation"
                        onChange={(e) => setEventAddress(e.target.value)}
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
                      <TextField
                        autoComplete="eventDate"
                        name="eventDate"
                        variant="outlined"
                        required
                        fullWidth
                        id="eventDate"
                        label="Event Date and Time (ex: 08/12/2020 8:00pm)"
                        autoFocus
                        onChange={(e) => setEventDate(e.target.value)}
                      />
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
            </Container>
        </Box>
    </main>
    );
}

export default EventCreation;
