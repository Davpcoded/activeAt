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
  const [eventDesc, setEventDesc] = useState("");
  const [eventAddress, setEventAddress] = useState("");
  const [eventCategory, setEventCategory] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  
  const registerEvent = () => {
    Axios({
      method: "POST",
      data: {
        eventName: eventName,
        eventDesc: eventDesc,
        eventAddress: eventAddress,
        eventCategory: eventCategory,
        eventTime: eventTime,
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
                        autoComplete="eventDesc"
                        name="eventDesc"
                        variant="outlined"
                        required
                        fullWidth
                        id="eventDesc"
                        label="Event Description"
                        autoFocus
                        onChange={(e) => setEventDesc(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="eventAddress"
                        label="Event Address"
                        type="eventAddress"
                        id="eventAddress"
                        autoComplete="eventAddress"
                        onChange={(e) => setEventAddress(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="eventCategory"
                        label="Event Category (ex: Tennis, Bowling, Football)"
                        type="eventCategory"
                        id="eventCategory"
                        autoComplete="eventCategory"
                        onChange={(e) => setEventCategory(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="eventTime"
                        name="eventTime"
                        variant="outlined"
                        required
                        fullWidth
                        id="eventTime"
                        label="Event Time (ex: 8:00pm)"
                        autoFocus
                        onChange={(e) => setEventTime(e.target.value)}
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
