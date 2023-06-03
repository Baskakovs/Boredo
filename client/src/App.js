import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//pages
import Feed from './pages/Feed';
import Login from './pages/Login';
import ReadFurther from './pages/ReadFurther';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/feed" exact component={Feed} />
        <Route path="/post/:id" exact component={ReadFurther} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
