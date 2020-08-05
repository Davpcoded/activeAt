import React from "react";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import useStyles from '../UseStyles/useStyles';

function EventSelect() {

  const classes = useStyles;
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Select value={age} onChange={handleChange} displayEmpty className={classes.selectEmpty} inputProps={{ 'aria-label': 'Without label' }} >
        <MenuItem value="" disabled>Event Category</MenuItem>
        <MenuItem value={10}>Tennis</MenuItem>
        <MenuItem value={20}>Bowling</MenuItem>
        <MenuItem value={30}>Football</MenuItem>
    </Select>
  );
}


export default EventSelect;