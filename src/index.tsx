import ReactDOM from "react-dom/client";
import { App } from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(<App />);
