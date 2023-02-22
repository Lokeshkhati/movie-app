import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { MovieProvider } from "./contexts/movie-context";
import { SnackbarProvider } from "./contexts/snackbar-context";
import { ThemeProvider } from "./contexts/theme-context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <SnackbarProvider>
          <MovieProvider>
            <App />
          </MovieProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
