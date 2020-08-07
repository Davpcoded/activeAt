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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [eventAddress, setEventAddress] = useState("");
  const [eventCategory, setEventCategory] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  
  const registerEvent = () => {
    Axios({
      method: "POST",
      data: {
        firstName: firstName,
        lastName: lastName,
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
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="lname"
                        name="lastName"
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        autoFocus
                        onChange={(e) => setLastName(e.target.value)}
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
