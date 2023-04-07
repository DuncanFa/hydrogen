"use strict";(self.webpackChunkdocs_v_1=self.webpackChunkdocs_v_1||[]).push([[5222],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>f});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function d(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var l=r.createContext({}),p=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},c=function(n){var e=p(n.components);return r.createElement(l.Provider,{value:e},n.children)},u="mdxType",s={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,l=n.parentName,c=d(n,["components","mdxType","originalType","parentName"]),u=p(t),m=o,f=u["".concat(l,".").concat(m)]||u[m]||s[m]||a;return t?r.createElement(f,i(i({ref:e},c),{},{components:t})):r.createElement(f,i({ref:e},c))}));function f(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,i=new Array(a);i[0]=m;var d={};for(var l in e)hasOwnProperty.call(e,l)&&(d[l]=e[l]);d.originalType=n,d[u]="string"==typeof n?n:o,i[1]=d;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},570:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={},i="ProductOptionsProvider",d={unversionedId:"components/product-variant/productoptionsprovider",id:"components/product-variant/productoptionsprovider",title:"ProductOptionsProvider",description:"The ProductOptionsProvider component sets up a context with state that tracks the selected variant and options. Descendents of this component can use the useProductOptions hook.",source:"@site/docs/components/product-variant/productoptionsprovider.md",sourceDirName:"components/product-variant",slug:"/components/product-variant/productoptionsprovider",permalink:"/hydrogen-v1/components/product-variant/productoptionsprovider",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"hydrogen",previous:{title:"Video",permalink:"/hydrogen-v1/components/primitive/video"},next:{title:"ProductPrice",permalink:"/hydrogen-v1/components/product-variant/productprice"}},l={},p=[{value:"Example code",id:"example-code",level:2},{value:"Props",id:"props",level:2},{value:"Component type",id:"component-type",level:2},{value:"Related components",id:"related-components",level:2},{value:"Related hooks",id:"related-hooks",level:2}],c={toc:p},u="wrapper";function s(n){let{components:e,...t}=n;return(0,o.kt)(u,(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"productoptionsprovider"},"ProductOptionsProvider"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ProductOptionsProvider")," component sets up a context with state that tracks the selected variant and options. Descendents of this component can use the ",(0,o.kt)("a",{parentName:"p",href:"/hooks/product-variant/useproductoptions/"},(0,o.kt)("inlineCode",{parentName:"a"},"useProductOptions"))," hook."),(0,o.kt)("h2",{id:"example-code"},"Example code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {ProductOptionsProvider, gql} from '@shopify/hydrogen';\n\nconst QUERY = gql`\n  query product($handle: String!, $includeReferenceMetafieldDetails: Boolean!) {\n    product: product(handle: $handle) {\n      compareAtPriceRange {\n        maxVariantPrice {\n          currencyCode\n          amount\n        }\n        minVariantPrice {\n          currencyCode\n          amount\n        }\n      }\n      descriptionHtml\n      handle\n      id\n      media(first: 10) {\n        nodes {\n          ... on MediaImage {\n            mediaContentType\n            image {\n              id\n              url\n              altText\n              width\n              height\n            }\n          }\n          ... on Video {\n            mediaContentType\n            id\n            previewImage {\n              url\n            }\n            sources {\n              mimeType\n              url\n            }\n          }\n          ... on ExternalVideo {\n            mediaContentType\n            id\n            embedUrl\n            host\n          }\n          ... on Model3d {\n            mediaContentType\n            id\n            alt\n            mediaContentType\n            previewImage {\n              url\n            }\n            sources {\n              url\n            }\n          }\n        }\n      }\n      metafields(first: 10) {\n        nodes {\n          id\n          type\n          namespace\n          key\n          value\n          createdAt\n          updatedAt\n          description\n          reference @include(if: $includeReferenceMetafieldDetails) {\n            __typename\n            ... on MediaImage {\n              id\n              mediaContentType\n              image {\n                id\n                url\n                altText\n                width\n                height\n              }\n            }\n          }\n        }\n      }\n      priceRange {\n        maxVariantPrice {\n          currencyCode\n          amount\n        }\n        minVariantPrice {\n          currencyCode\n          amount\n        }\n      }\n      title\n      variants(first: 250) {\n        nodes {\n          id\n          title\n          availableForSale\n          image {\n            id\n            url\n            altText\n            width\n            height\n          }\n          unitPriceMeasurement {\n            measuredType\n            quantityUnit\n            quantityValue\n            referenceUnit\n            referenceValue\n          }\n          unitPrice {\n            currencyCode\n            amount\n          }\n          priceV2 {\n            currencyCode\n            amount\n          }\n          compareAtPriceV2 {\n            currencyCode\n            amount\n          }\n          selectedOptions {\n            name\n            value\n          }\n          metafields(first: 10) {\n            nodes {\n              id\n              type\n              namespace\n              key\n              value\n              createdAt\n              updatedAt\n              description\n              reference @include(if: $includeReferenceMetafieldDetails) {\n                __typename\n                ... on MediaImage {\n                  id\n                  mediaContentType\n                  image {\n                    id\n                    url\n                    altText\n                    width\n                    height\n                  }\n                }\n              }\n            }\n          }\n          sellingPlanAllocations(\n            first: 10\n          ) {\n            nodes {\n              priceAdjustments {\n                compareAtPrice {\n                  currencyCode\n                  amount\n                }\n                perDeliveryPrice {\n                  currencyCode\n                  amount\n                }\n                price {\n                  currencyCode\n                  amount\n                }\n                unitPrice {\n                  currencyCode\n                  amount\n                }\n              }\n              sellingPlan {\n                id\n                description\n                name\n                options {\n                  name\n                  value\n                }\n                priceAdjustments {\n                  orderCount\n                  adjustmentValue {\n                    ... on SellingPlanFixedAmountPriceAdjustment {\n                      adjustmentAmount {\n                        currencyCode\n                        amount\n                      }\n                    }\n                    ... on SellingPlanFixedPriceAdjustment {\n                      price {\n                        currencyCode\n                        amount\n                      }\n                    }\n                    ... on SellingPlanPercentagePriceAdjustment {\n                      adjustmentPercentage\n                    }\n                  }\n                }\n                recurringDeliveries\n              }\n            }\n          }\n        }\n      }\n      sellingPlanGroups(first: 10) {\n        nodes {\n          sellingPlans(first: 10) {\n            nodes {\n              id\n              description\n              name\n              options {\n                name\n                value\n              }\n              priceAdjustments {\n                orderCount\n                adjustmentValue {\n                  ... on SellingPlanFixedAmountPriceAdjustment {\n                    adjustmentAmount {\n                      currencyCode\n                      amount\n                    }\n                  }\n                  ... on SellingPlanFixedPriceAdjustment {\n                    price {\n                      currencyCode\n                      amount\n                    }\n                  }\n                  ... on SellingPlanPercentagePriceAdjustment {\n                    adjustmentPercentage\n                  }\n                }\n              }\n              recurringDeliveries\n            }\n          }\n          appName\n          name\n          options {\n            name\n            values\n          }\n        }\n      }\n    }\n  }\n`;\n\nexport function Product() {\n  const {data} = useShopQuery({query: QUERY, variables: { handle, includeReferenceMetafieldDetails }});\n\n  return (\n    <ProductOptionsProvider data={data.product} initialVariantId=\"some-id\">{/* Your JSX */}</ProductOptionsProvider>\n  );\n}\n")),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"children"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,o.kt)("td",{parentName:"tr",align:null},"A ",(0,o.kt)("inlineCode",{parentName:"td"},"ReactNode")," element.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"data"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"PartialDeep&#60;ProductType&#62;")),(0,o.kt)("td",{parentName:"tr",align:null},"An object with fields that correspond to the Storefront API's ",(0,o.kt)("a",{parentName:"td",href:"https://shopify.dev/docs/api/storefront/reference/products/product"},"Product object"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"initialVariantId?"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Parameters&#60;typeof useProductOption&#62;['0']['initialvariantid']")),(0,o.kt)("td",{parentName:"tr",align:null},"The initially selected variant. ",(0,o.kt)("br",null),"The following logic applies to ",(0,o.kt)("inlineCode",{parentName:"td"},"initialVariantId"),":",(0,o.kt)("ul",null,(0,o.kt)("li",null,"If ",(0,o.kt)("inlineCode",{parentName:"td"},"initialVariantId")," is provided, then it's used, even if it's out of stock."),(0,o.kt)("li",null,"If ",(0,o.kt)("inlineCode",{parentName:"td"},"initialVariantId")," is provided, but is ",(0,o.kt)("inlineCode",{parentName:"td"},"null"),", then no variant is used."),(0,o.kt)("li",null,"If nothing is passed to ",(0,o.kt)("inlineCode",{parentName:"td"},"initialVariantId"),", and you're in a ",(0,o.kt)("inlineCode",{parentName:"td"},"ProductOptionsProvider")," component, then ",(0,o.kt)("inlineCode",{parentName:"td"},"selectedVariant.id")," is used."),(0,o.kt)("li",null,"If nothing is passed to ",(0,o.kt)("inlineCode",{parentName:"td"},"initialVariantId")," and you're not in a ",(0,o.kt)("inlineCode",{parentName:"td"},"ProductOptionsProvider")," component, then the first available or in-stock variant is used."),(0,o.kt)("li",null,"If nothing is passed to ",(0,o.kt)("inlineCode",{parentName:"td"},"initialVariantId"),", you're not in a ",(0,o.kt)("inlineCode",{parentName:"td"},"ProductOptionsProvider")," component, and no variants are in stock, then the first variant is used.")))))),(0,o.kt)("h2",{id:"component-type"},"Component type"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ProductOptionsProvider")," component is a client component, which means that it renders on the client. For more information about component types, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://shopify.dev/custom-storefronts/hydrogen/react-server-components"},"React Server Components"),"."),(0,o.kt)("h2",{id:"related-components"},"Related components"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/components/product-variant/productprice/"},(0,o.kt)("inlineCode",{parentName:"a"},"ProductPrice")))),(0,o.kt)("h2",{id:"related-hooks"},"Related hooks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/hooks/product-variant/useproductoptions/"},(0,o.kt)("inlineCode",{parentName:"a"},"useProductOptions")))))}s.isMDXComponent=!0}}]);