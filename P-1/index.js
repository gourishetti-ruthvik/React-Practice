import React from 'react';
import { createRoot } from "reaact-dom/client";
import "./index.css";
import App from "./App"

const container = document.getElementById("root");

const root = createRoot(container);

root.render(<App />);