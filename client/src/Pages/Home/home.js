import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

function Home() {
  const nav = useNavigate();

  function onLocalClick() {
    nav('/local'); // not in use yet, but will action when clicking on local button
  }

  function onGlobalClick() {
    nav('/global'); // not in use yet, but will action when clicking on global button
  }

  return (
    <div className="Home">
      <h1>Meet in the Middle</h1>
      <button className="Local" type="button" onClick={onLocalClick}>
        Local
      </button>
      <button className="Global" type="button" onClick={onGlobalClick}>
        Global
      </button>
    </div>
  );
}

export default Home;