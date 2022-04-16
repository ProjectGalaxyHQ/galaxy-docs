"use strict";(self.webpackChunkgalaxy_dev_docs=self.webpackChunkgalaxy_dev_docs||[]).push([[8345],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return d}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),f=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=f(e.components);return t.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=f(n),d=o,g=u["".concat(l,".").concat(d)]||u[d]||s[d]||a;return n?t.createElement(g,i(i({ref:r},p),{},{components:n})):t.createElement(g,i({ref:r},p))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var f=2;f<a;f++)i[f]=n[f];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9924:function(e,r,n){n.r(r),n.d(r,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return s}});var t=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={id:"forge-config",title:"ForgeConfig"},l=void 0,f={unversionedId:"graphql-api/references/objects/forge-config",id:"graphql-api/references/objects/forge-config",title:"ForgeConfig",description:"No description",source:"@site/docs-developer/4-graphql-api/references/objects/forge-config.mdx",sourceDirName:"4-graphql-api/references/objects",slug:"/graphql-api/references/objects/forge-config",permalink:"/galaxy-dev-docs/developer/graphql-api/references/objects/forge-config",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-dev-docs/blob/main/docs-developer/4-graphql-api/references/objects/forge-config.mdx",tags:[],version:"current",frontMatter:{id:"forge-config",title:"ForgeConfig"},sidebar:"docs",previous:{title:"ExtLinkResp",permalink:"/galaxy-dev-docs/developer/graphql-api/references/objects/ext-link-resp"},next:{title:"ForgeNFT",permalink:"/galaxy-dev-docs/developer/graphql-api/references/objects/forge-nft"}},p={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>minNFTCount</code> (<code>Int</code>)",id:"minnftcount-int",level:4},{value:"<code>maxNFTCount</code> (<code>Int</code>)",id:"maxnftcount-int",level:4},{value:"<code>requiredNFTs</code> (<code>ForgeNFT</code>)",id:"requirednfts-forgenft",level:4}],u={toc:s};function d(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type ForgeConfig {\n  minNFTCount: Int!\n  maxNFTCount: Int!\n  requiredNFTs: [ForgeNFT!]!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"minnftcount-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"minNFTCount")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("h4",{id:"maxnftcount-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"maxNFTCount")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("h4",{id:"requirednfts-forgenft"},(0,a.kt)("inlineCode",{parentName:"h4"},"requiredNFTs")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/objects/forge-nft"},(0,a.kt)("inlineCode",{parentName:"a"},"ForgeNFT")),")"))}d.isMDXComponent=!0}}]);