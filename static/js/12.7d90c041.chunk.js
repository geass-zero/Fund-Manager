(this["webpackJsonpnyan-fund-management"]=this["webpackJsonpnyan-fund-management"]||[]).push([[12],{1743:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(178),c=a(20),i=a(8),l=a(503),s=a(249),u=a(3),m=Object(l.a)((function(e){return{pageHeaderRoot:Object(i.a)({display:"flex",flexDirection:"column"},e.breakpoints.up("sm"),{alignItems:"center",flexDirection:"row"}),titleRoot:Object(i.a)({},e.breakpoints.down("xs"),{marginBottom:10})}})),p=function(e){var t=e.heading,a=e.breadcrumbComponent,n=e.children,i=Object(c.a)(e,["heading","breadcrumbComponent","children"]),l=m();return o.a.createElement(r.a,Object.assign({className:Object(u.a)(l.pageHeaderRoot,"page-header"),mb:{xs:5,md:6,lg:8}},i),o.a.createElement(s.a,{component:"div",variant:"h1",className:Object(u.a)(l.titleRoot,"title")},t),o.a.createElement(r.a,{ml:{sm:"auto"}},a),n)},b=a(1776),d=a(85),f=Object(l.a)((function(){return{textSm:{fontSize:12},linkBlock:{display:"block",color:"inherit"}}})),h=function(e){var t=e.items,a=(Object(c.a)(e,["items"]),f());return o.a.createElement(b.a,{className:"bread-crumbs","aria-label":"breadcrumb {...rest}"},t.map((function(e,t){return e.isActive?o.a.createElement(s.a,{key:t,className:a.textSm,color:"textPrimary"},e.label):o.a.createElement(d.a,{key:t,className:Object(u.a)(a.textSm,a.linkBlock),color:"inherit",to:e.link||"/"},e.label)})))},g=(a(1623),a(40),a(505),a(1734),a(1606),a(1608),a(1691),Object(l.a)((function(e){var t;return{root:{display:"flex",flexWrap:"wrap"},contentArea:(t={width:"100%"},Object(i.a)(t,e.breakpoints.up("sm"),{paddingRight:e.typography.pxToRem(30),width:"calc(100% - ".concat(e.typography.pxToRem(175),")")}),Object(i.a)(t,e.breakpoints.up("lg"),{paddingRight:e.typography.pxToRem(54)}),t),contentSidebar:{width:e.typography.pxToRem(175),height:"calc(100vh - ".concat(e.typography.pxToRem(102),")"),position:"sticky",top:30,overflowY:"auto",flexShrink:0}}})),a(1611)),O=a(22),j=a.n(O)()((function(e){return{pageFull:{width:"100%"}}}));t.a=function(e){var t=e.heading,a=e.breadcrumbs,n=e.children,c=e.className,i=e.restProps,l=j();return o.a.createElement(g.a,{in:!0,direction:"up",mountOnEnter:!0,unmountOnExit:!0},o.a.createElement(r.a,Object.assign({className:Object(u.a)(l.pageFull,c)},i),(t||a)&&o.a.createElement(p,{heading:t,breadcrumbComponent:a&&o.a.createElement(h,{items:a})}),n))}},1978:function(e,t,a){"use strict";a.r(t);var n=a(11),o=a.n(n),r=a(31),c=a(15),i=a(0),l=a.n(i),s=a(1623),u=a(510),m=(a(1759),a(178),a(504)),p=(Object(m.a)((function(e){return{tooltip:{position:"relative",borderRadius:6,padding:"4px 12px",backgroundColor:"#8d46ef",color:e.palette.common.white}}})),a(249)),b=a(1688),d=a(503),f=a(304),h=Object(d.a)((function(e){return{root:{"& > *":{margin:e.spacing(2)}},padding:{marginLeft:"25px"}}}));function g(){return"ETH"==window.localStorage.getItem("chain")?" ETH":" BNB"}var O=function(e){var t,a=h();return l.a.createElement(u.a,{title:"Pool Name: "+e.poolInfo[3],amount:(t=e.poolInfo[1],t&&(t=f.c.getRoundedBalance(String(t))),t+g()),progress:{value:"0%",icon:"info",color:"#8DCD03"}},l.a.createElement(p.a,{className:a.padding,variant:"h4",gutterBottom:!0},"Total Profits: ",e.poolInfo[2]," ",g()),l.a.createElement(b.a,{href:"https://nyan.finance/pool/"+e.poolInfo[0],className:a.padding,variant:"contained",color:"primary"},"View Pool"))},j=a(505),v=a(1743),x=a(102),y=[{label:"Home",link:"/"},{label:"Dashboard",link:"/dashboard"},{label:"Pools",isActive:!0}];t.default=function(){var e=Object(i.useState)([]),t=Object(c.a)(e,2),a=t[0],n=t[1],u=Object(i.useState)([]),m=Object(c.a)(u,2),p=m[0],b=m[1],d=Object(i.useState)([]),h=Object(c.a)(d,2),g=h[0],E=h[1],k=Object(i.useState)([]),w=Object(c.a)(k,2),R=w[0],S=w[1];return Object(x.useEffect)((function(){function e(){return(e=Object(r.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.b.getAllSelfPools();case 2:t=e.sent,n(t[0]),b(t[1]),E(t[2]),S(t[3]);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),l.a.createElement(v.a,{heading:"Available Pools",breadcrumbs:y},l.a.createElement(j.a,null,function(e,t,a,n){for(var o=[],r=0;r<e.length;r++){var c=[];c.push(e[r]),c.push(t[r]),c.push(a[r]),c.push(n[r]),o.push(l.a.createElement(s.a,{item:!0,xs:12,sm:6,md:3},l.a.createElement(O,{poolInfo:c})))}return o}(a,p,g,R)))}}}]);
//# sourceMappingURL=12.7d90c041.chunk.js.map