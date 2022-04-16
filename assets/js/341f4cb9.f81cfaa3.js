"use strict";(self.webpackChunkgalaxy_dev_docs=self.webpackChunkgalaxy_dev_docs||[]).push([[9900],{3905:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return u}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function d(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),p=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},s=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),f=p(n),u=a,m=f["".concat(c,".").concat(u)]||f[u]||l[u]||o;return n?t.createElement(m,i(i({ref:r},s),{},{components:n})):t.createElement(m,i({ref:r},s))}));function u(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var d={};for(var c in r)hasOwnProperty.call(r,c)&&(d[c]=r[c]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var p=2;p<o;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7109:function(e,r,n){n.r(r),n.d(r,{assets:function(){return s},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return l}});var t=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],d={id:"airdrop",title:"Airdrop"},c=void 0,p={unversionedId:"graphql-api/references/objects/airdrop",id:"graphql-api/references/objects/airdrop",title:"Airdrop",description:"No description",source:"@site/docs-developer/4-graphql-api/references/objects/airdrop.mdx",sourceDirName:"4-graphql-api/references/objects",slug:"/graphql-api/references/objects/airdrop",permalink:"/galaxy-dev-docs/developer/graphql-api/references/objects/airdrop",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-dev-docs/blob/main/docs-developer/4-graphql-api/references/objects/airdrop.mdx",tags:[],version:"current",frontMatter:{id:"airdrop",title:"Airdrop"},sidebar:"docs",previous:{title:"AirdropAddressInfo",permalink:"/galaxy-dev-docs/developer/graphql-api/references/objects/airdrop-address-info"},next:{title:"Announcement",permalink:"/galaxy-dev-docs/developer/graphql-api/references/objects/announcement"}},s={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>contractAddress</code> (<code>String</code>)",id:"contractaddress-string",level:4},{value:"<code>airdropType</code> (<code>AirdropType</code>)",id:"airdroptype-airdroptype",level:4},{value:"<code>token</code> (<code>Token</code>)",id:"token-token",level:4},{value:"<code>merkleTreeUrl</code> (<code>String</code>)",id:"merkletreeurl-string",level:4},{value:"<code>addressInfo</code> (<code>AirdropAddressInfo</code>)",id:"addressinfo-airdropaddressinfo",level:4}],f={toc:l};function u(e){var r=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Airdrop {\n  name: String!\n  contractAddress: String!\n  airdropType: AirdropType!\n  token: Token!\n  merkleTreeUrl: String!\n  addressInfo(\n  address: String!\n): AirdropAddressInfo\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"name-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,o.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"contractaddress-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"contractAddress")," (",(0,o.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"airdroptype-airdroptype"},(0,o.kt)("inlineCode",{parentName:"h4"},"airdropType")," (",(0,o.kt)("a",{parentName:"h4",href:"../../references/enums/airdrop-type"},(0,o.kt)("inlineCode",{parentName:"a"},"AirdropType")),")"),(0,o.kt)("h4",{id:"token-token"},(0,o.kt)("inlineCode",{parentName:"h4"},"token")," (",(0,o.kt)("a",{parentName:"h4",href:"../../references/objects/token"},(0,o.kt)("inlineCode",{parentName:"a"},"Token")),")"),(0,o.kt)("h4",{id:"merkletreeurl-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"merkleTreeUrl")," (",(0,o.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"addressinfo-airdropaddressinfo"},(0,o.kt)("inlineCode",{parentName:"h4"},"addressInfo")," (",(0,o.kt)("a",{parentName:"h4",href:"../../references/objects/airdrop-address-info"},(0,o.kt)("inlineCode",{parentName:"a"},"AirdropAddressInfo")),")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"address-string"},(0,o.kt)("inlineCode",{parentName:"h5"},"address")," (",(0,o.kt)("a",{parentName:"h5",href:"../../references/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"))))}u.isMDXComponent=!0}}]);