import {
  Scene,
  PerspectiveCamera,
  Color,
  WebGLRenderer,
  SphereGeometry,
  MeshBasicMaterial,
  Mesh,
  AxesHelper
} from 'three';

const createSphere = (scene) => {
  const geometry = new SphereGeometry(5, 30, 30);
  const material = new MeshBasicMaterial({ color: 0xffffff, wireframe: true });
  const sphere = new Mesh(geometry, material);
  scene.add(sphere);
  return sphere;
};

const addAxis = (scene) => {
  scene.add(new AxesHelper(5));
};

const init = () => {
  const { innerWidth, innerHeight } = window;
  const scene = new Scene();
  scene.background = new Color(0x000000);
  const camera = new PerspectiveCamera(75, innerWidth / innerHeight, 1, 1000);
  camera.position.z = 20;
  const sphere = createSphere(scene);
  const renderer = new WebGLRenderer();
  renderer.setSize(innerWidth, innerHeight);
  return {
    renderer,
    scene,
    camera,
    sphere
  };
};

export { init, createSphere, addAxis };
