import { createContext, useContext, useState } from "react";

const SnackbarContext = createContext("");
const useSnackbar = () => useContext(SnackbarContext);

const SnackbarProvider = ({ children }) => {
  const [message, setMessage] = useState("");

  const showSnackbar = (msg) => {
    setMessage(msg);
  };
  const dismissSnackbar = () => {
    setMessage("");
  };

  return (
    <SnackbarContext.Provider
      value={{ message, showSnackbar, dismissSnackbar }}
    >
      {children}
    </SnackbarContext.Provider>
  );
};

export { SnackbarProvider, useSnackbar };
