"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[5910],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=d(n),f=a,h=s["".concat(o,".").concat(f)]||s[f]||l[f]||i;return n?r.createElement(h,p(p({ref:t},u),{},{components:n})):r.createElement(h,p({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var d=2;d<i;d++)p[d]=n[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8199:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return l}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),p=["components"],c={id:"prepare-participate-input",title:"PrepareParticipateInput"},o=void 0,d={unversionedId:"graphql-api/references/inputs/prepare-participate-input",id:"graphql-api/references/inputs/prepare-participate-input",title:"PrepareParticipateInput",description:"No description",source:"@site/doc-developer/4-graphql-api/references/inputs/prepare-participate-input.mdx",sourceDirName:"4-graphql-api/references/inputs",slug:"/graphql-api/references/inputs/prepare-participate-input",permalink:"/developer/graphql-api/references/inputs/prepare-participate-input",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-docs/blob/main/doc-developer/4-graphql-api/references/inputs/prepare-participate-input.mdx",tags:[],version:"current",lastUpdatedAt:1651363414,formattedLastUpdatedAt:"5/1/2022",frontMatter:{id:"prepare-participate-input",title:"PrepareParticipateInput"},sidebar:"docs",previous:{title:"ParticipatedCampaignCountInput",permalink:"/developer/graphql-api/references/inputs/participated-campaign-count-input"},next:{title:"RefreshNFTMetadataInput",permalink:"/developer/graphql-api/references/inputs/refresh-nftmetadata-input"}},u={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>signature</code> (<code>String</code>)",id:"signature-string",level:4},{value:"<code>campaignID</code> (<code>ID</code>)",id:"campaignid-id",level:4},{value:"<code>address</code> (<code>String</code>)",id:"address-string",level:4},{value:"<code>mintCount</code> (<code>Int</code>)",id:"mintcount-int",level:4},{value:"<code>chain</code> (<code>Chain</code>)",id:"chain-chain",level:4},{value:"<code>burnedNFTIDs</code> (<code>Int</code>)",id:"burnednftids-int",level:4},{value:"<code>optIn</code> (<code>OptInInput</code>)",id:"optin-optininput",level:4},{value:"<code>captcha</code> (<code>CaptchaInput</code>)",id:"captcha-captchainput",level:4}],s={toc:l};function f(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input PrepareParticipateInput {\n  signature: String!\n  campaignID: ID!\n  address: String!\n  mintCount: Int\n  chain: Chain\n  burnedNFTIDs: [Int!]\n  optIn: OptInInput\n  captcha: CaptchaInput\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"signature-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"signature")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"campaignid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"campaignID")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"address-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"address")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"mintcount-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"mintCount")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"chain-chain"},(0,i.kt)("inlineCode",{parentName:"h4"},"chain")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/enums/chain"},(0,i.kt)("inlineCode",{parentName:"a"},"Chain")),")"),(0,i.kt)("h4",{id:"burnednftids-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"burnedNFTIDs")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"optin-optininput"},(0,i.kt)("inlineCode",{parentName:"h4"},"optIn")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/inputs/opt-in-input"},(0,i.kt)("inlineCode",{parentName:"a"},"OptInInput")),")"),(0,i.kt)("h4",{id:"captcha-captchainput"},(0,i.kt)("inlineCode",{parentName:"h4"},"captcha")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/inputs/captcha-input"},(0,i.kt)("inlineCode",{parentName:"a"},"CaptchaInput")),")"))}f.isMDXComponent=!0}}]);