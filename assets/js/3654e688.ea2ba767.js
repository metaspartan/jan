"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9488],{33695:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=t(85893),o=t(11151);const r={title:"Integrate OpenRouter with Jan",slug:"/guides/integrations/openrouter",description:"Guide to integrate OpenRouter with Jan",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model","OpenRouter integration"]},a=void 0,s={id:"guides/integrations/integrate-openrouter",title:"Integrate OpenRouter with Jan",description:"Guide to integrate OpenRouter with Jan",source:"@site/docs/guides/07-integrations/02-integrate-openrouter.mdx",sourceDirName:"guides/07-integrations",slug:"/guides/integrations/openrouter",permalink:"/guides/integrations/openrouter",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/guides/07-integrations/02-integrate-openrouter.mdx",tags:[],version:"current",lastUpdatedBy:"Hieu",lastUpdatedAt:1704969462,formattedLastUpdatedAt:"Jan 11, 2024",sidebarPosition:2,frontMatter:{title:"Integrate OpenRouter with Jan",slug:"/guides/integrations/openrouter",description:"Guide to integrate OpenRouter with Jan",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model","OpenRouter integration"]},sidebar:"guidesSidebar",previous:{title:"Integrate Continue with Jan and VS Code",permalink:"/guides/integrations/continue"},next:{title:"Troubleshooting",permalink:"/guides/troubleshooting/"}},d={},l=[{value:"Quick Introduction",id:"quick-introduction",level:2},{value:"Steps to Integrate OpenRouter with Jan",id:"steps-to-integrate-openrouter-with-jan",level:2},{value:"1. Configure OpenRouter API key",id:"1-configure-openrouter-api-key",level:3},{value:"2. Mofidy a Model JSON",id:"2-mofidy-a-model-json",level:3},{value:"3. Start the Model",id:"3-start-the-model",level:3},{value:"4. Try Out the Integration of Jan and OpenRouter",id:"4-try-out-the-integration-of-jan-and-openrouter",level:3}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"quick-introduction",children:"Quick Introduction"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://openrouter.ai/docs#quick-start",children:"OpenRouter"})," is an AI model aggregator. The API can be used by developers to interact with a variety of large language models, generative image models, and generative 3D object models."]}),"\n",(0,i.jsx)(n.p,{children:"In this guide, we will show you how to integrate OpenRouter with Jan, enabling you to leverage remote Large Language Models (LLM) that are available at OpenRouter."}),"\n",(0,i.jsx)(n.h2,{id:"steps-to-integrate-openrouter-with-jan",children:"Steps to Integrate OpenRouter with Jan"}),"\n",(0,i.jsx)(n.h3,{id:"1-configure-openrouter-api-key",children:"1. Configure OpenRouter API key"}),"\n",(0,i.jsxs)(n.p,{children:["You can find your API keys in the ",(0,i.jsx)(n.a,{href:"https://openrouter.ai/keys",children:"OpenRouter API Key"})," and set the OpenRouter API key in ",(0,i.jsx)(n.code,{children:"~/jan/engines/openai.json"})," file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="~/jan/engines/openai.json"',children:'{\n  // highlight-start\n  "full_url": "https://openrouter.ai/api/v1/chat/completions",\n  "api_key": "sk-or-v1<your-openrouter-api-key-here>"\n  // highlight-end\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"2-mofidy-a-model-json",children:"2. Mofidy a Model JSON"}),"\n",(0,i.jsxs)(n.p,{children:["Navigate to the ",(0,i.jsx)(n.code,{children:"~/jan/models"})," folder. Create a folder named ",(0,i.jsx)(n.code,{children:"<openrouter-modelname>"}),", for example, ",(0,i.jsx)(n.code,{children:"openrouter-dolphin-mixtral-8x7b"})," and create a ",(0,i.jsx)(n.code,{children:"model.json"})," file inside the folder including the following configurations:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Ensure the filename must be ",(0,i.jsx)(n.code,{children:"model.json"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Ensure the ",(0,i.jsx)(n.code,{children:"id"})," property is set to the model id from OpenRouter."]}),"\n",(0,i.jsxs)(n.li,{children:["Ensure the ",(0,i.jsx)(n.code,{children:"format"})," property is set to ",(0,i.jsx)(n.code,{children:"api"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Ensure the ",(0,i.jsx)(n.code,{children:"engine"})," property is set to ",(0,i.jsx)(n.code,{children:"openai"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Ensure the ",(0,i.jsx)(n.code,{children:"state"})," property is set to ",(0,i.jsx)(n.code,{children:"ready"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="~/jan/models/openrouter-dolphin-mixtral-8x7b/model.json"',children:'{\n  "source_url": "https://openrouter.ai/",\n  "id": "cognitivecomputations/dolphin-mixtral-8x7b",\n  "object": "model",\n  "name": "Dolphin 2.6 Mixtral 8x7B",\n  "version": "1.0",\n  "description": "This is a 16k context fine-tune of Mixtral-8x7b. It excels in coding tasks due to extensive training with coding data and is known for its obedience, although it lacks DPO tuning. The model is uncensored and is stripped of alignment and bias. It requires an external alignment layer for ethical use. Users are cautioned to use this highly compliant model responsibly, as detailed in a blog post about uncensored models at erichartford.com/uncensored-models.",\n  // highlight-next-line\n  "format": "api",\n  "settings": {},\n  "parameters": {},\n  "metadata": {\n    "tags": ["General", "Big Context Length"]\n  },\n  // highlight-start\n  "engine": "openai",\n  "state": "ready"\n  // highlight-end\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"3-start-the-model",children:"3. Start the Model"}),"\n",(0,i.jsx)(n.p,{children:"Restart Jan and navigate to the Hub. Locate your model and click the Use button."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Dolphin OpenRouter Model",src:t(62442).Z+"",width:"3456",height:"2160"})}),"\n",(0,i.jsx)(n.h3,{id:"4-try-out-the-integration-of-jan-and-openrouter",children:"4. Try Out the Integration of Jan and OpenRouter"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Dolphin OpenRouter Model Trial",src:t(48708).Z+"",width:"1556",height:"1080"})})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},48708:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/02-openrouter-dolphin-trial-378e08f40ad3a379f26e152d7f688808.gif"},62442:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/02-openrouter-dolphin-6b8e2b47c1da87ed6c87305f2b8587f6.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var i=t(67294);const o={},r=i.createContext(o);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);