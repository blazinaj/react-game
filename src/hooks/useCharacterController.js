import {Vector3} from "@babylonjs/core";
import {useEffect, useState} from "react";

export const useCharacterController = (inputController) => {

  const PLAYER_SPEED = 0.45;

  /**
   * The current Character position in the scene
   */
  const [position, setPosition] = useState(new Vector3(0, 1, 0));

  /**
   * This function handles the position changes
   * @returns {Vector3}
   */
  const handlePositionChange = () => {
    let {x, y, z} = position;
    const {inputMap} = inputController;

    if (inputMap.d) {
      x += PLAYER_SPEED
    }
    if (inputMap.a) {
      x -= PLAYER_SPEED
    }
    if (inputMap.w) {
      z += PLAYER_SPEED
    }
    if (inputMap.s) {
      z -= PLAYER_SPEED
    }
    return new Vector3(x, y, z)
  }

  /**
   * Update Character position when keyboard input changes
   */
  useEffect(() => {
    if (inputController.inputMap) {
      if (inputController) {
        // final movement that takes into consideration the inputs
        setPosition(position => {
          return handlePositionChange()
        });
      }
    }
  }, [inputController.inputMap])

  return {
    position
  }
}