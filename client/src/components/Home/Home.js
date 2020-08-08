import React, { Component } from 'react'
import Map from "../Google/Map"




class Home extends Component {
    render() {
      return(
          <Map
       google={this.props.google}
       center={{lat: 47.6062, lng: -122.3321}}
       height='300px'
       zoom={15}
      />
        )
    }
  }

  export default Home