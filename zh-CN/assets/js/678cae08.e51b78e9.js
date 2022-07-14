"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[1531],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,f=u["".concat(p,".").concat(m)]||u[m]||s[m]||i;return n?a.createElement(f,o(o({ref:t},l),{},{components:n})):a.createElement(f,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5315:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return s}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],c={id:"campaign-input",title:"CampaignInput"},p=void 0,d={unversionedId:"graphql-api/references/inputs/campaign-input",id:"graphql-api/references/inputs/campaign-input",title:"CampaignInput",description:"No description",source:"@site/doc-developer/5-graphql-api/references/inputs/campaign-input.mdx",sourceDirName:"5-graphql-api/references/inputs",slug:"/graphql-api/references/inputs/campaign-input",permalink:"/zh-CN/developer/graphql-api/references/inputs/campaign-input",editUrl:"https://crowdin.com/project/docs_galaxy_eco/zh-CN",tags:[],version:"current",lastUpdatedAt:1657776544,formattedLastUpdatedAt:"2022/7/14",frontMatter:{id:"campaign-input",title:"CampaignInput"},sidebar:"docs",previous:{title:"Auth",permalink:"/zh-CN/developer/graphql-api/references/inputs/auth"},next:{title:"CaptchaInput",permalink:"/zh-CN/developer/graphql-api/references/inputs/captcha-input"}},l={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>ID</code>)",id:"id-id",level:4},{value:"<code>daoId</code> (<code>Int</code>)",id:"daoid-int",level:4},{value:"<code>nftCoreId</code> (<code>Int</code>)",id:"nftcoreid-int",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>thumbnail</code> (<code>String</code>)",id:"thumbnail-string",level:4},{value:"<code>startTime</code> (<code>Int</code>)",id:"starttime-int",level:4},{value:"<code>endTime</code> (<code>Int</code>)",id:"endtime-int",level:4},{value:"<code>status</code> (<code>CampaignStatus</code>)",id:"status-campaignstatus",level:4},{value:"<code>parentId</code> (<code>Int</code>)",id:"parentid-int",level:4},{value:"<code>formula</code> (<code>String</code>)",id:"formula-string",level:4},{value:"<code>cap</code> (<code>Int</code>)",id:"cap-int",level:4},{value:"<code>gasType</code> (<code>GasType</code>)",id:"gastype-gastype",level:4},{value:"<code>isPrivate</code> (<code>Boolean</code>)",id:"isprivate-boolean",level:4},{value:"<code>type</code> (<code>GamificationType</code>)",id:"type-gamificationtype",level:4}],u={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input CampaignInput {\n  id: ID\n  daoId: Int!\n  nftCoreId: Int!\n  name: String!\n  description: String!\n  thumbnail: String!\n  startTime: Int!\n  endTime: Int\n  status: CampaignStatus!\n  parentId: Int\n  formula: String!\n  cap: Int!\n  gasType: GasType!\n  isPrivate: Boolean!\n  type: GamificationType!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"daoid-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"daoId")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"nftcoreid-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"nftCoreId")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"description-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"thumbnail-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"thumbnail")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"starttime-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"startTime")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"endtime-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"endTime")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"status-campaignstatus"},(0,i.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/enums/campaign-status"},(0,i.kt)("inlineCode",{parentName:"a"},"CampaignStatus")),")"),(0,i.kt)("h4",{id:"parentid-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"parentId")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"formula-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"formula")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"cap-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"cap")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"gastype-gastype"},(0,i.kt)("inlineCode",{parentName:"h4"},"gasType")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/enums/gas-type"},(0,i.kt)("inlineCode",{parentName:"a"},"GasType")),")"),(0,i.kt)("h4",{id:"isprivate-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"isPrivate")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"type-gamificationtype"},(0,i.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/enums/gamification-type"},(0,i.kt)("inlineCode",{parentName:"a"},"GamificationType")),")"))}m.isMDXComponent=!0}}]);