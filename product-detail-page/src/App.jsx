import React, {Suspense, useState} from "react";
import ReactDOM from "react-dom";
import Footer from "home/Footer";
const Header  = React.lazy( ()=> import ("home/Header"));

import "./index.scss";

const App = () => {
  const [showHeader, setShowHeader] = useState(false);
  return (
  <div className="text-3xl mx-auto max-w-6xl">
    {showHeader && <Suspense fallback={<div>Loading...</div>}>
      <Header />
    </Suspense>}
      {!showHeader && <button
        className="p-5 bg-green-500 text-white"
        onClick={()=> setShowHeader(!showHeader)}
      >Show the Header</button>}
    <div className="py-10">
      PDP page content
    </div>
    <Footer />
  </div>
)};

ReactDOM.render(<App />, document.getElementById("app"));
