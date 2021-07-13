void main() {
  vec3 newposition = position;

  newposition.z += 0.01 * sin(newposition.y*20.);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
