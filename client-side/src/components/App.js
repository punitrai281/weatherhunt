import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
import About from "./About";
import Newsletter from "./Newsletter";
import Contact from "./Contact";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="main">
        <Route path="/" exact component={Main} />
        <Route path="/about" component={About} />
        <Route path="/newsletter" component={Newsletter} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}
export default App;
