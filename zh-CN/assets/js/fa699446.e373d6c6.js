"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[5604],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(n),f=i,h=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(h,c(c({ref:t},l),{},{components:n})):r.createElement(h,c({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1511:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),c=["components"],o={id:"list-cred-input",title:"ListCredInput"},s=void 0,p={unversionedId:"graphql-api/references/inputs/list-cred-input",id:"graphql-api/references/inputs/list-cred-input",title:"ListCredInput",description:"No description",source:"@site/doc-developer/5-graphql-api/references/inputs/list-cred-input.mdx",sourceDirName:"5-graphql-api/references/inputs",slug:"/graphql-api/references/inputs/list-cred-input",permalink:"/zh-CN/developer/graphql-api/references/inputs/list-cred-input",editUrl:"https://crowdin.com/project/docs_galaxy_eco/zh-CN",tags:[],version:"current",lastUpdatedAt:1657776544,formattedLastUpdatedAt:"2022/7/14",frontMatter:{id:"list-cred-input",title:"ListCredInput"},sidebar:"docs",previous:{title:"ListCampaignInput",permalink:"/zh-CN/developer/graphql-api/references/inputs/list-campaign-input"},next:{title:"ListNFTCoreInput",permalink:"/zh-CN/developer/graphql-api/references/inputs/list-nftcore-input"}},l={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>ids</code> (<code>Int</code>)",id:"ids-int",level:4},{value:"<code>listType</code> (<code>ListType</code>)",id:"listtype-listtype",level:4},{value:"<code>searchString</code> (<code>String</code>)",id:"searchstring-string",level:4},{value:"<code>userAddr</code> (<code>String</code>)",id:"useraddr-string",level:4},{value:"<code>types</code> (<code>CredType</code>)",id:"types-credtype",level:4},{value:"<code>chains</code> (<code>Chain</code>)",id:"chains-chain",level:4},{value:"<code>first</code> (<code>Int</code>)",id:"first-int",level:4},{value:"<code>after</code> (<code>String</code>)",id:"after-string",level:4}],u={toc:d};function f(e){var t=e.components,n=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input ListCredInput {\n  ids: [Int!]\n  listType: ListType\n  searchString: String\n  userAddr: String\n  types: [CredType!]\n  chains: [Chain!]\n  first: Int\n  after: String\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"ids-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"ids")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("h4",{id:"listtype-listtype"},(0,a.kt)("inlineCode",{parentName:"h4"},"listType")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/enums/list-type"},(0,a.kt)("inlineCode",{parentName:"a"},"ListType")),")"),(0,a.kt)("h4",{id:"searchstring-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"searchString")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"useraddr-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"userAddr")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"types-credtype"},(0,a.kt)("inlineCode",{parentName:"h4"},"types")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/enums/cred-type"},(0,a.kt)("inlineCode",{parentName:"a"},"CredType")),")"),(0,a.kt)("h4",{id:"chains-chain"},(0,a.kt)("inlineCode",{parentName:"h4"},"chains")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/enums/chain"},(0,a.kt)("inlineCode",{parentName:"a"},"Chain")),")"),(0,a.kt)("h4",{id:"first-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"first")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("h4",{id:"after-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"after")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"))}f.isMDXComponent=!0}}]);