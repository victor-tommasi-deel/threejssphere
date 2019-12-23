import React from 'react';
import { init } from './utils/utils';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ADD: 0.01,
      renderer: null,
      scene: null,
      camera: null,
      sphere: null
    };
  }

  componentDidMount = () => {
    const start = init();
    const viewer = document.getElementById('viewer');
    viewer.appendChild(start.renderer.domElement);
    const { renderer, scene, camera, sphere } = start;
    this.setState({
      renderer,
      scene,
      camera,
      sphere
    });
    this.mainLoop();
  };

  mainLoop = () => {
    const { ADD, sphere, scene, camera, renderer } = this.state;
    if (scene !== null && sphere !== null && camera !== null && renderer !== null) {
      sphere.rotation.y += ADD;
      renderer.render(scene, camera);
    }
    requestAnimationFrame(this.mainLoop);
  };

  body = () => <div id="viewer"></div>;

  render() {
    return this.body();
  }
}

export default App;
