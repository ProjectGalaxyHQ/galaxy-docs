"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[4855],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},848:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],l={sidebar_position:3},s="Examples",d={unversionedId:"graphql-api/examples",id:"graphql-api/examples",title:"Examples",description:"For more information on our GraphQL endpoint, please refer to this doc.",source:"@site/doc-developer/5-graphql-api/examples.md",sourceDirName:"5-graphql-api",slug:"/graphql-api/examples",permalink:"/zh-CN/developer/graphql-api/examples",editUrl:"https://crowdin.com/project/docs_galaxy_eco/zh-CN",tags:[],version:"current",lastUpdatedAt:1657012929,formattedLastUpdatedAt:"2022/7/5",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"Rate Limit",permalink:"/zh-CN/developer/graphql-api/rate-limit"},next:{title:"Schema Documentation",permalink:"/zh-CN/developer/references"}},c={},p=[{value:"Query NFT holders by EVM Contract",id:"query-nft-holders-by-evm-contract",level:2},{value:"Query NFT holders by Campaign",id:"query-nft-holders-by-campaign",level:2},{value:"Get Credential metadata",id:"get-credential-metadata",level:2},{value:"Subgraph type credential",id:"subgraph-type-credential",level:3},{value:"EVM Addresses type credential",id:"evm-addresses-type-credential",level:3},{value:"Query NFT Metadata",id:"query-nft-metadata",level:2},{value:"Query user profile and credentials",id:"query-user-profile-and-credentials",level:2}],u={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"examples"},"Examples"),(0,i.kt)("p",null,"For more information on our GraphQL endpoint, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/developer/graphql-api/overview"},"this doc"),"."),(0,i.kt)("h2",{id:"query-nft-holders-by-evm-contract"},"Query NFT holders by EVM Contract"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"address"),": Contract address"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'query nftHolders {\n  nftCore(address: "0xc2aCEb37f0A79c4f4437Dd79507D9f4A30735a5C") {\n    holders(first: 1000, after: "") {\n      totalCount\n      pageInfo {\n        startCursor\n        endCursor\n        hasNextPage\n        hasPreviousPage\n      }\n      list {\n        address\n      }\n    }\n  }\n}\n')),(0,i.kt)("h2",{id:"query-nft-holders-by-campaign"},"Query NFT holders by Campaign"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"id"),": Galaxy campaign ID"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'query nftHolders {\n  campaign(id: "GCto8UUcU9") {\n    holders(first: 1000, after: "") {\n      totalCount\n      pageInfo {\n        startCursor\n        endCursor\n        hasNextPage\n        hasPreviousPage\n      }\n      list {\n        address\n      }\n    }\n  }\n}\n')),(0,i.kt)("h2",{id:"get-credential-metadata"},"Get Credential metadata"),(0,i.kt)("h3",{id:"subgraph-type-credential"},"Subgraph type credential"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"query credMetadata {\n  credential(id: 212) {\n    name\n    description\n    credType\n    chain\n    curatorAddress\n    referenceLink\n    subgraph {\n      endpoint\n      query\n      expression\n    }\n  }\n}\n")),(0,i.kt)("p",null,"Example response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "credential": {\n      "name": "Balancer Trader on Ethereum",\n      "description": "Any address that traded on Balancer V2 on Ethereum Mainnet",\n      "credType": "EVM_ADDRESS",\n      "chain": "ETHEREUM",\n      "curatorAddress": "",\n      "referenceLink": "",\n      "subgraph": {\n        "endpoint": "https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-v2",\n        "query": "query user($address: String){\\n  pools(where:{address:$address})\\n  {\\n    id\\n    address\\n  }\\n}\\n",\n        "expression": "function(data) {\\n  if (data == null || data.pools == null) {\\n    return 0\\n  } else if (Array.isArray(data.pools) && data.pools.length == 0) {\\n    return 0\\n  }\\n  return 1\\n}"\n      }\n    }\n  }\n}\n')),(0,i.kt)("h3",{id:"evm-addresses-type-credential"},"EVM Addresses type credential"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"query credMetadata {\n  credential(id: 442) {\n    name\n    description\n    credType\n    chain\n    itemCount\n  }\n}\n")),(0,i.kt)("p",null,"Example response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "credential": {\n      "name": "CyberConnect Verified ",\n      "description": "**Completed Twitter Verification on CyberConnect.** \\n- Head over to [app.cyberconnect.me](https://app.cyberconnect.me) and connect your wallet to access your profile. \\n- On CyberConnect profile page, click on the \u201cVerify Twitter\u201d button and follow the ins",\n      "credType": "EVM_ADDRESS",\n      "chain": "MATIC",\n      "itemCount": 27902\n    }\n  }\n}\n')),(0,i.kt)("h2",{id:"query-nft-metadata"},"Query NFT Metadata"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'query nftMetadata {\n  nftInfo(id: 1, nftCoreAddress: "0x0062bB52986EbeaE585898E63667D9D760Ff75A0") {\n    id\n    nftCore {\n      name\n    }\n    campaign {\n      name\n      id\n      info\n    }\n    chain\n    name\n    image\n    ipfsImage\n    category\n    description\n    owner {\n      address\n    }\n    status\n    createdAt\n    createBlock\n    animationURL\n    traits {\n      displayType\n      name\n      value\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "nftInfo": {\n      "id": "1",\n      "nftCore": {\n        "name": "1inch Network"\n      },\n      "campaign": {\n        "name": "1inch x Project Galaxy NFT raffle",\n        "id": "GCk3oUU83c",\n        "info": "The legendary 1inch cyber unicorn has managed to get the powers of all the three major chains. And seems like no one can stop him from dominating the DeFi world. 5 lucky winners will be chosen randomly on August 3rd. To enter:\\n\\n\u2022 Follow both [@1inch](https://twitter.com/1inch) & [@ProjectGalaxyHQ](https://twitter.com/ProjectGalaxyHQ) on Twitter\\n\\n\u2022 Like and retweet this post\\n\\n\u2022 Reply with [#1inchNFT](https://twitter.com/hashtag/1inchNFT) hashtag"\n      },\n      "chain": "ETHEREUM",\n      "name": "1inch Cyber Unicorn",\n      "image": "https://d257b89266utxb.cloudfront.net/galaxy/images/1inch/1inch_Cyber_Unicorn.jpg",\n      "ipfsImage": "",\n      "category": "",\n      "description": "",\n      "owner": {\n        "address": "0xFfD5352e54460765CD8e74c0cc071417b4E5279A"\n      },\n      "status": "Alive",\n      "createdAt": "1628070326",\n      "createBlock": 0,\n      "animationURL": "",\n      "traits": []\n    }\n  }\n}\n')),(0,i.kt)("h2",{id:"query-user-profile-and-credentials"},"Query user profile and credentials"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'query userCredentials {\n  addressInfo(address: "0xb85b3D61439a3d70D3DF7913a3A764F352b32C55") {\n    id\n    avatar\n    username\n    eligibleCredentials(first: 10, after: "") {\n      list {\n        id\n        name\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "addressInfo": {\n      "id": "cAJyNCquve6qGYpV7dCk4b",\n      "avatar": "https://d257b89266utxb.cloudfront.net/galaxy/images/avatar/GrsBF2kvDW5t73fpeDYJMvK99NH9JDrr7njt5oucb5va-1649700058.png",\n      "username": "blin",\n      "eligibleCredentials": {\n        "list": [\n          {\n            "id": "472",\n            "name": "2021 NAOS Christmas Participants "\n          },\n          {\n            "id": "471",\n            "name": "2021 Christmas $Vera staker"\n          },\n          {\n            "id": "470",\n            "name": "zkLink 2021 Christmas Participants"\n          },\n          {\n            "id": "469",\n            "name": "Yearn Holiday Subscribooooor"\n          },\n          {\n            "id": "466",\n            "name": "2021 Hashflow Holiday Trader"\n          },\n          {\n            "id": "465",\n            "name": "2021 Christmas WOOFi staker"\n          },\n          {\n            "id": "464",\n            "name": "2021 Christmas $POTS Staker"\n          },\n          {\n            "id": "442",\n            "name": "CyberConnect Verified "\n          },\n          {\n            "id": "454",\n            "name": "Let\u2019s CyberConnect"\n          },\n          {\n            "id": "455",\n            "name": "CyberConnect Dwellers"\n          }\n        ]\n      }\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);