"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[6202],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),f=r,m=c["".concat(s,".").concat(f)]||c[f]||p[f]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=n(7462),r=(n(7294),n(3905));const a={draft:!1,title:"Self Managed Deployments",sidebarCollapsible:!1,sidebar_position:2,date:new Date("2023-01-10T09:00:00.000Z"),description:"Welcome to the documentation for the beta of Fleek.xyz. Whether you are an expert or an absolute beginner, you'll find your answers here..",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Edge Platform","CDN","Guide","Learn","Fleek"]},i=void 0,l={unversionedId:"Sites/self-hosted",id:"Sites/self-hosted",title:"Self Managed Deployments",description:"Welcome to the documentation for the beta of Fleek.xyz. Whether you are an expert or an absolute beginner, you'll find your answers here..",source:"@site/docs/Sites/self-hosted.md",sourceDirName:"Sites",slug:"/Sites/self-hosted",permalink:"/docs/Sites/self-hosted",draft:!1,tags:[{label:"Edge Platform",permalink:"/docs/tags/edge-platform"},{label:"CDN",permalink:"/docs/tags/cdn"},{label:"Guide",permalink:"/docs/tags/guide"},{label:"Learn",permalink:"/docs/tags/learn"},{label:"Fleek",permalink:"/docs/tags/fleek"}],version:"current",sidebarPosition:2,frontMatter:{draft:!1,title:"Self Managed Deployments",sidebarCollapsible:!1,sidebar_position:2,date:"2023-01-10T09:00:00.000Z",description:"Welcome to the documentation for the beta of Fleek.xyz. Whether you are an expert or an absolute beginner, you'll find your answers here..",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Edge Platform","CDN","Guide","Learn","Fleek"]},sidebar:"default",previous:{title:"Managed Deployments",permalink:"/docs/Sites/managed"},next:{title:"Domains",permalink:"/docs/Domains/"}},s={},d=[{value:"Setting up a self managed deployment",id:"setting-up-a-self-managed-deployment",level:3},{value:"Deploying your site",id:"deploying-your-site",level:3}],u={toc:d};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In self-custodial deployments, you can configure your site with your code repository. This allows you to trigger a deploy manually or connect it to your CI pipeline."),(0,r.kt)("h3",{id:"setting-up-a-self-managed-deployment"},"Setting up a self managed deployment"),(0,r.kt)("p",null,"To set up a self managed deployment you need to create a site and choose the option to manage the deployment via the Fleek CLI at the bottom of the git provider screen."),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(4899).Z},(0,r.kt)("img",{alt:"Self Manage deployment",src:n(8216).Z,width:"698",height:"169"}))),(0,r.kt)("p",null,"To set up the site you will need to add some information about your site:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Framework"),": The framework used to build your site. EG: Gatsby, Hugo, etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Build command"),": The commands to execute to build the site. EG: npm install && npm run build"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Publish directory"),": The name of the directory containing the index.html file of your site after it has been built")),(0,r.kt)("p",null,"With this you will be redirected to the site overview page where you will find two different files that you need to add to your repository:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fleek.json: This file contains the configuration of your site."),(0,r.kt)("li",{parentName:"ul"},"GHA workflow: This file contains the configuration of the Github Action workflow that will trigger the deploy process.")),(0,r.kt)("p",null,"Though the Fleek.json file is mandatory you can decide not to use the Github Action workflow and trigger the deploy process in your own way."),(0,r.kt)("h3",{id:"deploying-your-site"},"Deploying your site"),(0,r.kt)("p",null,"To deploy your site using the Fleek CLI you can follow the guide in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/cli/sites"},"CLI section"),"."))}c.isMDXComponent=!0},4899:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/files/self-managed-ce5c9724b0011b3d2ad4294af8da9d26.png"},8216:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/self-managed-ce5c9724b0011b3d2ad4294af8da9d26.png"}}]);