import { StrictMode } from "react";
import ReactDOM from "react-dom";

import MouseTracker from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <MouseTracker />
  </StrictMode>,
  rootElement
);
