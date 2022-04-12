import * as React from "react";
import Slider from "@mui/material/Slider";
import styled from "styled-components";

import "./App.css";
import { Page } from "./Component/Page";

function App() {
  const [value, setValue] = React.useState(10);
  const [isChanged, setIsChanged] = React.useState(false);

  const StyledApp = styled.div`
    transform: scale(${(props) => props.zoom / 100});
    transform-origin: center;
    background: #eeeeee;
  `;

  const handleChange = (_, newValue) => {
    setValue(newValue);
    setIsChanged(true);
  };

  return (
    <div className="App" id="App">
      <div className="content">
        <StyledApp zoom={value}>
          <Page zoom={value} isChanged={isChanged} />
        </StyledApp>
      </div>

      <div className="slider">
        <p className="value">{value}%</p>
        <Slider aria-label="Volume" value={value} onChange={handleChange} max={500} min={10} />
      </div>
    </div>
  );
}

export default App;
