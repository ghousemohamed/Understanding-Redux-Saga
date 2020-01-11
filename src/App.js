import React, {useState} from "react";
import Component from "./components/component/Component";
import Hello from "./components/Hello/Hello";
import {Provider} from 'react-redux';
import store from "./store";


function App() {
  const [state, setState] = useState([])
  
  return (
    <Provider store={store}>
    <div>
      <Component />
      <Hello />
    </div>
    </Provider>
  );
}

export default App;
