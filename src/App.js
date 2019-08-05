import React, { Component } from 'react';
import store from '@/store';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { GlobalStyle } from '@/common/styles/globalStyle';
import  { IconfontStyle } from '@/statics/iconfont/iconfont.js';
import Header from '@/components/Header/Header.jsx';
import ScrollTop from "@/components/ScrollTop/ScrollTop.jsx";
import Home from "@/pages/home/home.jsx";
import Detail from "@/pages/detail/detail.jsx";
import Login from "@/pages/login/login.jsx";

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
              {/* component={(props) => <Detail {...props} />} */}
              <Route path="/" exact component={Home}></Route>
              <Route path="/detail/:id" exact component={Detail}></Route>
              <Route path="/login" exact component={Login}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;