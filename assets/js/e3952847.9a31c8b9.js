"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[9099],{3905:function(e,r,n){n.d(r,{Zo:function(){return l},kt:function(){return f}});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=t.createContext({}),p=function(e){var r=t.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},l=function(e){var r=p(e.components);return t.createElement(d.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(n),f=i,m=u["".concat(d,".").concat(f)]||u[f]||s[f]||a;return n?t.createElement(m,c(c({ref:r},l),{},{components:n})):t.createElement(m,c({ref:r},l))}));function f(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=u;var o={};for(var d in r)hasOwnProperty.call(r,d)&&(o[d]=r[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var p=2;p<a;p++)c[p]=n[p];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},932:function(e,r,n){n.r(r),n.d(r,{assets:function(){return l},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var t=n(7462),i=n(3366),a=(n(7294),n(3905)),c=["components"],o={id:"cred-input",title:"CredInput"},d=void 0,p={unversionedId:"graphql-api/references/inputs/cred-input",id:"graphql-api/references/inputs/cred-input",title:"CredInput",description:"No description",source:"@site/doc-developer/4-graphql-api/references/inputs/cred-input.mdx",sourceDirName:"4-graphql-api/references/inputs",slug:"/graphql-api/references/inputs/cred-input",permalink:"/developer/graphql-api/references/inputs/cred-input",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-docs/blob/main/doc-developer/4-graphql-api/references/inputs/cred-input.mdx",tags:[],version:"current",lastUpdatedBy:"Wayn",lastUpdatedAt:1650316840,formattedLastUpdatedAt:"4/18/2022",frontMatter:{id:"cred-input",title:"CredInput"},sidebar:"docs",previous:{title:"CampaignInput",permalink:"/developer/graphql-api/references/inputs/campaign-input"},next:{title:"DeleteSocialAccountInput",permalink:"/developer/graphql-api/references/inputs/delete-social-account-input"}},l={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>chain</code> (<code>Chain</code>)",id:"chain-chain",level:4},{value:"<code>credType</code> (<code>CredType</code>)",id:"credtype-credtype",level:4},{value:"<code>curatorAddress</code> (<code>String</code>)",id:"curatoraddress-string",level:4},{value:"<code>referenceLink</code> (<code>String</code>)",id:"referencelink-string",level:4},{value:"<code>credSource</code> (<code>CredSource</code>)",id:"credsource-credsource",level:4}],u={toc:s};function f(e){var r=e.components,n=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input CredInput {\n  id: Int\n  name: String!\n  description: String!\n  chain: Chain!\n  credType: CredType!\n  curatorAddress: String!\n  referenceLink: String!\n  credSource: CredSource!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"id-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("h4",{id:"name-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"description-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"chain-chain"},(0,a.kt)("inlineCode",{parentName:"h4"},"chain")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/enums/chain"},(0,a.kt)("inlineCode",{parentName:"a"},"Chain")),")"),(0,a.kt)("h4",{id:"credtype-credtype"},(0,a.kt)("inlineCode",{parentName:"h4"},"credType")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/enums/cred-type"},(0,a.kt)("inlineCode",{parentName:"a"},"CredType")),")"),(0,a.kt)("h4",{id:"curatoraddress-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"curatorAddress")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"referencelink-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"referenceLink")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"credsource-credsource"},(0,a.kt)("inlineCode",{parentName:"h4"},"credSource")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/enums/cred-source"},(0,a.kt)("inlineCode",{parentName:"a"},"CredSource")),")"))}f.isMDXComponent=!0}}]);