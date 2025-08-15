import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
  onNeedRefresh() {
    // Dispatch custom event when a new update is waiting
    window.dispatchEvent(new Event("sw-update-available"));
  },
  onOfflineReady() {
    console.log("App ready for offline use");
  },
});
(window as any).$updateSW = updateSW;
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
