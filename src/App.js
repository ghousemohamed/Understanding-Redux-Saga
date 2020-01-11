import React, {useState, Fragment} from "react";

import {Provider} from 'react-redux';
import configureStore from "./store";
import Header from "./components/Header/Header";
import ImageGrid from "./components/ImageGrid/ImageGrid";
import { LOAD_TYPE } from "./actions/types";

const store = configureStore()

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
