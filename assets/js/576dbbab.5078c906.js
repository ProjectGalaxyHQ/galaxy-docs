"use strict";(self.webpackChunkgalaxy_dev_docs=self.webpackChunkgalaxy_dev_docs||[]).push([[8270],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(r),m=a,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},8456:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],c={id:"mutate-cred-item-input",title:"MutateCredItemInput"},p=void 0,u={unversionedId:"graphql-api/references/inputs/mutate-cred-item-input",id:"graphql-api/references/inputs/mutate-cred-item-input",title:"MutateCredItemInput",description:"No description",source:"@site/docs-developer/4-graphql-api/references/inputs/mutate-cred-item-input.mdx",sourceDirName:"4-graphql-api/references/inputs",slug:"/graphql-api/references/inputs/mutate-cred-item-input",permalink:"/galaxy-dev-docs/developer/graphql-api/references/inputs/mutate-cred-item-input",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-dev-docs/blob/main/docs-developer/4-graphql-api/references/inputs/mutate-cred-item-input.mdx",tags:[],version:"current",frontMatter:{id:"mutate-cred-item-input",title:"MutateCredItemInput"},sidebar:"docs",previous:{title:"MutateCredInput",permalink:"/galaxy-dev-docs/developer/graphql-api/references/inputs/mutate-cred-input"},next:{title:"MutateNFTCoreInput",permalink:"/galaxy-dev-docs/developer/graphql-api/references/inputs/mutate-nftcore-input"}},l={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>auth</code> (<code>Auth</code>)",id:"auth-auth",level:4},{value:"<code>credId</code> (<code>Int</code>)",id:"credid-int",level:4},{value:"<code>operation</code> (<code>Operation</code>)",id:"operation-operation",level:4},{value:"<code>items</code> (<code>String</code>)",id:"items-string",level:4}],s={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input MutateCredItemInput {\n  auth: Auth!\n  credId: Int!\n  operation: Operation!\n  items: [String!]!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"auth-auth"},(0,i.kt)("inlineCode",{parentName:"h4"},"auth")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/inputs/auth"},(0,i.kt)("inlineCode",{parentName:"a"},"Auth")),")"),(0,i.kt)("h4",{id:"credid-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"credId")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"operation-operation"},(0,i.kt)("inlineCode",{parentName:"h4"},"operation")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/enums/operation"},(0,i.kt)("inlineCode",{parentName:"a"},"Operation")),")"),(0,i.kt)("h4",{id:"items-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"items")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))}m.isMDXComponent=!0}}]);