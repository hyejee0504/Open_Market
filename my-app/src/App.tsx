/* eslint-disable */
import React from 'react';
import Router from './routes/Router';
import GlobalSvgSprite from "./component/icon/GlobalSvgSprite";
// import store from "./store/store";
// import { Provider } from "react-redux";

export  interface Iprops {
  changeTodovalue: (x : string) => void;
  todovalues: string
}

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