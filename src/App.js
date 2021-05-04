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
  const [isPrint, setIsPrint] = useState(false)
  return(
  <Router>  
    <Switch>
      if({!isPrint}){
        <Route exact path="/" />
      }
      else{
        <Route path="/print"/>
      }
      <Route exact path="/" >
        <Home setData={setData} setIsPrint={setIsPrint} />
      </Route>
      <Route path="/print">
        <Print data={data} />
      </Route>
    </Switch>
  </Router>
  );
  
}

export default App;
