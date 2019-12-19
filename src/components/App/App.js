import React from 'react';
import './App.scss';
import NavBar from '../NavBar/NavBar';
import CardContainer from '../CardContainer/CardContainer'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <CardContainer />
    </div>
  );
}

export default App;
