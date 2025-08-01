import React from "react";
import MenuSistema from "./components/Menu";
import Rotas from "./components/Rotas";
import { ToastContainer } from "react-toastify";




function App() {
  return (
    <>
    <ToastContainer/>
      <Rotas />
    </>
  );
}

export default App;
