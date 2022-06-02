import logo from './logo.svg';
import './App.css';
import React from 'react';

/* function App() {
  return (
    <React.Fragment>
  <div className="App">
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  </div>
  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  </div>
    </React.Fragment>
  );
} */

let element = (<React.Fragment>
<div className="App">
  <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
</div>
<div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
</div>
  </React.Fragment>
);

function getTitle(title){
  return <h1>{process.env.REACT_APP_TITLE}</h1>;
}

function getElement(title){
  return <h1>{title}</h1>;
}

alert(typeof(variable))

const App = () =>{
  const variableOne = (<></>)
  let variableTwo = ["one", 2, {name: "John", age: 99, hoobies:["Reading","Sports","Events"], 
  adress: {addr: "Ben Msik",
           state: "Sidi Othman",
           appt: 25},
  sayHello: ()=>{
            console.log("Hello ODC!");
          }
  }]
  return (
    <>
    {getTitle()}
    {getElement('bienvenue')}
    {variableTwo[variableTwo.length-1].search}
    </>
  );
}

export default App;
