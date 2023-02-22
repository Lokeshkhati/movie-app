import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { MovieProvider } from "./contexts/movie-context";
import { SnackbarProvider } from "./contexts/snackbar-context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <SnackbarProvider>
        <MovieProvider>
          <App />
        </MovieProvider>
      </SnackbarProvider>
    </BrowserRouter>
  </StrictMode>
);
