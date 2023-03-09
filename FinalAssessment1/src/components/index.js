import React from 'react'
import { Provider } from "react-redux";
import configureStore from "../redux/store";
import App from "./App";
import Sidebar from "./sidebar"
function index() {
    const store = configureStore();
  return (
    <div>
     <Sidebar/>
   <Provider store={store}>
    <App />
   </Provider>,
    </div>
  )
}

export default index







// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";

// import App from "./App";
// import configureStore from "../redux/store";

// const store = configureStore();

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

// export default index