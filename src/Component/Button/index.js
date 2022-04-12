import React from "react";
import { Stage, Layer, Rect, Text } from "react-konva";
import styled from "styled-components";

const StyledPage = styled.div`
  background: #fff;
  position: relative;
  /* transform: scale(${(props) => props.zoom}); */
  transform-origin: 0 0;
`;

const TITLE_BACKGROUND_LAYER = {
  left: 0,
  opacity: 255,
  hidden: false,
  name: "Product Display Title Background",
  id: 1212,
  type: "layer",
  height: 400,
  width: 2550,
};

const BUTTON_LAYER = {
  opacity: 255,
  hidden: false,
  name: "Product Display Title Line 2",
  text: {
    transform: [0.8660371114335496, 0, 0, 0.8660371114335504, 43.00000000000003, 1002.1340519663718],
    text: "PRODUCT DISPLAY TITLE LINE 2",
    index: 24,
    gridding: "none",
    antialias: "smooth",
    orientation: "horizontal",
    warp: {
      style: "none",
      value: 0,
      perspective: 0,
      perspectiveOther: 0,
      rotate: "horizontal",
    },
  },
  id: 1213,
  type: "layer",
  height: 120,
  width: 2312,
};

export const Button = (props) => {
  const stageRef = React.useRef();
  const zoom = props?.zoom / 100;

  React.useEffect(() => {
    stageRef.current.content.style.background = "#fff";
  }, [props.zoom]);

  return (
    <StyledPage zoom={zoom}>
      <Stage width={2550} height={400} ref={stageRef}>
        <Layer>
          <Rect
            x={TITLE_BACKGROUND_LAYER.left}
            y={TITLE_BACKGROUND_LAYER.top}
            width={TITLE_BACKGROUND_LAYER.width}
            height={TITLE_BACKGROUND_LAYER.height}
            fill="#d5d5d5"
          />
        </Layer>
        <Layer>
          <Text
            text="+ Add page"
            x={BUTTON_LAYER.left}
            y={BUTTON_LAYER.top}
            width={BUTTON_LAYER.width}
            height={BUTTON_LAYER.height}
            fontSize={200}
            fontWeight="bold"
            align="center"
            verticalAlign="center"
            padding={110}
          />
        </Layer>
      </Stage>
    </StyledPage>
  );
};
