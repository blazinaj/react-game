import {Vector3} from "@babylonjs/core";
import React from "react";
import {useCharacterController} from "./useCharacterController";

export const useCharacter = (inputController) => {

  const characterController = useCharacterController(inputController);

  const display = <sphere name="sphere1" diameter={1} segments={16} position={characterController.position} />

  return {
    display
  }
}