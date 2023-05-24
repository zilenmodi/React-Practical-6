import { useState } from "react";
import reactLogo from "./assets/react.svg";
import MainPageContainer from "./containers/MainPageContainer/MainPageContainer";

function App() {
  return (
    <>
      <h3 style={{ textAlign: "center" }}>{import.meta.env.VITE_APP_MODE}</h3>
      <MainPageContainer />
    </>
  );
}

export default App;
