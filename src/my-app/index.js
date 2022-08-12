import * as React from "react";
import * as ReactDOM from "react-dom/client";

import App from "./App.tsx";

export default function init() {
  const root = ReactDOM.createRoot(document.getElementById("react-app"));
  root.render(<App />);
}
