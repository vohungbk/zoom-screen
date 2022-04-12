import React, { useState } from "react";
import { Stage, Layer, Rect } from "react-konva";
import styled from "styled-components";

const StyledPage = styled.div`
  background: #fff;
  position: relative;
  transform-origin: top;
`;
const MAIN_BACKGROUND_LAYER = {
  opacity: 255,
  hidden: false,
  name: "Main Background",
  id: 1952,
  type: "layer",
  width: 500,
};

export const Page = (props) => {
  const stageRef = React.useRef();
  const zoom = props?.zoom / 100;

  React.useEffect(() => {
    stageRef.current.content.style.background = "#fff";
  }, [props.zoom]);

  return (
    <StyledPage zoom={zoom}>
      <Stage width={800} height={800} ref={stageRef}>
        <Layer>
          <Rect
            x={MAIN_BACKGROUND_LAYER.left}
            y={MAIN_BACKGROUND_LAYER.top}
            width={MAIN_BACKGROUND_LAYER.width}
            height={MAIN_BACKGROUND_LAYER.height}
            fill="#fff"
          />
        </Layer>
      </Stage>
    </StyledPage>
  );
};
