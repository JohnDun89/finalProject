import React, { Component } from "react";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <body>
          <h1>Web Gl</h1>
          <canvas id="glCanvas" width="640" height="480" />
          <p>Canvas element</p>
        </body>
      </div>
    );
  }
}

export default HomePage;
