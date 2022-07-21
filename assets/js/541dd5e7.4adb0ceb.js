"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[481],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=p(t),f=a,m=u["".concat(l,".").concat(f)]||u[f]||s[f]||i;return t?n.createElement(m,o(o({ref:r},d),{},{components:t})):n.createElement(m,o({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2546:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var n=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],c={id:"dao",title:"dao"},l=void 0,p={unversionedId:"graphql-api/references/queries/dao",id:"graphql-api/references/queries/dao",title:"dao",description:"No description",source:"@site/doc-developer/5-graphql-api/references/queries/dao.mdx",sourceDirName:"5-graphql-api/references/queries",slug:"/graphql-api/references/queries/dao",permalink:"/developer/graphql-api/references/queries/dao",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-docs/blob/main",tags:[],version:"current",lastUpdatedAt:1658443118,formattedLastUpdatedAt:"7/21/2022",frontMatter:{id:"dao",title:"dao"},sidebar:"docs",previous:{title:"creds",permalink:"/developer/graphql-api/references/queries/creds"},next:{title:"daos",permalink:"/developer/graphql-api/references/queries/daos"}},d={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>alias</code> (<code>String</code>)",id:"alias-string",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"Type",id:"type",level:3},{value:"<code>DAO</code>",id:"dao",level:4}],u={toc:s};function f(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'dao(\n  id: Int\n  alias: String = ""\n  name: String = ""\n): DAO!\n')),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"id-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"alias-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"alias")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"dao"},(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/dao"},(0,i.kt)("inlineCode",{parentName:"a"},"DAO"))))}f.isMDXComponent=!0}}]);