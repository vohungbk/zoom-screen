import React from "react";
import { Stage, Layer, Rect } from "react-konva";
import styled from "styled-components";

const StyledPage = styled.div`
  background: #fff;
  position: relative;
  /* transform: scale(${(props) => props.zoom}); */
  transform-origin: top;
`;
const MAIN_BACKGROUND_LAYER = {
  left: 0,
  bottom: 3300,
  right: 2550,
  opacity: 255,
  hidden: false,
  name: "Main Background",
  id: 1952,
  type: "layer",
  height: 2194,
  width: 2550,
};

export const Page = (props) => {
  const stageRef = React.useRef();
  const zoom = props?.zoom / 100;

  React.useEffect(() => {
    stageRef.current.content.style.background = "#fff";
  }, [props.zoom]);

  return (
    <StyledPage zoom={zoom}>
      <Stage width={2550} height={3300} ref={stageRef}>
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
