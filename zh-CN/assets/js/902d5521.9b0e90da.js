"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[7595],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(n),u=o,m=f["".concat(d,".").concat(u)]||f[u]||s[u]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4427:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={id:"cred-item-connection",title:"CredItemConnection"},d=void 0,l={unversionedId:"graphql-api/references/objects/cred-item-connection",id:"graphql-api/references/objects/cred-item-connection",title:"CredItemConnection",description:"No description",source:"@site/doc-developer/5-graphql-api/references/objects/cred-item-connection.mdx",sourceDirName:"5-graphql-api/references/objects",slug:"/graphql-api/references/objects/cred-item-connection",permalink:"/zh-CN/developer/graphql-api/references/objects/cred-item-connection",editUrl:"https://crowdin.com/project/docs_galaxy_eco/zh-CN",tags:[],version:"current",lastUpdatedAt:1652216898,formattedLastUpdatedAt:"2022/5/10",frontMatter:{id:"cred-item-connection",title:"CredItemConnection"},sidebar:"docs",previous:{title:"CredEdge",permalink:"/zh-CN/developer/graphql-api/references/objects/cred-edge"},next:{title:"CredItemEdge",permalink:"/zh-CN/developer/graphql-api/references/objects/cred-item-edge"}},p={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>totalCount</code> (<code>Int</code>)",id:"totalcount-int",level:4},{value:"<code>edges</code> (<code>CredItemEdge</code>)",id:"edges-creditemedge",level:4},{value:"<code>pageInfo</code> (<code>PageInfo</code>)",id:"pageinfo-pageinfo",level:4},{value:"<code>list</code> (<code>String</code>)",id:"list-string",level:4}],f={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type CredItemConnection {\n  totalCount: Int!\n  edges: [CredItemEdge!]!\n  pageInfo: PageInfo!\n  list: [String!]!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"totalcount-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"totalCount")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"edges-creditemedge"},(0,i.kt)("inlineCode",{parentName:"h4"},"edges")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/cred-item-edge"},(0,i.kt)("inlineCode",{parentName:"a"},"CredItemEdge")),")"),(0,i.kt)("h4",{id:"pageinfo-pageinfo"},(0,i.kt)("inlineCode",{parentName:"h4"},"pageInfo")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/page-info"},(0,i.kt)("inlineCode",{parentName:"a"},"PageInfo")),")"),(0,i.kt)("h4",{id:"list-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"list")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))}u.isMDXComponent=!0}}]);