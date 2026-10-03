// Cinder House — GPU Ember Particle Fragment Shader
precision mediump float;

uniform sampler2D uTexture;
varying float vOpacity;
varying vec2 vUv;

void main() {
    vec4 texColor = texture2D(uTexture, gl_PointCoord);
    vec3 emberColor = vec3(0.92, 0.42, 0.14); // Warm Amber
    gl_FragColor = vec4(emberColor, texColor.a * vOpacity);
}
