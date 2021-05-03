import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import React,{useState} from 'react'
import Home from './components/Home';
import Print from './components/Print';

function App() {
  const [data, setData] = useState({});
  return (
    <Router>
      <Switch>
        <Route path="/" exact >
          <Home setData={setData} />
        </Route>
        <Route path="/print">
          <Print data={data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
