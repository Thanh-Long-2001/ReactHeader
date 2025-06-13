import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { worker } from "./mocks/brower.ts";

async function enableMocking() {
  if (import.meta.env.DEV) {
    await worker.start({
      serviceWorker: { url: "/mockServiceWorker.js" },
    });
  }
}

enableMocking().then(() => {
  // Chỉ render sau khi worker đã khởi động (hoặc không cần khởi động)
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
});
