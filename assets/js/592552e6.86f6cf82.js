"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[357],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(t),m=a,h=f["".concat(d,".").concat(m)]||f[m]||p[m]||o;return t?r.createElement(h,i(i({ref:n},s),{},{components:t})):r.createElement(h,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2001:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],c={id:"nftcore",title:"NFTCore"},d=void 0,l={unversionedId:"graphql-api/references/objects/nftcore",id:"graphql-api/references/objects/nftcore",title:"NFTCore",description:"No description",source:"@site/doc-developer/5-graphql-api/references/objects/nftcore.mdx",sourceDirName:"5-graphql-api/references/objects",slug:"/graphql-api/references/objects/nftcore",permalink:"/developer/graphql-api/references/objects/nftcore",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-docs/blob/main",tags:[],version:"current",lastUpdatedAt:1657012929,formattedLastUpdatedAt:"7/5/2022",frontMatter:{id:"nftcore",title:"NFTCore"},sidebar:"docs",previous:{title:"NFTCoreEdge",permalink:"/developer/graphql-api/references/objects/nftcore-edge"},next:{title:"NFTEdge",permalink:"/developer/graphql-api/references/objects/nftedge"}},s={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>ID</code>)",id:"id-id",level:4},{value:"<code>contractAddress</code> (<code>String</code>)",id:"contractaddress-string",level:4},{value:"<code>spaceStationAddress</code> (<code>String</code>)",id:"spacestationaddress-string",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>info</code> (<code>String</code>)",id:"info-string",level:4},{value:"<code>symbol</code> (<code>String</code>)",id:"symbol-string",level:4},{value:"<code>dao</code> (<code>DAO</code>)",id:"dao-dao",level:4},{value:"<code>chain</code> (<code>Chain</code>)",id:"chain-chain",level:4},{value:"<code>marketLink</code> (<code>String</code>)",id:"marketlink-string",level:4},{value:"<code>transferable</code> (<code>Boolean</code>)",id:"transferable-boolean",level:4},{value:"<code>capable</code> (<code>Boolean</code>)",id:"capable-boolean",level:4},{value:"<code>holders</code> (<code>AddressConnection</code>)",id:"holders-addressconnection",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:"<code>Node</code>",id:"node",level:4}],f={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type NFTCore implements Node {\n  id: ID!\n  contractAddress: String!\n  spaceStationAddress: String!\n  name: String!\n  info: String!\n  symbol: String!\n  dao: DAO!\n  chain: Chain!\n  marketLink: String!\n  transferable: Boolean!\n  capable: Boolean!\n  holders(\n  first: Int\n  after: String\n): AddressConnection!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"id-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,o.kt)("a",{parentName:"h4",href:"../../references/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("h4",{id:"contractaddress-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"contractAddress")," (",(0,o.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"spacestationaddress-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"spaceStationAddress")," (",(0,o.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"name-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,o.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"info-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"info")," (",(0,o.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"symbol-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"symbol")," (",(0,o.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"dao-dao"},(0,o.kt)("inlineCode",{parentName:"h4"},"dao")," (",(0,o.kt)("a",{parentName:"h4",href:"../../references/objects/dao"},(0,o.kt)("inlineCode",{parentName:"a"},"DAO")),")"),(0,o.kt)("h4",{id:"chain-chain"},(0,o.kt)("inlineCode",{parentName:"h4"},"chain")," (",(0,o.kt)("a",{parentName:"h4",href:"../../references/enums/chain"},(0,o.kt)("inlineCode",{parentName:"a"},"Chain")),")"),(0,o.kt)("h4",{id:"marketlink-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"marketLink")," (",(0,o.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"transferable-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"transferable")," (",(0,o.kt)("a",{parentName:"h4",href:"../../references/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("h4",{id:"capable-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"capable")," (",(0,o.kt)("a",{parentName:"h4",href:"../../references/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("h4",{id:"holders-addressconnection"},(0,o.kt)("inlineCode",{parentName:"h4"},"holders")," (",(0,o.kt)("a",{parentName:"h4",href:"../../references/objects/address-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"AddressConnection")),")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"first-int"},(0,o.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,o.kt)("a",{parentName:"h5",href:"../../references/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"after-string"},(0,o.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,o.kt)("a",{parentName:"h5",href:"../../references/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"node"},(0,o.kt)("a",{parentName:"h4",href:"../../references/interfaces/node"},(0,o.kt)("inlineCode",{parentName:"a"},"Node"))))}m.isMDXComponent=!0}}]);