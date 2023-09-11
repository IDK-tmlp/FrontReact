import './App.css';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <header>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}

export default App;
