"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[2678],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),h=d(t),m=i,u=h["".concat(l,".").concat(m)]||h[m]||p[m]||r;return t?a.createElement(u,o(o({ref:n},s),{},{components:t})):a.createElement(u,o({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=h;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},2052:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return p}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),o=["components"],c={id:"address",title:"Address"},l=void 0,d={unversionedId:"graphql-api/references/objects/address",id:"graphql-api/references/objects/address",title:"Address",description:"No description",source:"@site/doc-developer/5-graphql-api/references/objects/address.mdx",sourceDirName:"5-graphql-api/references/objects",slug:"/graphql-api/references/objects/address",permalink:"/zh-CN/developer/graphql-api/references/objects/address",editUrl:"https://crowdin.com/project/docs_galaxy_eco/zh-CN",tags:[],version:"current",lastUpdatedAt:1657012929,formattedLastUpdatedAt:"2022/7/5",frontMatter:{id:"address",title:"Address"},sidebar:"docs",previous:{title:"AddressEdge",permalink:"/zh-CN/developer/graphql-api/references/objects/address-edge"},next:{title:"AirdropAddressInfo",permalink:"/zh-CN/developer/graphql-api/references/objects/airdrop-address-info"}},s={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>String</code>)",id:"id-string",level:4},{value:"<code>address</code> (<code>String</code>)",id:"address-string",level:4},{value:"<code>username</code> (<code>String</code>)",id:"username-string",level:4},{value:"<code>hasEmail</code> (<code>Boolean</code>)",id:"hasemail-boolean",level:4},{value:"<code>hasTwitter</code> (<code>Boolean</code>)",id:"hastwitter-boolean",level:4},{value:"<code>hasGithub</code> (<code>Boolean</code>)",id:"hasgithub-boolean",level:4},{value:"<code>hasDiscord</code> (<code>Boolean</code>)",id:"hasdiscord-boolean",level:4},{value:"<code>email</code> (<code>String</code>)",id:"email-string",level:4},{value:"<code>avatar</code> (<code>String</code>)",id:"avatar-string",level:4},{value:"<code>solanaAddress</code> (<code>String</code>)",id:"solanaaddress-string",level:4},{value:"<code>twitterUserID</code> (<code>String</code>)",id:"twitteruserid-string",level:4},{value:"<code>twitterUserName</code> (<code>String</code>)",id:"twitterusername-string",level:4},{value:"<code>participatedCampaignIDs</code> (<code>Int</code>)",id:"participatedcampaignids-int",level:4},{value:"<code>private</code> (<code>PrivateInfo</code>)",id:"private-privateinfo",level:4},{value:"<code>eligibleCredentials</code> (<code>CredConnection</code>)",id:"eligiblecredentials-credconnection",level:4},{value:"<code>balance</code> (<code>String</code>)",id:"balance-string",level:4},{value:"<code>spaces</code> (<code>SpaceConnection</code>)",id:"spaces-spaceconnection",level:4},{value:"<code>credentials</code> (<code>CredConnection</code>)",id:"credentials-credconnection",level:4},{value:"<code>isVerified</code> (<code>Boolean</code>)",id:"isverified-boolean",level:4},{value:"<code>isWhitelisted</code> (<code>Boolean</code>)",id:"iswhitelisted-boolean",level:4},{value:"<code>nfts</code> (<code>NFTConnection</code>)",id:"nfts-nftconnection",level:4},{value:"<code>recentParticipation</code> (<code>ParticipationConnection</code>)",id:"recentparticipation-participationconnection",level:4},{value:"<code>participatedCampaignCount</code> (<code>Int</code>)",id:"participatedcampaigncount-int",level:4}],h={toc:p};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'type Address {\n  id: String!\n  address: String!\n  username: String!\n  hasEmail: Boolean!\n  hasTwitter: Boolean!\n  hasGithub: Boolean!\n  hasDiscord: Boolean!\n  email: String!\n  avatar: String!\n  solanaAddress: String!\n  twitterUserID: String!\n  twitterUserName: String!\n  participatedCampaignIDs: [Int!]\n  private(\n  sig: String!\n): PrivateInfo!\n  eligibleCredentials(\n  first: Int\n  after: String = ""\n): CredConnection!\n  balance(\n  chain: Chain!\n  block: Int!\n): String!\n  spaces(\n  input: ListSpaceInput\n): SpaceConnection!\n  credentials(\n  input: ListCredInput\n): CredConnection!\n  isVerified: Boolean!\n  isWhitelisted: Boolean!\n  nfts(\n  option: ListNFTInput!\n): NFTConnection!\n  recentParticipation(\n  input: ListParticipationInput!\n): ParticipationConnection!\n  participatedCampaignCount(\n  input: ParticipatedCampaignCountInput!\n): Int!\n}\n')),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"id-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,r.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("h4",{id:"address-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"address")," (",(0,r.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("h4",{id:"username-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"username")," (",(0,r.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("h4",{id:"hasemail-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"hasEmail")," (",(0,r.kt)("a",{parentName:"h4",href:"../../references/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,r.kt)("h4",{id:"hastwitter-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"hasTwitter")," (",(0,r.kt)("a",{parentName:"h4",href:"../../references/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,r.kt)("h4",{id:"hasgithub-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"hasGithub")," (",(0,r.kt)("a",{parentName:"h4",href:"../../references/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,r.kt)("h4",{id:"hasdiscord-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"hasDiscord")," (",(0,r.kt)("a",{parentName:"h4",href:"../../references/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,r.kt)("h4",{id:"email-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"email")," (",(0,r.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("h4",{id:"avatar-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"avatar")," (",(0,r.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("h4",{id:"solanaaddress-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"solanaAddress")," (",(0,r.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("h4",{id:"twitteruserid-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"twitterUserID")," (",(0,r.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("h4",{id:"twitterusername-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"twitterUserName")," (",(0,r.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("h4",{id:"participatedcampaignids-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"participatedCampaignIDs")," (",(0,r.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("h4",{id:"private-privateinfo"},(0,r.kt)("inlineCode",{parentName:"h4"},"private")," (",(0,r.kt)("a",{parentName:"h4",href:"../../references/objects/private-info"},(0,r.kt)("inlineCode",{parentName:"a"},"PrivateInfo")),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"sig-string"},(0,r.kt)("inlineCode",{parentName:"h5"},"sig")," (",(0,r.kt)("a",{parentName:"h5",href:"../../references/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,r.kt)("h4",{id:"eligiblecredentials-credconnection"},(0,r.kt)("inlineCode",{parentName:"h4"},"eligibleCredentials")," (",(0,r.kt)("a",{parentName:"h4",href:"../../references/objects/cred-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"CredConnection")),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"first-int"},(0,r.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,r.kt)("a",{parentName:"h5",href:"../../references/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"after-string"},(0,r.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,r.kt)("a",{parentName:"h5",href:"../../references/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,r.kt)("h4",{id:"balance-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"balance")," (",(0,r.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"chain-chain"},(0,r.kt)("inlineCode",{parentName:"h5"},"chain")," (",(0,r.kt)("a",{parentName:"h5",href:"../../references/enums/chain"},(0,r.kt)("inlineCode",{parentName:"a"},"Chain")),")"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"block-int"},(0,r.kt)("inlineCode",{parentName:"h5"},"block")," (",(0,r.kt)("a",{parentName:"h5",href:"../../references/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("h4",{id:"spaces-spaceconnection"},(0,r.kt)("inlineCode",{parentName:"h4"},"spaces")," (",(0,r.kt)("a",{parentName:"h4",href:"../../references/objects/space-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"SpaceConnection")),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"input-listspaceinput"},(0,r.kt)("inlineCode",{parentName:"h5"},"input")," (",(0,r.kt)("a",{parentName:"h5",href:"../../references/inputs/list-space-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ListSpaceInput")),")"))),(0,r.kt)("h4",{id:"credentials-credconnection"},(0,r.kt)("inlineCode",{parentName:"h4"},"credentials")," (",(0,r.kt)("a",{parentName:"h4",href:"../../references/objects/cred-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"CredConnection")),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"input-listcredinput"},(0,r.kt)("inlineCode",{parentName:"h5"},"input")," (",(0,r.kt)("a",{parentName:"h5",href:"../../references/inputs/list-cred-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ListCredInput")),")"))),(0,r.kt)("h4",{id:"isverified-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"isVerified")," (",(0,r.kt)("a",{parentName:"h4",href:"../../references/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,r.kt)("h4",{id:"iswhitelisted-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"isWhitelisted")," (",(0,r.kt)("a",{parentName:"h4",href:"../../references/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,r.kt)("h4",{id:"nfts-nftconnection"},(0,r.kt)("inlineCode",{parentName:"h4"},"nfts")," (",(0,r.kt)("a",{parentName:"h4",href:"../../references/objects/nftconnection"},(0,r.kt)("inlineCode",{parentName:"a"},"NFTConnection")),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"option-listnftinput"},(0,r.kt)("inlineCode",{parentName:"h5"},"option")," (",(0,r.kt)("a",{parentName:"h5",href:"../../references/inputs/list-nftinput"},(0,r.kt)("inlineCode",{parentName:"a"},"ListNFTInput")),")"))),(0,r.kt)("h4",{id:"recentparticipation-participationconnection"},(0,r.kt)("inlineCode",{parentName:"h4"},"recentParticipation")," (",(0,r.kt)("a",{parentName:"h4",href:"../../references/objects/participation-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"ParticipationConnection")),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"input-listparticipationinput"},(0,r.kt)("inlineCode",{parentName:"h5"},"input")," (",(0,r.kt)("a",{parentName:"h5",href:"../../references/inputs/list-participation-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ListParticipationInput")),")"))),(0,r.kt)("h4",{id:"participatedcampaigncount-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"participatedCampaignCount")," (",(0,r.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"input-participatedcampaigncountinput"},(0,r.kt)("inlineCode",{parentName:"h5"},"input")," (",(0,r.kt)("a",{parentName:"h5",href:"../../references/inputs/participated-campaign-count-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ParticipatedCampaignCountInput")),")"))))}m.isMDXComponent=!0}}]);