(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/text-tone.0bb189ca.mp3"},,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(2),i=a.n(s),r=(a(14),a(3)),c=a(4),l=a(7),u=a(5),m=a(8),d=(a(16),function(e){var t=!1,a={p1:"",p2:"",aHref:"",aText:""};if(e.message.includes("{{")){var n=e.message.split(/\{\{(.*)\}\}/);a.p1=n[0],a.aText=n[1].split("|")[0],a.aHref=n[1].split("|")[1],a.p2=n[2],t=!0}var s=a.p1,i=a.p2,r=a.aHref,c=a.aText;return o.a.createElement("div",{className:"bubble"},o.a.createElement("div",{className:"text"},t?o.a.createElement("p",null,s,o.a.createElement("a",{href:r},c),i):o.a.createElement("p",null,e.message)))}),p=a(6),h=a.n(p),b=(a(18),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).loadTextBubbles=function(){var e=["Hey there! My name is Keano, nice to meet you. \ud83d\udc4b","I'm a web developer based in Vancouver, Canada.","I mostly work with front end Javasript frameworks and Node.js, but I love new challenges so don't hesitate to reach about other projects!","You can find some of my {{projects|https://kevvor.github.io/#my-projects}} here.","Or send me an {{email|mailto:keano@voelkl.co?subject=Hey Keano}} to chat with me. \ud83d\ude42"];e.forEach(function(t,n){try{setTimeout(function(){var o=a.state.allTexts,s=[].concat(o,e[n]);a.DOMtextTone.play(),a.setState({allTexts:s,currentText:t}),window.scrollTo(0,document.body.scrollHeight)},1e3*(n+1)*2)}catch(o){console.log(o)}})},a.state={allTexts:[],currentText:"",textVisible:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.state.textVisible||this.setState({textVisible:!0}),this.loadTextBubbles()}},{key:"render",value:function(){var e=this,t=this.state.allTexts.map(function(e,t){return o.a.createElement(d,{className:"text-".concat(t),message:e,key:t})});return o.a.createElement("div",{className:"app"},o.a.createElement("div",{id:"divider"}),this.state.textVisible?o.a.createElement("div",null,o.a.createElement("div",{className:"text-bubble-container"},t)):null,o.a.createElement("audio",{ref:function(t){e.DOMtextTone=t}},o.a.createElement("source",{src:h.a,type:"audio/mpeg"})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.3c547637.chunk.js.map