import React, { lazy, Suspense, Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Prompt } from 'react-router-dom';
import { Provider } from "react-redux";
import store from '@/store';
import { GlobalStyle } from '@/common/styles/globalStyle';
import { IconfontStyle } from '@/statics/iconfont/iconfont.js';

import Header from '@/components/Header/Header.jsx';
import ScrollTop from "@/components/ScrollTop/ScrollTop.jsx";
import Home from "@/pages/home/home.jsx";

const Login = lazy(() => import('@/pages/login/login.jsx'));
const Write = lazy(() => import('@/pages/write/write.jsx'));
const Detail = lazy(() => import('@/pages/detail/detail.jsx'));
const ErrorPage = lazy(() => import('@/pages/error/error.jsx'));

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
              <Route path="/" exact component={Home} />
              <Suspense fallback={<div>Loading...</div>}>
                <Route path="/detail/:id" exact component={Detail} />
                <Route path="/login" exact component={Login} />
                <Route path="/write" exact component={Write} />
              </Suspense>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;