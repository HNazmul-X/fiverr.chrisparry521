import {BrowserRouter} from "react-router-dom"
import React from "react";
import MainRouter from "./router/mainRouter";

function App() {
  return (
      <BrowserRouter>
          <MainRouter />
      </BrowserRouter>
  );
}

export default App;
