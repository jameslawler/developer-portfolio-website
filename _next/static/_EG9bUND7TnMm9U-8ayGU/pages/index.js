(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery;return n||a&&(void 0!==o&&o)}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r=c(n("q1tI")),a=c(n("Xuae")),o=n("lwAK"),i=n("FYa8"),s=n("/0+H");function c(e){return e&&e.__esModule?e:{default:e}}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var s=0,c=f.length;s<c;s++){var u=f[s];if(a.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var l=a.props[u],d=r[u]||new Set;d.has(l)?o=!1:(d.add(l),r[u]=d)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var p=(0,a.default)();function m(e){var t=e.children;return(r.default.createElement(o.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(p,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:(0,s.isInAmpMode)(e)},t)}))})))}m.rewind=p.rewind;var v=m;t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);t.HeadManagerContext=a},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("8Kt/"),i=n.n(o),s=a.a.createElement;t.default=function(){return s("div",null,s(i.a,null,s("title",null,"Home"),s("link",{rel:"icon",href:"/favicon.ico"})),s("section",{className:"hero is-primary is-small"},s("div",{className:"hero-head"},s("nav",{className:"navbar"},s("div",{className:"container"},s("div",{className:"navbar-brand"},s("a",{className:"navbar-item"},"JAMES LAWLER"),s("span",{className:"navbar-burger burger","data-target":"navbarMenuHeroB"},s("span",null),s("span",null),s("span",null))),s("div",{id:"navbarMenuHeroB",className:"navbar-menu"},s("div",{className:"navbar-end"},s("a",{className:"navbar-item is-active"},"Home"),s("a",{className:"navbar-item"},"Projects"),s("a",{className:"navbar-item"},"Snippets"),s("span",{className:"navbar-item"},s("a",{className:"button is-info is-inverted",href:"https://www.github.com/jameslawler"},s("span",{className:"icon"},s("i",{className:"fab fa-github"})),s("span",null,"GitHub"))),s("span",{className:"navbar-item"},s("a",{className:"button is-info is-inverted",href:"https://www.twitter.com/jameslawlercom"},s("span",{className:"icon"},s("i",{className:"fab fa-twitter"})),s("span",null,"Twitter")))))))),s("div",{className:"hero-body"},s("div",{className:"container is-desktop has-text-centered"},s("div",{className:"columns is-mobile is-centered"},s("div",{className:"column is-narrow"},s("figure",{className:"image is-128x128"},s("img",{className:"is-rounded",src:"/assets/james-lawler.jpg"}))))),s("div",{className:"container has-text-centered"},s("p",{className:"title"},"James Lawler"),s("p",{className:"subtitle"},"Software Developer")))),s("div",{className:"container is-desktop"},s("div",{className:"columns"},s("div",{className:"column"},s("div",{className:"card"},s("div",{className:"card-content"},s("p",{className:"title"},"\u201cThere are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.\u201d"),s("p",{className:"subtitle"},"Jeff Atwood")))),s("div",{className:"column"},s("div",{className:"card"},s("div",{className:"card-content"},s("p",{className:"title"},"\u201cThere are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.\u201d"),s("p",{className:"subtitle"},"Jeff Atwood")))))))}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),a=n("PJYZ"),o=n("W8MJ"),i=n("7W2i"),s=n("a1gu"),c=n("Nsbk"),u=n("RIqP");t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(u(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(u){i(d,u);var l=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,r=c(e);if(t()){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}(d);function d(e){var o;return r(this,d),o=l.call(this,e),f&&(t.add(a(o)),n(a(o))),o}return o(d,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),o(d,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),d}(l.Component))}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1]]]);