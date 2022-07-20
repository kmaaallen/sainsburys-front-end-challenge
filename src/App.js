import './App.css';
// Components
import Products from './components/Products';
import { GlobalState } from './components/GlobalState';
import Basket from './components/Basket';
import FullBasket from './components/FullBasket';

function App() {
  return (
    <GlobalState>
      <div className="App">
        <header className="App-header">
          <h1>
            TheShop
          </h1>
          <Basket />
        </header>
        <FullBasket />
        <div className="App-body">
          <Products />
        </div>
      </div>
    </GlobalState>
  );
}

export default App;
