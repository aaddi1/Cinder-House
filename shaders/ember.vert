// Cinder House — GPU Ember Particle Vertex Shader
// Author: Aryan Sharma <aaddisharmarkczw@gmail.com>

uniform float uTime;
uniform float uScrollProgress;
attribute float aSpeed;
attribute float aFlicker;

varying float vOpacity;
varying vec2 vUv;

void main() {
    vUv = uv;
    vec3 transformed = position;
    
    // Convection velocity & harmonic oscillation
    transformed.y += sin(uTime * 1.4 + aFlicker) * 0.15;
    transformed.x += cos(uTime * 0.8 + aFlicker) * 0.08;
    
    vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
    gl_PointSize = (28.0 / -mvPosition.z) * (0.8 + 0.4 * sin(uTime * 2.0 + aFlicker));
    gl_Position = projectionMatrix * mvPosition;
    
    vOpacity = 0.6 + 0.4 * sin(uTime * 1.5 + aFlicker);
}
