"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[8275],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(t),f=a,m=u["".concat(l,".").concat(f)]||u[f]||s[f]||i;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1422:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return s}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],c={id:"nftcore-input",title:"NFTCoreInput"},l=void 0,d={unversionedId:"graphql-api/references/inputs/nftcore-input",id:"graphql-api/references/inputs/nftcore-input",title:"NFTCoreInput",description:"No description",source:"@site/doc-developer/5-graphql-api/references/inputs/nftcore-input.mdx",sourceDirName:"5-graphql-api/references/inputs",slug:"/graphql-api/references/inputs/nftcore-input",permalink:"/zh-CN/developer/graphql-api/references/inputs/nftcore-input",editUrl:"https://crowdin.com/project/docs_galaxy_eco/zh-CN",tags:[],version:"current",lastUpdatedAt:1657012929,formattedLastUpdatedAt:"2022/7/5",frontMatter:{id:"nftcore-input",title:"NFTCoreInput"},sidebar:"docs",previous:{title:"MutateSpaceInput",permalink:"/zh-CN/developer/graphql-api/references/inputs/mutate-space-input"},next:{title:"NFTsOptions",permalink:"/zh-CN/developer/graphql-api/references/inputs/nfts-options"}},p={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>daoId</code> (<code>Int</code>)",id:"daoid-int",level:4},{value:"<code>chain</code> (<code>Chain</code>)",id:"chain-chain",level:4},{value:"<code>address</code> (<code>String</code>)",id:"address-string",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>symbol</code> (<code>String</code>)",id:"symbol-string",level:4},{value:"<code>info</code> (<code>String</code>)",id:"info-string",level:4},{value:"<code>transferable</code> (<code>Boolean</code>)",id:"transferable-boolean",level:4}],u={toc:s};function f(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input NFTCoreInput {\n  id: Int\n  daoId: Int!\n  chain: Chain!\n  address: String!\n  name: String!\n  symbol: String!\n  info: String!\n  transferable: Boolean!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"daoid-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"daoId")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"chain-chain"},(0,i.kt)("inlineCode",{parentName:"h4"},"chain")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/enums/chain"},(0,i.kt)("inlineCode",{parentName:"a"},"Chain")),")"),(0,i.kt)("h4",{id:"address-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"address")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"symbol-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"symbol")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"info-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"info")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"transferable-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"transferable")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))}f.isMDXComponent=!0}}]);