"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[4686],{58860:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>m});var n=a(37953);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},y="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),y=c(a),d=r,m=y["".concat(p,".").concat(d)]||y[d]||s[d]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[y]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},13338:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(75890),r=(a(37953),a(58860));const o={title:"\u6570\u636e\u6a21\u578b",sidebar_position:1,tags:["Docs"]},i="\u6570\u636e\u6a21\u578b",l={unversionedId:"table-design/data-model",id:"table-design/data-model",title:"\u6570\u636e\u6a21\u578b",description:"\u5217\u5b58\u8bbe\u8ba1\u539f\u7406",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/table-design/data-model.mdx",sourceDirName:"table-design",slug:"/table-design/data-model",permalink:"/zh-cn/docs/table-design/data-model",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/table-design/data-model.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/tags/docs"}],version:"current",sidebarPosition:1,frontMatter:{title:"\u6570\u636e\u6a21\u578b",sidebar_position:1,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u5373\u5e2d\u5bfc\u5165",permalink:"/zh-cn/docs/data-import/import-methods/ad-hoc-import"},next:{title:"\u8868\u5f15\u64ce",permalink:"/zh-cn/docs/table-design/table-engine"}},p={},c=[{value:"\u5217\u5b58\u8bbe\u8ba1\u539f\u7406",id:"\u5217\u5b58\u8bbe\u8ba1\u539f\u7406",level:2},{value:"Data Layout",id:"data-layout",level:3},{value:"Part Delta",id:"part-delta",level:3},{value:"Part \u6587\u4ef6",id:"part-\u6587\u4ef6",level:2},{value:"Compaction",id:"compaction",level:2}],u={toc:c},y="wrapper";function s(e){let{components:t,...a}=e;return(0,r.yg)(y,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u6570\u636e\u6a21\u578b"},"\u6570\u636e\u6a21\u578b"),(0,r.yg)("h2",{id:"\u5217\u5b58\u8bbe\u8ba1\u539f\u7406"},"\u5217\u5b58\u8bbe\u8ba1\u539f\u7406"),(0,r.yg)("p",null,"\u901a\u5e38\u4e8b\u52a1\u578b\u6570\u636e\u5e93\u91c7\u7528\u884c\u5b58\u4fbf\u4e8e\u652f\u6301\u4e8b\u52a1\u548c\u9ad8\u5e76\u53d1\u8bfb\u5199\uff0c\u5206\u6790\u578b\u6570\u636e\u5e93\u91c7\u7528\u5217\u5b58\u51cf\u5c11 IO \u548c\u4fbf\u4e8e\u538b\u7f29\u3002ByConity \u91c7\u7528\u5217\u5b58\u7684\u65b9\u5f0f\uff0c\u4fdd\u8bc1\u8bfb\u5199\u6027\u80fd\u3001\u652f\u6301\u4e8b\u52a1\u4e00\u81f4\u6027\uff0c\u53c8\u9002\u7528\u5927\u89c4\u6a21\u7684\u6570\u636e\u8ba1\u7b97\u3002"),(0,r.yg)("h3",{id:"data-layout"},"Data Layout"),(0,r.yg)("p",null,"\u8868\u6570\u636e\u7269\u7406\u4e0a\u6309 Partition Key \u5207\u5206\u4e3a\u591a\u4e2a Parts \u5b58\u50a8\u5728\u7edf\u4e00\u7684\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf\u548c\u4e91\u5b58\u50a8\u7684\u903b\u8f91\u5b58\u50a8\u8def\u5f84\u4e0b\uff0c\u6bcf\u4e2a Part \u7684\u5927\u5c0f\u6709\u6570\u636e\u91cf\u548c\u884c\u6570\u9650\u5236\uff0c\u8ba1\u7b97\u7ec4\u6839\u636e\u670d\u52a1\u8282\u70b9\u5206\u914d\u7684\u7b56\u7565\uff08\u9884\u5148\u5206\u914d\u548c\u5b9e\u65f6\u5206\u914d\uff09\u83b7\u5f97\u5176\u5bf9\u5e94\u7684\u90e8\u5206 parts\u3002"),(0,r.yg)("h3",{id:"part-delta"},"Part Delta"),(0,r.yg)("p",null,"Part \u6570\u636e\u6700\u521d\u6784\u5efa\u4e4b\u540e\u662f\u4e00\u4e2a\u884c\u5217\u6df7\u5408\u5b58\u50a8\u7684 Part \u6570\u636e\u6587\u4ef6\uff0c\u968f\u7740 DML/\u6570\u636e\u5b57\u5178/Bitmap index \u7b49\u6784\u5efa\u5de5\u4f5c\u7684\u8fdb\u884c Part \u5b58\u5728\u589e\u91cf\u6570\u636e\uff0c\u8fd9\u90e8\u5206\u6570\u636e\u53ef\u4ee5\u6709\u4ee5\u4e0b\u4e24\u79cd\u5b58\u50a8\u65b9\u5f0f\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u65b9\u5f0f\u4e00\uff1a\u6bcf\u6b21\u6784\u5efa\u90fd\u4f1a Rewrite Part \u6570\u636e")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u65b9\u5f0f\u4e8c\uff1a\u751f\u6210\u589e\u91cf\u6570\u636e\uff0c\u540e\u53f0\u5f02\u6b65\u5408\u5e76\u6210\u4e00\u4e2a\u5927\u7684 Part \u6587\u4ef6"))),(0,r.yg)("p",null,"\u65b9\u5f0f\u4e00\u5bf9\u6574\u4e2a\u96c6\u7fa4\u7684\u53ef\u7528\u6027\u53ef\u80fd\u4f1a\u6709\u4e00\u5b9a\u7684\u5f71\u54cd\u6211\u4eec\u4e3b\u8981\u91c7\u7528\u65b9\u5f0f\u4e8c\uff0c\u4e3b\u8981\u8003\u8651\u5982\u4e0b\u4e24\u70b9\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u6bcf\u6b21 DML/\u6570\u636e\u5b57\u5178\u7b49\u6784\u5efa\u90fd\u53ef\u80fd\u6d89\u53ca\u5230\u6574\u4e2a\u8868 Parts \u7684\u5168\u91cf IO \u64cd\u4f5c\uff0c\u4ee3\u4ef7\u6bd4\u8f83\u5927")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u6784\u5efa\u65f6\u95f4\u6bd4\u8f83\u957f\uff0c DML \u7b49\u64cd\u4f5c\u4f1a\u6bd4\u8f83\u957f\u7684\u65f6\u95f4\u624d\u80fd\u505a\u5b8c\uff0c\u5bf9\u7528\u6237\u4e0d\u53cb\u597d"))),(0,r.yg)("h2",{id:"part-\u6587\u4ef6"},"Part \u6587\u4ef6"),(0,r.yg)("p",null,"Part \u6570\u636e\u901a\u5e38\u5305\u542b\u5143\u4fe1\u606f\u548c\u6570\u636e\u4e24\u90e8\u5206\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5143\u4fe1\u606f\uff1a\u5305\u542b\u6709\u5173\u6570\u636e\u5728\u6570\u636e\u6587\u4ef6\u4e2d\u4f4d\u7f6e\uff08\u4f8b\u5982Offset\uff09\u3001\u5176\u5305\u542b\u7684\u884c\u6570\uff08Rows\uff09\u3001\u6570\u636e\u7684\u6a21\u5f0f\uff08Schema\uff09\u4ee5\u53ca\u5217\u6570\u636e\u4fe1\u606f\u7b49\u91cd\u8981\u4fe1\u606f\u3002\u8fd9\u4e9b\u5143\u4fe1\u606f\u662f\u9700\u8981\u6301\u4e45\u5316\u5b58\u50a8\u7684\uff0c\u4e14\u5728\u8ba1\u7b97\u8282\u70b9\u4e2d\u901a\u5e38\u4f1a\u88ab\u7f13\u5b58\uff0c\u4ee5\u4fbf\u4e8e\u5feb\u901f\u5b9a\u4f4d\u548c\u8bbf\u95ee\u6570\u636e\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u6570\u636e\u4fe1\u606f\uff1a\u8fd9\u90e8\u5206\u662f\u5b9e\u9645\u7684\u6570\u636e\u5185\u5bb9\uff0c\u5305\u62ec\u5b9e\u9645\u7684\u5217\u6570\u636e\uff08Column Bin Data\uff09\u3001\u5217\u6807\u8bb0\u6570\u636e\uff08Column Mrk Data\uff09\u3001Map\u5173\u952e\u5b57\u4e8c\u8fdb\u5236\u6570\u636e\uff08Map Key Bin\uff09\u3001Map\u5173\u952e\u5b57\u7d22\u5f15\uff08Map Key Index\uff09\u3001\u6570\u636e\u5b57\u5178\u6570\u636e\uff08Data Dictionary Data\uff09\u3001\u4f4d\u56fe\u7d22\u5f15\u6570\u636e\uff08Bitmap Index Data\uff09\u7b49\u3002\u8fd9\u4e9b\u6570\u636e\u6309\u7167\u5143\u4fe1\u606f\u4e2d\u7684Offset\u4fe1\u606f\u5728Part\u7684\u6570\u636e\u6587\u4ef6\u4e2d\u4f9d\u6b21\u5b58\u50a8\u3002"))),(0,r.yg)("h2",{id:"compaction"},"Compaction"),(0,r.yg)("p",null,"ByConity \u652f\u6301\u5c06\u4e00\u4e2a part \u6587\u4ef6\u62c6\u5206\u4e3a\u591a\u4e2a\u5c0f\u6587\u4ef6\uff0c\u901a\u8fc7\u914d\u7f6e Part \u7684\u6700\u5927 Size \u548c\u6700\u5927\u884c\u6570\uff0cCompact \u4e4b\u540e\u7684 Part \u9700\u8981\u6ee1\u8db3\u8fd9\u4e2a\u9650\u5236\u3002"),(0,r.yg)("p",null,"ByConity \u4e2d\u7684 Compaction \u662f\u5728\u5168\u5c40\u505a\u7684\uff0c\u4e0e\u524d\u9762\u63d0\u9ad8\u7684\u5168\u5c40\u7684 block ID \u4fdd\u6301\u4e00\u81f4\u3002"))}s.isMDXComponent=!0}}]);