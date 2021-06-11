import React, { Component } from 'react'
import { Button } from '@material-ui/core';

export default class App extends Component {

  state = {
    status: false

  }

  subscribe = () => {
    window.open("https://www.youtube.com/channel/UCY6KjrDBN_tIRFT_QNqQbRQ")
    this.setState({ status: true })
  }

  fullVideo = () => {
    window.open("https://www.youtube.com/watch?v=5-_qdSXG5ak")
  }
  render() {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>

        <h1>Welcome to our Website!</h1>
        <p><b>Step 1:</b> Click the below <b>SUBSCRIBE</b> button, and subscribe the channel to unlock the <b>FULL VIDEO</b> button</p>
        <p><b>Step 2:</b> Click the <b>FULL VIDEO</b> button, to see the Full video</p>
        <div style={{ paddingTop: "50px" }}>
          <Button variant="contained" color="secondary" onClick={this.subscribe}>
            subscribe
        </Button>
        </div>

        <div style={{ paddingTop: "50px" }}>
          {
            this.state.status ?
              (<Button variant="contained" color="primary" onClick={this.fullVideo}>
                Full Video
              </Button>) : (<Button variant="contained" disabled>
                Full video
              </Button>)
          }
        </div>

      </div >
    )
  }
}
