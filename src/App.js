import React from 'react';
import MAppBar from './AppBar';
import CreateAccount from './CreateAccount';
import ListAccount from './ListAccount';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
  
    <MAppBar />
    <Switch>
        <Route
          exact
          path='/list'
          render={(props) => <ListAccount {...props} />} />

       <Route
          exact
          path='/create'
          render={(props) => <CreateAccount {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
