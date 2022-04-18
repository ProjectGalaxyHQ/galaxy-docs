"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[7387],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return u}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=d(t),u=a,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6926:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return p}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],c={id:"space",title:"Space"},l=void 0,d={unversionedId:"graphql-api/references/objects/space",id:"graphql-api/references/objects/space",title:"Space",description:"No description",source:"@site/doc-developer/4-graphql-api/references/objects/space.mdx",sourceDirName:"4-graphql-api/references/objects",slug:"/graphql-api/references/objects/space",permalink:"/developer/graphql-api/references/objects/space",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-docs/blob/main/doc-developer/4-graphql-api/references/objects/space.mdx",tags:[],version:"current",lastUpdatedBy:"oyyblin",lastUpdatedAt:1650310204,formattedLastUpdatedAt:"4/18/2022",frontMatter:{id:"space",title:"Space"},sidebar:"docs",previous:{title:"SpaceStation",permalink:"/developer/graphql-api/references/objects/space-station"},next:{title:"SubGraph",permalink:"/developer/graphql-api/references/objects/sub-graph"}},s={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>ID</code>)",id:"id-id",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>info</code> (<code>String</code>)",id:"info-string",level:4},{value:"<code>thumbnail</code> (<code>String</code>)",id:"thumbnail-string",level:4},{value:"<code>alias</code> (<code>String</code>)",id:"alias-string",level:4},{value:"<code>links</code> (<code>String</code>)",id:"links-string",level:4},{value:"<code>isVerified</code> (<code>Boolean</code>)",id:"isverified-boolean",level:4},{value:"<code>admins</code> (<code>Address</code>)",id:"admins-address",level:4},{value:"<code>isAdmin</code> (<code>Boolean</code>)",id:"isadmin-boolean",level:4},{value:"<code>campaigns</code> (<code>CampaignConnection</code>)",id:"campaigns-campaignconnection",level:4},{value:"<code>nftCores</code> (<code>NFTCoreConnection</code>)",id:"nftcores-nftcoreconnection",level:4},{value:"<code>credentials</code> (<code>CredConnection</code>)",id:"credentials-credconnection",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:"<code>Node</code>",id:"node",level:4}],m={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Space implements Node {\n  id: ID!\n  name: String!\n  info: String!\n  thumbnail: String!\n  alias: String!\n  links: String!\n  isVerified: Boolean!\n  admins: [Address!]!\n  isAdmin(\n  address: String!\n): Boolean!\n  campaigns(\n  input: ListCampaignInput!\n): CampaignConnection!\n  nftCores(\n  input: ListNFTCoreInput!\n): NFTCoreConnection!\n  credentials(\n  input: ListCredInput!\n): CredConnection!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"info-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"info")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"thumbnail-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"thumbnail")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"alias-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"alias")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"links-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"links")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"isverified-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"isVerified")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"admins-address"},(0,i.kt)("inlineCode",{parentName:"h4"},"admins")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/address"},(0,i.kt)("inlineCode",{parentName:"a"},"Address")),")"),(0,i.kt)("h4",{id:"isadmin-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"isAdmin")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"address-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"address")," (",(0,i.kt)("a",{parentName:"h5",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("h4",{id:"campaigns-campaignconnection"},(0,i.kt)("inlineCode",{parentName:"h4"},"campaigns")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/campaign-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"CampaignConnection")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"input-listcampaigninput"},(0,i.kt)("inlineCode",{parentName:"h5"},"input")," (",(0,i.kt)("a",{parentName:"h5",href:"../../references/inputs/list-campaign-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ListCampaignInput")),")"))),(0,i.kt)("h4",{id:"nftcores-nftcoreconnection"},(0,i.kt)("inlineCode",{parentName:"h4"},"nftCores")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/nftcore-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"NFTCoreConnection")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"input-listnftcoreinput"},(0,i.kt)("inlineCode",{parentName:"h5"},"input")," (",(0,i.kt)("a",{parentName:"h5",href:"../../references/inputs/list-nftcore-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ListNFTCoreInput")),")"))),(0,i.kt)("h4",{id:"credentials-credconnection"},(0,i.kt)("inlineCode",{parentName:"h4"},"credentials")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/cred-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"CredConnection")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"input-listcredinput"},(0,i.kt)("inlineCode",{parentName:"h5"},"input")," (",(0,i.kt)("a",{parentName:"h5",href:"../../references/inputs/list-cred-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ListCredInput")),")"))),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"node"},(0,i.kt)("a",{parentName:"h4",href:"../../references/interfaces/node"},(0,i.kt)("inlineCode",{parentName:"a"},"Node"))))}u.isMDXComponent=!0}}]);