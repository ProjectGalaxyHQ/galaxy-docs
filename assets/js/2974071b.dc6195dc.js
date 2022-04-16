"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[8082],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),l=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},s=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,p(p({ref:e},s),{},{components:n})):a.createElement(h,p({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,p=new Array(i);p[0]=d;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:r,p[1]=o;for(var l=2;l<i;l++)p[l]=n[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3167:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),p=["components"],o={sidebar_position:2},c="Subgraph",l={unversionedId:"smart-contract/subgraph",id:"smart-contract/subgraph",title:"Subgraph",description:"\ud83d\udc81 Subgraph is a concept by The Graph, used to query blockchain data. The Graph is a protocol for building decentralized applications (dApps) quickly on Ethereum and IPFS using GraphQL. More infomation can be found in https://thegraph.com/docs/en/",source:"@site/docs-developer/2-smart-contract/subgraph.md",sourceDirName:"2-smart-contract",slug:"/smart-contract/subgraph",permalink:"/developer/smart-contract/subgraph",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-docs/blob/main/docs-developer/2-smart-contract/subgraph.md",tags:[],version:"current",lastUpdatedBy:"oyyblin",lastUpdatedAt:1650095980,formattedLastUpdatedAt:"4/16/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Introduction",permalink:"/developer/smart-contract/introduction"},next:{title:"SpaceStation",permalink:"/developer/smart-contract/contracts/spacestation"}},s={},u=[{value:"Explorer",id:"explorer",level:2},{value:"GraphQL Endpoints",id:"graphql-endpoints",level:2},{value:"GraphQL Schema",id:"graphql-schema",level:2},{value:"Campaign Participation",id:"campaign-participation",level:3},{value:"Wallet Participation",id:"wallet-participation",level:3},{value:"Mint Transaction",id:"mint-transaction",level:3},{value:"Transfer Transaction",id:"transfer-transaction",level:3},{value:"NFT Information",id:"nft-information",level:3},{value:"Examples",id:"examples",level:2},{value:"Number of NFT minted per campaign",id:"number-of-nft-minted-per-campaign",level:3},{value:"Wallet&#39;s campaign participation count",id:"wallets-campaign-participation-count",level:3},{value:"Get owner of NFT",id:"get-owner-of-nft",level:3}],d={toc:u};function m(t){var e=t.components,n=(0,r.Z)(t,p);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"subgraph"},"Subgraph"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ud83d\udc81 Subgraph is a concept by The Graph, used to query blockchain data. The Graph is a protocol for building decentralized applications (dApps) quickly on Ethereum and IPFS using GraphQL. More infomation can be found in ",(0,i.kt)("a",{parentName:"p",href:"https://thegraph.com/docs/en/"},"https://thegraph.com/docs/en/"))),(0,i.kt)("p",null,"Galaxy uses multiple\xa0subgraphs for indexing and organizing data from out smart contracts. These subgraphs are hosted on The Graph hosted service and can be used to query our smart data."),(0,i.kt)("h2",{id:"explorer"},"Explorer"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Chain"),(0,i.kt)("th",{parentName:"tr",align:null},"URL"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Ethereum"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://thegraph.com/hosted-service/subgraph/vincentpc/playgroundeth"},"https://thegraph.com/hosted-service/subgraph/vincentpc/playgroundeth"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Polygon"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://thegraph.com/hosted-service/subgraph/vincentpc/playgroundmatic"},"https://thegraph.com/hosted-service/subgraph/vincentpc/playgroundmatic"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BNB Chain"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://thegraph.com/hosted-service/subgraph/vincentpc/playgroundbsc"},"https://thegraph.com/hosted-service/subgraph/vincentpc/playgroundbsc"))))),(0,i.kt)("h2",{id:"graphql-endpoints"},"GraphQL Endpoints"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Chain"),(0,i.kt)("th",{parentName:"tr",align:null},"URL"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Ethereum"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://api.thegraph.com/subgraphs/name/vincentpc/playgroundeth"},"https://api.thegraph.com/subgraphs/name/vincentpc/playgroundeth"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Polygon"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://api.thegraph.com/subgraphs/name/vincentpc/playgroundmatic"},"https://api.thegraph.com/subgraphs/name/vincentpc/playgroundmatic"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BNB Chain"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://api.thegraph.com/subgraphs/name/vincentpc/playgroundbsc"},"https://api.thegraph.com/subgraphs/name/vincentpc/playgroundbsc"))))),(0,i.kt)("h2",{id:"graphql-schema"},"GraphQL Schema"),(0,i.kt)("h3",{id:"campaign-participation"},"Campaign Participation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Campaign @entity {\n  id: ID!\n  cid: String! # campaign id\n  count: Int! # participation count in the specific campaign\n  nft_count: Int! # nft count in the specific campaign\n  address_list: [String!]! # address that participate in the specific campaign\n}\n")),(0,i.kt)("h3",{id:"wallet-participation"},"Wallet Participation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Address @entity {\n  id: ID! # Wallet Address\n  participate_campaign_count: Int!\n  participate_nft_count: Int!\n  participate_nftid: [BigInt!]!\n  participate_cid: [String!]!\n  participate_tx: [String!]!\n}\n")),(0,i.kt)("h3",{id:"mint-transaction"},"Mint Transaction"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Mint @entity {\n  id: ID! # mint transaction hash\n  address: String!\n  cid: String!\n  nft_count: Int!\n  timestamp: BigInt!\n}\n")),(0,i.kt)("h3",{id:"transfer-transaction"},"Transfer Transaction"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Only supported in ethereum")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Mint @entity {\n  id: ID! # mint transaction hash\n  address: String!\n  cid: String!\n  nft_count: Int!\n  timestamp: BigInt!\n}\n")),(0,i.kt)("h3",{id:"nft-information"},"NFT Information"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Only supported in ethereum")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type ContractNFTPair @entity {\n  id: ID!\n  owner: String! # current owner of this nft\n  cid: String! # campagin id of the nft\n  nftid: BigInt! # nft id\n  starNFT: String!\n  transfer_count: Int!\n  tx: String! #last transfer transaction hash\n}\n")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"number-of-nft-minted-per-campaign"},"Number of NFT minted per campaign"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"campaign(id:1003) {\n    id\n    cid\n    count\n    nft_count\n  }\n")),(0,i.kt)("h3",{id:"wallets-campaign-participation-count"},"Wallet's campaign participation count"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'address(id:"0x0000000002732779240fe05873611dc4203dfb71") {\n    id\n    participate_campaign_count\n    participate_nft_count\n    participate_nftid\n  }\n')),(0,i.kt)("h3",{id:"get-owner-of-nft"},"Get owner of NFT"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Only supported in ethereum")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  contractNFTPairs(\n    where: { owner: "0xe9b3c292904114e6e6f04a363ae4c0f800f3236d" }\n  ) {\n    nftid\n    starNFT\n    owner\n    tx\n    transfer_count\n  }\n}\n')))}m.isMDXComponent=!0}}]);