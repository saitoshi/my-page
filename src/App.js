import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import {
  Navigation,
  Home,
  About,
  Resume,
  Project,
  Essay,
  RadGrad,
  Shocking,
  TextbookHunt,
  RadGradReview,
  RadGradFeedback,
  RadGradStart,
  Tregear
} from "./components";
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
          <Route path="/shocking" exact component={() => <Shocking />} />
          <Route path="/radgradreview" exact component={() => <RadGradReview />} />
          <Route path="/radgradfeedback" exact component={() => <RadGradFeedback />} />
          <Route path="/radgradstart" exact component={() => <RadGradStart />} />
          <Route path="/textbookhunt" exact component={() => <TextbookHunt />} />
          <Route path="/tregear" exact component={() => <Tregear />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
