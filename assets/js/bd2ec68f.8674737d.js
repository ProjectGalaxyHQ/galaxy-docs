"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[568],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(d,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3479:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},d="Credential Items Update",s={unversionedId:"guide/cred-update",id:"guide/cred-update",title:"Credential Items Update",description:"Prerequisite",source:"@site/doc-developer/4-guide/cred-update.md",sourceDirName:"4-guide",slug:"/guide/cred-update",permalink:"/developer/guide/cred-update",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-docs/blob/main",tags:[],version:"current",lastUpdatedAt:1657012929,formattedLastUpdatedAt:"7/5/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"StarNFT",permalink:"/developer/smart-contract/contracts/starnft"},next:{title:"Overview",permalink:"/developer/graphql-api/overview"}},c={},p=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Endpoint",id:"endpoint",level:2},{value:"Input",id:"input",level:2},{value:"GraphQl",id:"graphql",level:3},{value:"Examples",id:"examples",level:2},{value:"Node.js",id:"nodejs",level:3},{value:"Python",id:"python",level:3}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"credential-items-update"},"Credential Items Update"),(0,o.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First you need to create a credential that you want to use in your campaign. Please contact galaxy BD team if you have no access/experience with galaxy dashboard before, they will help you to walk through concepts of galaxy dashboard and give you the access."),(0,o.kt)("li",{parentName:"ol"},"Then you will need an access token bound to your wallet address to use this API for updating your own credentials (credentials that created by you). We don\u2019t have UI interface to generate access token for now, so if you want to use this API, please contact galaxy BD team, so we can manually generate an access token for you to use.")),(0,o.kt)("h2",{id:"endpoint"},"Endpoint"),(0,o.kt)("p",null,"For more information on our GraphQL endpoint, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/developer/graphql-api/overview"},"this doc"),"."),(0,o.kt)("h2",{id:"input"},"Input"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"(header, string, mandatory) access-token: use to auth if the you have access to update credential items, the user with this access token must be the credential curator"),(0,o.kt)("li",{parentName:"ol"},"(int, mandatory) credId: the credential id you want to update"),(0,o.kt)("li",{parentName:"ol"},"(enum string, mandatory) operation:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"APPEND, append items in the list."),(0,o.kt)("li",{parentName:"ol"},"REPLACE, remove all items and replace with items in the list."),(0,o.kt)("li",{parentName:"ol"},"REMOVE, remove items in the list."))),(0,o.kt)("li",{parentName:"ol"},"(string array, mandatory) items: items list(address or email) to be modified, refer to operation.")),(0,o.kt)("h3",{id:"graphql"},"GraphQl"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'# header: "access-token": "fADp4yuJpwyx58OVZ05w2HQo3qABA000"\n\nmutation {\n  credentialItems(\n    input: {\n      credId: 312\n      operation: APPEND\n      items: [\n        "0x111fd6240381af2c5f1a9e27f282bae8b92b257"\n        "0x222dde76Cf5752f2bc1DC798BA1369dcA49d7c79"\n        "0x333eC1a5d0BC3C4291aeb962CBda49677E9a9FcB"\n        "0x444022af64bfc0f59ce1069e4ab51aa15148e60b"\n        "0x55526ef96b12fba7a507afba39bdfc78e0039742"\n        "0x6662c6b59e87b302b43400303427acd50f8071e6"\n        "0x777742ee649ee36edcf5ac9a97df34333a97fd24"\n        "0x8886b92fda46b8d9d33ca28d8837e1661edf8b97"\n        "0x999886e265cf2ec39f8868d7b6c67ab78e027736"\n      ]\n    }\n  ) {\n    eligible(address:"0x999886e265cf2ec39f8868d7b6c67ab78e027736")\n  }\n}\n')),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"nodejs"},"Node.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// Nodejs using Axios lib\nlet axiosRes = await axios.post(\"https://graphigo.prd.galaxy.eco/query\", {\n  headers: {\n    'access-token': 'fADp4yuJpwyx58OVZ05w2HQo3qABA000'\n  },\n  operationName: \"modifyCredentialItems\",\n  query: `mutation credentialItems($credId: Int!, $operation: Operation!, $items: [String!]!) \n  { \n    credentialItems(input: { \n      credId: $credId \n      operation: $operation \n      items: $items \n    }) \n    { \n      message \n    } \n  }`,\n  variables: {\n    credId: cred_id,\n    operation: operation,\n    items: list_of_items,\n  },\n});\n\nconsole.log(axiosRes.data);\n")),(0,o.kt)("h3",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Python using python_graphql_client lib\nclient = GraphqlClient(endpoint="https://graphigo.stg.galaxy.eco/query")\n\nquery = """\n    mutation ModifyCredentialItems($credId: Int!, $operation: Operation!, $items: [String!]!) {\n          credentialItems(input: {\n                credId: $credId\n                operation: $operation\n                items: $items\n          }) {\n                name\n        }\n    }\n"""\n\nvariables = {\n    "credId": cred_id,\n    "operation": operation,\n    "items": list_of_items\n}\n\nheader = { "access-token" : "fADp4yuJpwyx58OVZ05w2HQo3qABA000" }\n\nresp = client.execute(query=query, variables=variables, header = header)\n\nprint(resp)\n')))}m.isMDXComponent=!0}}]);