import React, { Component } from 'react'
import Map from "../Google/Map"




class Home extends Component {
    render() {
      return(
          <Map
       google={this.props.google}
       center={{lat: 47.608013, lng: -122.335167}}
       height='300px'
       zoom={15}
      />
        )
    }
  }

  export default Home