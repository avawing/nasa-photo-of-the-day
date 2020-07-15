import React, {useState, useEffect} from "react";
import {render} from 'react-dom';
import {baseUrl, APIKey} from './Components/'
import "./App.css";
import Main from './Components/Main/Main'
import axios from 'axios';
function App() {
    const [data, setData] = useState(null)
    const [date, setDate] = useState(new Date())

  useEffect(()=>{
    axios
    .get(`${baseUrl}/?api_key=/${APIKey}`)
    .then(result => {
      if(result.data.media_type === 'image'){
      setData(result.data)
      console.log('Yes!')
      }else{
        console.log('No!')
      }
      
    })
    .catch(e => {
      console.log(`There was an errow: ${e}`)
    })
  },[date])

//call API with 

  return (
    <div className="App">
      <Main data = {data} setDate={setDate}/>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}
render(<App />, document.querySelector("#root"));
export default App;
