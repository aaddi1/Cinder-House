import * as THREE from 'three';

export interface SpatialViewportState {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  particleBuffer: THREE.Points;
  torusMesh: THREE.Mesh;
  scrollProgress: number;
  mouseNormalizedX: number;
  mouseNormalizedY: number;
}

export interface AudioSynthState {
  audioContext: AudioContext | null;
  isPlaying: boolean;
  biquadFrequencyHz: number;
}
