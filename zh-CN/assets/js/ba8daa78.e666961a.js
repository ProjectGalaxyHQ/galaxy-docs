"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[3629],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return t?n.createElement(m,c(c({ref:r},s),{},{components:t})):n.createElement(m,c({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1611:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),c=["components"],i={id:"error",title:"Error"},l=void 0,p={unversionedId:"graphql-api/references/objects/error",id:"graphql-api/references/objects/error",title:"Error",description:"No description",source:"@site/doc-developer/5-graphql-api/references/objects/error.mdx",sourceDirName:"5-graphql-api/references/objects",slug:"/graphql-api/references/objects/error",permalink:"/zh-CN/developer/graphql-api/references/objects/error",editUrl:"https://crowdin.com/project/docs_galaxy_eco/zh-CN",tags:[],version:"current",lastUpdatedAt:1658443118,formattedLastUpdatedAt:"2022/7/21",frontMatter:{id:"error",title:"Error"},sidebar:"docs",previous:{title:"DAO",permalink:"/zh-CN/developer/graphql-api/references/objects/dao"},next:{title:"ExtLinkResp",permalink:"/zh-CN/developer/graphql-api/references/objects/ext-link-resp"}},s={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>code</code> (<code>Int</code>)",id:"code-int",level:4},{value:"<code>message</code> (<code>String</code>)",id:"message-string",level:4}],d={toc:u};function f(e){var r=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type Error {\n  code: Int!\n  message: String!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"code")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("h4",{id:"message-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"message")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"))}f.isMDXComponent=!0}}]);