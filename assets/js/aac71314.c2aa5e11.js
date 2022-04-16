"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[1103],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(t),d=a,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3846:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],c={id:"carousels",title:"carousels"},l=void 0,s={unversionedId:"graphql-api/references/queries/carousels",id:"graphql-api/references/queries/carousels",title:"carousels",description:"No description",source:"@site/docs-developer/4-graphql-api/references/queries/carousels.mdx",sourceDirName:"4-graphql-api/references/queries",slug:"/graphql-api/references/queries/carousels",permalink:"/developer/graphql-api/references/queries/carousels",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-docs/blob/main/docs-developer/4-graphql-api/references/queries/carousels.mdx",tags:[],version:"current",lastUpdatedBy:"oyyblin",lastUpdatedAt:1650095980,formattedLastUpdatedAt:"4/16/2022",frontMatter:{id:"carousels",title:"carousels"},sidebar:"docs",previous:{title:"campaigns",permalink:"/developer/graphql-api/references/queries/campaigns"},next:{title:"cred",permalink:"/developer/graphql-api/references/queries/cred"}},u={},p=[{value:"Arguments",id:"arguments",level:3},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"Type",id:"type",level:3},{value:"<code>Carousel</code>",id:"carousel",level:4}],f={toc:p};function d(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"carousels(\n  offset: Int\n  limit: Int = 10\n): [Carousel!]!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"offset-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"offset")," (",(0,o.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("h4",{id:"limit-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"limit")," (",(0,o.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"carousel"},(0,o.kt)("a",{parentName:"h4",href:"../../references/interfaces/carousel"},(0,o.kt)("inlineCode",{parentName:"a"},"Carousel"))))}d.isMDXComponent=!0}}]);