"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[177],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,c(c({ref:t},s),{},{components:n})):r.createElement(m,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},667:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],i={id:"campaign-carousel",title:"CampaignCarousel"},l=void 0,p={unversionedId:"graphql-api/references/objects/campaign-carousel",id:"graphql-api/references/objects/campaign-carousel",title:"CampaignCarousel",description:"No description",source:"@site/doc-developer/5-graphql-api/references/objects/campaign-carousel.mdx",sourceDirName:"5-graphql-api/references/objects",slug:"/graphql-api/references/objects/campaign-carousel",permalink:"/developer/graphql-api/references/objects/campaign-carousel",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-docs/blob/main",tags:[],version:"current",lastUpdatedAt:1658443118,formattedLastUpdatedAt:"7/21/2022",frontMatter:{id:"campaign-carousel",title:"CampaignCarousel"},sidebar:"docs",previous:{title:"Announcement",permalink:"/developer/graphql-api/references/objects/announcement"},next:{title:"CampaignConnection",permalink:"/developer/graphql-api/references/objects/campaign-connection"}},s={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>objectType</code> (<code>CarouselObjectType</code>)",id:"objecttype-carouselobjecttype",level:4},{value:"<code>objectID</code> (<code>Int</code>)",id:"objectid-int",level:4},{value:"<code>object</code> (<code>Campaign</code>)",id:"object-campaign",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:"<code>Carousel</code>",id:"carousel",level:4}],d={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type CampaignCarousel implements Carousel {\n  objectType: CarouselObjectType!\n  objectID: Int!\n  object: Campaign!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"objecttype-carouselobjecttype"},(0,o.kt)("inlineCode",{parentName:"h4"},"objectType")," (",(0,o.kt)("a",{parentName:"h4",href:"../../references/enums/carousel-object-type"},(0,o.kt)("inlineCode",{parentName:"a"},"CarouselObjectType")),")"),(0,o.kt)("h4",{id:"objectid-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"objectID")," (",(0,o.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("h4",{id:"object-campaign"},(0,o.kt)("inlineCode",{parentName:"h4"},"object")," (",(0,o.kt)("a",{parentName:"h4",href:"../../references/objects/campaign"},(0,o.kt)("inlineCode",{parentName:"a"},"Campaign")),")"),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"carousel"},(0,o.kt)("a",{parentName:"h4",href:"../../references/interfaces/carousel"},(0,o.kt)("inlineCode",{parentName:"a"},"Carousel"))))}f.isMDXComponent=!0}}]);