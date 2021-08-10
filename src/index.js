import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/context";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import SnackbarProvider from "react-simple-snackbar";
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH_DOMAIN}
      clientId={process.env.REACT_APP_AUTH_CLIENTID}
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <BrowserRouter>
        <AppProvider>
          <SnackbarProvider>
            <App />
          </SnackbarProvider>
        </AppProvider>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
