"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[7028],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,h=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(h,c(c({ref:t},s),{},{components:n})):r.createElement(h,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:a,c[1]=d;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3448:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),c=["components"],d={id:"cred",title:"Cred"},o=void 0,l={unversionedId:"graphql-api/references/objects/cred",id:"graphql-api/references/objects/cred",title:"Cred",description:"No description",source:"@site/doc-developer/4-graphql-api/references/objects/cred.mdx",sourceDirName:"4-graphql-api/references/objects",slug:"/graphql-api/references/objects/cred",permalink:"/developer/graphql-api/references/objects/cred",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-docs/blob/main/doc-developer/4-graphql-api/references/objects/cred.mdx",tags:[],version:"current",lastUpdatedAt:1651363414,formattedLastUpdatedAt:"5/1/2022",frontMatter:{id:"cred",title:"Cred"},sidebar:"docs",previous:{title:"CredSubgraph",permalink:"/developer/graphql-api/references/objects/cred-subgraph"},next:{title:"DaoCarousel",permalink:"/developer/graphql-api/references/objects/dao-carousel"}},s={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>ID</code>)",id:"id-id",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>chain</code> (<code>Chain</code>)",id:"chain-chain",level:4},{value:"<code>type</code> (<code>String</code>)",id:"type-string",level:4},{value:"<code>curatorAddress</code> (<code>String</code>)",id:"curatoraddress-string",level:4},{value:"<code>referenceLink</code> (<code>String</code>)",id:"referencelink-string",level:4},{value:"<code>eligible</code> (<code>Int</code>)",id:"eligible-int",level:4},{value:"<code>staticEligible</code> (<code>Int</code>)",id:"staticeligible-int",level:4},{value:"<code>itemCount</code> (<code>Int</code>)",id:"itemcount-int",level:4},{value:"<code>subgraph</code> (<code>CredSubgraph</code>)",id:"subgraph-credsubgraph",level:4},{value:"<code>items</code> (<code>CredItemConnection</code>)",id:"items-creditemconnection",level:4},{value:"<code>lastUpdate</code> (<code>Int</code>)",id:"lastupdate-int",level:4},{value:"<code>syncRate</code> (<code>Float</code>)",id:"syncrate-float",level:4},{value:"<code>lastSyncedBlock</code> (<code>Int</code>)",id:"lastsyncedblock-int",level:4},{value:"<code>credType</code> (<code>CredType</code>)",id:"credtype-credtype",level:4},{value:"<code>credSource</code> (<code>CredSource</code>)",id:"credsource-credsource",level:4}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'type Cred {\n  id: ID!\n  name: String!\n  description: String!\n  chain: Chain!\n  type: String!\n  curatorAddress: String!\n  referenceLink: String!\n  eligible(\n  address: String!\n): Int!\n  staticEligible(\n  value: String!\n): Int!\n  itemCount: Int!\n  subgraph: CredSubgraph\n  items(\n  first: Int = 20\n  after: String = ""\n  searchString: String = ""\n): CredItemConnection!\n  lastUpdate: Int!\n  syncRate: Float!\n  lastSyncedBlock: Int!\n  credType: CredType!\n  credSource: CredSource!\n}\n')),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"description-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"chain-chain"},(0,i.kt)("inlineCode",{parentName:"h4"},"chain")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/enums/chain"},(0,i.kt)("inlineCode",{parentName:"a"},"Chain")),")"),(0,i.kt)("h4",{id:"type-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"curatoraddress-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"curatorAddress")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"referencelink-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"referenceLink")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"eligible-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"eligible")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"address-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"address")," (",(0,i.kt)("a",{parentName:"h5",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("h4",{id:"staticeligible-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"staticEligible")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"value-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"value")," (",(0,i.kt)("a",{parentName:"h5",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("h4",{id:"itemcount-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"itemCount")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"subgraph-credsubgraph"},(0,i.kt)("inlineCode",{parentName:"h4"},"subgraph")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/cred-subgraph"},(0,i.kt)("inlineCode",{parentName:"a"},"CredSubgraph")),")"),(0,i.kt)("h4",{id:"items-creditemconnection"},(0,i.kt)("inlineCode",{parentName:"h4"},"items")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/cred-item-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"CredItemConnection")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"first-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,i.kt)("a",{parentName:"h5",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"after-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,i.kt)("a",{parentName:"h5",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"searchstring-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"searchString")," (",(0,i.kt)("a",{parentName:"h5",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("h4",{id:"lastupdate-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"lastUpdate")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"syncrate-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"syncRate")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"lastsyncedblock-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"lastSyncedBlock")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"credtype-credtype"},(0,i.kt)("inlineCode",{parentName:"h4"},"credType")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/enums/cred-type"},(0,i.kt)("inlineCode",{parentName:"a"},"CredType")),")"),(0,i.kt)("h4",{id:"credsource-credsource"},(0,i.kt)("inlineCode",{parentName:"h4"},"credSource")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/enums/cred-source"},(0,i.kt)("inlineCode",{parentName:"a"},"CredSource")),")"))}m.isMDXComponent=!0}}]);