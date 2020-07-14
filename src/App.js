import React from "react";
import {render} from 'react-dom';
import "./App.css";
import Main from './Components/Main/Main'

function App() {
  return (
    <div className="App">
      <Main />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}
render(<App />, document.querySelector("#root"));
export default App;
