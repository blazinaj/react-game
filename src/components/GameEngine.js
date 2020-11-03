import {Engine, Scene} from "react-babylonjs";
import {Vector3} from "@babylonjs/core";
import React, {useEffect, useState} from "react";
import {useInputController} from "../hooks/useInputController";
import {useCharacter} from "../hooks/useCharacter";

const GameEngine = (props) => {

  const [sceneRef, setSceneRef] = useState(null)

  const inputController = useInputController();

  const onSceneMount = ({canvas, scene}) => {
    setSceneRef(scene);
  }

  /**
   * Sets the Scene reference to state
   */
  useEffect(() => {
    if (sceneRef) {
      inputController.setScene(sceneRef);
    }
  }, [sceneRef]);

  const character = useCharacter(inputController);

  return (
    <div>
      {JSON.stringify(inputController.inputMap)}
      {JSON.stringify(character.position)}
      <Engine canvasId="sample-canvas" antialias adaptToDeviceRatio >
        <Scene onSceneMount={onSceneMount}>
          <freeCamera name="camera1" position={new Vector3(0, 5, -10)} target={Vector3.Zero()} />
          <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
          {character.display}
          <ground name="ground1" width={20} height={20} subdivisions={2}  />
        </Scene>
      </Engine>
    </div>
  )
};

export default GameEngine;