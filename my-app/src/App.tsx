/* eslint-disable */
import React from 'react';
import Router from './routes/Router';
import GlobalSvgSprite from "./component/icon/GlobalSvgSprite";
import store from "./store/store";
import { Provider } from "react-redux";
import { GlobalStyle } from './asset/globalStyle';


function App() {
  return (
    <>
     <Provider store={store}>
      <GlobalSvgSprite/>
      <GlobalStyle />
      <Router />
     </Provider>
    </>
  );
}

export default App;