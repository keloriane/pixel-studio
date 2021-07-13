import * as THREE from 'three';
import fragment from "./../shader/fragment.glsl"
import vertex from "./../shader/vertex.glsl"
import {EventDispatcher} from "three";


export default class Sketch {
  constructor(options) {
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({antialias: true});
    this.camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.01, 10);
    this.renderer.setClearColor(0xffffff , 1)
    this.container = options.dom;
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.container.appendChild(this.renderer.domElement);
    this.camera.position.z = 1;
    this.time = 0;

    this.addMesh();
    this.resize();
    this.setupResize();
    this.render();
  }

  addMesh() {
    console.log(this.container);
    this.geometry = new THREE.PlaneBufferGeometry(0.5, 1,80,80 );
    this.material = new THREE.MeshNormalMaterial();

    this.material = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      fragmentShader: fragment,
      vertexShader: vertex,
      wireframe: true

    })
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);
  }

  setupResize() {
    window.addEventListener("resize", this.resize.bind(this))
  }

  resize() {

    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();

  }

  render() {
    this.time++;
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.02;
    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.render.bind(this));
  }
}
