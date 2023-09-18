"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[1241],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),p=i,y=d["".concat(l,".").concat(p)]||d[p]||m[p]||o;return n?a.createElement(y,r(r({ref:t},u),{},{components:n})):a.createElement(y,r({ref:t},u))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:i,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const o={draft:!1,title:"Accounts",sidebarCollapsible:!1,sidebar_position:2,date:new Date("2023-01-10T09:00:00.000Z"),description:"Securely authenticate with Fleek using wallet, email, or social logins. Easily manage your account with customizable usernames and email notifications.",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Accounts","Guide","Learn","Fleek"]},r=void 0,c={unversionedId:"Accounts/index",id:"Accounts/index",title:"Accounts",description:"Securely authenticate with Fleek using wallet, email, or social logins. Easily manage your account with customizable usernames and email notifications.",source:"@site/docs/Accounts/index.md",sourceDirName:"Accounts",slug:"/Accounts/",permalink:"/docs/Accounts/",draft:!1,tags:[{label:"Accounts",permalink:"/docs/tags/accounts"},{label:"Guide",permalink:"/docs/tags/guide"},{label:"Learn",permalink:"/docs/tags/learn"},{label:"Fleek",permalink:"/docs/tags/fleek"}],version:"current",sidebarPosition:2,frontMatter:{draft:!1,title:"Accounts",sidebarCollapsible:!1,sidebar_position:2,date:"2023-01-10T09:00:00.000Z",description:"Securely authenticate with Fleek using wallet, email, or social logins. Easily manage your account with customizable usernames and email notifications.",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Accounts","Guide","Learn","Fleek"]},sidebar:"default",previous:{title:"Road to Sunsetting",permalink:"/docs/sunsetting"},next:{title:"Personal Access Tokens (PAT)",permalink:"/docs/Accounts/pat"}},l={},s=[{value:"Authentication",id:"authentication",level:3},{value:"Username",id:"username",level:3},{value:"Email",id:"email",level:3},{value:"Deleting an account",id:"deleting-an-account",level:3}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"We user Dynamic.xyzp","[https://dynamic.xyz]"," for authentication, this means that you can use any of the following methods to authenticate in Fleek:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Wallet Authentication"),(0,i.kt)("li",{parentName:"ul"},"Email Authentication (using OTP)"),(0,i.kt)("li",{parentName:"ul"},"Social Logins (Google, Github, Twitter)")),(0,i.kt)("h3",{id:"username"},"Username"),(0,i.kt)("p",null,"In Fleek we use usernames to identify users we will be using this in internal comunications and also in the UI. The username can be changed at any moment."),(0,i.kt)("h3",{id:"email"},"Email"),(0,i.kt)("p",null,"Email in Fleek is not mandatory but it is highly recommended to have one associated with your account as our notification system will use it to send you important information about your account and projects."),(0,i.kt)("h3",{id:"deleting-an-account"},"Deleting an account"),(0,i.kt)("p",null,"At any moment you can delete your account, this will delete all the projects and data associated with it. This action is irreversible. If you want to delete your account, you can do it from the account settings page."))}d.isMDXComponent=!0}}]);