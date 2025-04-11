import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import client from "./services/ApolloClient.ts";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ApolloProvider>
  </StrictMode>
);
