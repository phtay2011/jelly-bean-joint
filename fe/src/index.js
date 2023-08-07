import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import ReactGA from "react-ga4";

ReactGA.initialize("G-65Y8QXM1S9");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
