import React, { Component } from 'react';
import store from '@/store';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { GlobalStyle } from '@/common/styles/globalStyle';
import  { IconfontStyle } from '@/statics/iconfont/iconfont.js';
import Header from '@/components/Header/Header.jsx';
import Home from "@/pages/home/home.jsx";
import Detail from "@/pages/detail/detail.jsx";
import ScrollTop from "@/components/ScrollTop/ScrollTop.jsx";

//这里按照路由4.0+方式写否则控制台会有警告“Invalid prop `component` of type `object` supplied to `Route`, expected `function`”
const HomePageRoute = () => <Home />
const DetailPageRoute = () => {
  return (
    <Detail />
  )
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <GlobalStyle />
          <IconfontStyle />
          <ScrollTop />
          <BrowserRouter>
            <div>
              <Header />
              <Route path="/" exact component={HomePageRoute}></Route>
              <Route path="/detail" exact component={DetailPageRoute}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;