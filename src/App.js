// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from 'react-router-dom';
import React,{useState} from 'react'
import Home from './components/Home';
import Print from './components/Print';

function App() {
  const [data, setData] = useState({});
  const [isPrint, setIsPrint] = useState(false)
  if(isPrint){
    return <Print data={data} />
  }
  else{
    return <Home setData={setData} setIsPrint={setIsPrint} />
  }
  
}

export default App;
