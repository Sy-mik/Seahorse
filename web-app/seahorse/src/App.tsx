import './App.css';
import React, { FunctionComponent } from 'react';
import DynamicFormContainer from './DynamicForm/DynamicFormContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

interface AppProps {}

export const App: FunctionComponent<AppProps> = () => (
  <div className="App">
    <header className="App-header">
      <DynamicFormContainer></DynamicFormContainer>
    </header>
  </div>
);
export default App;
