import React from "react";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import useStyles from '../../components/UseStyles/useStyles';
import EventSelect from '../../components/EventSelect/EventSelect'
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const classes = useStyles;

function EventCreation() {
    return (
    <main>    
        <Box>
            <div className={classes.heroContent}>
                <Container maxWidth="md">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                          Active@ - Event Creation
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
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl className={classes.formControl} variant="outlined" fullWidth>
                          <EventSelect />
                        </FormControl>
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
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="phoneNum"
                        name="phoneNum"
                        variant="outlined"
                        required
                        fullWidth
                        id="phoneNum"
                        label="Contact Phone Number"
                        autoFocus
                      />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </main>
    );
}

export default EventCreation;
