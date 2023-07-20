import "./App.css";
import React from "react";
import Navbar from "./Views/Navbar/Navbar";
import Main from "./Routes/Main";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
