"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[528],{3905:function(e,n,a){a.d(n,{Zo:function(){return s},kt:function(){return h}});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function d(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=t.createContext({}),l=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},s=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=l(a),h=r,f=m["".concat(c,".").concat(h)]||m[h]||p[h]||i;return a?t.createElement(f,o(o({ref:n},s),{},{components:a})):t.createElement(f,o({ref:n},s))}));function h(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var d={};for(var c in n)hasOwnProperty.call(n,c)&&(d[c]=n[c]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var l=2;l<i;l++)o[l]=a[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6646:function(e,n,a){a.r(n),a.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return p}});var t=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],d={id:"campaign",title:"Campaign"},c=void 0,l={unversionedId:"graphql-api/references/objects/campaign",id:"graphql-api/references/objects/campaign",title:"Campaign",description:"No description",source:"@site/doc-developer/5-graphql-api/references/objects/campaign.mdx",sourceDirName:"5-graphql-api/references/objects",slug:"/graphql-api/references/objects/campaign",permalink:"/zh-CN/developer/graphql-api/references/objects/campaign",editUrl:"https://crowdin.com/project/docs_galaxy_eco/zh-CN",tags:[],version:"current",lastUpdatedAt:1657777340,formattedLastUpdatedAt:"2022/7/14",frontMatter:{id:"campaign",title:"Campaign"},sidebar:"docs",previous:{title:"CampaignEdge",permalink:"/zh-CN/developer/graphql-api/references/objects/campaign-edge"},next:{title:"CredConnection",permalink:"/zh-CN/developer/graphql-api/references/objects/cred-connection"}},s={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>ID</code>)",id:"id-id",level:4},{value:"<code>numberID</code> (<code>Int</code>)",id:"numberid-int",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>type</code> (<code>GamificationType</code>)",id:"type-gamificationtype",level:4},{value:"<code>status</code> (<code>CampaignStatus</code>)",id:"status-campaignstatus",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>thumbnail</code> (<code>String</code>)",id:"thumbnail-string",level:4},{value:"<code>numNFTMinted</code> (<code>Int</code>)",id:"numnftminted-int",level:4},{value:"<code>gasType</code> (<code>GasType</code>)",id:"gastype-gastype",level:4},{value:"<code>startTime</code> (<code>Int</code>)",id:"starttime-int",level:4},{value:"<code>endTime</code> (<code>Int</code>)",id:"endtime-int",level:4},{value:"<code>parentCampaign</code> (<code>Campaign</code>)",id:"parentcampaign-campaign",level:4},{value:"<code>childrenCampaigns</code> (<code>Campaign</code>)",id:"childrencampaigns-campaign",level:4},{value:"<code>holders</code> (<code>AddressConnection</code>)",id:"holders-addressconnection",level:4},{value:"<code>cap</code> (<code>Int</code>)",id:"cap-int",level:4},{value:"<code>blacklistCountryCodes</code> (<code>String</code>)",id:"blacklistcountrycodes-string",level:4},{value:"<code>createdAt</code> (<code>String</code>)",id:"createdat-string",level:4},{value:"<code>space</code> (<code>Space</code>)",id:"space-space",level:4},{value:"<code>nftCore</code> (<code>NFTCore</code>)",id:"nftcore-nftcore",level:4},{value:"<code>nftTemplates</code> (<code>NFTTemplate</code>)",id:"nfttemplates-nfttemplate",level:4},{value:"<code>forgeConfig</code> (<code>ForgeConfig</code>)",id:"forgeconfig-forgeconfig",level:4},{value:"<code>enableWhitelist</code> (<code>Boolean</code>)",id:"enablewhitelist-boolean",level:4},{value:"<code>requireEmail</code> (<code>Boolean</code>)",id:"requireemail-boolean",level:4},{value:"<code>requireUsername</code> (<code>Boolean</code>)",id:"requireusername-boolean",level:4},{value:"<code>creator</code> (<code>String</code>)",id:"creator-string",level:4},{value:"<code>chain</code> (<code>Chain</code>)",id:"chain-chain",level:4},{value:"<code>dao</code> (<code>DAO</code>)",id:"dao-dao",level:4},{value:"<code>info</code> (<code>String</code>)",id:"info-string",level:4},{value:"<code>requirementInfo</code> (<code>String</code>)",id:"requirementinfo-string",level:4},{value:"<code>whitelistInfo</code> (<code>WhitelistAddress</code>)",id:"whitelistinfo-whitelistaddress",level:4},{value:"<code>gamification</code> (<code>Gamification</code>)",id:"gamification-gamification",level:4},{value:"<code>whitelistSubgraph</code> (<code>SubGraph</code>)",id:"whitelistsubgraph-subgraph",level:4},{value:"<code>isPrivate</code> (<code>Boolean</code>)",id:"isprivate-boolean",level:4},{value:"<code>useCred</code> (<code>Boolean</code>)",id:"usecred-boolean",level:4},{value:"<code>claimedTimes</code> (<code>Int</code>)",id:"claimedtimes-int",level:4},{value:"<code>formula</code> (<code>String</code>)",id:"formula-string",level:4},{value:"<code>creds</code> (<code>Cred</code>)",id:"creds-cred",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:"<code>Node</code>",id:"node",level:4}],m={toc:p};function h(e){var n=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Campaign implements Node {\n  id: ID!\n  numberID: Int!\n  name: String!\n  type: GamificationType!\n  status: CampaignStatus!\n  description: String!\n  thumbnail: String!\n  numNFTMinted: Int\n  gasType: GasType!\n  startTime: Int\n  endTime: Int\n  parentCampaign: Campaign\n  childrenCampaigns: [Campaign!]\n  holders(\n  first: Int\n  after: String\n): AddressConnection!\n  cap: Int!\n  blacklistCountryCodes: String!\n  createdAt: String!\n  space: Space!\n  nftCore: NFTCore\n  nftTemplates: [NFTTemplate!]\n  forgeConfig: ForgeConfig\n  enableWhitelist: Boolean!\n  requireEmail: Boolean!\n  requireUsername: Boolean!\n  creator: String!\n  chain: Chain!\n  dao: DAO!\n  info: String!\n  requirementInfo: String!\n  whitelistInfo(\n  address: String!\n): WhitelistAddress!\n  gamification: Gamification!\n  whitelistSubgraph: SubGraph\n  isPrivate: Boolean!\n  useCred: Boolean!\n  claimedTimes(\n  address: String!\n): Int!\n  formula: String!\n  creds: [Cred!]!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"numberid-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"numberID")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"type-gamificationtype"},(0,i.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/enums/gamification-type"},(0,i.kt)("inlineCode",{parentName:"a"},"GamificationType")),")"),(0,i.kt)("h4",{id:"status-campaignstatus"},(0,i.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/enums/campaign-status"},(0,i.kt)("inlineCode",{parentName:"a"},"CampaignStatus")),")"),(0,i.kt)("h4",{id:"description-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"thumbnail-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"thumbnail")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"numnftminted-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"numNFTMinted")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"gastype-gastype"},(0,i.kt)("inlineCode",{parentName:"h4"},"gasType")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/enums/gas-type"},(0,i.kt)("inlineCode",{parentName:"a"},"GasType")),")"),(0,i.kt)("h4",{id:"starttime-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"startTime")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"endtime-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"endTime")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"parentcampaign-campaign"},(0,i.kt)("inlineCode",{parentName:"h4"},"parentCampaign")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/campaign"},(0,i.kt)("inlineCode",{parentName:"a"},"Campaign")),")"),(0,i.kt)("h4",{id:"childrencampaigns-campaign"},(0,i.kt)("inlineCode",{parentName:"h4"},"childrenCampaigns")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/campaign"},(0,i.kt)("inlineCode",{parentName:"a"},"Campaign")),")"),(0,i.kt)("h4",{id:"holders-addressconnection"},(0,i.kt)("inlineCode",{parentName:"h4"},"holders")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/address-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"AddressConnection")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"first-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,i.kt)("a",{parentName:"h5",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"after-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,i.kt)("a",{parentName:"h5",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("h4",{id:"cap-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"cap")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"blacklistcountrycodes-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"blacklistCountryCodes")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"createdat-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"space-space"},(0,i.kt)("inlineCode",{parentName:"h4"},"space")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/space"},(0,i.kt)("inlineCode",{parentName:"a"},"Space")),")"),(0,i.kt)("h4",{id:"nftcore-nftcore"},(0,i.kt)("inlineCode",{parentName:"h4"},"nftCore")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/nftcore"},(0,i.kt)("inlineCode",{parentName:"a"},"NFTCore")),")"),(0,i.kt)("h4",{id:"nfttemplates-nfttemplate"},(0,i.kt)("inlineCode",{parentName:"h4"},"nftTemplates")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/nfttemplate"},(0,i.kt)("inlineCode",{parentName:"a"},"NFTTemplate")),")"),(0,i.kt)("h4",{id:"forgeconfig-forgeconfig"},(0,i.kt)("inlineCode",{parentName:"h4"},"forgeConfig")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/forge-config"},(0,i.kt)("inlineCode",{parentName:"a"},"ForgeConfig")),")"),(0,i.kt)("h4",{id:"enablewhitelist-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"enableWhitelist")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"requireemail-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"requireEmail")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"requireusername-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"requireUsername")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"creator-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"creator")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"chain-chain"},(0,i.kt)("inlineCode",{parentName:"h4"},"chain")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/enums/chain"},(0,i.kt)("inlineCode",{parentName:"a"},"Chain")),")"),(0,i.kt)("h4",{id:"dao-dao"},(0,i.kt)("inlineCode",{parentName:"h4"},"dao")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/dao"},(0,i.kt)("inlineCode",{parentName:"a"},"DAO")),")"),(0,i.kt)("h4",{id:"info-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"info")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"requirementinfo-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"requirementInfo")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"whitelistinfo-whitelistaddress"},(0,i.kt)("inlineCode",{parentName:"h4"},"whitelistInfo")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/whitelist-address"},(0,i.kt)("inlineCode",{parentName:"a"},"WhitelistAddress")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"address-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"address")," (",(0,i.kt)("a",{parentName:"h5",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("h4",{id:"gamification-gamification"},(0,i.kt)("inlineCode",{parentName:"h4"},"gamification")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/gamification"},(0,i.kt)("inlineCode",{parentName:"a"},"Gamification")),")"),(0,i.kt)("h4",{id:"whitelistsubgraph-subgraph"},(0,i.kt)("inlineCode",{parentName:"h4"},"whitelistSubgraph")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/sub-graph"},(0,i.kt)("inlineCode",{parentName:"a"},"SubGraph")),")"),(0,i.kt)("h4",{id:"isprivate-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"isPrivate")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"usecred-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"useCred")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"claimedtimes-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"claimedTimes")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"address-string-1"},(0,i.kt)("inlineCode",{parentName:"h5"},"address")," (",(0,i.kt)("a",{parentName:"h5",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("h4",{id:"formula-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"formula")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"creds-cred"},(0,i.kt)("inlineCode",{parentName:"h4"},"creds")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/cred"},(0,i.kt)("inlineCode",{parentName:"a"},"Cred")),")"),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"node"},(0,i.kt)("a",{parentName:"h4",href:"../../references/interfaces/node"},(0,i.kt)("inlineCode",{parentName:"a"},"Node"))))}h.isMDXComponent=!0}}]);