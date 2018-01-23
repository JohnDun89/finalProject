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
    const THREE = require("three");
    const scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.02;
      cube.rotation.y += 0.1;
      renderer.render(scene, camera);
    }
    animate();
    //THERE WIL GO HERE
    // const canvas = document.getElementById("glCanvas");
    // this.gl = canvas.getContext("webgl");
    // if (!this.gl) {
    //   alert(
    //     "Unable to initialize WebGL. Your browser or machine may not support it."
    //   );
    //   return;
    // }
    // this.initialRender();
    // this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // this.gl.clear(this.gl.COLOR_BUFFER_BIT);
  }

  render() {
    return (
      <div>
        <h1>Web Gl</h1>
        <div />
      </div>
    );
  }
}

export default HomePage;

// <canvas id="glCanvas" width="640" height="480" />
// <p>Canvas element</p>
