import {Engine, Scene, useBabylonScene} from "react-babylonjs";
import {ActionManager, ExecuteCodeAction, Vector3} from "@babylonjs/core";
import React, {useEffect, useState} from "react";
import {useInputController} from "../hooks/useInputController";
import {useCharacter} from "../hooks/useCharacter";

const GameEngine = (props) => {

  const [sceneRef, setSceneRef] = useState(null)

  const inputController = useInputController();

  const onSceneMount = ({canvas, scene}) => {
    setSceneRef(scene);
  }

  useEffect(() => {
    if (sceneRef) {
      inputController.setScene(sceneRef);
    }
  }, [sceneRef]);

  const character = useCharacter(inputController);

  return (
    <div>
      {JSON.stringify(inputController.inputMap)}
      <Engine canvasId="sample-canvas" antialias adaptToDeviceRatio >
        <Scene onSceneMount={onSceneMount}>
          <freeCamera name="camera1" position={new Vector3(0, 5, -10)} target={Vector3.Zero()} />
          <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
          {/*<sphere name="sphere1" diameter={1} segments={16} position={new Vector3(0, 1, 0)} />*/}
          {character.display}
          <ground name="ground1" width={6} height={6} subdivisions={2}  />
        </Scene>
      </Engine>
    </div>
  )
};

export default GameEngine;