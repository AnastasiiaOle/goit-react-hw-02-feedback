(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{25:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(4),o=n.n(r),s=n(5),i=n(6),b=n(7),d=n(11),j=n(10),u=n(0),l=function(e){var t=e.title,n=e.children;return Object(u.jsxs)("section",{children:[Object(u.jsx)("h2",{children:t}),n]})},h=function(e){var t=e.message;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("p",{children:t})})},O=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Statistics"}),0===a?Object(u.jsx)(h,{message:"No feedback given"}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("p",{children:["Good: ",t]}),Object(u.jsxs)("p",{children:["Neutral: ",n]}),Object(u.jsxs)("p",{children:["Bad: ",c]}),Object(u.jsxs)("p",{children:["Total: ",a]}),Object(u.jsxs)("p",{children:["Positive feedback: ",r," %"]})]})]})},p=n(8),v=n.n(p),g=n(9),x=n.n(g),f=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(u.jsx)(u.Fragment,{children:t.map((function(e){return Object(u.jsx)("button",{className:x.a.button,type:"button",name:e,onClick:n,children:e},v.a.generate())}))})},k=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositivePercentage=function(){return 100*e.state.good/e.countTotalFeedback()},e.onLeaveFeedback=function(t){var n=t.target.name;e.setState((function(e){return Object(s.a)({},n,e[n]+1)}))},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,a=this.countTotalFeedback(),r=Number(this.countPositivePercentage().toFixed()),o=Object.keys(this.state);return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(l,{title:"Please leave feedback",children:[Object(u.jsx)(f,{options:o,onLeaveFeedback:this.onLeaveFeedback}),Object(u.jsx)(O,{good:t,neutral:n,bad:c,total:a,positivePercentage:r})]})})}}]),n}(c.Component);o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root"))},9:function(e,t,n){e.exports={button:"FeedbackOptions_button__3n-hy"}}},[[25,1,2]]]);
//# sourceMappingURL=main.286acae3.chunk.js.map