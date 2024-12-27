"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[1920],{58860:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>d});var i=n(37953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},y=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),y=r,d=u["".concat(l,".").concat(y)]||u[y]||g[y]||o;return n?i.createElement(d,a(a({ref:t},s),{},{components:n})):i.createElement(d,a({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=y;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:r,a[1]=p;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}y.displayName="MDXCreateElement"},73639:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var i=n(75890),r=(n(37953),n(58860));const o={title:"Query Optimization with Projection",sidebar_position:4,tags:["Docs"]},a="Query Optimization with Projection",p={unversionedId:"query-optimization/query-optimization-with-projection",id:"query-optimization/query-optimization-with-projection",title:"Query Optimization with Projection",description:"Introduction",source:"@site/docs/query-optimization/query-optimization-with-projection.mdx",sourceDirName:"query-optimization",slug:"/query-optimization/query-optimization-with-projection",permalink:"/docs/query-optimization/query-optimization-with-projection",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/docs/query-optimization/query-optimization-with-projection.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",sidebarPosition:4,frontMatter:{title:"Query Optimization with Projection",sidebar_position:4,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Complex Query Tuning",permalink:"/docs/query-optimization/complex-query-optimization"},next:{title:"Materialized View",permalink:"/docs/query-optimization/materialized-view"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Command Set",id:"command-set",level:2},{value:"Data Preparation",id:"data-preparation",level:2},{value:"Adding and Materializing Projections",id:"adding-and-materializing-projections",level:2},{value:"Queries - Order By",id:"queries---order-by",level:2},{value:"Queries - Aggregation",id:"queries---aggregation",level:2},{value:"References",id:"references",level:2}],s={toc:c},u="wrapper";function g(e){let{components:t,...o}=e;return(0,r.yg)(u,(0,i.A)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"query-optimization-with-projection"},"Query Optimization with Projection"),(0,r.yg)("h2",{id:"introduction"},"Introduction"),(0,r.yg)("p",null,"Projections are used to optimize query execution and have the following characteristics:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Rearrange data based on different columns."),(0,r.yg)("li",{parentName:"ul"},"Directly define pre-aggregated models on source tables using aggregated queries."),(0,r.yg)("li",{parentName:"ul"},"Query analysis can automatically select the optimal projection for query optimization without the need to rewrite the query."),(0,r.yg)("li",{parentName:"ul"},"Provide consistency guarantees for any data transformation operation at any time.")),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(69663).A,width:"1607",height:"693"})),(0,r.yg)("p",null,"Currently, we support both optimizer-based and non-optimizer-based projections:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Optimizer-based projections support aggregate (agg) projections when ",(0,r.yg)("inlineCode",{parentName:"li"},"SET enable_optimizer=1")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"SET optimizer_projection_support=1"),"."),(0,r.yg)("li",{parentName:"ul"},"Non-optimizer-based projections support regular and agg projections when ",(0,r.yg)("inlineCode",{parentName:"li"},"SET allow_experimental_projection_optimization=1"),".")),(0,r.yg)("h2",{id:"command-set"},"Command Set"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- Add projection\nALTER TABLE [db].table ADD PROJECTION name (SELECT <COLUMN LIST EXPR> [GROUP BY] [ORDER BY])\n\n-- Drop projection\nALTER TABLE [db].table DROP PROJECTION name\n\n-- Materialize projection\nALTER TABLE [db.]table MATERIALIZE PROJECTION name\n")),(0,r.yg)("h2",{id:"data-preparation"},"Data Preparation"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test.t1\n(\n    `id` UInt32,\n    `name` String,\n    `key1` String,\n    `key2` String,\n    `key3` UInt32,\n    `key4` UInt32,\n    `key5` UInt32,\n    `key6` UInt32,\n    `key7` UInt32,\n    PROJECTION p1\n    (\n        SELECT\n            id,\n            key7\n        ORDER BY key7\n    ),\n    PROJECTION agg_p2\n    (\n        SELECT\n            name,\n            sum(key6) AS s,\n            count()\n        GROUP BY name\n    )\n)\nENGINE = CnchMergeTree\nPARTITION BY name\nORDER BY (name, key1)\nSETTINGS index_granularity = 8192;\n\nINSERT INTO test.t1 SELECT\n    number,\n    toString(rand() % 2),\n    toString(rand(1) % 10),\n    toString(rand(2) % 100),\n    rand(3) % 10,\n    rand(4) % 100,\n    rand(5) % 1000,\n    rand(6) % 10000,\n    rand(7) % 100000\nFROM system.numbers\nLIMIT 100000000;\n")),(0,r.yg)("h2",{id:"adding-and-materializing-projections"},"Adding and Materializing Projections"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- Add a new projection p3\nALTER TABLE test.t1 ADD PROJECTION p3 (SELECT id, key5 ORDER BY key5);\n\n-- Materialize projection p3 for historical data\nALTER TABLE test.t1 MATERIALIZE PROJECTION p3;\n\n-- Drop projection p3\nALTER TABLE test.t1 DROP PROJECTION p3;\n")),(0,r.yg)("h2",{id:"queries---order-by"},"Queries - Order By"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- Without projection\nSELECT key7 FROM test.t1 WHERE key7 = 1;\n\n-- With projection\nSELECT key7 FROM test.t1 WHERE key7 = 1 SETTINGS allow_experimental_projection_optimization=1;\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Results:")),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(57607).A,width:"1606",height:"78"})),(0,r.yg)("center",null,"**Without Projection**"),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(1025).A,width:"1564",height:"66"})),(0,r.yg)("center",null,"**With Projection**"),(0,r.yg)("h2",{id:"queries---aggregation"},"Queries - Aggregation"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- Without projection\nSELECT name, sum(key6), count() FROM test.t1 GROUP BY name;\n\n-- With projection\nSELECT name, sum(key6), count() FROM test.t1 GROUP BY name SETTINGS allow_experimental_projection_optimization=1;\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Results:")),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(97743).A,width:"1566",height:"224"})),(0,r.yg)("center",null,"**Without Projection**"),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(28937).A,width:"1604",height:"224"})),(0,r.yg)("center",null,"**With Projection**"),(0,r.yg)("h2",{id:"references"},"References"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/sql-reference/statements/alter/projection"},"ClickHouse Projections Documentation")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"https://medium.com/datadenys/using-projections-to-speedup-queries-in-clickhouse-cd58e393b1cd"},"Medium Article on Projections in ClickHouse"))))}g.isMDXComponent=!0},69663:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/byconity-projections-cf7feaf465680a512ed1e27552d2d4cc.png"},28937:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/query-agg-with-projections-ca9cf7e110075ae65a415c668852fd1d.png"},97743:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/query-agg-without-projections-2f5b0b7ab3d58124a95ae3d0a590b8ad.png"},1025:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/query-orderby-with-projections-3d150facba52b8f1d41cc36b3ca8c621.png"},57607:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/query-orderby-without-projections-ba0d0fc38069d55509567f6c5e54916f.png"}}]);