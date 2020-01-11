import React, {useState, Fragment} from "react";

import {Provider} from 'react-redux';
import store from "./store";
import Header from "./components/Header/Header";
import ImageGrid from "./components/ImageGrid/ImageGrid";



function App() {
  const [state, setState] = useState([])
  
  return (
    <Provider store={store}>
    <Fragment>
      <Header />
      <ImageGrid />
    </Fragment>
    </Provider>
  );
}

export default App;
