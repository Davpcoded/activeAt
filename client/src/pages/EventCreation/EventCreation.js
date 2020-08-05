import React from "react";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import useStyles from '../../components/UseStyles/useStyles';
import EventSelect from '../../components/EventSelect/EventSelect'

const classes = useStyles;

function EventCreation() {
    return (
    <Box>
        <Container>
            <form className={classes.root} noValidate autoComplete="off">
                <Input placeholder="First Name" inputProps={{ 'aria-label': 'description' }} />
                <Input placeholder="Last Name" inputProps={{ 'aria-label': 'description' }} />
                <FormControl className={classes.formControl}>
                  <EventSelect />
                </FormControl>
                <Input placeholder="Address of Event" inputProps={{ 'aria-label': 'description' }} />
            </form>
        </Container>
    </Box>
    );
}

export default EventCreation;
