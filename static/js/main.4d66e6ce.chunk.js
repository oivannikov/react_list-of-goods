(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],[,,,,,,,,function(t,e,n){t.exports=n(16)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(7),s=n.n(r),c=(n(13),n(5)),u=n(1),l=n(2),i=n(4),d=n(3),m=(n(14),n(15),function(t){Object(i.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={buttons:t.props.buttons},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.buttons,e=this.props.identifyButton;return t.map((function(t){return o.a.createElement("button",{key:t,className:"button",onClick:function(){e(t)}},t)}))}}]),n}(o.a.Component)),f=["Reverse","Sort alphabetically","Sort by length","Reset","Select"],g=function(t){Object(i.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={goods:Object(c.a)(t.props.goods),start:!1},t.selectButton=function(e){e.target.hidden=!0,t.setState({start:!0})},t.handleButtonClick=function(e){e===f[0]?t.setState((function(t){return{goods:t.goods.reverse()}})):e===f[1]?t.setState((function(t){return{goods:t.goods.sort()}})):e===f[2]?t.setState((function(t){return{goods:t.goods.sort((function(t,e){return t.length-e.length}))}})):e===f[3]&&t.setState((function(){return{goods:Object(c.a)(t.props.goods)}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.goods,a=e.start;return o.a.createElement("div",{className:"goods good"},o.a.createElement("button",{className:"start",type:"submit",onClick:function(e){t.selectButton(e)}},"Start"),a?o.a.createElement(o.a.Fragment,null,o.a.createElement("ul",{className:"good__list"},n.map((function(t){return o.a.createElement("li",{className:"good__item",key:t},t)}))),o.a.createElement(m,{buttons:f,identifyButton:this.handleButtonClick})):"")}}]),n}(o.a.Component),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Goods"),o.a.createElement("div",{className:"buttons"},o.a.createElement(g,{goods:p})))};s.a.render(o.a.createElement(b,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.4d66e6ce.chunk.js.map