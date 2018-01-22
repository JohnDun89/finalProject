import React, { Component } from "react";
import Canvas from "../components/canvas.js";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <body>
          <h1>Web Gl</h1>
          <Canvas />
        </body>
      </div>
    );
  }
}

export default HomePage;
