import React from 'react';
import '../styles/App.scss';
import Header from './Header';
import Main from './Main.js';
import Discount from './Discount.js';

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Discount />
    </div>
  );
}

export default App;