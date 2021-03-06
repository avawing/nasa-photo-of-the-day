import React, {useState, useEffect} from "react";
import {render} from 'react-dom';
import {baseURL, APIKey} from './Components/constants'
import "./App.css";
import Main from './Components/Main/Main'
import axios from 'axios';

function App() {
    const [data, setData] = useState('')
    const [date, setDate] = useState('')

    const website = `${baseURL}${APIKey}`
    console.log(website)

  useEffect(()=>{
    axios
    .get(`${website}&date=${date}`)
    .then(result => {
      
     setData(result.data)
      
    })
    .catch(e => {
      console.log(`There was an errow: ${e}`)
    })
  },[website, date])

//call API with 

  return (
    <div className="App">
      <Main data = {data} setDate={setDate}/>

    </div>
  );
}
render(<App />, document.querySelector("#root"));
export default App;
