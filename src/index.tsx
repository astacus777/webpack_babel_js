import ReactDOM from "react-dom/client";
import React from "react";
import { App } from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(<App />);
