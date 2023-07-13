import React from "react"
import ReactDOM  from "react-dom";
// import Pet from "./Pet.jsx";
import SearchParams from "./SearchParams.jsx";



const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <SearchParams />
    </div>
  )
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <App />
);
