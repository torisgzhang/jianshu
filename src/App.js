import React from 'react';
import Header from '@/components/Header/Header.jsx';
import store from '@/store';
import { Provider } from "react-redux";
import { GlobalStyle } from '@/common/styles/globalStyle';
import  { IconfontStyle } from '@/statics/iconfont/iconfont.js';

const App = (props) => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <IconfontStyle />
      <Header />
    </Provider>
  );
}

export default App;