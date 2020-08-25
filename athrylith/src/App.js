import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

//Router files import
import Homepage from "./component/Homepage";
import Roster from "./component/Roster";
import News from "./component/News";
import Contact from "./component/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/roster" component={Roster} />
          <Route path="/news" component={News} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
