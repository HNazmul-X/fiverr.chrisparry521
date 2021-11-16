import {BrowserRouter} from "react-router-dom"
import React from "react";
import MainRouter from "./router/mainRouter";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer";

function App() {
  return (
      <BrowserRouter>
          <Navbar/>
          <MainRouter />
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
