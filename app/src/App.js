import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Header">
          <h1 className="Question">Fun-filled evening planned for tonight?</h1>
        </header>
        <div className='Content'>
          <img src="https://pixar-planet.fr/wp-content/uploads/2010/04/germaine-personnage-monstres-cie-001.jpg" className="Image" alt="Image of Roz" />
        </div>
        <footer className="Header">Your stunned silence is very reassuring.</footer>
      </div>
    );
  }
}

export default App;
