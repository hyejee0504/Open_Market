/* eslint-disable */
import React from 'react';
import Router from './routes/Router';
import GlobalSvgSprite from "./component/icon/GlobalSvgSprite";
// import store from "./store/store";
// import { Provider } from "react-redux";


function App() {
  return (
    <>
     {/* <Provider store={store}> */}
      <GlobalSvgSprite/>
      <Router />
     {/* </Provider> */}
    </>
  );
}

export default App;