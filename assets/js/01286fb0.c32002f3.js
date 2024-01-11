"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4794],{97309:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var r=i(85893),s=i(11151);const t={title:"Hardware Requirements",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model"]},o=void 0,a={id:"guides/installation/hardware",title:"Hardware Requirements",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",source:"@site/docs/guides/02-installation/06-hardware.md",sourceDirName:"guides/02-installation",slug:"/guides/installation/hardware",permalink:"/guides/installation/hardware",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/guides/02-installation/06-hardware.md",tags:[],version:"current",lastUpdatedBy:"Hieu",lastUpdatedAt:1704962313,formattedLastUpdatedAt:"Jan 11, 2024",sidebarPosition:6,frontMatter:{title:"Hardware Requirements",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model"]},sidebar:"guidesSidebar",previous:{title:"Nightly Release",permalink:"/install/nightly"},next:{title:"Chatting",permalink:"/guides/chatting/"}},l={},d=[{value:"Disk Space",id:"disk-space",level:2},{value:"RAM and GPU VRAM",id:"ram-and-gpu-vram",level:2},{value:"Best Models for your V/RAM",id:"best-models-for-your-vram",level:2},{value:"Architecture",id:"architecture",level:2},{value:"CPU Support",id:"cpu-support",level:3},{value:"GPU Support",id:"gpu-support",level:3}];function c(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Jan is designed to be lightweight and able to run Large Language Models (LLMs) out-of-the-box."}),"\n",(0,r.jsx)(n.p,{children:"The current download size is less than 150 MB and has a disk space of ~300 MB."}),"\n",(0,r.jsx)(n.p,{children:"To ensure optimal performance, please see the following system requirements:"}),"\n",(0,r.jsx)(n.h2,{id:"disk-space",children:"Disk Space"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Minimum requirement","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"At least 5 GB of free disk space is required to accommodate the download, storage, and management of open-source LLM models."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Recommended","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"For an optimal experience and to run most available open-source LLM models on Jan, it is recommended to have 10 GB of free disk space."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"ram-and-gpu-vram",children:"RAM and GPU VRAM"}),"\n",(0,r.jsx)(n.p,{children:"The amount of RAM on your system plays a crucial role in determining the size and complexity of LLM models you can effectively run. Jan can be utilized on traditional computers where RAM is a key resource. For enhanced performance, Jan also supports GPU acceleration, utilizing the VRAM of your graphics card."}),"\n",(0,r.jsx)(n.h2,{id:"best-models-for-your-vram",children:"Best Models for your V/RAM"}),"\n",(0,r.jsx)(n.p,{children:"The RAM and GPU VRAM requirements are dependent on the size and complexity of the LLM models you intend to run. The following are some general guidelines to help you determine the amount of RAM or VRAM you need to run LLM models on Jan"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"8 GB of RAM"}),": Suitable for running smaller models like 3B models or quantized 7B models"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"16 GB of RAM (recommended)"}),': This is considered the "minimum usable models" threshold, particularly for 7B models (e.g Mistral 7B, etc)']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Beyond 16GB of RAM"}),": Required for handling larger and more sophisticated model, such as 70B models."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"architecture",children:"Architecture"}),"\n",(0,r.jsx)(n.p,{children:"Jan is designed to run on multiple architectures, versatility and widespread usability. The supported architectures include:"}),"\n",(0,r.jsx)(n.h3,{id:"cpu-support",children:"CPU Support"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"x86"}),": Jan is well-suited for systems with x86 architecture, which is commonly found in traditional desktops and laptops. It ensures smooth performance on a variety of devices using x86 processors."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ARM"}),": Jan is optimized to run efficiently on ARM-based systems, extending compatibility to a broad range of devices using ARM processors."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"gpu-support",children:"GPU Support"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"NVIDIA"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"AMD"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"ARM64 Mac"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var r=i(67294);const s={},t=r.createContext(s);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);