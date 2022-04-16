"use strict";(self.webpackChunkgalaxy_dev_docs=self.webpackChunkgalaxy_dev_docs||[]).push([[921],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4283:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={id:"link-carousel",title:"LinkCarousel"},l=void 0,s={unversionedId:"graphql-api/references/objects/link-carousel",id:"graphql-api/references/objects/link-carousel",title:"LinkCarousel",description:"No description",source:"@site/docs-developer/4-graphql-api/references/objects/link-carousel.mdx",sourceDirName:"4-graphql-api/references/objects",slug:"/graphql-api/references/objects/link-carousel",permalink:"/galaxy-dev-docs/developer/graphql-api/references/objects/link-carousel",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-dev-docs/blob/main/docs-developer/4-graphql-api/references/objects/link-carousel.mdx",tags:[],version:"current",frontMatter:{id:"link-carousel",title:"LinkCarousel"},sidebar:"docs",previous:{title:"Gamification",permalink:"/galaxy-dev-docs/developer/graphql-api/references/objects/gamification"},next:{title:"MetaTxResp",permalink:"/galaxy-dev-docs/developer/graphql-api/references/objects/meta-tx-resp"}},p={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>objectType</code> (<code>CarouselObjectType</code>)",id:"objecttype-carouselobjecttype",level:4},{value:"<code>objectID</code> (<code>Int</code>)",id:"objectid-int",level:4},{value:"<code>title</code> (<code>String</code>)",id:"title-string",level:4},{value:"<code>image</code> (<code>String</code>)",id:"image-string",level:4},{value:"<code>url</code> (<code>String</code>)",id:"url-string",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:"<code>Carousel</code>",id:"carousel",level:4}],d={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type LinkCarousel implements Carousel {\n  objectType: CarouselObjectType!\n  objectID: Int!\n  title: String!\n  image: String!\n  url: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"objecttype-carouselobjecttype"},(0,o.kt)("inlineCode",{parentName:"h4"},"objectType")," (",(0,o.kt)("a",{parentName:"h4",href:"../../references/enums/carousel-object-type"},(0,o.kt)("inlineCode",{parentName:"a"},"CarouselObjectType")),")"),(0,o.kt)("h4",{id:"objectid-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"objectID")," (",(0,o.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("h4",{id:"title-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"title")," (",(0,o.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"image-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"image")," (",(0,o.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"url-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"url")," (",(0,o.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"carousel"},(0,o.kt)("a",{parentName:"h4",href:"../../references/interfaces/carousel"},(0,o.kt)("inlineCode",{parentName:"a"},"Carousel"))))}f.isMDXComponent=!0}}]);