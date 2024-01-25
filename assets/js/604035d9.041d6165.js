"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4369],{58295:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var s=n(85893),r=n(11151),a=n(74866),o=n(85162);const l={title:"Something's Amiss",slug:"/troubleshooting/somethings-amiss",description:'Troubleshooting "Something\'s amiss".',keywords:["jan ai failed to fetch","failed to fetch error","jan ai error","Jan AI","Jan","ChatGPT alternative","local AI","private AI","convZ ersational AI","no-subscription fee","large language model","troubleshooting"]},i=void 0,u={id:"guides/troubleshooting/somethings-amiss",title:"Something's Amiss",description:'Troubleshooting "Something\'s amiss".',source:"@site/docs/guides/08-troubleshooting/02-somethings-amiss.mdx",sourceDirName:"guides/08-troubleshooting",slug:"/troubleshooting/somethings-amiss",permalink:"/troubleshooting/somethings-amiss",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/guides/08-troubleshooting/02-somethings-amiss.mdx",tags:[],version:"current",lastUpdatedBy:"Hieu",lastUpdatedAt:1706195111,formattedLastUpdatedAt:"Jan 25, 2024",sidebarPosition:2,frontMatter:{title:"Something's Amiss",slug:"/troubleshooting/somethings-amiss",description:'Troubleshooting "Something\'s amiss".',keywords:["jan ai failed to fetch","failed to fetch error","jan ai error","Jan AI","Jan","ChatGPT alternative","local AI","private AI","convZ ersational AI","no-subscription fee","large language model","troubleshooting"]},sidebar:"guidesSidebar",previous:{title:"Stuck on a Broken Build",permalink:"/troubleshooting/stuck-on-broken-build"},next:{title:"Jan is Not Using GPU",permalink:"/troubleshooting/gpu-not-used"}},c={},d=[];function h(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:["\n","\n","\n",(0,s.jsx)(t.p,{children:'Previously labelled "Failed to fetch" error.'}),"\n",(0,s.jsx)(t.p,{children:'You may receive a "Something\'s amiss" response when you first start chatting with a selected model.'}),"\n",(0,s.jsx)(t.p,{children:"This may occur due to several reasons. Please follow these steps to resolve it:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Ensure you are on the latest version of Mac, Windows, or Ubuntu OS version"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Upgrading to the latest version has resolved this issue for most people"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Select a model that is smaller than 80% of your hardware V/RAM."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"For example, if you have an 8GB machine, you should select models smaller than 6GB."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Install the latest ",(0,s.jsx)(t.a,{href:"https://jan.ai/install/nightly/",children:"Nightly release"})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["If you are re-installing Jan, it can help to ",(0,s.jsx)(t.a,{href:"https://jan.ai/troubleshooting/stuck-on-broken-build/",children:"clear the application cache"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Ensure your V/RAM is accessible by the application (some people have virtual RAM)."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["If you are on Nvidia GPUs, please download ",(0,s.jsx)(t.a,{href:"https://developer.nvidia.com/cuda-downloads",children:"Cuda"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["When ",(0,s.jsx)(t.a,{href:"https://jan.ai/troubleshooting/how-to-get-error-logs/",children:"checking app logs"}),", if you encounter the error log ",(0,s.jsx)(t.code,{children:"Bind address failed at 127.0.0.1:3928"}),", it indicates that the port used by Nitro might already be in use. Use the following commands to check the port status:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.Z,{groupId:"operating-systems",children:[(0,s.jsx)(o.Z,{value:"mac",label:"macOS",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"netstat -an | grep 3928\n"})})}),(0,s.jsx)(o.Z,{value:"win",label:"Windows",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:'netstat -ano | find "3928" \ntasklist /fi "PID eq 3928"\n'})})}),(0,s.jsx)(o.Z,{value:"linux",label:"Linux",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:'netstat -anpe | grep "3928" \n'})})})]}),"\n",(0,s.jsxs)(t.admonition,{type:"tip",children:[(0,s.jsx)(t.p,{children:"Jan uses the following ports:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Nitro: 3928"}),"\n",(0,s.jsx)(t.li,{children:"Jan API Server: 1337"}),"\n",(0,s.jsx)(t.li,{children:"Jan Documentation: 3001"}),"\n"]})]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var s=n(36905);const r={tabItem:"tabItem_Ymn6"};var a=n(85893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,o),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var s=n(67294),r=n(36905),a=n(12466),o=n(16550),l=n(20469),i=n(91980),u=n(67392),c=n(50012);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=h(e),[o,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[u,d]=m({queryString:n,groupId:r}),[g,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,c.Nk)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),b=(()=>{const e=u??g;return p({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(85893);function x(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),r=l[n].value;r!==s&&(u(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...a,className:(0,r.Z)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=g(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(j,{...e,...t})]})}function w(e){const t=(0,f.Z)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var s=n(67294);const r={},a=s.createContext(r);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);