import React, { Component } from 'react'
import Map from "../Google/Map"




class Home extends Component {
    render() {
      return(
          <Map
       google={this.props.google}
       center={{lat: 18.5204, lng: 73.8567}}
       height='300px'
       zoom={15}
      />
        )
    }
  }

  export default Home