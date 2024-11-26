import React from "react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import Routers from "./router/router";
import "./i18next";
import './App.css'

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Routers />
    </ChakraProvider>
  );
}

export default App;
