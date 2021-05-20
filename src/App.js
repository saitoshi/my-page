import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, About, Resume, Project, Essay, RadGrad } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/resume" exact component={() => <Resume />} />
          <Route path="/project" exact component={() => <Project />} />
          <Route path="/essay" exact component={() => <Essay />} />
          <Route path="/radgrad" exact component={() => <RadGrad />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
