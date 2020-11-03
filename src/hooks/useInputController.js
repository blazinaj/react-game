import { ActionManager, ExecuteCodeAction } from '@babylonjs/core';
import {useEffect, useState} from "react";

export const useInputController = () => {

  const [scene, setScene] = useState(null);

  const [inputMap, setInputMap] = useState({});

  const handleKeyPress = (evt) => {
    setInputMap(inputMap => {
      return {
        ...inputMap,
        [evt.sourceEvent.key]: evt.sourceEvent.type === "keydown"
      }
    })
  }

  useEffect(() => {
    if (scene) {
      console.log(scene);
      const actionManager = new ActionManager(scene);
      actionManager.registerAction(new ExecuteCodeAction(ActionManager.OnKeyDownTrigger, (evt) => {
        handleKeyPress(evt)
      }));

      actionManager.registerAction(new ExecuteCodeAction(ActionManager.OnKeyUpTrigger, (evt) => {
        handleKeyPress(evt)
      }));

      scene.actionManager = actionManager;
    }
  }, [scene])

  return {
    scene,
    setScene,
    inputMap
  }
}