import { Scene, ActionManager, ExecuteCodeAction, Observer, Scalar } from '@babylonjs/core';
import {useEffect, useState} from "react";

export const useInputController = () => {

  const [scene, setScene] = useState(null);

  const [inputMap, setInputMap] = useState({});

  const [horizontal, setHorizontal] = useState(0);
  const [vertical, setVertical] = useState(0);
  const [horizontalAxis, setHorizontalAxis] = useState(0);
  const [verticalAxis, setVerticalAxis] = useState(0);

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

      //add to the scene an observable that calls updateFromKeyboard before rendering
      // scene.onBeforeRenderObservable.add(() => {
      //   updateFromKeyboard();
      // });

      scene.actionManager = actionManager;
    }
  }, [scene])

  const updateFromKeyboard = (inputMap) => {
    //forward - backwards movement
    if (inputMap.w) {
      console.log("Up ('w')")
      setVerticalAxis(1);
      setVertical(Scalar.Lerp(this.vertical, 1, 0.2));
    }
    // else if ((this.inputMap["ArrowDown"] || this.mobileDown) && !this._ui.gamePaused) {
    //   this.vertical = Scalar.Lerp(this.vertical, -1, 0.2);
    //   this.verticalAxis = -1;
    // }
    else {
      setVertical(0);
      setVerticalAxis(0);
    }
  }

  return {
    vertical,
    horizontal,
    verticalAxis,
    horizontalAxis,
    updateFromKeyboard,
    scene,
    setScene,
    inputMap
  }
}