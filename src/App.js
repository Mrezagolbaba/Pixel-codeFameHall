import React from 'react';
import Home from "./Pages/Home";
import ComponentSingle from "./Pages/Article";
import SignIn from "./Pages/Login";
import {Provider} from "react-redux";
import configureStore from '../src/utils/Redux/store/store'
import {
  Route,
  Switch,
} from 'react-router-dom';


function App() {
  const store = configureStore();
  return (
    <Provider store={store} >
      <Switch>
        <Route
            exact
            path="/"
            component={SignIn}
        />
        <Route
            exact
            path="/Home"
            component={Home}
        />
        <Route
            exact
            path="/singleArticle/:id"
            component={ComponentSingle}/>
      </Switch>
    </Provider>
  );
}

export default App;
