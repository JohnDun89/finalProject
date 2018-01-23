import React, { Component } from "react";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.gl = null;
  }

  initialRender() {
    console.log("initial render");

    //somthing
  }
  // this will automatically be called after the first render
  componentDidMount() {
    const canvas = document.getElementById("glCanvas");
    this.gl = canvas.getContext("webgl");
    if (!this.gl) {
      alert(
        "Unable to initialize WebGL. Your browser or machine may not support it."
      );
      return;
    }
    this.initialRender();
    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
  }

  render() {
    return (
      <div>
        <h1>Web Gl</h1>
        <div>
          <canvas id="glCanvas" width="640" height="480" />
          <p>Canvas element</p>
        </div>
      </div>
    );
  }
}

// const CountryDetail = ({country}) => {
//   if(!country){
//     return <h3>No country</h3>
//   }
//   return(
//     <h3>
//     { country.name }
//     </h3>
//   )
// }

// main() {
//   const canvas = document.querySelector("#glCanvas");
//   const gl = canvas.getContext("webgl");
//   if (!gl) {
//     alert(
//       "Unable to initialize WebGL. Your browser or machine may not support it."
//     );
//     return;
//   }
//   gl.clearColor(0.0, 0.0, 0.0, 1.0);
//   gl.clear(gl.COLOR_BUFFER_BIT);
// };

export default HomePage;

// render() {
// main = () => {
//   const canvas = document.querySelector("#glCanvas");
//   const gl = canvas.getContext("webgl");
//   if (!gl) {
//     alert(
//       "Unable to initialize WebGL. Your browser or machine may not support it."
//     );
//     return;
//   }
//   gl.clearColor(0.0, 0.0, 0.0, 1.0);
//   gl.clear(gl.COLOR_BUFFER_BIT);
// };
