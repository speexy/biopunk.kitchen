(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{138:function(e,a,t){"use strict";t.r(a),t.d(a,"projectsQuery",function(){return c});var r=t(0),n=t.n(r),l=t(146),o=t(156),i=t(157),s=t(161),u=t.n(s);a.default=function(e){var a=e.data,t=a.thisPage.frontmatter,r=t.title,s=t.image;return n.a.createElement(o.a,null,n.a.createElement(i.a,{image:s}),n.a.createElement("div",{className:u.a.post},n.a.createElement("h1",null,r),a.equipment.edges.map(function(e,a){return n.a.createElement(l.Link,{to:e.node.fields.slug},n.a.createElement("article",{key:a},n.a.createElement("h1",null,e.node.frontmatter.title)))})))};var c="3624327963"},146:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return p}),t.d(a,"StaticQueryContext",function(){return d}),t.d(a,"StaticQuery",function(){return h}),t.d(a,"useStaticQuery",function(){return g});var r=t(0),n=t.n(r),l=t(4),o=t.n(l),i=t(145),s=t.n(i);t.d(a,"Link",function(){return s.a}),t.d(a,"withPrefix",function(){return i.withPrefix}),t.d(a,"navigate",function(){return i.navigate}),t.d(a,"push",function(){return i.push}),t.d(a,"replace",function(){return i.replace}),t.d(a,"navigateTo",function(){return i.navigateTo});var u=t(147),c=t.n(u);t.d(a,"PageRenderer",function(){return c.a});var m=t(32);t.d(a,"parsePath",function(){return m.a});var d=n.a.createContext({}),h=function(e){return n.a.createElement(d.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})},g=function(e){n.a.useContext;var a=n.a.useContext(d);if(a[e]&&a[e].data)return a[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,a,t){var r;e.exports=(r=t(149))&&r.default||r},148:function(e,a,t){e.exports={variables:'"../layouts/variables.css"',margin:"20px",navMain:"navMain-module--navMain--6pHWJ"}},149:function(e,a,t){"use strict";t.r(a);t(33);var r=t(0),n=t.n(r),l=t(4),o=t.n(l),i=t(52),s=t(2),u=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return n.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},a.default=u},150:function(e,a,t){e.exports={variables:'"../layouts/variables.css"',grey:"#9c9c9c",active:"#f00",padding:"20px",breakTablet:"768px",hamburgerWrapper:"hamburger-module--hamburgerWrapper--1TKeQ",overlay:"hamburger-module--overlay--25q67",overlayOpened:"hamburger-module--overlayOpened--2TWUG hamburger-module--overlay--25q67",overlayClosed:"hamburger-module--overlayClosed--kaLjT hamburger-module--overlay--25q67",hamburger:"hamburger-module--hamburger--hTO3R",hamburgerOpen:"hamburger-module--hamburgerOpen--11N7L hamburger-module--hamburger--hTO3R",hamburgerClose:"hamburger-module--hamburgerClose--1K9uQ hamburger-module--hamburger--hTO3R",hamburgerLine:"hamburger-module--hamburgerLine--2AyXw",hamburgerLineOpen:"hamburger-module--hamburgerLineOpen--2KmtQ hamburger-module--hamburgerLine--2AyXw",hamburgerLineClose:"hamburger-module--hamburgerLineClose--1AoAb hamburger-module--hamburgerLine--2AyXw"}},151:function(e,a,t){e.exports=t.p+"static/punk-3b342566b5d6169ffe5e560e6081463c.svg"},152:function(e,a,t){e.exports={variables:'"../layouts/variables.css"',grey:"#9c9c9c",headerHeight:"74px",padding:"20px",imageHeight:"500px",header:"header-module--header--2Q3RK",homeHeader:"header-module--homeHeader--2kidl header-module--header--2Q3RK",logo:"header-module--logo--3gu8x"}},153:function(e,a,t){e.exports={variables:'"../layouts/variables.css"',grey:"#9c9c9c",padding:"20px",footer:"footer-module--footer--2r2aa"}},154:function(e,a,t){e.exports={variables:'"./variables.css"',grey:"#9c9c9c"}},155:function(e,a,t){e.exports={variables:'"../layouts/variables.css"',maxContentWidth:"1200px",padding:"20px"}},156:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(159),o=t.n(l),i=t(146),s=t(7),u=t.n(s),c=(t(160),t(148)),m=t.n(c),d=function(e){var a=e.closeOverlay||void 0;void 0===e.style?m.a.navMain:e.style;return n.a.createElement("nav",{className:m.a.navMain},n.a.createElement("ul",null,n.a.createElement(i.Link,{to:"/equipment",className:m.a.link,activeClassName:m.a.active,onClick:a},"Equipment"),n.a.createElement(i.Link,{to:"/projects",className:m.a.link,activeClassName:m.a.active,onClick:a},"Projects"),n.a.createElement(i.Link,{to:"/about",className:m.a.link,activeClassName:m.a.active,onClick:a},"About")))},h=t(150),g=t.n(h),p=function(e){function a(){for(var a,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return(a=e.call.apply(e,[this].concat(r))||this).state={isOpen:!1,hamburgerStyle:g.a.hamburgerOpen,hamburgerLineStyle:g.a.hamburgerLineOpen,overlayStyle:g.a.overlayClosed},a.closeOverlay=function(e){a.setState({isOpen:!1,hamburgerStyle:g.a.hamburgerOpen,hamburgerLineStyle:g.a.hamburgerLineOpen,overlayStyle:g.a.overlayClosed})},a.openOverlay=function(e){a.setState({isOpen:!0,hamburgerStyle:g.a.hamburgerClose,hamburgerLineStyle:g.a.hamburgerLineClose,overlayStyle:g.a.overlayOpened})},a.toggle=function(e){a.state.isOpen?a.closeOverlay():a.openOverlay()},a}return u()(a,e),a.prototype.render=function(){return n.a.createElement("div",{className:g.a.hamburgerWrapper},n.a.createElement("div",{className:this.state.overlayStyle},n.a.createElement(d,{closeOverlay:this.closeOverlay})),n.a.createElement("div",{onClick:this.toggle,className:this.state.hamburgerStyle},n.a.createElement("span",{className:this.state.hamburgerLineStyle}),n.a.createElement("span",{className:this.state.hamburgerLineStyle}),n.a.createElement("span",{className:this.state.hamburgerLineStyle}),n.a.createElement("span",{className:this.state.hamburgerLineStyle})))},a}(r.Component),b=t(151),y=t.n(b),v=t(152),f=t.n(v),E=function(e){var a=e.background?f.a.homeHeader:f.a.header;return console.log(" header props",e),n.a.createElement("header",{className:a},n.a.createElement(i.Link,{to:"/"}," ",n.a.createElement("img",{src:y.a,className:f.a.logo})," "),n.a.createElement(p,null))},x=t(153),L=t.n(x),k=function(){return n.a.createElement("div",{className:L.a.footer},n.a.createElement(i.Link,{to:"/legal"},"Legal"))},O=(t(154),t(155)),C=t.n(O);a.a=function(e){var a=e.type,t=e.children;return n.a.createElement("div",null,n.a.createElement(o.a,{title:"bioPUNK.kitchen",meta:[{name:"description",content:"Community based biology studio & science atelier at the gates of Berlin"},{name:"lang",content:"en"}]},n.a.createElement("script",{src:"https://identity.netlify.com/v1/netlify-identity-widget.js"})),n.a.createElement(E,{background:a}),n.a.createElement("div",{className:C.a.main},t),n.a.createElement(k,null))}},157:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(158),o=t.n(l);a.a=function(e){return n.a.createElement("div",{className:o.a.hero,style:{backgroundImage:"url("+e.image+")"}})}},158:function(e,a,t){e.exports={variables:'"../layouts/variables.css"',grey:"#9c9c9c",padding:"20px",hero:"hero-module--hero--S__gH"}},161:function(e,a,t){e.exports={variables:'"../layouts/variables.css"',headerHeight:"74px",post:"post-module--post--BLAJH"}}}]);
//# sourceMappingURL=component---src-templates-equipment-js-70a98eee82bc97858367.js.map