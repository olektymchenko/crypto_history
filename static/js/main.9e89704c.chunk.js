(this.webpackJsonpbitcoin=this.webpackJsonpbitcoin||[]).push([[0],{125:function(e,t,a){e.exports=a.p+"static/media/bitcoin-brands.182e8992.svg"},167:function(e,t,a){e.exports=a(351)},172:function(e,t,a){},173:function(e,t,a){},351:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(46),o=a.n(c),s=(a(172),a(173),a(125)),l=a.n(s),i=function(){return r.a.createElement("div",{className:"Header"},r.a.createElement("div",{className:"Logo"},r.a.createElement("img",{src:l.a,alt:"App Logo"})),r.a.createElement("div",{className:"HeaderText"},r.a.createElement("h3",null,"CryptoApp")))},u=function(){return r.a.createElement("div",{className:"Footer"},r.a.createElement("a",{href:"https://nomics.com"},"Crypto Market Cap & Pricing Data Provided By Nomics"))},m=a(126),d=a(127),v=a(136),h=a(137),E=function(e){return r.a.createElement("div",{className:"SelectClass"},r.a.createElement("select",{value:e.value,onChange:function(t){return e.setCurrency(t,"value")}},r.a.createElement("option",{value:"BTC"},"BTC  Bitcoin"),r.a.createElement("option",{value:"ETH"},"ETH  Ethereum")),r.a.createElement("span",null,"From:"),r.a.createElement("input",{type:"date",onChange:function(t){return e.setDateFrom(t,"value")}}),r.a.createElement("span",null,"To:"),r.a.createElement("input",{type:"date",onChange:function(t){return e.setDateTo(t,"value")}}),r.a.createElement("button",{onClick:e.getData},"Get Info!"))},p=a(17),f=function(e){return r.a.createElement("div",{className:"Curves"},r.a.createElement(p.c,{width:900,height:450,data:e.dataToCurve,margin:{top:5,right:20,bottom:5,left:0}},r.a.createElement(p.b,{type:"monotone",dataKey:"price",stroke:"#8884d8"}),r.a.createElement(p.a,{stroke:"#ccc",strokeDasharray:"5 5"}),r.a.createElement(p.e,{dataKey:"day"}),r.a.createElement(p.f,null),r.a.createElement(p.d,null)))},C=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).API_KEY="e5716abb77f73b515b8ba46d2cb97e68",e.setCurrency=function(t){var a=t.target.value;e.setState({selectedCurrency:a})},e.setDateFrom=function(t){var a=t.target.value+"T00%3A00%3A00Z";e.setState({dateFrom:a})},e.setDateTo=function(t){var a=t.target.value+"T00%3A00%3A00Z";e.setState({dateTo:a})},e.getData=function(){fetch("https://api.nomics.com/v1/exchange-rates/history?key=".concat(e.API_KEY,"&currency=").concat(e.state.selectedCurrency,"&start=").concat(e.state.dateFrom,"&end=").concat(e.state.dateTo)).then((function(e){return e.json()})).then((function(t){for(var a=[],n=0;n<t.length;n++){var r={};r.day=t[n].timestamp.split("T")[0],r.price=t[n].rate.split(".")[0],a.push(r)}e.setState({dataToCurve:a})}))},e.state={selectedCurrency:"BTC",dateFrom:"",dateTo:"",dataToCurve:[]},e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Body"},r.a.createElement(E,{setCurrency:this.setCurrency,value:this.state.selectedCurrency,setDateFrom:this.setDateFrom,setDateTo:this.setDateTo,getData:this.getData}),this.state.dataToCurve&&r.a.createElement(f,{dataToCurve:this.state.dataToCurve}))}}]),a}(n.Component);var y=function(){return r.a.createElement("div",{className:"BitcoinApp"},r.a.createElement(i,null),r.a.createElement(C,null),r.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[167,1,2]]]);
//# sourceMappingURL=main.9e89704c.chunk.js.map