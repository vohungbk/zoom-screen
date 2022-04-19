import React, { useState, useEffect } from "react";
import { Stage, Layer, Rect } from "react-konva";
import Slider from "@mui/material/Slider";

export const Page = () => {
  const innerWidth = window.innerWidth;
  const innerHeight = window.innerHeight;
  const stageRef = React.useRef();
  const [state, setState] = useState({
    stageScale: 0.87,
    stageX: 0,
    stageY: 0,
    sliderValue: 87,
    stageWidth: innerWidth,
    stageHeight: innerHeight,
    rect: {
      width: innerWidth / 3,
      height: innerHeight,
      x: innerWidth / 2,
      y: innerHeight / 2,
    },
  });

  useEffect(() => {
    centerRect();
  }, []);

  const centerRect = (newScale = 0.87) => {
    let { rect, stageWidth, stageHeight } = state;

    const rectWidth = rect.width * newScale;
    const rectHeight = rect.height * newScale;

    const x = -rect.x * newScale + stageWidth / 2 - rectWidth / 2;
    const y = -rect.y * newScale + stageHeight / 2 - rectHeight / 2;

    let pos = boundFunc({ x, y }, newScale);
    setState({
      ...state,
      stageX: pos.x,
      stageY: pos.y,
      stageScale: newScale,
    });
  };

  const boundFunc = (pos, scale) => {
    const { stageWidth, stageHeight } = state;

    const x = Math.min(pos.x, stageWidth * (1 - scale));
    const y = Math.min(pos.y, stageHeight * (1 - scale));

    return {
      x,
      y,
    };
  };

  const handleChange = (e, newValue) => {
    e.preventDefault();

    const stage = stageRef.current;
    const oldScale = stage.scaleX();
    const newScale = newValue / 100;

    const center = {
      x: innerWidth / 2,
      y: innerHeight / 2,
    };
    const relatedTo = {
      x: (center.x - stage.x()) / oldScale,
      y: (center.y - stage.y()) / oldScale,
    };

    const newPos = {
      x: center.x - relatedTo.x * newScale,
      y: center.y - relatedTo.y * newScale,
    };
    setState({
      ...state,
      stageScale: newScale,
      stageX: newPos.x,
      stageY: newPos.y,
      sliderValue: newValue,
    });
  };

  console.log("state", state);

  return (
    <>
      <Stage
        width={state.stageWidth}
        height={state.stageHeight}
        ref={stageRef}
        scaleX={state.stageScale}
        scaleY={state.stageScale}
        x={state.stageX}
        y={state.stageY}
      >
        <Layer>
          <Rect width={state.rect.width} height={state.rect.height} fill="#fff" x={state.rect.x} y={state.rect.y} />
        </Layer>
      </Stage>

      <div className="slider">
        <p className="value">{state.sliderValue}%</p>
        <Slider aria-label="Volume" value={state.sliderValue} onChange={handleChange} max={500} min={10} />
      </div>
    </>
  );
};
