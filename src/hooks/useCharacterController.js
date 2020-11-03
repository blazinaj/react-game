import {Vector3} from "@babylonjs/core";
import {useEffect, useState} from "react";

export const useCharacterController = (inputController) => {
  //const values
  const PLAYER_SPEED = 0.45;
  const JUMP_FORCE = 0.80;
  const GRAVITY = -2.8;
  const DASH_FACTOR = 2.5;
  const DASH_TIME = 10; //how many frames the dash lasts
  const DOWN_TILT = new Vector3(0.8290313946973066, 0, 0);
  const ORIGINAL_TILT = new Vector3(0.5934119456780721, 0, 0);

  //player movement vars
  const [deltaTime, setDeltaTime] = useState(0);
  const [h, setH] = useState(0);
  const [v, setV] = useState(0);

  const [moveDirection, setMoveDirection] = useState(new Vector3());
  const [inputAmt, setInputAmt] = useState(0);

  const [position, setPosition] = useState(new Vector3(0, 1, 0));

  const updatePosition = (inputMap) => {
    let x = position.x;
    let y = position.y;
    let z = position.z;

    if (inputMap) {
      if (inputMap["w"]) {
        x++
      }

      if (inputMap["a"]) {
        z++
      }

      setPosition(new Vector3(x, y, z));
    }
    // setMoveDirection(Vector3.Zero())
  }

  useEffect(() => {
    if (inputController.inputMap) {
      updatePosition(inputController.inputMap);
    }
  }, [inputController.inputMap])

  return {
    position
  }
}