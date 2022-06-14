import React from "react";
import ReactDOM from "react-dom";
import Footer from "home/Footer";
import Header from "home/Header";

import "./index.scss";
import SafeComponent from "./SafeComponent";
import PDPContent from "./PDPContent";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <SafeComponent>
      <Header app={{name:"PDP"}} />
    </SafeComponent>
    <div className="py-10">
      <PDPContent />
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
