import React, { Component } from "react";
// import window.THREE from "window.THREE";
// import "window.THREE/examples/js/loaders/OBJLoader";

window.THREE = require("three");
require("three/examples/js/loaders/OBJLoader");
// import { Loader } from "window.THREE";
// import OBJLoader from "window.THREE/examples/js/loaders/OBJLoader";

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
    //scene code

    var mouseX = 0,
      mouseY = 0;
    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    const scene = new window.THREE.Scene();

    var camera = new window.THREE.PerspectiveCamera(
      100,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    var mouseX = 0,
      mouseY = 0;
    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    // texture

    var manager = new window.THREE.LoadingManager();
    manager.onProgress = function(item, loaded, total) {
      console.log(item, loaded, total);
    };
    var textureLoader = new window.THREE.TextureLoader(manager);
    var texture = textureLoader.load("textures/UV_Grid_Sm.jpg");
    var manager = new window.THREE.LoadingManager();
    manager.onProgress = function(item, loaded, total) {
      console.log(item, loaded, total);
    };

    var renderer = new window.THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // var geometry = new window.THREE.BoxGeometry(1, 1, 1);
    // var material = new window.THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // var cube = new window.THREE.Mesh(geometry, material);
    console.log(window.THREE);

    var ambientLight = new window.THREE.AmbientLight(0xcccccc, 0.4);
    scene.add(ambientLight);
    var pointLight = new window.THREE.PointLight(0xffffff, 0.8);
    camera.add(pointLight);

    const loader = new window.THREE.OBJLoader();

    let chicken = null;

    loader.load(
      "models/chicken.obj",
      function(object) {
        console.log(object);
        chicken = object;
        scene.add(object);
      },
      function(xhr) {
        console.log(xhr.loaded / xhr.total * 100 + "% loaded");
      },
      // called when loading has errors
      function(error) {
        console.log(error);

        console.log("An error happened");
      }
    );

    // scene.add(cube);

    camera.position.z = 650;
    // camera.position.y = 120;

    function animate() {
      requestAnimationFrame(animate);

      if (chicken) {
        chicken.rotation.y += 0.0;
        chicken.rotation.x += 0.0;
      }
      document.addEventListener("mousemove", onDocumentMouseMove, false);

      function onDocumentMouseMove(event) {
        console.log("Mouse Move! ");

        mouseX = (event.clientX - windowHalfX) / 2;
        mouseY = (event.clientY - windowHalfY) / 2;
      }

      renderer.render(scene, camera);
    }
    animate();
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
