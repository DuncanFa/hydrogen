"use strict";(self.webpackChunkdocs_v_1=self.webpackChunkdocs_v_1||[]).push([[7122],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,h=u["".concat(i,".").concat(c)]||u[c]||m[c]||r;return n?o.createElement(h,l(l({ref:t},d),{},{components:n})):o.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2573:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={},l="Manage SEO",s={unversionedId:"tutorials/seo/manage-seo",id:"tutorials/seo/manage-seo",title:"Manage SEO",description:"Hydrogen 2.0 is out now. These archival Hydrogen 1.0 docs are provided only to assist developers during their upgrade process. Please migrate to Hydrogen 2.0 as soon as possible.",source:"@site/docs/tutorials/seo/manage-seo.md",sourceDirName:"tutorials/seo",slug:"/tutorials/seo/manage-seo",permalink:"/hydrogen-v1/tutorials/seo/manage-seo",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"hydrogen",previous:{title:"SEO",permalink:"/hydrogen-v1/tutorials/seo/"},next:{title:"Server props",permalink:"/hydrogen-v1/tutorials/server-props"}},i={},p=[{value:"Customize SEO at the route level",id:"customize-seo-at-the-route-level",level:2},{value:"Override default server component SEO values",id:"override-default-server-component-seo-values",level:2},{value:"Generate SEO tags",id:"generate-seo-tags",level:2},{value:"Add custom <code>head</code> tags to the <code>Seo</code> component",id:"add-custom-head-tags-to-the-seo-component",level:3},{value:"Query and populate <code>&lt;head&gt;</code> tags as a server component",id:"query-and-populate-head-tags-as-a-server-component",level:2},{value:"Overwriting title template",id:"overwriting-title-template",level:2},{value:"Overwrite for all pages",id:"overwrite-for-all-pages",level:3},{value:"Overwrite for a single page",id:"overwrite-for-a-single-page",level:3},{value:"SEO bots",id:"seo-bots",level:2},{value:"Imitate robot behavior",id:"imitate-robot-behavior",level:3},{value:"Check for custom robots",id:"check-for-custom-robots",level:3},{value:"Remove SEO with noindex",id:"remove-seo-with-noindex",level:3}],d={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"manage-seo"},"Manage SEO"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Hydrogen 2.0 is out now. These archival Hydrogen 1.0 docs are provided only to assist developers during their upgrade process. Please ",(0,a.kt)("a",{parentName:"p",href:"https://shopify.dev/docs/custom-storefronts/hydrogen/migrate-hydrogen-remix"},"migrate to Hydrogen 2.0")," as soon as possible.")),(0,a.kt)("p",null,"This guide describes how to customize the output of SEO-related tags in your client and server components."),(0,a.kt)("h2",{id:"customize-seo-at-the-route-level"},"Customize SEO at the route level"),(0,a.kt)("p",null,"At the route level, you can customize ",(0,a.kt)("a",{parentName:"p",href:"/hydrogen-v1/tutorials/seo/#seo-client-component"},"the ",(0,a.kt)("inlineCode",{parentName:"a"},"<head>")," tags")," that search engines look for."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen/blob/main/templates/demo-store/src/routes/index.server.tsx"},"Home page")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen/blob/main/templates/demo-store/src/routes/pages/%5Bhandle%5D.server.tsx"},"Pages page")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen/blob/main/templates/demo-store/src/routes/products/%5Bhandle%5D.server.tsx"},"Product page")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen/blob/main/templates/demo-store/src/routes/collections/%5Bhandle%5D.server.tsx"},"Collection page"))),(0,a.kt)("h2",{id:"override-default-server-component-seo-values"},"Override default server component SEO values"),(0,a.kt)("p",null,"You can override the default SEO values by passing in custom props:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// /products/[handle].server.jsx\n\nconst storeFrontData = {...};\nconst customData = {\n  ...storeFrontData,\n  description: 'Custom product description',\n};\n\n<Seo type=\"product\" data={customData} />\n")),(0,a.kt)("h2",{id:"generate-seo-tags"},"Generate SEO tags"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Seo")," component has two props: ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"data"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," prop accepts ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultSeo"),",",(0,a.kt)("inlineCode",{parentName:"p"},"homepage"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"product"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"collection"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"page"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"noindex"),"."),(0,a.kt)("p",null,"Each ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," expects a different ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," shape."),(0,a.kt)("p",null,"The following example shows how to use an SEO component of type ",(0,a.kt)("inlineCode",{parentName:"p"},"product")," and pass a ",(0,a.kt)("inlineCode",{parentName:"p"},"product")," object into the ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," prop. This allows the component to generate standard SEO-related tags for your product page:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'// /products/[handle].server.jsx\n\n<Seo type="product" data={product} />\n')),(0,a.kt)("h3",{id:"add-custom-head-tags-to-the-seo-component"},"Add custom ",(0,a.kt)("inlineCode",{parentName:"h3"},"head")," tags to the ",(0,a.kt)("inlineCode",{parentName:"h3"},"Seo")," component"),(0,a.kt)("p",null,"Import ",(0,a.kt)("inlineCode",{parentName:"p"},"Head")," from Hydrogen on any client component and use the syntax described by the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nfl/react-helmet"},"underlying Helmet library"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'// /products/[handle].server.jsx\n\nimport {Head} from \'@shopify/hydrogen\';\n\nreturn (\n  <>\n    <Seo type="product" data={product} />\n    <Head>\n      <meta property="something" content="else" />\n    </Head>\n  </>\n);\n')),(0,a.kt)("h2",{id:"query-and-populate-head-tags-as-a-server-component"},"Query and populate ",(0,a.kt)("inlineCode",{parentName:"h2"},"<head>")," tags as a server component"),(0,a.kt)("p",null,"The following example shows how to include a catch-all SEO component with the type ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultSeo")," that queries and populates ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>")," tags as a server component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"// App.server.jsx\n\n\nimport {Suspense} from 'react';\n\nimport LoadingFallback from './components/LoadingFallback';\n\nexport default function App({log, ...serverProps}) {\n  return (\n    <>\n      <Suspense fallback={<LoadingFallback />}>\n        <ShopifyProvider countryCode={countryCode}>\n          <Seo\n            type=\"defaultSeo\"\n            data={{\n              title: 'Hydrogen',\n              description:\n                \"A custom storefront powered by Hydrogen, Shopify's React-based framework for building headless.\",\n              titleTemplate: `%s \xb7 Hydrogen`,\n            }}\n          />\n      </Suspense>\n      {/** ... */}\n    </>\n  );\n}\n\n")),(0,a.kt)("h2",{id:"overwriting-title-template"},"Overwriting title template"),(0,a.kt)("p",null,"In the ",(0,a.kt)("a",{parentName:"p",href:"/hydrogen-v1/tutorials/getting-started/templates#demo-store-template"},"Demo Store template"),", the titles for all pages are ",(0,a.kt)("inlineCode",{parentName:"p"},"%s - ${data.title}"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"%s")," is the title of children components. If you want to use a different pattern, then you can overwrite the title template for all pages using a ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultSeo")," type ",(0,a.kt)("inlineCode",{parentName:"p"},"Seo")," component, or for a single page by updating the ",(0,a.kt)("inlineCode",{parentName:"p"},"Head")," title."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note:\n",(0,a.kt)("strong",{parentName:"p"},"Hydrogen")," is the default label that displays on the browser tab. You can edit the label by updating the text in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<title>")," tag in ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html"),".")),(0,a.kt)("h3",{id:"overwrite-for-all-pages"},"Overwrite for all pages"),(0,a.kt)("p",null,"The following example shows how to overwrite title template for all pages (for example, ",(0,a.kt)("inlineCode",{parentName:"p"},"Fullstack Snow Board | Snowdevil"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'// DefaultSeo.server.jsx\n\n...\n  return (\n    <Seo\n      type="defaultSeo"\n      data={{\n        title: name,\n        description,\n+       titleTemplate: `%s | ${name}`\n      }}\n    />\n  );\n...\n')),(0,a.kt)("h3",{id:"overwrite-for-a-single-page"},"Overwrite for a single page"),(0,a.kt)("p",null,"The following example shows how to overwrite title template for a single page:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"// /mypage.server.jsx\n\nimport {Head} from '@shopify/hydrogen';\n\nreturn (\n  <Head titleTemplate=\"%s\">\n    <title>My Page</title>\n  </Head>\n);\n")),(0,a.kt)("h2",{id:"seo-bots"},"SEO bots"),(0,a.kt)("p",null,"The following are common tasks for working with bots."),(0,a.kt)("h3",{id:"imitate-robot-behavior"},"Imitate robot behavior"),(0,a.kt)("p",null,"To imitate the behavior of an SEO bot and show the page content fully from server render for an initial render, add the ",(0,a.kt)("inlineCode",{parentName:"p"},"?_bot")," query parameter at the end of the webpage's URL."),(0,a.kt)("h3",{id:"check-for-custom-robots"},"Check for custom robots"),(0,a.kt)("p",null,"If you find a bot that's not recognized by Hydrogen's bot detection algorithm, then you can ",(0,a.kt)("a",{parentName:"p",href:"/hydrogen-v1/tutorials/routing/manage-routes#disable-streaming-for-routes"},"manually disable streaming")," to buffer the response and make the content immediately available to bots:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"// App.server.jsx\n\nfunction App({request, response}) {\n  if (request.headers.get('user-agent') === 'custom bot') {\n    response.doNotStream();\n  }\n\n  return <Suspense fallback={'Loading...'}>{/*...*/}</Suspense>;\n}\n\nexport default renderHydrogen(App);\n")),(0,a.kt)("h3",{id:"remove-seo-with-noindex"},"Remove SEO with noindex"),(0,a.kt)("p",null,"Pages that require authentication shouldn't be indexed by bots. For example, bots shouldn't index login and account pages. You can tell bots to not index a page by passing ",(0,a.kt)("inlineCode",{parentName:"p"},"noindex")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Seo")," component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"// /account/login.server.jsx\n\n<Seo type=\"noindex\" data={{title: 'Login'}} />\n")))}m.isMDXComponent=!0}}]);