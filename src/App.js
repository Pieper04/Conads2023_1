import React from "react";
import logoads from './img/ads.png';
import logoUni from './img/unifasipe.png';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logos">
          <img src={logoads} className="App-logo" alt="logoads" />
          <img src={logoUni} className="App-logo" alt="logoUni" />
        </div>
        <h2>
          CONADS 2023
        </h2>
        <p>
          Minicurso GitHub + Vercel
        </p>
        <b>
          Profª Letícia Pieper
        </b>
        <p><b> Quem gosto bate palma, quem nao gosto bate tbm </b></p>
      </header>
    </div>
  );
}

export default App;
