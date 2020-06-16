import React from 'react';
import 'antd/dist/antd.css';
import { Route, BrowserRouter, Redirect, withRouter, Switch} from 'react-router-dom';
import './App.css';
import Login from "./components/login";
import Editor from "./components/editor";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component = {Login} />
          <Route exact path='/editor' component = {Editor} />

        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
