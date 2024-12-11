"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[7597],{58860:(e,n,a)=>{a.d(n,{xA:()=>m,yg:()=>u});var l=a(37953);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function t(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,l,i=function(e,n){if(null==e)return{};var a,l,i={},t=Object.keys(e);for(l=0;l<t.length;l++)a=t[l],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(l=0;l<t.length;l++)a=t[l],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var N=l.createContext({}),g=function(e){var n=l.useContext(N),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},m=function(e){var n=g(e.components);return l.createElement(N.Provider,{value:n},e.children)},y="mdxType",E={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},o=l.forwardRef((function(e,n){var a=e.components,i=e.mdxType,t=e.originalType,N=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),y=g(a),o=i,u=y["".concat(N,".").concat(o)]||y[o]||E[o]||t;return a?l.createElement(u,r(r({ref:n},m),{},{components:a})):l.createElement(u,r({ref:n},m))}));function u(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var t=a.length,r=new Array(t);r[0]=o;var p={};for(var N in n)hasOwnProperty.call(n,N)&&(p[N]=n[N]);p.originalType=e,p[y]="string"==typeof e?e:i,r[1]=p;for(var g=2;g<t;g++)r[g]=a[g];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}o.displayName="MDXCreateElement"},40427:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>N,contentTitle:()=>r,default:()=>E,frontMatter:()=>t,metadata:()=>p,toc:()=>g});var l=a(75890),i=(a(37953),a(58860));const t={title:"\u6743\u9650\u7ba1\u7406",sidebar_position:8,tags:["Docs"]},r="\u6743\u9650\u7ba1\u7406",p={unversionedId:"admin-guides/privilege-management",id:"admin-guides/privilege-management",title:"\u6743\u9650\u7ba1\u7406",description:"RBAC \u6a21\u578b",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/admin-guides/privilege-management.mdx",sourceDirName:"admin-guides",slug:"/admin-guides/privilege-management",permalink:"/zh-cn/docs/admin-guides/privilege-management",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/admin-guides/privilege-management.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/tags/docs"}],version:"current",sidebarPosition:8,frontMatter:{title:"\u6743\u9650\u7ba1\u7406",sidebar_position:8,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u96c6\u7fa4\u914d\u7f6e\u53c2\u6570",permalink:"/zh-cn/docs/admin-guides/cluster-configuration"},next:{title:"\u7ba1\u7406\u540e\u53f0\u4efb\u52a1",permalink:"/zh-cn/docs/admin-guides/background-task-management"}},N={},g=[{value:"RBAC \u6a21\u578b",id:"rbac-\u6a21\u578b",level:2},{value:"\u64cd\u4f5c\u7ba1\u7406",id:"\u64cd\u4f5c\u7ba1\u7406",level:2},{value:"\u542f\u7528RBAC",id:"\u542f\u7528rbac",level:3},{value:"\u4e0eClickhouse\u5dee\u5f02",id:"\u4e0eclickhouse\u5dee\u5f02",level:3},{value:"\u5982\u4f55\u4f7f\u7528RBAC",id:"\u5982\u4f55\u4f7f\u7528rbac",level:3},{value:"\u521b\u5efa\u548c\u4fee\u6539\u7528\u6237/\u89d2\u8272",id:"\u521b\u5efa\u548c\u4fee\u6539\u7528\u6237\u89d2\u8272",level:4},{value:"\u4f7f\u7528\u4ee5\u4e0b\u8bed\u6cd5\u521b\u5efa\u89d2\u8272",id:"\u4f7f\u7528\u4ee5\u4e0b\u8bed\u6cd5\u521b\u5efa\u89d2\u8272",level:4},{value:"\u6388\u4e88\u6743\u9650\u548c\u89d2\u8272",id:"\u6388\u4e88\u6743\u9650\u548c\u89d2\u8272",level:4},{value:"\u8bbe\u7f6e\u89d2\u8272",id:"\u8bbe\u7f6e\u89d2\u8272",level:4},{value:"\u64a4\u9500",id:"\u64a4\u9500",level:4},{value:"\u5220\u9664\u89d2\u8272\u548c\u7528\u6237",id:"\u5220\u9664\u89d2\u8272\u548c\u7528\u6237",level:4},{value:"\u8bbf\u95ee\u5b9e\u4f53\u7684\u7cfb\u7edf\u8868",id:"\u8bbf\u95ee\u5b9e\u4f53\u7684\u7cfb\u7edf\u8868",level:4}],m={toc:g},y="wrapper";function E(e){let{components:n,...t}=e;return(0,i.yg)(y,(0,l.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"\u6743\u9650\u7ba1\u7406"},"\u6743\u9650\u7ba1\u7406"),(0,i.yg)("h2",{id:"rbac-\u6a21\u578b"},"RBAC \u6a21\u578b"),(0,i.yg)("p",null,"ByConity\u7684\u6743\u9650\u7ba1\u7406\u8bbe\u8ba1\u662f\u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236RBAC\uff08Role-Based Access Control\uff09\u6a21\u578b\uff0c\u7528\u4e8e\u7ba1\u7406\u548c\u63a7\u5236\u7528\u6237\u5bf9\u7cfb\u7edf\u8d44\u6e90\u7684\u8bbf\u95ee\u6743\u9650\u3002\u5b83\u57fa\u4e8e\u89d2\u8272\u7684\u6982\u5ff5\uff0c\u5c06\u6743\u9650\u5206\u914d\u7ed9\u4e0d\u540c\u7684\u89d2\u8272\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u5206\u914d\u7ed9\u4e2a\u4f53\u7528\u6237\u3002RBAC \u4e3b\u8981\u5305\u542b\u4e09\u4e2a\u6838\u5fc3\u7ec4\u4ef6\uff1a\u89d2\u8272\u3001\u6743\u9650\u548c\u7528\u6237\u3002"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'\u89d2\u8272\uff08Role\uff09\uff1a\u89d2\u8272\u662f\u4e00\u7ec4\u5177\u6709\u76f8\u4f3c\u804c\u8d23\u548c\u6743\u9650\u7684\u7528\u6237\u96c6\u5408\u3002\u4f8b\u5982\uff0c\u4e00\u4e2a\u7cfb\u7edf\u53ef\u80fd\u5b9a\u4e49\u4e86 "\u7ba1\u7406\u5458"\u3001"\u7f16\u8f91\u5458" \u548c "\u8bfb\u8005" \u7b49\u4e0d\u540c\u7684\u89d2\u8272\u3002\u6bcf\u4e2a\u89d2\u8272\u4ee3\u8868\u7740\u4e00\u7ec4\u6743\u9650\uff0c\u800c\u7528\u6237\u53ef\u4ee5\u88ab\u5206\u914d\u5230\u4e00\u4e2a\u6216\u591a\u4e2a\u89d2\u8272\u3002')),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"\u6743\u9650\uff08Permission\uff09\uff1a\u6743\u9650\u662f\u6307\u5bf9\u7cfb\u7edf\u8d44\u6e90\u7684\u8bbf\u95ee\u6743\u9650\u3002\u8d44\u6e90\u53ef\u4ee5\u662f\u6587\u4ef6\u3001\u6570\u636e\u5e93\u3001\u529f\u80fd\u6a21\u5757\u7b49\u3002\u6743\u9650\u5b9a\u4e49\u4e86\u5bf9\u8fd9\u4e9b\u8d44\u6e90\u8fdb\u884c\u64cd\u4f5c\u7684\u80fd\u529b\uff0c\u5982\u8bfb\u53d6\u3001\u5199\u5165\u3001\u4fee\u6539\u7b49\u3002\u6bcf\u4e2a\u89d2\u8272\u90fd\u4e0e\u4e00\u7ec4\u6743\u9650\u76f8\u5173\u8054\u3002")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"\u7528\u6237\uff08User\uff09\uff1a\u7528\u6237\u662f\u7cfb\u7edf\u4e2d\u7684\u4e2a\u4f53\u5b9e\u4f53\uff0c\u53ef\u4ee5\u662f\u7ba1\u7406\u5458\u3001\u5458\u5de5\u3001\u7528\u6237\u7b49\u3002\u7528\u6237\u53ef\u4ee5\u88ab\u5206\u914d\u5230\u4e00\u4e2a\u6216\u591a\u4e2a\u89d2\u8272\uff0c\u4ece\u800c\u83b7\u5f97\u89d2\u8272\u6240\u5177\u6709\u7684\u6743\u9650\u3002"))),(0,i.yg)("p",null,"RBAC \u7684\u6838\u5fc3\u601d\u60f3\u662f\u5c06\u6743\u9650\u6388\u4e88\u89d2\u8272\uff0c\u7136\u540e\u5c06\u89d2\u8272\u6388\u4e88\u7528\u6237\u3002\u8fd9\u79cd\u65b9\u5f0f\u7b80\u5316\u4e86\u6743\u9650\u7ba1\u7406\uff0c\u63d0\u9ad8\u4e86\u7cfb\u7edf\u7684\u53ef\u6269\u5c55\u6027\u548c\u5b89\u5168\u6027\u3002\u901a\u8fc7\u4f7f\u7528 RBAC\uff0c\u7ba1\u7406\u5458\u53ef\u4ee5\u6839\u636e\u4e0d\u540c\u7684\u89d2\u8272\u548c\u804c\u8d23\uff0c\u7075\u6d3b\u5730\u7ba1\u7406\u548c\u63a7\u5236\u7528\u6237\u5bf9\u7cfb\u7edf\u8d44\u6e90\u7684\u8bbf\u95ee\u6743\u9650\uff0c\u4ece\u800c\u5b9e\u73b0\u7cbe\u7ec6\u7684\u8bbf\u95ee\u63a7\u5236\u548c\u6743\u9650\u7ba1\u7406\u3002\nByConity\u4e2d\u7684RBAC\u5728\u5927\u591a\u6570\u65b9\u9762\u90fd\u91c7\u7528\u4e86ClickHouse\u7248\u672c\u7684RBAC\uff0c\u9664\u4e86\u4e00\u4e9b\u8bed\u6cd5\u5dee\u5f02\u548c\u5e95\u5c42\u5b9e\u73b0\u4e4b\u5916\uff0c\u4e0b\u9762\u5c06\u8fdb\u4e00\u6b65\u89e3\u91ca\u3002"),(0,i.yg)("h2",{id:"\u64cd\u4f5c\u7ba1\u7406"},"\u64cd\u4f5c\u7ba1\u7406"),(0,i.yg)("h3",{id:"\u542f\u7528rbac"},"\u542f\u7528RBAC"),(0,i.yg)("p",null,"\u7528\u6237\u901a\u8fc7\u5728 ",(0,i.yg)("inlineCode",{parentName:"p"},"users.xml")," \u6587\u4ef6\u4e2d\uff0c\u8bbe\u7f6e ",(0,i.yg)("inlineCode",{parentName:"p"},"access_management = 1")," \uff0c\u5e76\u4e3a\u9ed8\u8ba4\u7528\u6237\u6dfb\u52a0\u5bc6\u7801\u6765\u542f\u7528RBAC\uff0c\u5982\u4e0b\u56fe\uff0c\u66f4\u591a\u4fe1\u606f",(0,i.yg)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/access-rights/#enabling-access-control"},"\u53c2\u8003\u8fd9\u91cc"),"\u3002"),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(83071).A,width:"2016",height:"1168"})),(0,i.yg)("p",null,"\u5728\u542f\u7528RBAC\u540e\uff0c\u9ed8\u8ba4\u7528\u6237\u5c06\u62e5\u6709\u6240\u6709\u6743\u9650\u3002\u6b64\u540e\uff0c\u5efa\u8bae\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"\u521b\u5efa\u6240\u6709\u6240\u9700\u7684\u7528\u6237\u3002\u8fd8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u8bed\u6cd5\u521b\u5efa\u7ba1\u7406\u5458\u5e10\u6237\uff08\u4f8b\u5982admin_user\uff09"),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"GRANT ALL ON *.* TO admin_user_account WITH GRANT OPTION"),".")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"\u53ef\u4ee5\u901a\u8fc7\u5728users.xml\u6587\u4ef6\u4e2d\u5c06 ",(0,i.yg)("inlineCode",{parentName:"p"},"<readonly>")," \u503c\u8bbe\u7f6e\u4e3a1\u6765\u9650\u5236\u9ed8\u8ba4\u7528\u6237\u7684\u6743\u9650"))),(0,i.yg)("h3",{id:"\u4e0eclickhouse\u5dee\u5f02"},"\u4e0eClickhouse\u5dee\u5f02"),(0,i.yg)("p",null,"1\u3001",(0,i.yg)("a",{parentName:"p",href:"https://github.com/ByConity/ByConity/issues/660"},"\u5e95\u5c42\u5b9e\u73b0"),"\u9ed8\u8ba4\u4f7f\u7528\u952e\u503c\u5b58\u50a8\uff0c\u4ee5\u4fbf\u5728\u5185\u5b58\u4e2d\u6301\u4e45\u5316\u548c\u64cd\u4f5c\u8bbf\u95ee\u5b9e\u4f53\uff0c\u800c\u4e0d\u662f\u78c1\u76d8\u5b58\u50a8\u3002\u8fd9\u662f\u4e3a\u4e86\u652f\u6301ByConity\u7684\u4e91\u539f\u751f\u67b6\u6784\u3002"),(0,i.yg)("p",null,"2\u3001",(0,i.yg)("inlineCode",{parentName:"p"},"CREATE/ALTER")," \u64cd\u4f5c\u5728User/Role\u4e0d\u652f\u6301 ",(0,i.yg)("inlineCode",{parentName:"p"},"HOST")," \u5173\u952e\u5b57\uff0c\u56e0\u4e3aByConity\u4e0d\u4f1a\u5c06\u5b9e\u4f53\u5b58\u50a8\u5728\u670d\u52a1\u5668\u78c1\u76d8\u4e0a\u3002"),(0,i.yg)("p",null,"\u53c2\u6570\u8bbe\u7f6e\uff1a"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u540d\u79f0"),(0,i.yg)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c\u53ca\u542b\u4e49"),(0,i.yg)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"access_entity_ttl"),(0,i.yg)("td",{parentName:"tr",align:"left"},"3600\uff0860\u5206\u949f\uff09\uff0c\u4ee5\u79d2\u4e3a\u5355\u4f4d\u5b58\u50a8\u5728\u5185\u5b58\u4e2d\u7684\u8bbf\u95ee\u5b9e\u4f53\u7684TTL"),(0,i.yg)("td",{parentName:"tr",align:"left"},"\u5efa\u8bae\u5c06\u6b64\u503c\u8bbe\u7f6e\u4e3a\u5408\u7406\u7684\u95f4\u9694\uff0c\u4ee5\u4fbf\u5728\u5185\u5b58\u4e2d\u66f4\u65b0\u5b9e\u4f53\uff0c\u4ee5\u514d\u5bf9\u952e\u503c\u5b58\u50a8\u9020\u6210\u8fc7\u591a\u7684\u8bfb\u53d6\u538b\u529b\u3002")))),(0,i.yg)("h3",{id:"\u5982\u4f55\u4f7f\u7528rbac"},"\u5982\u4f55\u4f7f\u7528RBAC"),(0,i.yg)("h4",{id:"\u521b\u5efa\u548c\u4fee\u6539\u7528\u6237\u89d2\u8272"},"\u521b\u5efa\u548c\u4fee\u6539\u7528\u6237/\u89d2\u8272"),(0,i.yg)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u8bed\u6cd5\u521b\u5efa\u7528\u6237\u8d26\u6237\uff1a"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},"CREATE USER [IF NOT EXISTS | OR REPLACE] name\n[NOT IDENTIFIED | IDENTIFIED {[WITH {no_password | plaintext_password | sha256_password | sha256_hash | double_sha1_password | double_sha1_hash}]\nBY {'password' | 'hash'}}| {WITH ssl_certificate CN 'common_name'}]\n[DEFAULT ROLE role [,...]] [DEFAULT DATABASE database | NONE]\n[GRANTEES {user | role | ANY | NONE} [,...] [EXCEPT {user | role} [,...]]]\n[SETTINGS variable [= value] [MIN [=] min_value] [MAX [=] max_value] [READONLY | WRITABLE] | PROFILE 'profile_name'] [,...]\n\n-- \u793a\u4f8b\nCREATE USER john IDENTIFIED WITH sha256_password BY 'my_password' DEFAULT ROLE accountant;\n\n-- \u4ee5\u7528\u6237\u8eab\u4efd\u767b\u5f55\nclickhouse-client --host 127.0.0.1 --port 9000 --user=john password=my_password\n")),(0,i.yg)("p",null,"\u6ce8\u610f\uff1a\u5bc6\u7801\u5e94\u9075\u5faa\u4ee5\u4e0b\u89c4\u5219\uff1a\u81f3\u5c1112\u4e2a\u5b57\u7b26\u957f\u3001\u5305\u542b\u81f3\u5c111\u4e2a\u6570\u5b57\u5b57\u7b26\u3001\u5305\u542b\u81f3\u5c111\u4e2a\u5927\u5199\u5b57\u7b26\u3001\u5305\u542b\u81f3\u5c111\u4e2a\u5c0f\u5199\u5b57\u7b26\u3001\u5305\u542b\u81f3\u5c111\u4e2a\u7279\u6b8a\u5b57\u7b26\n\u7528\u6237\u8d26\u6237\u5177\u6709\u4ee5\u4e0b\u5c5e\u6027\uff1a\u6807\u8bc6\u4fe1\u606f\u3001\u5b9a\u4e49\u7528\u6237\u53ef\u4ee5\u6267\u884c\u7684\u67e5\u8be2\u8303\u56f4\u7684\u6743\u9650\u3001\u5206\u914d\u548c\u9ed8\u8ba4\u89d2\u8272\u3001\u5728\u7528\u6237\u767b\u5f55\u65f6\u5e94\u7528\u7684\u9ed8\u8ba4\u8bbe\u7f6e\u7ea6\u675f\u3001\u5206\u914d\u7684\u8bbe\u7f6e\u914d\u7f6e\u6587\u4ef6\u3002"),(0,i.yg)("h4",{id:"\u4f7f\u7528\u4ee5\u4e0b\u8bed\u6cd5\u521b\u5efa\u89d2\u8272"},"\u4f7f\u7528\u4ee5\u4e0b\u8bed\u6cd5\u521b\u5efa\u89d2\u8272"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},"CREATE ROLE [IF NOT EXISTS | OR REPLACE] name\n[SETTINGS variable [= value] [MIN [=] min_value] [MAX [=] max_value] [CONST|READONLY|WRITABLE|CHANGEABLE_IN_READONLY] | PROFILE 'profile_name'] [,...]\n\n-- \u521b\u5efa\u5e76\u6388\u4e88\u89d2\u8272\u6743\u9650\u3002\u73b0\u5728accountant\u89d2\u8272\u53ef\u4ee5\u4ecedb\u6570\u636e\u5e93\u8bfb\u53d6\nCREATE ROLE accountant;\nGRANT SELECT ON db.* TO accountant;\n\n-- \u7528\u6237\u53ef\u4ee5\u8bbe\u7f6e\u5176\u88ab\u6388\u4e88\u7684\u89d2\u8272\uff0c\u7136\u540e\u6267\u884c\u5141\u8bb8\u7684\u67e5\u8be2\u3002\u8bf7\u6ce8\u610f\uff0c\u7528\u6237\u548c\u89d2\u8272\u6743\u9650\u662f\u5408\u5e76\u7684\u3002\nSET ROLE accountant;\nSELECT * FROM db.*;\n")),(0,i.yg)("h4",{id:"\u6388\u4e88\u6743\u9650\u548c\u89d2\u8272"},"\u6388\u4e88\u6743\u9650\u548c\u89d2\u8272"),(0,i.yg)("p",null,"RBAC\u4e2d\u7684\u6743\u9650\u662f\u6267\u884c\u7279\u5b9a\u7c7b\u578b\u67e5\u8be2\u7684\u6743\u9650\u3002\u5b83\u4eec\u5177\u6709\u5206\u5c42\u7ed3\u6784\uff0c\u7c7b\u4f3c\u4e8eClickHouse\u3002\u5c06\u6765\u5c06\u6dfb\u52a0\u66f4\u591a\u7c7b\u578b\u7684\u6743\u9650\u3002\u5f53\u524d\u7684\u6743\u9650\u5217\u8868\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"SELECT"),(0,i.yg)("li",{parentName:"ul"},"INSERT"),(0,i.yg)("li",{parentName:"ul"},"ALTER",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER TABLE"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER UPDATE")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER DELETE")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER COLUMN"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER ADD COLUMN")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER DROP COLUMN")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER MODIFY COLUMN")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER COMMENT COLUMN")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER CLEAR COLUMN")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER RENAME COLUMN")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER INDEX"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER ORDER BY")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER SAMPLE BY")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER ADD INDEX")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER DROP INDEX")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER MATERIALIZE INDEX")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER CLEAR INDEX")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER CONSTRAINT"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER ADD CONSTRAINT")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER DROP CONSTRAINT")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER TTL"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER MATERIALIZE TTL")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER SETTINGS")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER MOVE PARTITION")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER FETCH PARTITION")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER FREEZE PARTITION")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER VIEW"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER VIEW REFRESH")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER VIEW MODIFY QUERY")))))),(0,i.yg)("li",{parentName:"ul"},"CREATE",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"CREATE DATABASE")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"CREATE TABLE"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"CREATE ARBITRARY TEMPORARY TABLE"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"CREATE TEMPORARY TABLE")))))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"CREATE VIEW")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"CREATE DICTIONARY")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"CREATE FUNCTION")))),(0,i.yg)("li",{parentName:"ul"},"DROP",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"DROP DATABASE")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"DROP TABLE")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"DROP VIEW")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"DROP DICTIONARY")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"DROP FUNCTION")))),(0,i.yg)("li",{parentName:"ul"},"TRUNCATE"),(0,i.yg)("li",{parentName:"ul"},"OPTIMIZE"),(0,i.yg)("li",{parentName:"ul"},"SHOW",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SHOW DATABASES")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SHOW TABLES")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SHOW COLUMNS")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SHOW DICTIONARIES")))),(0,i.yg)("li",{parentName:"ul"},"KILL QUERY"),(0,i.yg)("li",{parentName:"ul"},"ACCESS MANAGEMENT",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"CREATE USER")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER USER")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"DROP USER")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"CREATE ROLE")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER ROLE")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"DROP ROLE")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"CREATE ROW POLICY")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER ROW POLICY")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"DROP ROW POLICY")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"CREATE QUOTA")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER QUOTA")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"DROP QUOTA")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"CREATE SETTINGS PROFILE")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER SETTINGS PROFILE")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"DROP SETTINGS PROFILE")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SHOW ACCESS"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SHOW_USERS")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SHOW_ROLES")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SHOW_ROW_POLICIES")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SHOW_QUOTAS")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SHOW_SETTINGS_PROFILES")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ROLE ADMIN")))),(0,i.yg)("li",{parentName:"ul"},"SYSTEM",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SYSTEM SHUTDOWN")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SYSTEM DROP CACHE"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SYSTEM DROP DNS CACHE")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SYSTEM DROP MARK CACHE")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SYSTEM DROP UNCOMPRESSED CACHE")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SYSTEM RELOAD"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SYSTEM RELOAD CONFIG")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SYSTEM RELOAD DICTIONARY"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SYSTEM RELOAD EMBEDDED DICTIONARIES")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SYSTEM RELOAD FUNCTION")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SYSTEM RELOAD FUNCTIONS")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SYSTEM MERGES")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SYSTEM TTL MERGES")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SYSTEM FETCHES")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SYSTEM MOVES")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SYSTEM FLUSH"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SYSTEM FLUSH DISTRIBUTED")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SYSTEM FLUSH LOGS")))))),(0,i.yg)("li",{parentName:"ul"},"INTROSPECTION",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"addressToLine")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"addressToLineWithInlines")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"addressToSymbol")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"demangle")))),(0,i.yg)("li",{parentName:"ul"},"SOURCES",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"FILE")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"URL")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"REMOTE")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"YSQL")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ODBC")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"JDBC")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"HDFS")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"S3")))),(0,i.yg)("li",{parentName:"ul"},"dictGet"),(0,i.yg)("li",{parentName:"ul"},"displaySecretsInShowAndSelect")),(0,i.yg)("p",null,"\u4f7f\u7528GRANT\u8bed\u6cd5\u6388\u4e88\u6743\u9650\u6216\u5206\u914d\u89d2\u8272\u7ed9\u7528\u6237/\u89d2\u8272\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},"-- \u6388\u4e88\u6743\u9650\nGRANT privilege[(column_name [,...])] [,...]\nON {db.table|db.|.|table|}\nTO {user | role | CURRENT_USER} [,...] [WITH GRANT OPTION] [WITH REPLACE OPTION]\n\n-- \u6388\u4e88\u89d2\u8272\nGRANT role [,...] TO {user | another_role | CURRENT_USER} [,...]\n[WITH ADMIN OPTION] [WITH REPLACE OPTION]\n\n-- \u6388\u4e88accountant\u89d2\u8272\u5bf9db\u4e2d\u6240\u6709\u8868\u7684SELECT\u6743\u9650\nGRANT SELECT ON db.* TO accountant;\n\n-- \u6388\u4e88\u7528\u6237john\u5bf9db.table\u7684SELECT\u6743\u9650\u3002\u540c\u65f6\u6388\u4e88john\u5c06\u5176\u81ea\u5df1\u7684\u6743\u9650\u6388\u4e88\u5176\u4ed6\u7528\u6237\uff08\u4f5c\u4e3ajohn\u7684GRANTEEs\uff09\u7684\u6743\u9650\u3002\nGRANT SELECT(x,y) ON db.table TO john WITH GRANT OPTION;\nALTER USER john GRANTEES jack;\n\n-- \u521b\u5efa\u7528\u6237\u3001\u89d2\u8272\u5e76\u6388\u4e88\u89d2\u8272\u7684\u793a\u4f8b\u3002\nCREATE ROLE column1_users;\nGRANT SELECT(id, column1) ON db1.table1 TO column1_users;\nCREATE USER column_user IDENTIFIED BY 'password';\nGRANT column1_users TO column_user;\n")),(0,i.yg)("h4",{id:"\u8bbe\u7f6e\u89d2\u8272"},"\u8bbe\u7f6e\u89d2\u8272"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u4e3a\u5f53\u524d\u7528\u6237\u6fc0\u6d3b\u89d2\u8272\u3002\u8be5\u89d2\u8272\u5e94\u8be5\u6388\u4e88\u7528\u6237\u3002")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},"SET ROLE {DEFAULT | NONE | role [,...] | ALL | ALL EXCEPT role [,...]}\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u8bbe\u7f6e\u7528\u6237\u7684\u9ed8\u8ba4\u89d2\u8272")),(0,i.yg)("p",null,"\u9ed8\u8ba4\u89d2\u8272\u662f\u5728\u7528\u6237\u767b\u5f55\u65f6\u6fc0\u6d3b\u7684\u89d2\u8272\u3002\u53ea\u6709\u6388\u4e88\u4e86\u8fd9\u4e9b\u89d2\u8272\u7684\u7528\u6237\u624d\u80fd\u5c06\u5176\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u89d2\u8272\uff0c\u5426\u5219\u4f1a\u629b\u51fa\u5f02\u5e38\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},"SET DEFAULT ROLE {NONE | role [,...] | ALL | ALL EXCEPT role [,...]} TO {user|CURRENT_USER} [,...]\n")),(0,i.yg)("h4",{id:"\u64a4\u9500"},"\u64a4\u9500"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u4ece\u7528\u6237\u6216\u89d2\u8272\u4e2d\u64a4\u9500\u6743\u9650\u3002")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},"-- \u4ece\u7528\u6237\u4e2d\u64a4\u9500\u6743\u9650\nREVOKE [ON CLUSTER cluster_name] privilege[(column_name [,...])] [,...] ON {db.table|db.|.|table|} FROM {user | CURRENT_USER} [,...] | ALL | ALL EXCEPT {user | CURRENT_USER} [,...]\n\n-- \u793a\u4f8b\nREVOKE SELECT ON accounts.* FROM john;\n\n-- \u64a4\u9500\u7528\u6237\u7684\u4e00\u90e8\u5206\u6743\u9650\nGRANT SELECT ON accounts.staff TO mira;\nREVOKE SELECT(wage) ON accounts.staff FROM mira;\n\n-- \u4ece\u7528\u6237\u4e2d\u64a4\u9500\u89d2\u8272\nREVOKE [ON CLUSTER cluster_name] [ADMIN OPTION FOR] role [,...] FROM {user | role | CURRENT_USER} [,...] | ALL | ALL EXCEPT {user_name | role_name | CURRENT_USER} [,...]\n")),(0,i.yg)("h4",{id:"\u5220\u9664\u89d2\u8272\u548c\u7528\u6237"},"\u5220\u9664\u89d2\u8272\u548c\u7528\u6237"),(0,i.yg)("p",null,"Drop roles or users"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},"-- \u5220\u9664\u7528\u6237\nDROP USER [IF EXISTS] name [,...] [ON CLUSTER cluster_name] [FROM access_storage_type]\n\n-- \u5220\u9664\u89d2\u8272\nDROP ROLE [IF EXISTS] name [,...] [ON CLUSTER cluster_name] [FROM access_storage_type]\n")),(0,i.yg)("h4",{id:"\u8bbf\u95ee\u5b9e\u4f53\u7684\u7cfb\u7edf\u8868"},"\u8bbf\u95ee\u5b9e\u4f53\u7684\u7cfb\u7edf\u8868"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},"-- \u663e\u793a\u7528\u6237\u7684\u6743\u9650\nSHOW GRANTS [FOR user1 [, user2 ...]]\n\n-- \u663e\u793a\u7528\u6237\u521b\u5efa\u65f6\u4f7f\u7528\u7684\u53c2\u6570\nSHOW CREATE USER [name1 [, name2 ...] | CURRENT_USER]\n\n-- \u663e\u793a\u89d2\u8272\u521b\u5efa\u65f6\u4f7f\u7528\u7684\u53c2\u6570\nSHOW CREATE ROLE name1 [, name2 ...]\n\n-- \u8bbf\u95ee\u5b9e\u4f53\u7684\u7cfb\u7edf\u8868\u53ef\u4ee5\u5728\u4ee5\u4e0b\u8868\u4e2d\u627e\u5230\uff1arole_grants\u3001roles\u3001users\nSELECT * FROM system.role_grants;\nSELECT * FROM system.roles;\nSELECT * FROM system.users;\n\n")))}E.isMDXComponent=!0},83071:(e,n,a)=>{a.d(n,{A:()=>l});const l=a.p+"assets/images/enable-rbac-d57e69b84f1fc280b64b55878a042aba.png"}}]);