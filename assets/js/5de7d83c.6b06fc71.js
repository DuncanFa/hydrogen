"use strict";(self.webpackChunkdocs_v_1=self.webpackChunkdocs_v_1||[]).push([[4610],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>g});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),y=o,g=d["".concat(s,".").concat(y)]||d[y]||c[y]||a;return t?n.createElement(g,i(i({ref:r},p),{},{components:t})):n.createElement(g,i({ref:r},p))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},3563:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=t(7462),o=(t(7294),t(3905));const a={},i="Preload queries",l={unversionedId:"tutorials/querying/preload-queries",id:"tutorials/querying/preload-queries",title:"Preload queries",description:"Hydrogen 2.0 is out now. These archival Hydrogen 1.0 docs are provided only to assist developers during their upgrade process. Please migrate to Hydrogen 2.0 as soon as possible.",source:"@site/docs/tutorials/querying/preload-queries.md",sourceDirName:"tutorials/querying",slug:"/tutorials/querying/preload-queries",permalink:"/hydrogen-v1/tutorials/querying/preload-queries",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"hydrogen",previous:{title:"Manage caching",permalink:"/hydrogen-v1/tutorials/querying/manage-caching"},next:{title:"Preloaded queries",permalink:"/hydrogen-v1/tutorials/querying/preloaded-queries"}},s={},u=[{value:"Disable preloaded queries",id:"disable-preloaded-queries",level:2},{value:"Preload everywhere",id:"preload-everywhere",level:2},{value:"Log request timing information",id:"log-request-timing-information",level:2}],p={toc:u},d="wrapper";function c(e){let{components:r,...t}=e;return(0,o.kt)(d,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"preload-queries"},"Preload queries"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Hydrogen 2.0 is out now. These archival Hydrogen 1.0 docs are provided only to assist developers during their upgrade process. Please ",(0,o.kt)("a",{parentName:"p",href:"https://shopify.dev/docs/custom-storefronts/hydrogen/migrate-hydrogen-remix"},"migrate to Hydrogen 2.0")," as soon as possible.")),(0,o.kt)("aside",{class:"note beta"},(0,o.kt)("h4",null,"Experimental feature"),(0,o.kt)("p",null,"Preloaded queries is an experimental feature. As a result, functionality is subject to change. You can provide feedback on this feature by ",(0,o.kt)("a",{href:"https://github.com/Shopify/hydrogen/issues"},"submitting an issue in GitHub"),".")),(0,o.kt)("p",null,"This guide provides information on how to configure preloaded queries in your Hydrogen app."),(0,o.kt)("h2",{id:"disable-preloaded-queries"},"Disable preloaded queries"),(0,o.kt)("p",null,"You can disable preloaded queries in the following ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set cache to ",(0,o.kt)("inlineCode",{parentName:"li"},"CacheNone")),(0,o.kt)("li",{parentName:"ul"},"Opting out with ",(0,o.kt)("inlineCode",{parentName:"li"},"preload: false"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const {data} = useShopQuery({\n  query: QUERY,\n  variables: {\n    numCollections: 3,\n  },\n  cache: CacheNone(), // `CacheNone()` automatically disables preloaded queries\n  preload: false,     // or you can explicitly tell the query not to preload\n});\n")),(0,o.kt)("h2",{id:"preload-everywhere"},"Preload everywhere"),(0,o.kt)("p",null,"Supply the ",(0,o.kt)("inlineCode",{parentName:"p"},"preload")," property with either a Boolean value or a string. When the value is ",(0,o.kt)("inlineCode",{parentName:"p"},"*"),", Hydrogen preloads the query for every request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const data = fetchSync('https://my.api.com/data.json', {\n  headers: {\n    accept: 'application/json',\n  },\n  // Preloads queries for every request\n  preload: '*',\n}).json();\n")),(0,o.kt)("h2",{id:"log-request-timing-information"},"Log request timing information"),(0,o.kt)("aside",{class:"note beta"},(0,o.kt)("h4",null,"Experimental feature"),(0,o.kt)("p",null,"The `showQueryTiming` property is an experimental feature. As a result, functionality is subject to change. You can provide feedback on this feature by ",(0,o.kt)("a",{href:"https://github.com/Shopify/hydrogen/issues"},"submitting an issue in GitHub"),".")),(0,o.kt)("p",null,"Enable the ",(0,o.kt)("inlineCode",{parentName:"p"},"logger.showQueryTiming")," property in your ",(0,o.kt)("a",{parentName:"p",href:"/hydrogen-v1/tutorials/configuration/#logger"},"Hydrogen configuration file"),"."))}c.isMDXComponent=!0}}]);