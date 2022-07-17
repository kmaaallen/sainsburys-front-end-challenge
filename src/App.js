import './App.css';
// Components
import Products from './components/Products';
import { GlobalState } from './components/GlobalState';
import Basket from './components/Basket';

function App() {
  return (
    <GlobalState>
      <div className="App">
        <header className="App-header">
          <h1>
            Sainsbury's
          </h1>
          <Basket />
        </header>
        <Products />
      </div>
    </GlobalState>
  );
}

export default App;
