import './App.css';
import { Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Buttons from './components/Buttons';
import Cards from './components/Cards';
import Colors from './Colors';
import Borders from './components/Borders';


function App() {
  return (
    <div className="App">
      <switch>
        <Route exact path="/">
          <Dashboard/>
        </Route>

        <Route path="/Buttons">
          <Buttons/>
        </Route>

        <Route path="/Cards">
          <Cards/>
        </Route>

        <Route path="/Colors">
          <Colors/>
        </Route>

        <Route path="/Borders">
          <Borders/>
        </Route>

       

      </switch>
    </div>
  );
}

export default App;
