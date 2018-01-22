import React, { Component } from "react";

class Canvas extends Component {
  render() {
    return (
      <div>
        <canvas id="glCanvas" width="640" height="480" />
        <p>Canvas element</p>
      </div>
    );
  }
}

export default Canvas;
