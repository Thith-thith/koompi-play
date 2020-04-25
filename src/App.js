import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import Home from "./components/home";
// import QuizInstructions from "./components/quiz/QuizInstructions";
import Play from "./components/quiz/Play";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/play/Quiz" component={Play} />
          {/* <Route exact path="/play/instructions" component={QuizInstructions}/> */}

          {/* <Route exact path="/page/ecotourism" component={Ecotourism}/>
          <Route exact path="/page/seedsbomb" component={SeedBomb}/>
          <Route exact path="/page/airwater" component={Airwater }/>
          <Route exact path="/page/about" component={About}/> */}
          <Redirect to="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
