import{A as z}from"./AppType.44c77136.js";import{d as I,r as P}from"./elements.227b31a2.js";import{t as T,p as R}from"./shared.2d2ec151.js";import{_ as A}from"./elevation.c2941a7c.js";import{q,r as m,y as L,o as D,c as E,B as O,_ as W,$ as Y,l as r,t as a,d as x,a as s,h as n,w as l,F as G,V as J,W as K}from"./vendor.ea41cd30.js";import{S as Q}from"./index.9cffb06b.js";import{B as X}from"./index.0d6951cf.js";import{u as Z,a as N,_ as tt,b as et,c as ot,w as nt}from"./en-US.64d12132.js";import"./index.2bd4354e.js";import"./index.1414fccc.js";import"./zIndex.c624737f.js";import"./index.510439cf.js";import"./components.c996eb06.js";import"./lock.67e58c2a.js";import"./index.931337ba.js";const at={time:{type:[String,Number],default:0},format:{type:String,default:"HH : mm : ss"},autoStart:{type:Boolean,default:!0},onEnd:{type:Function},onChange:{type:Function}};const k=1e3,F=60*k,b=60*F,M=24*b,st=q({name:"VarCountdown",props:at,setup(t){const o=m(0),u=m(!1),e=m(""),h=m(0),C=m(0),c=m({}),d=p=>{var B;const v=Math.floor(p/M),y=Math.floor(p%M/b),w=Math.floor(p%b/F),_=Math.floor(p%F/k),V=Math.floor(p%k),j={days:v,hours:y,minutes:w,seconds:_,milliseconds:V};c.value=j,(B=t.onChange)==null||B.call(t,c.value),e.value=R(t.format,j)},f=()=>{const{time:p,onEnd:v,autoStart:y}=t,w=Date.now();o.value||(o.value=w+T(p));let _=o.value-w;if(_<0&&(_=0),C.value=_,d(_),_===0){v==null||v();return}(y||u.value)&&(h.value=P(f))},i=()=>{u.value||(u.value=!0,o.value=Date.now()+(C.value||T(t.time)),f())},$=()=>{u.value=!1},g=()=>{o.value=0,u.value=!1,I(h.value),f()};return L(()=>t.time,()=>g(),{immediate:!0}),{showTime:e,timeData:c,start:i,pause:$,reset:g}}}),ut={class:"var-countdown"};function ct(t,o,u,e,h,C){return D(),E("div",ut,[O(t.$slots,"default",W(Y(t.timeData)),()=>[r(a(t.showTime),1)])])}var S=A(st,[["render",ct]]);S.install=function(t){t.component(S.name,S)};var rt={basicUsage:"\u57FA\u672C\u4F7F\u7528",customFormat:"\u81EA\u5B9A\u4E49\u683C\u5F0F",showMillisecond:"\u663E\u793A\u6BEB\u79D2",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",manualControl:"\u624B\u52A8\u63A7\u5236",format:"DD \u5929 HH \u65F6 mm \u5206 ss \u79D2",startText:"\u5F00\u59CB",pauseText:"\u6682\u505C",resetText:"\u91CD\u7F6E"},lt={basicUsage:"Basic Usage",customFormat:"Custom Format",showMillisecond:"Show Millisecond",customStyle:"Custom Style",manualControl:"Manual Control",format:"DD Day, HH:mm:ss",startText:"Start",pauseText:"Pause",resetText:"Reset"};const{add:U,use:it,pack:mt,packs:Ht,merge:$t}=Z(),dt=t=>{ot(t),it(t)};N("zh-CN",tt);N("en-US",et);U("zh-CN",rt);U("en-US",lt);const ft={name:"CountdownExample",components:{VarCountdown:S,VarButton:X,AppType:z},setup(){const t=m(null),o=m(3e3),u=()=>{Q.info("end!")},e=()=>{};return nt(dt),{time:o,pack:mt,end:u,countdown:t,change:e}}},H=t=>(J("data-v-4f16190e"),t=t(),K(),t),pt={class:"block"},_t=H(()=>s("span",{class:"colon"},":",-1)),vt={class:"block"},ht=H(()=>s("span",{class:"colon"},":",-1)),Ct={class:"block"},wt={class:"btn-container"};function St(t,o,u,e,h,C){const c=x("app-type"),d=x("var-countdown"),f=x("var-button");return D(),E(G,null,[s("div",null,[n(c,null,{default:l(()=>[r(a(e.pack.basicUsage),1)]),_:1}),n(d,{time:"108000000"})]),s("div",null,[n(c,null,{default:l(()=>[r(a(e.pack.customFormat),1)]),_:1}),n(d,{time:"108000000",format:e.pack.format},null,8,["format"])]),s("div",null,[n(c,null,{default:l(()=>[r(a(e.pack.showMillisecond),1)]),_:1}),n(d,{time:"108000000",format:"HH : mm : ss : SS"})]),s("div",null,[n(c,null,{default:l(()=>[r(a(e.pack.customStyle),1)]),_:1}),n(d,{time:"108000000"},{default:l(i=>[s("span",pt,a(i.hours),1),_t,s("span",vt,a(i.minutes),1),ht,s("span",Ct,a(i.seconds),1)]),_:1})]),s("div",null,[n(c,null,{default:l(()=>[r(a(e.pack.manualControl),1)]),_:1}),n(d,{time:e.time,ref:"countdown","auto-start":!1,format:"ss : SSS",onEnd:e.end,onChange:e.change},null,8,["time","onEnd","onChange"]),s("div",wt,[n(f,{type:"primary",onClick:o[0]||(o[0]=i=>t.$refs.countdown.start())},{default:l(()=>[r(a(e.pack.startText),1)]),_:1}),n(f,{onClick:o[1]||(o[1]=i=>t.$refs.countdown.pause())},{default:l(()=>[r(a(e.pack.pauseText),1)]),_:1}),n(f,{onClick:o[2]||(o[2]=i=>t.$refs.countdown.reset())},{default:l(()=>[r(a(e.pack.resetText),1)]),_:1})])])],64)}var Vt=A(ft,[["render",St],["__scopeId","data-v-4f16190e"]]);export{Vt as default};
