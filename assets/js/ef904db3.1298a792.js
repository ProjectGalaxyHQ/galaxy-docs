"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[106],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),f=s(t),u=r,m=f["".concat(c,".").concat(u)]||f[u]||p[u]||i;return t?a.createElement(m,o(o({ref:n},l),{},{components:t})):a.createElement(m,o({ref:n},l))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=f;var d={};for(var c in n)hasOwnProperty.call(n,c)&&(d[c]=n[c]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2517:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return p}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],d={id:"nft",title:"NFT"},c=void 0,s={unversionedId:"graphql-api/references/objects/nft",id:"graphql-api/references/objects/nft",title:"NFT",description:"No description",source:"@site/doc-developer/4-graphql-api/references/objects/nft.mdx",sourceDirName:"4-graphql-api/references/objects",slug:"/graphql-api/references/objects/nft",permalink:"/developer/graphql-api/references/objects/nft",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-docs/blob/main/doc-developer/4-graphql-api/references/objects/nft.mdx",tags:[],version:"current",lastUpdatedAt:1651363414,formattedLastUpdatedAt:"5/1/2022",frontMatter:{id:"nft",title:"NFT"},sidebar:"docs",previous:{title:"MetaTxResp",permalink:"/developer/graphql-api/references/objects/meta-tx-resp"},next:{title:"NFTAsset",permalink:"/developer/graphql-api/references/objects/nftasset"}},l={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>ID</code>)",id:"id-id",level:4},{value:"<code>nftCore</code> (<code>NFTCore</code>)",id:"nftcore-nftcore",level:4},{value:"<code>solanaTokenAddress</code> (<code>String</code>)",id:"solanatokenaddress-string",level:4},{value:"<code>campaign</code> (<code>Campaign</code>)",id:"campaign-campaign",level:4},{value:"<code>chain</code> (<code>Chain</code>)",id:"chain-chain",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>image</code> (<code>String</code>)",id:"image-string",level:4},{value:"<code>ipfsImage</code> (<code>String</code>)",id:"ipfsimage-string",level:4},{value:"<code>category</code> (<code>String</code>)",id:"category-string",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>treasureBack</code> (<code>Boolean</code>)",id:"treasureback-boolean",level:4},{value:"<code>powah</code> (<code>Int</code>)",id:"powah-int",level:4},{value:"<code>minter</code> (<code>Address</code>)",id:"minter-address",level:4},{value:"<code>owner</code> (<code>Address</code>)",id:"owner-address",level:4},{value:"<code>status</code> (<code>NFTStatus</code>)",id:"status-nftstatus",level:4},{value:"<code>createdAt</code> (<code>String</code>)",id:"createdat-string",level:4},{value:"<code>createBlock</code> (<code>Int</code>)",id:"createblock-int",level:4},{value:"<code>quasarInfo</code> (<code>Quasar</code>)",id:"quasarinfo-quasar",level:4},{value:"<code>superInfo</code> (<code>Quasar</code>)",id:"superinfo-quasar",level:4},{value:"<code>isSuper</code> (<code>Boolean</code>)",id:"issuper-boolean",level:4},{value:"<code>treasure</code> (<code>NFTTreasure</code>)",id:"treasure-nfttreasure",level:4},{value:"<code>animationURL</code> (<code>String</code>)",id:"animationurl-string",level:4},{value:"<code>backgroundColor</code> (<code>String</code>)",id:"backgroundcolor-string",level:4},{value:"<code>nftTargetPowah</code> (<code>NFTTargetPowah</code>)",id:"nfttargetpowah-nfttargetpowah",level:4},{value:"<code>traits</code> (<code>Trait</code>)",id:"traits-trait",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:"<code>Node</code>",id:"node",level:4}],f={toc:p};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type NFT implements Node {\n  id: ID!\n  nftCore: NFTCore!\n  solanaTokenAddress: String!\n  campaign: Campaign!\n  chain: Chain!\n  name: String!\n  image: String!\n  ipfsImage: String\n  category: String!\n  description: String!\n  treasureBack: Boolean!\n  powah: Int!\n  minter: Address!\n  owner: Address!\n  status: NFTStatus!\n  createdAt: String!\n  createBlock: Int!\n  quasarInfo: Quasar\n  superInfo: [Quasar!]!\n  isSuper: Boolean!\n  treasure(\n  sig: String!\n): NFTTreasure\n  animationURL: String!\n  backgroundColor: String!\n  nftTargetPowah: NFTTargetPowah\n  traits: [Trait!]\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"nftcore-nftcore"},(0,i.kt)("inlineCode",{parentName:"h4"},"nftCore")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/nftcore"},(0,i.kt)("inlineCode",{parentName:"a"},"NFTCore")),")"),(0,i.kt)("h4",{id:"solanatokenaddress-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"solanaTokenAddress")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"campaign-campaign"},(0,i.kt)("inlineCode",{parentName:"h4"},"campaign")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/campaign"},(0,i.kt)("inlineCode",{parentName:"a"},"Campaign")),")"),(0,i.kt)("h4",{id:"chain-chain"},(0,i.kt)("inlineCode",{parentName:"h4"},"chain")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/enums/chain"},(0,i.kt)("inlineCode",{parentName:"a"},"Chain")),")"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"image-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"image")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"ipfsimage-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"ipfsImage")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"category-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"category")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"description-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"treasureback-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"treasureBack")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"powah-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"powah")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"minter-address"},(0,i.kt)("inlineCode",{parentName:"h4"},"minter")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/address"},(0,i.kt)("inlineCode",{parentName:"a"},"Address")),")"),(0,i.kt)("h4",{id:"owner-address"},(0,i.kt)("inlineCode",{parentName:"h4"},"owner")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/address"},(0,i.kt)("inlineCode",{parentName:"a"},"Address")),")"),(0,i.kt)("h4",{id:"status-nftstatus"},(0,i.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/enums/nftstatus"},(0,i.kt)("inlineCode",{parentName:"a"},"NFTStatus")),")"),(0,i.kt)("h4",{id:"createdat-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"createblock-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"createBlock")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"quasarinfo-quasar"},(0,i.kt)("inlineCode",{parentName:"h4"},"quasarInfo")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/quasar"},(0,i.kt)("inlineCode",{parentName:"a"},"Quasar")),")"),(0,i.kt)("h4",{id:"superinfo-quasar"},(0,i.kt)("inlineCode",{parentName:"h4"},"superInfo")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/quasar"},(0,i.kt)("inlineCode",{parentName:"a"},"Quasar")),")"),(0,i.kt)("h4",{id:"issuper-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"isSuper")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"treasure-nfttreasure"},(0,i.kt)("inlineCode",{parentName:"h4"},"treasure")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/nfttreasure"},(0,i.kt)("inlineCode",{parentName:"a"},"NFTTreasure")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"sig-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"sig")," (",(0,i.kt)("a",{parentName:"h5",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("h4",{id:"animationurl-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"animationURL")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"backgroundcolor-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"backgroundColor")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"nfttargetpowah-nfttargetpowah"},(0,i.kt)("inlineCode",{parentName:"h4"},"nftTargetPowah")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/nfttarget-powah"},(0,i.kt)("inlineCode",{parentName:"a"},"NFTTargetPowah")),")"),(0,i.kt)("h4",{id:"traits-trait"},(0,i.kt)("inlineCode",{parentName:"h4"},"traits")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/trait"},(0,i.kt)("inlineCode",{parentName:"a"},"Trait")),")"),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"node"},(0,i.kt)("a",{parentName:"h4",href:"../../references/interfaces/node"},(0,i.kt)("inlineCode",{parentName:"a"},"Node"))))}u.isMDXComponent=!0}}]);