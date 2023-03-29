import { useState } from 'react';

import Features from './components/Features';
import Navbar from './components/Navbar';
import Company from './components/Company';

import './App.css';

import Logo from './img/logo.svg'
import AudioPhile from './img/client-audiophile.svg';
import Databiz from './img/client-databiz.svg';
import Maker from './img/client-maker.svg';
import Meet from './img/client-meet.svg';

const App = () => {
  const [over, setOver] = useState(false);

  function changeOverState() {
    over === false && setOver(true);
  }

  function changeLeaveState() {
    over === true && setOver(false);
  }
  
  return (
    <div id="App" className="App">
      <a href="index.html"><img src={Logo} alt="Home" /></a>
      <Navbar overEvent={changeOverState} 
      leaveEvent={changeLeaveState}/>
      {
        over === true && <Features overEvent={() => {setOver(true)}}
        leaveEvent={() => {setOver(false)}}/>
      }
      <div class="LoginRegister">
        <button>Login</button>
        <button>Register</button>
      </div>
      <div class="Main">
        <h1>Make remote work</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button>Learn more</button>
        <div class="Partners">
          <img src={AudioPhile} alt="Audiophile Logo" />
          <img src={Databiz} alt="Databiz Logo" />
          <img src={Maker} alt="Maker Logo" />
          <img src={Meet} alt="Meet Logo" />
        </div>
      </div>
      <div class="Img"></div>

    </div>
  );
}

export default App;
