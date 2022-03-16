import './App.css';
import Main from './views/Main';
import { fetchPokedex } from './services/pokemon';

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
