import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar1 from "./component/SharedComponents/Navbar/Navbar";
import "./App.css";

//Router files import
import Homepage from "./component/Homepage/Homepage";
import Roster from "./component/Roster/Roster";
import Contact from "./component/Contact/Contact";

function App() {
  return (
    <div className="App">
      <div className="page-wrapper">
        <BrowserRouter>
          <Navbar1 />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/roster" component={Roster} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
