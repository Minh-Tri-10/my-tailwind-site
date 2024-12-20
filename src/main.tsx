import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  Authenticator,
  ThemeProvider,
  Theme,
  useTheme,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import outputs from "../amplify_outputs.json";
import { Amplify } from "aws-amplify";

Amplify.configure(outputs);

function AuthStyleWrapper() {
  const { tokens } = useTheme();

  const theme: Theme = {
    name: "Auth Christmas Theme",
    tokens: {
      components: {
        authenticator: {
          router: {
            boxShadow: `0 0 16px ${tokens.colors.overlay["10"]}`,
            borderWidth: "0",
          },
          form: {
            padding: `${tokens.space.medium} ${tokens.space.xl} ${tokens.space.medium}`,
          },
        },
        button: {
          primary: {
            backgroundColor: tokens.colors.neutral["100"],
            _hover: {
              backgroundColor: tokens.colors.green["80"],
            },
          },
          link: {
            color: tokens.colors.red["80"],
            _hover: {
              color: tokens.colors.green["80"],
            },
          },
        },
        fieldcontrol: {
          _focus: {
            boxShadow: `0 0 0 2px ${tokens.colors.red["60"]}`,
          },
        },
        tabs: {
          item: {
            color: tokens.colors.green["80"],
            _hover: {
              color: tokens.colors.green["80"],
            },
            _active: {
              borderColor: tokens.colors.neutral["100"],
              color: tokens.colors.red["80"],
            },
          },
        },
      },
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Authenticator>
        <App />
      </Authenticator>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthStyleWrapper />
  </React.StrictMode>
);
