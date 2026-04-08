import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App.tsx";
import { DocsLayout } from "./docs/DocsLayout.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/docs" element={<Navigate to="/docs/installation" replace />} />
        <Route path="/docs/:slug" element={<DocsLayout />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
