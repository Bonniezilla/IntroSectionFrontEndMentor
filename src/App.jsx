import './App.css';

import LoginRegister from './components/LoginRegister';
import Main from './components/Main';
import Navbar from './components/Navbar';
import PrincipalImg from './components/PrincipalImg';


import Logo from "./img/logo.svg";

const App = () => {
  return (
    <div className="App">
      <a href="index.html"><img src={Logo} alt="Home"/></a>
      <Navbar />
      <LoginRegister />
      <Main />
      <PrincipalImg />
    </div>
  );
}

export default App;
