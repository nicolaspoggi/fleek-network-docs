"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[1658],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,h=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?o.createElement(h,l(l({ref:t},p),{},{components:n})):o.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6654:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={draft:!1,title:"Migrating from Fleek.co",sidebarCollapsible:!1,sidebar_position:1,date:new Date("2023-01-10T09:00:00.000Z"),description:"Discover the phased sunsetting of Fleek.co and the launch of the new Fleek.xyz App.",category:"Documentation",keywords:["introduction","documentation","getting started"],tags:["Storage","Sites","Guide","Learn","Fleek"]},l=void 0,i={unversionedId:"sunsetting",id:"sunsetting",title:"Migrating from Fleek.co",description:"Discover the phased sunsetting of Fleek.co and the launch of the new Fleek.xyz App.",source:"@site/docs/sunsetting.md",sourceDirName:".",slug:"/sunsetting",permalink:"/docs/sunsetting",draft:!1,tags:[{label:"Storage",permalink:"/docs/tags/storage"},{label:"Sites",permalink:"/docs/tags/sites"},{label:"Guide",permalink:"/docs/tags/guide"},{label:"Learn",permalink:"/docs/tags/learn"},{label:"Fleek",permalink:"/docs/tags/fleek"}],version:"current",sidebarPosition:1,frontMatter:{draft:!1,title:"Migrating from Fleek.co",sidebarCollapsible:!1,sidebar_position:1,date:"2023-01-10T09:00:00.000Z",description:"Discover the phased sunsetting of Fleek.co and the launch of the new Fleek.xyz App.",category:"Documentation",keywords:["introduction","documentation","getting started"],tags:["Storage","Sites","Guide","Learn","Fleek"]},sidebar:"default",previous:{title:"Home | Fleek Docs",permalink:"/docs/"},next:{title:"Accounts",permalink:"/docs/Accounts/"}},s={},c=[{value:"Road to Sunsetting",id:"road-to-sunsetting",level:2},{value:"Phases",id:"phases",level:3},{value:"CLI/SDK Test Phase (Completed)",id:"clisdk-test-phase-completed",level:3},{value:"Alpha release of the App/platform (Current)",id:"alpha-release-of-the-appplatform-current",level:3},{value:"Release Fleek Platform V1",id:"release-fleek-platform-v1",level:3},{value:"Sunsetting of Fleek.co",id:"sunsetting-of-fleekco",level:3}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Update (08/31/23): This doc has been updated to better reflect the state of the road to sunsetting, and to include the Alpha release.")),(0,r.kt)("h2",{id:"road-to-sunsetting"},"Road to Sunsetting"),(0,r.kt)("p",null,"As we continue developing the new Fleek Platform we wanted to share more information about what the process of shutting down our legacy Fleek.co platform will look like."),(0,r.kt)("h3",{id:"phases"},"Phases"),(0,r.kt)("p",null,"To be more organized we are separating the road towards sunsetting the old platform in different sequential phases that help us to ensure that the migration is up to our standards and every user has a fantastic experience leading into the new platform."),(0,r.kt)("h3",{id:"clisdk-test-phase-completed"},"CLI/SDK Test Phase (Completed)"),(0,r.kt)("p",null,"In this stage, users can interact in a very limited capacity with our SDK and CLI, to store files in IPFS, deploy their sites, and configure custom domains on top of it."),(0,r.kt)("h3",{id:"alpha-release-of-the-appplatform-current"},"Alpha release of the App/platform (Current)"),(0,r.kt)("p",null,"The next phase involves releasing the alpha new platform, which will allow us to test the new UI, and to show the capabilities of the platform in a closed environment. During this phase, we will be collecting feedback actively and setting the groundwork for customer support moving forward."),(0,r.kt)("p",null,"While we test the stability of the platform, collect feedback, and optimize the UI flows, we will be focusing on finishing the features that are needed to achieve feature parity between Fleek.co & Fleek.xyz. Additionally, in this period we will develop the migration flow for users."),(0,r.kt)("h3",{id:"release-fleek-platform-v1"},"Release Fleek Platform V1"),(0,r.kt)("p",null,"Once all of the above is achieved we will be releasing to the public what we will know as Fleek Platform V1, the first stable version that will run in parallel with the old platform. At this phase, we will be stopping signups on Fleek.co and offering all the user's migration tools to request to move all their relevant data to Fleek.xyz."),(0,r.kt)("h3",{id:"sunsetting-of-fleekco"},"Sunsetting of Fleek.co"),(0,r.kt)("p",null,"After a prudent time of co-existence between the platforms and when the goals of these processes are met we will be shutting down Fleek.co and automatically migrate the missing users that didn't request it."))}d.isMDXComponent=!0}}]);