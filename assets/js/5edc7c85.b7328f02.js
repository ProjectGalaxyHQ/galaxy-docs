"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[8639],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),f=l(n),u=i,g=f["".concat(p,".").concat(u)]||f[u]||s[u]||a;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8773:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],c={id:"participation-connection",title:"ParticipationConnection"},p=void 0,l={unversionedId:"graphql-api/references/objects/participation-connection",id:"graphql-api/references/objects/participation-connection",title:"ParticipationConnection",description:"No description",source:"@site/doc-developer/4-graphql-api/references/objects/participation-connection.mdx",sourceDirName:"4-graphql-api/references/objects",slug:"/graphql-api/references/objects/participation-connection",permalink:"/developer/graphql-api/references/objects/participation-connection",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-docs/blob/main/doc-developer/4-graphql-api/references/objects/participation-connection.mdx",tags:[],version:"current",lastUpdatedBy:"oyyblin",lastUpdatedAt:1650310204,formattedLastUpdatedAt:"4/18/2022",frontMatter:{id:"participation-connection",title:"ParticipationConnection"},sidebar:"docs",previous:{title:"ParticipateSolanaResp",permalink:"/developer/graphql-api/references/objects/participate-solana-resp"},next:{title:"ParticipationEdge",permalink:"/developer/graphql-api/references/objects/participation-edge"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>totalCount</code> (<code>Int</code>)",id:"totalcount-int",level:4},{value:"<code>edges</code> (<code>ParticipationEdge</code>)",id:"edges-participationedge",level:4},{value:"<code>pageInfo</code> (<code>PageInfo</code>)",id:"pageinfo-pageinfo",level:4},{value:"<code>list</code> (<code>Participation</code>)",id:"list-participation",level:4}],f={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type ParticipationConnection {\n  totalCount: Int!\n  edges: [ParticipationEdge!]!\n  pageInfo: PageInfo!\n  list: [Participation!]!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"totalcount-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"totalCount")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("h4",{id:"edges-participationedge"},(0,a.kt)("inlineCode",{parentName:"h4"},"edges")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/objects/participation-edge"},(0,a.kt)("inlineCode",{parentName:"a"},"ParticipationEdge")),")"),(0,a.kt)("h4",{id:"pageinfo-pageinfo"},(0,a.kt)("inlineCode",{parentName:"h4"},"pageInfo")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/objects/page-info"},(0,a.kt)("inlineCode",{parentName:"a"},"PageInfo")),")"),(0,a.kt)("h4",{id:"list-participation"},(0,a.kt)("inlineCode",{parentName:"h4"},"list")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/objects/participation"},(0,a.kt)("inlineCode",{parentName:"a"},"Participation")),")"))}u.isMDXComponent=!0}}]);