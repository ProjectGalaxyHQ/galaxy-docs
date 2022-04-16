"use strict";(self.webpackChunkgalaxy_dev_docs=self.webpackChunkgalaxy_dev_docs||[]).push([[5880],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=l(t),f=a,g=u["".concat(c,".").concat(f)]||u[f]||p[f]||i;return t?n.createElement(g,s(s({ref:r},d),{},{components:t})):n.createElement(g,s({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=u;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9516:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var n=t(7462),a=t(3366),i=(t(7294),t(3905)),s=["components"],o={id:"creds",title:"creds"},c=void 0,l={unversionedId:"graphql-api/references/queries/creds",id:"graphql-api/references/queries/creds",title:"creds",description:"No description",source:"@site/docs-developer/4-graphql-api/references/queries/creds.mdx",sourceDirName:"4-graphql-api/references/queries",slug:"/graphql-api/references/queries/creds",permalink:"/galaxy-dev-docs/developer/graphql-api/references/queries/creds",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-dev-docs/blob/main/docs-developer/4-graphql-api/references/queries/creds.mdx",tags:[],version:"current",frontMatter:{id:"creds",title:"creds"},sidebar:"docs",previous:{title:"credentials",permalink:"/galaxy-dev-docs/developer/graphql-api/references/queries/credentials"},next:{title:"dao",permalink:"/galaxy-dev-docs/developer/graphql-api/references/queries/dao"}},d={},p=[{value:"Arguments",id:"arguments",level:3},{value:"<code>userAddress</code> (<code>String</code>)",id:"useraddress-string",level:4},{value:"<code>type</code> (<code>String</code>)",id:"type-string",level:4},{value:"<code>listType</code> (<code>ListType</code>)",id:"listtype-listtype",level:4},{value:"<code>searhString</code> (<code>String</code>)",id:"searhstring-string",level:4},{value:"<code>first</code> (<code>Int</code>)",id:"first-int",level:4},{value:"<code>after</code> (<code>String</code>)",id:"after-string",level:4},{value:"Type",id:"type",level:3},{value:"<code>Cred</code>",id:"cred",level:4}],u={toc:p};function f(e){var r=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'creds(\n  userAddress: String = ""\n  type: String = ""\n  listType: ListType!\n  searhString: String = ""\n  first: Int = 100\n  after: String = ""\n): [Cred!]!\n')),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"useraddress-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"userAddress")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"type-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"listtype-listtype"},(0,i.kt)("inlineCode",{parentName:"h4"},"listType")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/enums/list-type"},(0,i.kt)("inlineCode",{parentName:"a"},"ListType")),")"),(0,i.kt)("h4",{id:"searhstring-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"searhString")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"first-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"first")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"after-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"after")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"cred"},(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/cred"},(0,i.kt)("inlineCode",{parentName:"a"},"Cred"))))}f.isMDXComponent=!0}}]);