import './App.css';
import alarm from './img/alarm.png';
import remember from './img/Remember.png';
// import Nav from "./component/Nav/Nav";

function App() {
  return (
    <div id="iphone-frame">
    <div id="logo-container">
    <img id='logo' src={remember} alt="remember" />
      <button id="alarm">
        <img src={alarm} alt="alarm" style={{ width: '18px', height: '20px'}} />
      </button>
    </div>

    <div id="line" style={{ width: '390px', height: '1px', backgroundColor: '#E5E5E5', margin: ' 10px 0 auto' }}></div>
   

    <div id="line" style={{ width: '390px', height: '1px', backgroundColor: '#E5E5E5', marginTop:'185%' }}></div>

    </div>
  );
}

export default App;
