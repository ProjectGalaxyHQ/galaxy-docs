"use strict";(self.webpackChunkgalaxy_dev_docs=self.webpackChunkgalaxy_dev_docs||[]).push([[3936],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=n.createContext({}),l=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(d.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,h=u["".concat(d,".").concat(m)]||u[m]||p[m]||i;return t?n.createElement(h,c(c({ref:r},s),{},{components:t})):n.createElement(h,c({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=u;var o={};for(var d in r)hasOwnProperty.call(r,d)&&(o[d]=r[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3190:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var n=t(7462),a=t(3366),i=(t(7294),t(3905)),c=["components"],o={id:"cred",title:"Cred"},d=void 0,l={unversionedId:"graphql-api/references/objects/cred",id:"graphql-api/references/objects/cred",title:"Cred",description:"No description",source:"@site/docs-developer/4-graphql-api/references/objects/cred.mdx",sourceDirName:"4-graphql-api/references/objects",slug:"/graphql-api/references/objects/cred",permalink:"/galaxy-dev-docs/developer/graphql-api/references/objects/cred",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-dev-docs/blob/main/docs-developer/4-graphql-api/references/objects/cred.mdx",tags:[],version:"current",frontMatter:{id:"cred",title:"Cred"},sidebar:"docs",previous:{title:"CredSubgraph",permalink:"/galaxy-dev-docs/developer/graphql-api/references/objects/cred-subgraph"},next:{title:"DaoCarousel",permalink:"/galaxy-dev-docs/developer/graphql-api/references/objects/dao-carousel"}},s={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>String</code>)",id:"id-string",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>chain</code> (<code>Chain</code>)",id:"chain-chain",level:4},{value:"<code>type</code> (<code>String</code>)",id:"type-string",level:4},{value:"<code>curatorAddress</code> (<code>String</code>)",id:"curatoraddress-string",level:4},{value:"<code>referenceLink</code> (<code>String</code>)",id:"referencelink-string",level:4},{value:"<code>staticEligible</code> (<code>Int</code>)",id:"staticeligible-int",level:4},{value:"<code>itemCount</code> (<code>Int</code>)",id:"itemcount-int",level:4},{value:"<code>subgraph</code> (<code>CredSubgraph</code>)",id:"subgraph-credsubgraph",level:4},{value:"<code>items</code> (<code>CredItemConnection</code>)",id:"items-creditemconnection",level:4},{value:"<code>lastUpdate</code> (<code>Int</code>)",id:"lastupdate-int",level:4},{value:"<code>syncRate</code> (<code>Float</code>)",id:"syncrate-float",level:4},{value:"<code>credType</code> (<code>CredType</code>)",id:"credtype-credtype",level:4},{value:"<code>credSource</code> (<code>CredSource</code>)",id:"credsource-credsource",level:4}],u={toc:p};function m(e){var r=e.components,t=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'type Cred {\n  id: String!\n  name: String!\n  description: String!\n  chain: Chain!\n  type: String!\n  curatorAddress: String!\n  referenceLink: String!\n  staticEligible(\n  value: String!\n): Int!\n  itemCount: Int!\n  subgraph: CredSubgraph\n  items(\n  first: Int = 20\n  after: String = ""\n  searchString: String = ""\n): CredItemConnection!\n  lastUpdate: Int!\n  syncRate: Float!\n  credType: CredType!\n  credSource: CredSource!\n}\n')),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"description-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"chain-chain"},(0,i.kt)("inlineCode",{parentName:"h4"},"chain")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/enums/chain"},(0,i.kt)("inlineCode",{parentName:"a"},"Chain")),")"),(0,i.kt)("h4",{id:"type-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"curatoraddress-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"curatorAddress")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"referencelink-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"referenceLink")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"staticeligible-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"staticEligible")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"value-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"value")," (",(0,i.kt)("a",{parentName:"h5",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("h4",{id:"itemcount-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"itemCount")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"subgraph-credsubgraph"},(0,i.kt)("inlineCode",{parentName:"h4"},"subgraph")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/cred-subgraph"},(0,i.kt)("inlineCode",{parentName:"a"},"CredSubgraph")),")"),(0,i.kt)("h4",{id:"items-creditemconnection"},(0,i.kt)("inlineCode",{parentName:"h4"},"items")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/cred-item-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"CredItemConnection")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"first-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,i.kt)("a",{parentName:"h5",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"after-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,i.kt)("a",{parentName:"h5",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"searchstring-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"searchString")," (",(0,i.kt)("a",{parentName:"h5",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("h4",{id:"lastupdate-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"lastUpdate")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"syncrate-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"syncRate")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"credtype-credtype"},(0,i.kt)("inlineCode",{parentName:"h4"},"credType")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/enums/cred-type"},(0,i.kt)("inlineCode",{parentName:"a"},"CredType")),")"),(0,i.kt)("h4",{id:"credsource-credsource"},(0,i.kt)("inlineCode",{parentName:"h4"},"credSource")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/enums/cred-source"},(0,i.kt)("inlineCode",{parentName:"a"},"CredSource")),")"))}m.isMDXComponent=!0}}]);