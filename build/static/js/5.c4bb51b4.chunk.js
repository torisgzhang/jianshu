(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{96:function(n,t,e){"use strict";e.r(t);var r=e(8),a=e(9),i=e(11),o=e(10),u=e(12),c=e(0),p=e.n(c),l=e(20),s=e(15),g=e(2);function f(){var n=Object(g.a)(["\n  width: 300px;\n  height: 200px;\n  margin: 30px auto;\n  text-align: cennter;\n  input {\n    margin-top: 20px;\n    width: 100%;\n    height: 30px;\n  }\n  button {\n    margin-top: 20px;\n    width: 100%;\n    height: 30px;\n  }\n"]);return f=function(){return n},n}var h=e(3).b.div(f()),b=e(25),w=function(n){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,n),Object(a.a)(t,[{key:"render",value:function(){var n=this,t=this.props,e=t.loginState,r=t.login;return e?p.a.createElement(l.a,{to:"/"}):p.a.createElement(h,{className:"login-wrapper"},p.a.createElement("input",{type:"text",ref:function(t){return n.account=t}}),p.a.createElement("input",{type:"password",ref:function(t){return n.password=t}}),p.a.createElement("button",{onClick:function(){return r(n.account.value,n.password.value)}},"\u767b\u5f55"))}}]),t}(c.PureComponent);t.default=Object(s.b)(function(n){return{loginState:n.getIn(["login","loginState"])}},function(n){return{login:function(t,e){n(b.a.Login(t,e))}}})(w)}}]);