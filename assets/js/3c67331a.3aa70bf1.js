"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[9767],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=l,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},920:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(7462),l=(n(7294),n(3905));const r={draft:!1,title:"IPFS | SDK | Fleek Docs",sidebarCollapsible:!1,sidebar_position:8,date:new Date("2023-01-10T09:00:00.000Z"),description:"Learn how to pin a file on IPFS using the service's primary methods. Upload files individually, in bulk, or directly from your local system.",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Accounts","Guide","Learn","Fleek"]},i=void 0,o={unversionedId:"SDK/ipfs",id:"SDK/ipfs",title:"IPFS | SDK | Fleek Docs",description:"Learn how to pin a file on IPFS using the service's primary methods. Upload files individually, in bulk, or directly from your local system.",source:"@site/docs/SDK/ipfs.md",sourceDirName:"SDK",slug:"/SDK/ipfs",permalink:"/docs/SDK/ipfs",draft:!1,tags:[{label:"Accounts",permalink:"/docs/tags/accounts"},{label:"Guide",permalink:"/docs/tags/guide"},{label:"Learn",permalink:"/docs/tags/learn"},{label:"Fleek",permalink:"/docs/tags/fleek"}],version:"current",sidebarPosition:8,frontMatter:{draft:!1,title:"IPFS | SDK | Fleek Docs",sidebarCollapsible:!1,sidebar_position:8,date:"2023-01-10T09:00:00.000Z",description:"Learn how to pin a file on IPFS using the service's primary methods. Upload files individually, in bulk, or directly from your local system.",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Accounts","Guide","Learn","Fleek"]},sidebar:"default",previous:{title:"SDK | Fleek Docs",permalink:"/docs/SDK/"},next:{title:"Projects | SDK | Fleek Docs",permalink:"/docs/SDK/projects"}},p={},s=[{value:"How to pin a file",id:"how-to-pin-a-file",level:3},{value:"<strong><em>Parameters</em></strong>",id:"parameters",level:4},{value:"<strong>Returns</strong>",id:"returns",level:4},{value:"<strong>Function types</strong>",id:"function-types",level:4},{value:"<strong>Example</strong>",id:"example",level:4}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"how-to-pin-a-file"},"How to pin a file"),(0,l.kt)("p",null,"Here is a list of the available methods for the ",(0,l.kt)("inlineCode",{parentName:"p"},"IPFS")," service:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"add")),(0,l.kt)("td",{parentName:"tr",align:null},"Uploads a file from a Buffer and a path representing the file location.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"addAll")),(0,l.kt)("td",{parentName:"tr",align:null},"Upload an array of files, each one represented by a content and a path representing the file location.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"addFromPath")),(0,l.kt)("td",{parentName:"tr",align:null},"Uploads a file from the local filesystem.")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"`add`"),"***Parameters:***",(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"file"),": Object of type ",(0,l.kt)("inlineCode",{parentName:"li"},"IpfsFile")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path"),": Path of the file"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cid"),": Content hash associated with the file"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"size"),": Size of the file"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Function types:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"type IpfsFile = {\n    path: string;\n    content?: Buffer;\n}\n\ntype UploadResult = {\n    cid: CID;\n    size: number;\n    path: string;\n}\n\nadd: (file: IpfsFile) => Promise<UploadResult>;\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"copy",copy:!0},"// fleekSdk is an authenticated instance of FleekSDK\n// with a selected projectId\n\nconst uploadToIPFS = async (filename: string, content: Buffer) => {\n    const result = await fleekSdk.ipfs().add({\n        path: filename,\n        content: content,\n    })\n    \n    return result\n}\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"`addAll`"),"***Parameters:***",(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"files"),": List of Objects of type ",(0,l.kt)("inlineCode",{parentName:"li"},"IpfsFile")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options"),": Optional Object with properties:"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"wrapWithDirectory"),": boolean if is folder"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Returns:"))),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UploadResult[]"),": List of Objects with properties:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path"),": Path of the file"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cid"),": Content hash associated with the file"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"size"),": Size of the file"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Function types:"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"type IpfsFile = {\n    path: string;\n    content?: Buffer;\n}\n\ntype UploadResult = {\n    cid: CID;\n    size: number;\n    path: string;\n}\n\naddAll: (\n    files: IpfsFile[],\n    options?: AddAllOptions\n) => Promise<UploadResult[]>;\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Example:"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"copy",copy:!0},"// fleekSdk is an authenticated instance of FleekSDK\n// with a selected projectId\n\nimport { type IpfsFile } from '@fleekxyz/sdk'\n\nconst uploadToIPFS = async (files: IpfsFile[]) => {\n    const result = await fleekSdk.ipfs().addAll(\n        files\n    )\n    \n    return result\n}\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"`addFromPath`"),(0,l.kt)("h4",{id:"parameters"},(0,l.kt)("strong",{parentName:"h4"},(0,l.kt)("em",{parentName:"strong"},"Parameters"))),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path"),": String path of file in local filesystem"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options:")," Optional Object with properties:"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"wrapWithDirectory"),": boolean if is folder"))),(0,l.kt)("h4",{id:"returns"},(0,l.kt)("strong",{parentName:"h4"},"Returns")),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UploadResult[]"),": List of Objects with properties:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path"),": Path of the file"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cid"),": Content hash associated with the file"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"size"),": Size of the file"))))),(0,l.kt)("h4",{id:"function-types"},(0,l.kt)("strong",{parentName:"h4"},"Function types")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"type AddFromPathOptions = {\n  wrapWithDirectory?: boolean;\n}\n\ntype UploadResult = {\n  cid: CID;\n  size: number;\n  path: string;\n}\n\naddFromPath: (\n  path: string,\n  options?: AddFromPathOptions\n) => Promise<UploadResult[]>;\n")),(0,l.kt)("h4",{id:"example"},(0,l.kt)("strong",{parentName:"h4"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"copy",copy:!0},"// fleekSdk is an authenticated instance of FleekSDK\n// with a selected projectId\n\nconst uploadToIPFS = async (filePath: string) => {\n  const result = await fleekSdk.ipfs().addFromPath(filePath);\n\n  return result\n}\n"))))}c.isMDXComponent=!0}}]);