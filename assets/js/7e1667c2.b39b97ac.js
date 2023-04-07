"use strict";(self.webpackChunkdocs_v_1=self.webpackChunkdocs_v_1||[]).push([[9566],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7264:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},i="Remove Tailwind",s={unversionedId:"tutorials/css-support/remove-tailwind",id:"tutorials/css-support/remove-tailwind",title:"Remove Tailwind",description:"Hydrogen 2.0 is out now. These archival Hydrogen 1.0 docs are provided only to assist developers during their upgrade process. Please migrate to Hydrogen 2.0 as soon as possible.",source:"@site/docs/tutorials/css-support/remove-tailwind.md",sourceDirName:"tutorials/css-support",slug:"/tutorials/css-support/remove-tailwind",permalink:"/hydrogen-v1/tutorials/css-support/remove-tailwind",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"hydrogen",previous:{title:"Importing CSS in React Server Components",permalink:"/hydrogen-v1/tutorials/css-support/import-css-in-rsc"},next:{title:"Data sources",permalink:"/hydrogen-v1/tutorials/data-sources/"}},l={},p=[],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"remove-tailwind"},"Remove Tailwind"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Hydrogen 2.0 is out now. These archival Hydrogen 1.0 docs are provided only to assist developers during their upgrade process. Please ",(0,o.kt)("a",{parentName:"p",href:"https://shopify.dev/docs/custom-storefronts/hydrogen/migrate-hydrogen-remix"},"migrate to Hydrogen 2.0")," as soon as possible.")),(0,o.kt)("p",null,"If you don't want to build with Tailwind's library and instead want to write your own CSS, then you can remove Tailwind:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Delete all the code in ",(0,o.kt)("inlineCode",{parentName:"li"},"src/index.css"),"."),(0,o.kt)("li",{parentName:"ol"},"Remove Tailwind from ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,o.kt)("li",{parentName:"ol"},"Remove Tailwind from ",(0,o.kt)("inlineCode",{parentName:"li"},"postcss.config.js"),"."),(0,o.kt)("li",{parentName:"ol"},"Run the following commands:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```bash?filename: 'Terminal', title: 'npm'\n// Switch to your app's directory\ncd <directory>\n\n// Install dependencies\nnpm i\n\n// Start the development server\nnpm run dev\n```\n\n```bash?filename: 'Terminal', title: 'Yarn'\n// Switch to your app's directory\ncd <directory>\n\n// Install dependencies\nyarn\n\n// Start the development server\nyarn dev\n```\n")))}u.isMDXComponent=!0}}]);