import React from "react";
import {render} from 'react-dom';
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}
render(<App />, document.querySelector("root"));
export default App;
