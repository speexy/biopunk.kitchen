(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{137:function(e,a,r){"use strict";r.r(a),r.d(a,"postQuery",function(){return u});var t=r(0),n=r.n(t),o=r(156),l=r(157),i=r(161),s=r.n(i);a.default=function(e){var a=e.data,r=a.markdownRemark.frontmatter,t=(r.title,r.image);return n.a.createElement(o.a,null,n.a.createElement(l.a,{image:t}),n.a.createElement("div",{className:s.a.post},n.a.createElement("h1",null,a.markdownRemark.frontmatter.title),n.a.createElement("img",{src:a.markdownRemark.frontmatter.image}),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.markdownRemark.html}})))};var u="2498924711"},146:function(e,a,r){"use strict";r.r(a),r.d(a,"graphql",function(){return p}),r.d(a,"StaticQueryContext",function(){return d}),r.d(a,"StaticQuery",function(){return h}),r.d(a,"useStaticQuery",function(){return g});var t=r(0),n=r.n(t),o=r(4),l=r.n(o),i=r(145),s=r.n(i);r.d(a,"Link",function(){return s.a}),r.d(a,"withPrefix",function(){return i.withPrefix}),r.d(a,"navigate",function(){return i.navigate}),r.d(a,"push",function(){return i.push}),r.d(a,"replace",function(){return i.replace}),r.d(a,"navigateTo",function(){return i.navigateTo});var u=r(147),c=r.n(u);r.d(a,"PageRenderer",function(){return c.a});var m=r(32);r.d(a,"parsePath",function(){return m.a});var d=n.a.createContext({}),h=function(e){return n.a.createElement(d.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})},g=function(e){n.a.useContext;var a=n.a.useContext(d);if(a[e]&&a[e].data)return a[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},147:function(e,a,r){var t;e.exports=(t=r(149))&&t.default||t},148:function(e,a,r){e.exports={variables:'"../layouts/variables.css"',margin:"20px",navMain:"navMain-module--navMain--6pHWJ"}},149:function(e,a,r){"use strict";r.r(a);r(33);var t=r(0),n=r.n(t),o=r(4),l=r.n(o),i=r(52),s=r(2),u=function(e){var a=e.location,r=s.default.getResourcesForPathnameSync(a.pathname);return n.a.createElement(i.a,Object.assign({location:a,pageResources:r},r.json))};u.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=u},150:function(e,a,r){e.exports={variables:'"../layouts/variables.css"',grey:"#9c9c9c",active:"#f00",padding:"20px",breakTablet:"768px",hamburgerWrapper:"hamburger-module--hamburgerWrapper--1TKeQ",overlay:"hamburger-module--overlay--25q67",overlayOpened:"hamburger-module--overlayOpened--2TWUG hamburger-module--overlay--25q67",overlayClosed:"hamburger-module--overlayClosed--kaLjT hamburger-module--overlay--25q67",hamburger:"hamburger-module--hamburger--hTO3R",hamburgerOpen:"hamburger-module--hamburgerOpen--11N7L hamburger-module--hamburger--hTO3R",hamburgerClose:"hamburger-module--hamburgerClose--1K9uQ hamburger-module--hamburger--hTO3R",hamburgerLine:"hamburger-module--hamburgerLine--2AyXw",hamburgerLineOpen:"hamburger-module--hamburgerLineOpen--2KmtQ hamburger-module--hamburgerLine--2AyXw",hamburgerLineClose:"hamburger-module--hamburgerLineClose--1AoAb hamburger-module--hamburgerLine--2AyXw"}},151:function(e,a,r){e.exports=r.p+"static/punk-3b342566b5d6169ffe5e560e6081463c.svg"},152:function(e,a,r){e.exports={variables:'"../layouts/variables.css"',grey:"#9c9c9c",headerHeight:"74px",padding:"20px",imageHeight:"500px",header:"header-module--header--2Q3RK",homeHeader:"header-module--homeHeader--2kidl header-module--header--2Q3RK",logo:"header-module--logo--3gu8x"}},153:function(e,a,r){e.exports={variables:'"../layouts/variables.css"',grey:"#9c9c9c",padding:"20px",footer:"footer-module--footer--2r2aa"}},154:function(e,a,r){e.exports={variables:'"./variables.css"',grey:"#9c9c9c"}},155:function(e,a,r){e.exports={variables:'"../layouts/variables.css"',maxContentWidth:"1200px",padding:"20px"}},156:function(e,a,r){"use strict";var t=r(0),n=r.n(t),o=r(159),l=r.n(o),i=r(146),s=r(7),u=r.n(s),c=(r(160),r(148)),m=r.n(c),d=function(e){var a=e.closeOverlay||void 0;void 0===e.style?m.a.navMain:e.style;return n.a.createElement("nav",{className:m.a.navMain},n.a.createElement("ul",null,n.a.createElement(i.Link,{to:"/equipment",className:m.a.link,activeClassName:m.a.active,onClick:a},"Equipment"),n.a.createElement(i.Link,{to:"/projects",className:m.a.link,activeClassName:m.a.active,onClick:a},"Projects"),n.a.createElement(i.Link,{to:"/about",className:m.a.link,activeClassName:m.a.active,onClick:a},"About")))},h=r(150),g=r.n(h),p=function(e){function a(){for(var a,r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];return(a=e.call.apply(e,[this].concat(t))||this).state={isOpen:!1,hamburgerStyle:g.a.hamburgerOpen,hamburgerLineStyle:g.a.hamburgerLineOpen,overlayStyle:g.a.overlayClosed},a.closeOverlay=function(e){a.setState({isOpen:!1,hamburgerStyle:g.a.hamburgerOpen,hamburgerLineStyle:g.a.hamburgerLineOpen,overlayStyle:g.a.overlayClosed})},a.openOverlay=function(e){a.setState({isOpen:!0,hamburgerStyle:g.a.hamburgerClose,hamburgerLineStyle:g.a.hamburgerLineClose,overlayStyle:g.a.overlayOpened})},a.toggle=function(e){a.state.isOpen?a.closeOverlay():a.openOverlay()},a}return u()(a,e),a.prototype.render=function(){return n.a.createElement("div",{className:g.a.hamburgerWrapper},n.a.createElement("div",{className:this.state.overlayStyle},n.a.createElement(d,{closeOverlay:this.closeOverlay})),n.a.createElement("div",{onClick:this.toggle,className:this.state.hamburgerStyle},n.a.createElement("span",{className:this.state.hamburgerLineStyle}),n.a.createElement("span",{className:this.state.hamburgerLineStyle}),n.a.createElement("span",{className:this.state.hamburgerLineStyle}),n.a.createElement("span",{className:this.state.hamburgerLineStyle})))},a}(t.Component),b=r(151),y=r.n(b),v=r(152),f=r.n(v),E=function(e){var a=e.background?f.a.homeHeader:f.a.header;return console.log(" header props",e),n.a.createElement("header",{className:a},n.a.createElement(i.Link,{to:"/"}," ",n.a.createElement("img",{src:y.a,className:f.a.logo})," "),n.a.createElement(p,null))},k=r(153),x=r.n(k),L=function(){return n.a.createElement("div",{className:x.a.footer},n.a.createElement(i.Link,{to:"/legal"}," Imprint & Privacy "))},O=(r(154),r(155)),w=r.n(O);a.a=function(e){var a=e.type,r=e.children;return n.a.createElement("div",null,n.a.createElement(l.a,{title:"bioPUNK.kitchen",meta:[{name:"description",content:"Community based biology studio & science atelier at the gates of Berlin"},{name:"lang",content:"en"}]},n.a.createElement("script",{src:"https://identity.netlify.com/v1/netlify-identity-widget.js"})),n.a.createElement(E,{background:a}),n.a.createElement("div",{className:w.a.main},r),n.a.createElement(L,null))}},157:function(e,a,r){"use strict";var t=r(0),n=r.n(t),o=r(158),l=r.n(o);a.a=function(e){return n.a.createElement("div",{className:l.a.hero,style:{backgroundImage:"url("+e.image+")"}})}},158:function(e,a,r){e.exports={variables:'"../layouts/variables.css"',grey:"#9c9c9c",padding:"20px",hero:"hero-module--hero--S__gH"}},161:function(e,a,r){e.exports={variables:'"../layouts/variables.css"',headerHeight:"74px",post:"post-module--post--BLAJH"}}}]);
//# sourceMappingURL=component---src-templates-post-js-16dbc6a691cc2838ce87.js.map