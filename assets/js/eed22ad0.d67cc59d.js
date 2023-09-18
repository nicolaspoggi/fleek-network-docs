"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[3184],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),k=r,y=p["".concat(i,".").concat(k)]||p[k]||d[k]||o;return n?a.createElement(y,s(s({ref:t},u),{},{components:n})):a.createElement(y,s({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=k;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={draft:!1,title:"Personal Access Tokens (PAT)",sidebarCollapsible:!1,sidebar_position:2,date:new Date("2023-01-10T09:00:00.000Z"),description:"Securely create and manage Personal Access Tokens (PAT) to authenticate with Fleek's services. Easily create and delete tokens as needed.",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Accounts","Personal Access Tokens","Guide","Learn","Fleek"]},s=void 0,c={unversionedId:"Accounts/pat",id:"Accounts/pat",title:"Personal Access Tokens (PAT)",description:"Securely create and manage Personal Access Tokens (PAT) to authenticate with Fleek's services. Easily create and delete tokens as needed.",source:"@site/docs/Accounts/pat.md",sourceDirName:"Accounts",slug:"/Accounts/pat",permalink:"/docs/Accounts/pat",draft:!1,tags:[{label:"Accounts",permalink:"/docs/tags/accounts"},{label:"Personal Access Tokens",permalink:"/docs/tags/personal-access-tokens"},{label:"Guide",permalink:"/docs/tags/guide"},{label:"Learn",permalink:"/docs/tags/learn"},{label:"Fleek",permalink:"/docs/tags/fleek"}],version:"current",sidebarPosition:2,frontMatter:{draft:!1,title:"Personal Access Tokens (PAT)",sidebarCollapsible:!1,sidebar_position:2,date:"2023-01-10T09:00:00.000Z",description:"Securely create and manage Personal Access Tokens (PAT) to authenticate with Fleek's services. Easily create and delete tokens as needed.",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Accounts","Personal Access Tokens","Guide","Learn","Fleek"]},sidebar:"default",previous:{title:"Accounts",permalink:"/docs/Accounts/"},next:{title:"Gateways",permalink:"/docs/Gateways/"}},i={},l=[{value:"Create a PAT",id:"create-a-pat",level:2},{value:"Delete a PAT",id:"delete-a-pat",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Personal Access Tokens are used to authenticate with Fleek's services. You can create as many tokens as you need, and you can delete them at any time."),(0,r.kt)("h2",{id:"create-a-pat"},"Create a PAT"),(0,r.kt)("p",null,"To create a PAT, go to your ",(0,r.kt)("a",{parentName:"p",href:"https://app.fleek.xyz/"},"Account Settings")," and click on the ",(0,r.kt)("strong",{parentName:"p"},"Personal Access Tokens")," tab. You can create a new one by indicating a name to identify it and clicking on ",(0,r.kt)("strong",{parentName:"p"},"Create"),". You will be prompted to confirm the creation by completing the authentication process and will recieve a token that you can use to authenticate with Fleek's services."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Ensure that you diligently copy and store your PAT (Personal Access Token) in a safe and secure manner. It's crucial to understand that the value of this token will be revealed only once, and if lost, might not be retrievable. Taking precautionary measures now can prevent potential complications or security breaches in the future.")),(0,r.kt)("h2",{id:"delete-a-pat"},"Delete a PAT"),(0,r.kt)("p",null,"To delete a PAT, go to your ",(0,r.kt)("a",{parentName:"p",href:"https://app.fleek.xyz/"},"Account Settings")," and click on the ",(0,r.kt)("strong",{parentName:"p"},"Personal Access Tokens")," tab. You can delete a token by clicking on the ",(0,r.kt)("strong",{parentName:"p"},"Delete")," button next to the token you want to delete. Once deleted all resources using the PAT will stop working."))}p.isMDXComponent=!0}}]);