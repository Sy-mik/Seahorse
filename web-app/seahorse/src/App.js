import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DynamicFormContainer from "./DynamicForm/DynamicFormContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DynamicFormContainer></DynamicFormContainer>
      </header>
    </div>
  );
}

export default App;
