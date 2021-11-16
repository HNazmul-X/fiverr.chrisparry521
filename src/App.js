import {BrowserRouter} from "react-router-dom"
import React from "react";
import MainRouter from "./router/mainRouter";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
      <BrowserRouter>
          <Navbar/>
          <MainRouter />
      </BrowserRouter>
  );
}

export default App;
