import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import Print from './components/Print';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact >
          <Home/>
        </Route>
        <Route path="/print">
          <Print/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
