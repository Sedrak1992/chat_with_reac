import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

console.log(createRoot, "22222");
// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);
