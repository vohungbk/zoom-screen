import React, { useState } from "react";
import { Stage, Layer, Rect } from "react-konva";
import Slider from "@mui/material/Slider";

const MAIN_BACKGROUND_LAYER = {
  opacity: 255,
  hidden: false,
  name: "Main Background",
  id: 1952,
  type: "layer",
  width: 500,
  height: 500,
};

export const Page = () => {
  const stageRef = React.useRef();
  const [state, setState] = useState({
    stageScale: 0.1,
    stageX: window.innerWidth / 2 - 25,
    stageY: window.innerHeight / 2 - 25,
    sliderValue: 10,
  });

  const handleChange = (e, newValue) => {
    e.preventDefault();
    const stage = stageRef.current;
    const oldScale = stage.scaleX();
    const mousePointTo = {
      x: window.innerWidth / 2 / oldScale - stage.x() / oldScale,
      y: window.innerHeight / 2 / oldScale - stage.y() / oldScale,
    };
    const newScale = newValue / 100;
    setState({
      stageScale: newScale,
      stageX: (window.innerWidth / 2 / newScale - mousePointTo.x) * newScale,
      stageY: (window.innerHeight / 2 / newScale - mousePointTo.y) * newScale,
      sliderValue: newValue,
    });
  };

  return (
    <>
      <Stage width={3000} height={3000} ref={stageRef} scaleX={state.stageScale} scaleY={state.stageScale} x={state.stageX} y={state.stageY}>
        <Layer>
          <Rect width={MAIN_BACKGROUND_LAYER.width} height={MAIN_BACKGROUND_LAYER.height} fill="#fff" />
        </Layer>
      </Stage>

      <div className="slider">
        <p className="value">{state.sliderValue}%</p>
        <Slider aria-label="Volume" value={state.sliderValue} onChange={handleChange} max={500} min={10} />
      </div>
    </>
  );
};
