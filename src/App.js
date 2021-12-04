import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Color from './components/Color.js';
import ColorHeader from './components/ColorHeader.js';
import Advice from './components/Advice.js';
function App() {
  return (
    <div className="App">
      <Header/>
      <ColorHeader/>
      <Color/>
      <Advice/>
    </div>
  ); 
}

export default App;
