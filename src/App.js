import logo from './logo.svg';
import './App.css';
import { Engine, Scene } from 'react-babylonjs'
import { Vector3 } from '@babylonjs/core';
import React from "react";

function App() {
  return (
    <div style={{ flex: 1, display: 'flex' }}>
        <Engine canvasId="sample-canvas" antialias adaptToDeviceRatio >
            <Scene height="100vh" style={{height: "100vh"}} >
                <freeCamera name="camera1" position={new Vector3(0, 5, -10)} target={Vector3.Zero()} />
                <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
                <sphere name="sphere1" diameter={2} segments={16} position={new Vector3(0, 1, 0)} />
                <ground name="ground1" width={6} height={6} subdivisions={2}  />
            </Scene>
        </Engine>
    </div>
  );
}

export default App;
