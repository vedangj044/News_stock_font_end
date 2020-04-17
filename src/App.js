import React, { useState } from 'react';
import Initial from './components/initial.js';
import Form from './components/form.js';
import Result from './components/result.js';
import Graph from './components/graph.js';
import Summary from './components/summary.js'

function App() {

  const [queryArr, setQueryArr] = useState([]);
  const [url] = useState("http://localhost:5000")

  function handleChange(newValue){
    setQueryArr(newValue);
  }

  var queryAvailable;
  if (queryArr.length>0){
    queryAvailable = <div><Result query={queryArr} url={url}/><Graph query={queryArr} url={url}/><Summary query={queryArr} url={url}/></div>
  } else {
    queryAvailable = <br/>
  }


  return (
    <div className="App">
        <Initial/>
        <Form onChange={handleChange}/>
        {queryAvailable}
        <br/>
    </div>
  );
}

export default App;
