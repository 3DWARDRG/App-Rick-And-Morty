import logo from './logo.svg';
import './App.css';
import ColorChanger from './components/ColorChanger/ColorChanger';
import CounterChanger from './components/CounterChanger/CounterChanger';
import Request from './components/Request/Request';

function App() {
  return (
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
      <Request />
      <ColorChanger />
      <CounterChanger />
    </div>
  );
}

export default App;
