"use strict";(self.webpackChunkdocs_v_1=self.webpackChunkdocs_v_1||[]).push([[2174],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),c=o,f=m["".concat(p,".").concat(c)]||m[c]||d[c]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9936:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},i="FileRoutes",l={unversionedId:"components/framework/fileroutes",id:"components/framework/fileroutes",title:"FileRoutes",description:"The FileRoutes component builds a set of Hydrogen routes. By default, it loads the routes specified in the Hydrogen configuration file when no props are passed.",source:"@site/docs/components/framework/fileroutes.md",sourceDirName:"components/framework",slug:"/components/framework/fileroutes",permalink:"/hydrogen-v1/components/framework/fileroutes",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"hydrogen",previous:{title:"CookieSessionStorage",permalink:"/hydrogen-v1/components/framework/cookiesessionstorage"},next:{title:"FileSessionStorage",permalink:"/hydrogen-v1/components/framework/filesessionstorage"}},p={},s=[{value:"Example code",id:"example-code",level:2},{value:"Props",id:"props",level:2},{value:"Component type",id:"component-type",level:2},{value:"Related components",id:"related-components",level:2},{value:"Related framework topics",id:"related-framework-topics",level:2}],u={toc:s},m="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fileroutes"},"FileRoutes"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"FileRoutes")," component builds a set of Hydrogen routes. By default, it loads the routes specified in ",(0,o.kt)("a",{parentName:"p",href:"https://shopify.dev/custom-storefronts/hydrogen/configuration"},"the Hydrogen configuration file")," when no props are passed."),(0,o.kt)("p",null,"You can override the default behavior and use custom routes based on the output that's provided by Vite's ",(0,o.kt)("a",{parentName:"p",href:"https://vitejs.dev/guide/features.html#glob-import"},"import.meta.globEager")," method. You can have multiple instances of the ",(0,o.kt)("inlineCode",{parentName:"p"},"FileRoutes")," component to source file routes from multiple locations."),(0,o.kt)("h2",{id:"example-code"},"Example code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.server.jsx"',title:'"App.server.jsx"'},"import {Router, FileRoutes, Route} from '@shopify/hydrogen';\n\nfunction App() {\n  const esRoutes = import.meta.globEager('./custom-routes/es/**/*.server.jsx');\n  const enRoutes = import.meta.globEager('./custom-routes/en/**/*.server.jsx');\n\n  return (\n    <Suspense fallback={<LoadingFallback />}>\n      <ShopifyProvider>\n        <CartProvider>\n          <Router>\n            <FileRoutes />\n            <FileRoutes basePath=\"/es/\" routes={esRoutes} />\n            <FileRoutes basePath=\"/en/\" routes={enRoutes} />\n            <Route path=\"*\" page={<NotFound />} />\n          </Router>\n        </CartProvider>\n      </ShopifyProvider>\n    </Suspense>\n  );\n}\nfunction NotFound() {\n  return <h1>Not found</h1>;\n}\n")),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"routes?"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ImportGlobEagerOutput")),(0,o.kt)("td",{parentName:"tr",align:null},"The routes defined by Vite's ",(0,o.kt)("a",{parentName:"td",href:"https://vitejs.dev/guide/features.html#glob-import"},"import.meta.globEager")," method.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"basePath?"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},"A path that's prepended to all file routes. You can modify ",(0,o.kt)("inlineCode",{parentName:"td"},"basePath")," if you want to prefix all file routes. For example, you can prefix all file routes with a locale.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"dirPrefix?"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string &#124; RegExp")),(0,o.kt)("td",{parentName:"tr",align:null},"The portion of the file route path that shouldn't be a part of the URL. You need to modify this if you want to import your routes from a location other than the default ",(0,o.kt)("inlineCode",{parentName:"td"},"src/routes"),".")))),(0,o.kt)("h2",{id:"component-type"},"Component type"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"FileRoutes")," component is a server component that renders inside ",(0,o.kt)("inlineCode",{parentName:"p"},"App.server.jsx"),". For more information about component types, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://shopify.dev/custom-storefronts/hydrogen/react-server-components"},"React Server Components"),"."),(0,o.kt)("h2",{id:"related-components"},"Related components"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/components/framework/router/"},(0,o.kt)("inlineCode",{parentName:"a"},"Router"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/components/framework/route/"},(0,o.kt)("inlineCode",{parentName:"a"},"Route")))),(0,o.kt)("h2",{id:"related-framework-topics"},"Related framework topics"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://shopify.dev/custom-storefronts/hydrogen/routing"},"Routes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://shopify.dev/custom-storefronts/hydrogen/configuration"},"Hydrogen configuration"))))}d.isMDXComponent=!0}}]);