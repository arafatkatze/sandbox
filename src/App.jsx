import "./styles.css";
import WellsFargoData from "./index.jsx"; // Adjust the import path as necessary
import ReactDOM from 'react-dom';
import React from 'react';
import { createRoot } from 'react-dom/client';

// Find the root element in your HTML
const container = document.getElementById('root');

// Create a root
const root = createRoot(container);

// Initial render: Render your component to the root
root.render(
  <React.StrictMode>
    <WellsFargoData />
  </React.StrictMode>
);