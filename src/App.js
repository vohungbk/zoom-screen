import * as React from "react";
import Slider from "@mui/material/Slider";
import styled from "styled-components";

import "./App.css";
import { Page } from "./Component/Page";
import { Button } from "./Component/Button";
import { Spacer } from "./Component/Spacer";

function App() {
  const [value, setValue] = React.useState(10);

  const StyledApp = styled.div`
    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100%;
    transform: scale(${(props) => props.zoom / 100});
    transform-origin: top;
    background: #eeeeee;
  `;

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <StyledApp zoom={value}>
        <Page zoom={value} />
        <Spacer size={150} />
        <Button zoom={value} />
      </StyledApp>
      <div className="slider">
        <p className="value">{value}%</p>
        <Slider aria-label="Volume" value={value} onChange={handleChange} max={500} min={10} />
      </div>
    </div>
  );
}

export default App;
