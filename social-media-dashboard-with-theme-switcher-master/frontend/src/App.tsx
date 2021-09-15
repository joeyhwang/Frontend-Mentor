import React, {useState} from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { HeaderCards } from './components/HeaderCards/HeaderCards';
import { Overview } from './components/overview/Overview';

function App() {
  const [toggle, setToggle] = useState<Boolean>(false)

  return (
    <div className="App">
      <header className = {toggle ? "App-header-light" : "App-header"}>
      <Header toggle = {toggle} setToggle = {setToggle}/>
      <HeaderCards toggle = {toggle}/>
      <Overview toggle = {toggle}/>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel = "noreferrer" target="_blank">
          Frontend Mentor</a>. 
        Coded by <a href="https://joeyhwang.github.io/portfolio/"  rel = "noreferrer" target="_blank">Joey Hwang</a>.
    </div>
      </header>

    </div>
  );
}

export default App;
