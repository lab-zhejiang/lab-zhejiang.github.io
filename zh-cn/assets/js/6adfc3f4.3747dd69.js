"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[818],{58860:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var r=n(37953);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||y[d]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(75890),a=(n(37953),n(58860));const o={title:"\u57fa\u672cSQL\u64cd\u4f5c",sidebar_position:2,tags:["Docs"]},i=void 0,s={unversionedId:"quick-start/basic-database-operations",id:"version-0.2.0/quick-start/basic-database-operations",title:"\u57fa\u672cSQL\u64cd\u4f5c",description:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u5305\u90e8\u7f72\u3001\u4f7f\u7528docker \u5305\u88c5\u5668\u6216\u5728 Kubernetes \u4e2d\u90e8\u7f72 ByConity\u6765\u5b89\u88c5\u90e8\u7f72 ByConity\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.2.0/quick-start/basic-database-operations.mdx",sourceDirName:"quick-start",slug:"/quick-start/basic-database-operations",permalink:"/zh-cn/docs/0.2.0/quick-start/basic-database-operations",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.2.0/quick-start/basic-database-operations.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/0.2.0/tags/docs"}],version:"0.2.0",sidebarPosition:2,frontMatter:{title:"\u57fa\u672cSQL\u64cd\u4f5c",sidebar_position:2,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u80cc\u666f\u548c\u6280\u672f\u67b6\u6784",permalink:"/zh-cn/docs/0.2.0/introduction/background-and-technical-architecture"},next:{title:"\u5728 Kubernetes \u4e0a\u90e8\u7f72 ByConity",permalink:"/zh-cn/docs/0.2.0/quick-start/deploy-byconity-with-k8s"}},l={},c=[{value:"\u8fde\u63a5\u6570\u636e\u5e93",id:"\u8fde\u63a5\u6570\u636e\u5e93",level:2},{value:"\u521b\u5efa\u5e93\u8868",id:"\u521b\u5efa\u5e93\u8868",level:2},{value:"\u5199\u5165\u548c\u67e5\u8be2",id:"\u5199\u5165\u548c\u67e5\u8be2",level:2},{value:"\u5199\u5165\u6587\u4ef6",id:"\u5199\u5165\u6587\u4ef6",level:2}],p={toc:c},u="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7",(0,a.yg)("a",{parentName:"p",href:"../deployment/package-deployment"},"\u5305\u90e8\u7f72"),"\u3001\u4f7f\u7528",(0,a.yg)("a",{parentName:"p",href:"../deployment/docker-wrapper"},"docker \u5305\u88c5\u5668"),"\u6216",(0,a.yg)("a",{parentName:"p",href:"../deployment/deploy-k8s"},"\u5728 Kubernetes \u4e2d\u90e8\u7f72 ByConity"),"\u6765\u5b89\u88c5\u90e8\u7f72 ByConity\u3002"),(0,a.yg)("p",null,"\u5728\u96c6\u7fa4\u642d\u5efa\u548c\u542f\u52a8\u4e4b\u540e\uff0c\u8ba9\u6211\u4eec\u5feb\u901f\u7684\u8bd5\u7528\u4e00\u4e0b\uff1a\uff09"),(0,a.yg)("h1",{id:"\u5feb\u901f\u4e0a\u624b"},"\u5feb\u901f\u4e0a\u624b"),(0,a.yg)("h2",{id:"\u8fde\u63a5\u6570\u636e\u5e93"},"\u8fde\u63a5\u6570\u636e\u5e93"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"./clickhouse-client -m -h HOST --port PORT\n\n")),(0,a.yg)("h2",{id:"\u521b\u5efa\u5e93\u8868"},"\u521b\u5efa\u5e93\u8868"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"CREATE DATABASE IF NOT EXISTS helloworld;\n\nCREATE TABLE helloworld.my_first_table\n(\n    user_id UInt32,\n    message String,\n    timestamp DateTime\n)\nENGINE = CnchMergeTree()\nPARTITION BY timestamp\nORDER BY (user_id, timestamp);\n\n")),(0,a.yg)("h2",{id:"\u5199\u5165\u548c\u67e5\u8be2"},"\u5199\u5165\u548c\u67e5\u8be2"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"INSERT INTO helloworld.my_first_table (user_id, message, timestamp) VALUES\n    (101, 'Hello, ByConity!',                                 now()),\n    (102, 'Insert a lot of rows per batch',                     yesterday()),\n    (102, 'Sort your data based on your commonly-used queries', today()),\n    (101, 'Granules are the smallest chunks of data read',      now() + 5);\n\nSELECT * FROM helloworld.my_first_table;\n\nSELECT * FROM helloworld.my_first_table ORDER BY timestamp;\n\nSELECT *\u3000FROM helloworld.my_first_table\u3000ORDER BY timestamp\u3000FORMAT JSON;\n\nexit;\n\n")),(0,a.yg)("h2",{id:"\u5199\u5165\u6587\u4ef6"},"\u5199\u5165\u6587\u4ef6"),(0,a.yg)("p",null,"\u5047\u8bbe\u6211\u4eec\u6709\u4e00\u4e2a\u6570\u636e\u6587\u4ef6 data.csv"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"102,This is data in a file,2022-02-22 10:43:28\n101,It is comma-separated,2022-02-23 00:00:00\n103,Use FORMAT to specify the format,2022-02-21 10:43:30\n\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"./clickhouse-client -h {HOST} --port {PORT} --query='INSERT INTO helloworld.my_first_table FORMAT CSV' < data.csv\n\n./clickhouse-client -h {HOST} --port {PORT} --query='SELECT * FROM helloworld.my_first_table'\n\n")),(0,a.yg)("h1",{id:"\u67e5\u770b\u8ba1\u7b97\u7ec4\u72b6\u6001"},"\u67e5\u770b\u8ba1\u7b97\u7ec4\u72b6\u6001"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SELECT * FROM system.worker_groups\n\nQuery id: f60481b4-b9a7-494d-a639-ac7be3aa5292\n\nRow 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nid:             wg_default\ntype:           Physical\nvw_uuid:        1a415df1-6265-40b3-9c00-230fc3b026c1\nvw_name:        vw_default\nlinked_id:\nactive_workers: 1\nmin_cpu_usage:  9\nmax_cpu_usage:  9\navg_cpu_usage:  9\nmin_mem_usage:  8\nmax_mem_usage:  8\navg_mem_usage:  8\nis_auto_linked: 0\n\nSELECT *\nFROM system.workers\n\nQuery id: f2377b52-38eb-4437-9813-d34f9dd28049\n\nRow 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nworker_id:             w1\nhost:                  {HOST}\ntcp_port:              {TCP_PORT}\nrpc_port:              {RPC_PORT}\nhttp_port:             {HTTP_PORT}\nexchange_port:         {EXCHANGE_PORT}\nexchange_status_port:  {EXCHANGE_STATUS_PORT}\nvw_name:               vw_default\nworker_group_id:       wg_default\nquery_num:             0\ncpu_usage:             {xxx}\nreserved_cpu_cores:    0\nmemory_usage:          {xxx}\ndisk_space:            {xxx}\nmemory_available:      {xxx}\nreserved_memory_bytes: 0\nregister_time:         2022-11-30 18:19:49\nlast_update_time:      2022-11-30 18:21:09\nstate:                 1\n\n")),(0,a.yg)("h1",{id:"\u67e5\u770b\u5386\u53f2\u67e5\u8be2"},"\u67e5\u770b\u5386\u53f2\u67e5\u8be2"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/query_log/"},"https://clickhouse.com/docs/en/operations/system-tables/query_log/")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SELECT * FROM system.query_log;\n\n")),(0,a.yg)("h1",{id:""}))}y.isMDXComponent=!0}}]);