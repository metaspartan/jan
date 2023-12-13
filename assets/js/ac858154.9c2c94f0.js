"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5354],{72708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=n(85893),a=n(11151);const r={title:"Chats",slug:"/specs/chats",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model"]},i=void 0,o={id:"specs/engineering/chats",title:"Chats",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",source:"@site/docs/specs/engineering/chats.md",sourceDirName:"specs/engineering",slug:"/specs/chats",permalink:"/specs/chats",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/specs/engineering/chats.md",tags:[],version:"current",lastUpdatedBy:"0xSage",lastUpdatedAt:1702447903,formattedLastUpdatedAt:"Dec 13, 2023",frontMatter:{title:"Chats",slug:"/specs/chats",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model"]},sidebar:"specsSidebar",previous:{title:"Settings",permalink:"/specs/settings"},next:{title:"Models",permalink:"/specs/models"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Implementation",id:"implementation",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsx)(t.p,{children:"This is currently under development."})}),"\n",(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(t.p,{children:["In Jan, ",(0,s.jsx)(t.code,{children:"chats"})," are LLM responses in the form of OpenAI compatible ",(0,s.jsx)(t.code,{children:"chat completion objects"}),"."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Models take a list of messages and return a model-generated response as output."}),"\n",(0,s.jsxs)(t.li,{children:["An ",(0,s.jsx)(t.a,{href:"https://platform.openai.com/docs/api-reference/chat",children:"OpenAI Chat API"})," compatible endpoint at ",(0,s.jsx)(t.code,{children:"localhost:1337/v1/chats"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,s.jsxs)(t.p,{children:["Chats are stateless, thus are not saved in ",(0,s.jsx)(t.code,{children:"janroot"}),". Any content and relevant metadata from calling this endpoint is extracted and persisted through ",(0,s.jsx)(t.a,{href:"/specs/messages",children:"Messages"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,s.jsxs)(t.p,{children:["Jan's Chat API is compatible with ",(0,s.jsx)(t.a,{href:"https://platform.openai.com/docs/api-reference/chat",children:"OpenAI's Chat API"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"https://jan.ai/api-reference/#tag/Chat-Completion",children:"Jan Chat API"})]}),"\n",(0,s.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsxs)(t.p,{children:["Under the hood, the ",(0,s.jsx)(t.code,{children:"/chat"})," endpoint simply reroutes an existing endpoint from ",(0,s.jsx)(t.a,{href:"https://nitro.jan.ai",children:"Nitro server"}),". Nitro is a lightweight & local inference server, written in C++ and embedded into the Jan app. See ",(0,s.jsx)(t.a,{href:"https://nitro.jan.ai/docs",children:"Nitro documentation"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var s=n(67294);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);