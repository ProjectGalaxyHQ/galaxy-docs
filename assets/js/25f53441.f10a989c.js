"use strict";(self.webpackChunkgalaxy_dev_docs=self.webpackChunkgalaxy_dev_docs||[]).push([[9018],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||s[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8157:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],p={id:"nfttemplate-input",title:"NFTTemplateInput"},l=void 0,c={unversionedId:"graphql-api/references/inputs/nfttemplate-input",id:"graphql-api/references/inputs/nfttemplate-input",title:"NFTTemplateInput",description:"No description",source:"@site/docs-developer/4-graphql-api/references/inputs/nfttemplate-input.mdx",sourceDirName:"4-graphql-api/references/inputs",slug:"/graphql-api/references/inputs/nfttemplate-input",permalink:"/galaxy-dev-docs/developer/graphql-api/references/inputs/nfttemplate-input",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-dev-docs/blob/main/docs-developer/4-graphql-api/references/inputs/nfttemplate-input.mdx",tags:[],version:"current",frontMatter:{id:"nfttemplate-input",title:"NFTTemplateInput"},sidebar:"docs",previous:{title:"NFTsOptions",permalink:"/galaxy-dev-docs/developer/graphql-api/references/inputs/nfts-options"},next:{title:"OptInInput",permalink:"/galaxy-dev-docs/developer/graphql-api/references/inputs/opt-in-input"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>image</code> (<code>String</code>)",id:"image-string",level:4},{value:"<code>category</code> (<code>String</code>)",id:"category-string",level:4},{value:"<code>powah</code> (<code>Int</code>)",id:"powah-int",level:4},{value:"<code>ipfsImage</code> (<code>String</code>)",id:"ipfsimage-string",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>treasureBack</code> (<code>Boolean</code>)",id:"treasureback-boolean",level:4},{value:"<code>animationURL</code> (<code>String</code>)",id:"animationurl-string",level:4},{value:"<code>probability</code> (<code>Int</code>)",id:"probability-int",level:4},{value:"<code>minPowahBuff</code> (<code>Int</code>)",id:"minpowahbuff-int",level:4},{value:"<code>maxPowahBuff</code> (<code>Int</code>)",id:"maxpowahbuff-int",level:4},{value:"<code>forgeMinPowahSum</code> (<code>Int</code>)",id:"forgeminpowahsum-int",level:4},{value:"<code>forgeMaxPowahSum</code> (<code>Int</code>)",id:"forgemaxpowahsum-int",level:4},{value:"<code>traits</code> (<code>TraitInput</code>)",id:"traits-traitinput",level:4}],u={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input NFTTemplateInput {\n  id: Int\n  name: String!\n  image: String!\n  category: String\n  powah: Int\n  ipfsImage: String\n  description: String\n  treasureBack: Boolean\n  animationURL: String\n  probability: Int\n  minPowahBuff: Int\n  maxPowahBuff: Int\n  forgeMinPowahSum: Int\n  forgeMaxPowahSum: Int\n  traits: [TraitInput!]\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"image-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"image")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"category-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"category")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"powah-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"powah")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"ipfsimage-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"ipfsImage")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"description-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"treasureback-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"treasureBack")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"animationurl-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"animationURL")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"probability-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"probability")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"minpowahbuff-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"minPowahBuff")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"maxpowahbuff-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"maxPowahBuff")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"forgeminpowahsum-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"forgeMinPowahSum")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"forgemaxpowahsum-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"forgeMaxPowahSum")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"traits-traitinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"traits")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/inputs/trait-input"},(0,i.kt)("inlineCode",{parentName:"a"},"TraitInput")),")"))}m.isMDXComponent=!0}}]);