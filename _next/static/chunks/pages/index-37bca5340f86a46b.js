(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{8785:(e,n,t)=>{"use strict";t.d(n,{A:()=>i}),t(6540);var a=t(2128),r=t.n(a),o=t(4848);function i(e){var n=e.backGroundColor,t=e.handleClick,a=e.children,i=e.isSmall,c=e.disabled,l=void 0!==c&&c;return(0,o.jsx)("button",{className:"".concat(r()["com-button"]," ").concat(r()[n]," ").concat(void 0!==i&&i?r().small:""," ").concat(l?r().disabled:""),disabled:l,onClick:function(e){return t(e)},children:a})}},5786:(e,n,t)=>{"use strict";t.d(n,{A:()=>i}),t(6540);var a=t(5447),r=t.n(a),o=t(4848);function i(e){var n=e.labelText,t=e.initChecked,a=e.handleChange;return(0,o.jsxs)("label",{className:r()["com-checkbox"],children:[n,(0,o.jsx)("input",{type:"checkbox",checked:t,onChange:function(e){return a(e)}})]})}},9494:(e,n,t)=>{"use strict";t.d(n,{A:()=>i}),t(6540);var a=t(8179),r=t.n(a),o=t(4848);function i(e){var n=e.labelText,t=e.initValue,a=e.isDisabled,i=e.handleChange;return(0,o.jsxs)("label",{className:r()["com-input"],children:[n,(0,o.jsx)("input",{type:"number",min:"0",max:"99999",value:t,disabled:a,onChange:function(e){return i(e)}})]})}},2478:(e,n,t)=>{"use strict";t.d(n,{A:()=>i}),t(6540);var a=t(1145),r=t.n(a),o=t(4848);function i(e){var n=e.labelText,t=e.initValue,a=e.handleChange;return(0,o.jsxs)("label",{className:"".concat(r()["com-input"],"  ").concat(r().blue),children:[n,(0,o.jsx)("input",{type:"password",minLength:0,maxLength:256,value:t,onChange:function(e){return a(e)}})]})}},7805:(e,n,t)=>{"use strict";t.d(n,{A:()=>i}),t(6540);var a=t(232),r=t.n(a),o=t(4848);function i(e){var n=e.initValue,t=e.isDisabled,a=e.handleChange,i=e.options.map(function(e,n){return(0,o.jsx)("option",{value:e.value,children:e.label},n)});return(0,o.jsx)("select",{className:r()["com-pulldown-menu"],value:n,disabled:t,onChange:function(e){return a(e)},children:i})}},1960:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>G});var a=t(3368),r=t.n(a),o=t(6540),i=t(1145),c=t.n(i),l=t(4848);function s(e){var n=e.borderColor,t=e.labelText,a=e.maxLength,r=e.initValue,o=e.handleChange;return(0,l.jsxs)("label",{className:"".concat(c()["com-input"],"  ").concat("blue"===n?c().blue:c().gray),children:[t,(0,l.jsx)("input",{type:"text",minLength:0,maxLength:void 0===a?5e3:a,value:r,onChange:function(e){return o(e)}})]})}var u=t(9494),d=t(9171),h=t.n(d);function m(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=Array(n);t<n;t++)a[t]=e[t];return a}function g(e){var n,t,a=e.initValue,r=e.type,o=e.handleChange;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("select",{className:h()["com-input-time"],value:a,onChange:function(e){return o(e)},children:(t=((function(e){if(Array.isArray(e))return m(e)})(n=Array(24))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||function(e,n){if(e){if("string"==typeof e)return m(e,void 0);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return m(e,void 0)}}(n)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map(function(e,n){return n}),("hour"===r?t:["00","15","30","45"]).map(function(e,n){return(0,l.jsx)("option",{value:e,children:e},n)}))})})}var f=t(2478),x=t(2838),p=t.n(x);function _(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=Array(n);t<n;t++)a[t]=e[t];return a}function v(e){var n=e.borderColor,t=e.labelText,a=e.isDisabled,r=e.maxLength,i=e.initValue,c=e.handleChange,s=e.height,u=void 0===s?"auto":s,d=e.onHeightChange,h=e.enableHeightChange,m=void 0===h||h,g=(0,o.useRef)(null),f=(0,o.useRef)(!0);return(0,o.useEffect)(function(){if(f.current){f.current=!1;return}if(m){var e=g.current;if(e){var n=function(){var n="".concat(e.scrollHeight,"px");d&&n!==u&&d(n)},t=new MutationObserver(function(e){var t,a=function(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return _(e,void 0);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _(e,void 0)}}(e))){t&&(e=t);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==t.return||t.return()}finally{if(c)throw o}}}}(e);try{for(a.s();!(t=a.n()).done;){var r=t.value;"style"===r.attributeName&&n()}}catch(e){a.e(e)}finally{a.f()}});return t.observe(e,{attributes:!0,attributeFilter:["style"]}),function(){t.disconnect()}}}},[d,m,u]),(0,l.jsxs)("label",{className:"".concat(p()["com-textarea"],"  ").concat("blue"===n?p().blue:p().gray),children:[t,(0,l.jsx)("textarea",{ref:g,value:i,disabled:void 0!==a&&a,minLength:0,maxLength:void 0===r?5e3:r,onChange:function(e){c(e)},style:{height:u}})]})}var b=t(8785),j=t(9731),k=t.n(j),y=t(6188),C=t(3914),T={add:y.QLR,delete:y.yLS,edit:y.MT7,save:y.hSh,cancel:y.GRI};function N(e){var n=e.iconType,t=e.handleClick,a=e.disabled,r=void 0!==a&&a;return(0,l.jsx)("button",{className:"".concat(k()["com-button-icon"]," ").concat(k()[n]," ").concat(r?k().disabled:""),disabled:r,onClick:function(e){return t(e)},children:(0,l.jsx)(C.g,{icon:T[n]})})}var E=t(7805),w=t(5786);function S(e){var n=e.initValue,t=e.handleChange,a=["10","20","30","40","50","60","70","80","90","100"].map(function(e,n){return(0,l.jsx)("option",{value:e},n)});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("input",{type:"range",step:"5",list:"range-list",value:n,onChange:function(e){return t(e)}}),(0,l.jsx)("datalist",{id:"range-list",children:a})]})}var H=t(6035),A=t.n(H);function M(e){var n=e.children,t=e.titleChildren,a=e.isExpanded,r=e.onClick;return(0,l.jsxs)("div",{className:"".concat(A()["com-expansion-panel"]," ").concat(a?A().expanded:""),children:[(0,l.jsxs)("div",{className:A()["expansion-panel-header"],onClick:function(e){"a"!==e.target.tagName.toLowerCase()&&r()},children:[t,(0,l.jsx)("div",{className:A()["expansion-panel-header-icon"],children:(0,l.jsx)(C.g,{icon:y.Jt$})})]}),(0,l.jsx)("div",{className:A()["expansion-panel-content"],children:n})]})}var B=t(1247),V=t.n(B);function I(e){var n=e.isShow,t=e.handleClick,a=e.children;return(0,o.useEffect)(function(){return document.body.style.overflow="hidden",function(){document.body.style.overflow="auto"}},[]),(0,l.jsxs)("div",{className:"".concat(V().modal," ").concat(n?V()["is-show"]:""),children:[(0,l.jsx)("div",{className:V().overlay,onClick:function(e){return t(e)}}),(0,l.jsxs)("div",{className:V().content,children:[(0,l.jsx)("h3",{children:"入力に不備があります。"}),(0,l.jsx)("ul",{children:a.map(function(e,n){return(0,l.jsx)("li",{children:e},n)})}),(0,l.jsx)("div",{className:V().footer,children:(0,l.jsx)(b.A,{backGroundColor:"gray",handleClick:function(e){return t(e)},children:"閉じる"})})]})]})}function F(e){var n=e.isShow,t=e.okHandleClick,a=e.cancelHandleClick,r=e.children;return(0,o.useEffect)(function(){return document.body.style.overflow="hidden",function(){document.body.style.overflow="auto"}},[]),(0,l.jsxs)("div",{className:"".concat(V().modal," ").concat(n?V()["is-show"]:""),children:[(0,l.jsx)("div",{className:V().overlay,onClick:function(e){return a(e)}}),(0,l.jsxs)("div",{className:V().content,children:[(0,l.jsx)("h3",{children:"タスクの削除"}),(0,l.jsx)("p",{children:r}),(0,l.jsxs)("div",{className:V().footer,children:[(0,l.jsx)(b.A,{backGroundColor:"gray",handleClick:function(e){return a(e)},children:"キャンセル"}),(0,l.jsx)(b.A,{backGroundColor:"blue",handleClick:function(e){return t(e)},children:"OK"})]})]})]})}var D=t(7061),O=t.n(D);function P(e){return function(e){if(Array.isArray(e))return U(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||R(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,r,o,i,c=[],l=!0,s=!1;try{if(o=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;l=!1}else for(;!(l=(a=o.call(t)).done)&&(c.push(a.value),c.length!==n);l=!0);}catch(e){s=!0,r=e}finally{try{if(!l&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(s)throw r}}return c}}(e,n)||R(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,n){if(e){if("string"==typeof e)return U(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return U(e,n)}}function U(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=Array(n);t<n;t++)a[t]=e[t];return a}function G(){var e,n,t,a,i,c,d,h,m,x="日報作成ツール",p=L((0,o.useState)(!1),2),_=p[0],j=p[1],k=L((0,o.useState)(""),2),y=k[0],C=k[1],T=L((0,o.useState)(""),2),H=T[0],A=T[1],B="report-creation-password",V="report";(0,o.useEffect)(function(){localStorage.getItem(B)===V&&j(!0)},[]);var D=[{label:"TICKET_RESERVE",value:"TICKET_RESERVE"},{label:"F2023",value:"FUTURE_DEVELOP_GOALS_2023"},{label:"MKPL",value:"MKPL_MAINTE_DEV"},{label:"FB_MKPL",value:"FB_MKPL"},{label:"CMS_DEFECT",value:"CMS_DEFECT"},{label:"EC_DEFECT",value:"EC_DEFECT"},{label:"TICKET_DEFECT",value:"TICKET_DEFECT"},{label:"GOURMET_DEFECT",value:"GOURMET_DEFECT"},{label:"HOME_DEFECT",value:"HOME_DEFECT"},{label:"BEAUTY_DEFECT",value:"BEAUTY_DEFECT"},{label:"FARM",value:"FARM"},{label:"QC_FB",value:"QC_FB"}],R=L((0,o.useState)(!0),2),U=R[0],G=R[1],K=function(e){G(!1);var n=new FileReader;n.addEventListener("load",function(e){if(null!==e.target&&"string"==typeof e.target.result){var n=JSON.parse(e.target.result);ej(n.address),eC(n.carbonCopy),eE(n.toName),eH(n.fromName),$(n.tasks),eX(n.addNewLineUnderTwoTitle),e0(n.addNewLineUnderTask),G(!0)}}),null!==e.target.files&&n.readAsText(e.target.files[0])},q=function(){var e=new Date,n=function(e){return String(e).padStart(2,"0")},t=String(e.getFullYear()),a=n(e.getMonth()+1),r=n(e.getDate()),o=n(e.getHours()),i=n(e.getMinutes()),c=n(e.getSeconds());return"".concat(t).concat(a).concat(r).concat(o).concat(i).concat(c,"_daily-report.json")},J=L((0,o.useState)([]),2),W=J[0],X=J[1],Q=function(){var e=[];return z.forEach(function(n,t){n.name||(e=[].concat(P(e),["タスク".concat(t+1,"が未入力です。")])),n.isToday&&!n.todayProgress&&(e=[].concat(P(e),["タスク".concat(t+1,"の本日にチェックが入っている状態で、報告が未入力です。")])),n.isBacklog&&!n.backlogNumber&&(e=[].concat(P(e),["タスク".concat(t+1,"のBacklogの有無にチェックが入っている状態で、番号が未入力です。")]))}),X(e),e},Y=L((0,o.useState)([{id:1,name:"",isBacklog:!1,project:"TICKET_RESERVE",backlogNumber:"100",isMonth:!0,isWeek:!0,isToday:!0,isNext:!0,monthTarget:"100",weekTarget:"100",todayTarget:"100",nextTarget:"100",todayProgress:"",reportHeight:"auto",isExpanded:!1}]),2),z=Y[0],$=Y[1],Z=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];$(z.map(function(r,o){return o!==n||("isBacklog"===e||"isMonth"===e||"isWeek"===e||"isToday"===e||"isNext"===e||"isExpanded"===e?r[e]=a:r[e]=t),r}))},ee=function(){for(var e=z.map(function(e){return e.id}),n=1;e.includes(n);)n++;return n},en=function(e,n){Z("reportHeight",n,e)},et=function(e){Z("isExpanded",e,"",!z[e].isExpanded)},ea={startHour:"10",startMinute:"00",endHour:"19",endMinute:"00"},er={startHour:"00",startMinute:"00",endHour:"00",endMinute:"00"},eo=L((0,o.useState)([ea]),2),ei=eo[0],ec=eo[1],el=L((0,o.useState)([er]),2),es=el[0],eu=el[1],ed=L((0,o.useState)(!1),2),eh=ed[0],em=ed[1],eg=function(e,n,t){ec(ei.map(function(a,r){return r===t&&(a[e]=n),a}))},ef=function(e,n,t){eu(es.map(function(a,r){return r===t&&(a[e]=n),a}))},ex=L((0,o.useState)("本日は特にありません。"),2),ep=ex[0],e_=ex[1],ev=L((0,o.useState)("example0@mail.com"),2),eb=ev[0],ej=ev[1],ek=L((0,o.useState)("example1@mail.com, example2@mail.com"),2),ey=ek[0],eC=ek[1],eT=L((0,o.useState)("山田太郎様"),2),eN=eT[0],eE=eT[1],ew=L((0,o.useState)("鈴木一郎"),2),eS=ew[0],eH=ew[1],eA=L((0,o.useState)(!1),2),eM=eA[0],eB=eA[1],eV=L((0,o.useState)(!1),2),eI=eV[0],eF=eV[1],eD=L((0,o.useState)(!1),2),eO=eD[0],eP=eD[1],eL=L((0,o.useState)(null),2),eR=eL[0],eU=eL[1],eG=function(){eP(!eO)},eK=function(e){eU(e),eG()},eq=function(e,n){return"".concat(e.padStart(2,"0"),":").concat(n.padStart(2,"0"))},eJ=L((0,o.useState)(!1),2),eW=eJ[0],eX=eJ[1],eQ=function(e){eX(e)},eY=function(){return z.filter(function(e){return e.isMonth}).map(function(e){return"・".concat(e.name,"（").concat(e.monthTarget,"/100）")}).join("\n")},ez=function(){return z.filter(function(e){return e.isWeek}).map(function(e){return"・".concat(e.name,"（").concat(e.weekTarget,"/100）")}).join("\n")},e$=L((0,o.useState)(!1),2),eZ=e$[0],e0=e$[1],e1=function(e){e0(e)},e2=ei.map(function(e){return"".concat(eq(e.startHour,e.startMinute),"〜").concat(eq(e.endHour,e.endMinute))}).join("\n"),e4=eh?"【追加休憩】\n"+es.map(function(e){return"".concat(eq(e.startHour,e.startMinute),"〜").concat(eq(e.endHour,e.endMinute))}).join("\n"):"",e8=(n=String((e=new Date).getFullYear()),t=String(e.getMonth()+1),a=String(e.getDate()),"".concat(n,"/").concat(t,"/").concat(a)),e5=eW?eY()+"\n":eY(),e3=eW?ez()+"\n":ez(),e9=(c=(i=z.filter(function(e){return e.isToday})).length,i.map(function(e,n){var t="・".concat(e.name,"（").concat(e.todayTarget,"/100）");return eZ&&n!==c-1?e.isBacklog?"".concat(t,"\nhttps://kumukumu.backlog.com/view/").concat(e.project,"-").concat(e.backlogNumber,"\n\n"):"".concat(t,"\n\n"):e.isBacklog?"".concat(t,"\nhttps://kumukumu.backlog.com/view/").concat(e.project,"-").concat(e.backlogNumber,"\n"):"".concat(t,"\n")}).join("")),e6=eZ?z.filter(function(e){return e.isToday}).map(function(e){return"・".concat(e.name,"\n").concat(e.todayProgress)}).join("\n\n")+"\n":z.filter(function(e){return e.isToday}).map(function(e){return"・".concat(e.name,"\n").concat(e.todayProgress)}).join("\n"),e7=(h=(d=z.filter(function(e){return e.isNext})).length,d.map(function(e,n){var t="・".concat(e.name,"（").concat(e.nextTarget,"/100）");return eZ&&n!==h-1?e.isBacklog?"".concat(t,"\nhttps://kumukumu.backlog.com/view/").concat(e.project,"-").concat(e.backlogNumber,"\n\n"):"".concat(t,"\n\n"):e.isBacklog?"".concat(t,"\nhttps://kumukumu.backlog.com/view/").concat(e.project,"-").concat(e.backlogNumber,"\n"):"".concat(t,"\n")}).join("")),ne=5===(m=new Date().getDay())||6===m?"来週も宜しくお願い致します。":"明日も宜しくお願い致します。",nn="".concat(eN,"\n\nお世話になっております。\n本日の業務をご報告申し上げます。\n\n【作業日・業務時間】\n").concat(e8,"\n").concat(e2,"\n").concat(e4,"\n【今月の目標】\n").concat(e5,"\n【今週の目標】\n").concat(e3,"\n【本日の業務と進捗】\n").concat(e9,"\n【業務報告】\n").concat(e6,"\n【次の稼働日の業務予定】\n").concat(e7,"\n【コメント】\n").concat(ep,"\n以上です、本日もありがとうございました。\n").concat(ne,"\n\n").concat(eS),nt=L((0,o.useState)(!1),2),na=nt[0],nr=nt[1],no=function(e){nr(e)},ni=na?z.filter(function(e){return!0===e.isToday}):z;return(0,l.jsxs)("div",{className:O().container,children:[(0,l.jsxs)(r(),{children:[(0,l.jsx)("title",{children:x}),(0,l.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,l.jsx)("meta",{name:"robots",content:"noindex"}),(0,l.jsx)("link",{rel:"icon",href:"./favicon.ico"})]}),(0,l.jsxs)("main",{className:O().main,children:[!_&&(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{className:O().title,children:x}),(0,l.jsx)("div",{className:O().input,children:(0,l.jsx)(f.A,{labelText:"パスワード",initValue:y,handleChange:function(e){return C(e.target.value)}})}),(0,l.jsx)("div",{className:O()["login-button"],children:(0,l.jsx)(b.A,{backGroundColor:"blue",handleClick:function(){y===V?(localStorage.setItem(B,y),C(""),j(!0)):A("パスワードが違います。")},children:"ログイン"})}),(0,l.jsx)("p",{className:O()["login-message"],children:H})]}),_&&(0,l.jsxs)("div",{className:"wrapper",children:[(0,l.jsx)("h1",{className:O().title,children:x}),(0,l.jsxs)("div",{className:O().buttons,children:[(0,l.jsxs)("div",{className:O()["button-groups"],children:[(0,l.jsxs)("div",{className:O()["button-group"],children:[(0,l.jsxs)("label",{htmlFor:"file-upload",className:O()["file-upload"],children:["データの読み込み",(0,l.jsx)("input",{type:"file",onInput:function(e){return K(e)},id:"file-upload"})]}),(0,l.jsx)(b.A,{backGroundColor:"blue",handleClick:function(){var e=q(),n=JSON.stringify({address:eb,carbonCopy:ey,toName:eN,fromName:eS,tasks:z,addNewLineUnderTwoTitle:eW,addNewLineUnderTask:eZ}),t=document.createElement("a");t.href="data:text/plain,"+encodeURIComponent(n),t.download=e,t.click()},children:"データの書き出し"})]}),(0,l.jsxs)("div",{children:[eM?(0,l.jsx)(b.A,{backGroundColor:"green",handleClick:function(){eB(!1)},children:"プレビュー"}):(0,l.jsx)(b.A,{backGroundColor:"green",handleClick:function(){if(Q().length>0){eF(!0);return}eB(!0)},children:"プレビュー"}),(0,l.jsx)(b.A,{backGroundColor:"blue",handleClick:function(){if(navigator.clipboard)return navigator.clipboard.writeText(nn).then(function(){var e="業務委託日報：".concat(eS,"：").concat(e8),n=document.createElement("a");n.href="mailto:".concat(eb,"?cc=").concat(ey,"&subject=").concat(e),n.setAttribute("target","_blank"),n.click()})},children:"メール作成"})]})]}),(0,l.jsx)("div",{children:(0,l.jsx)(w.A,{labelText:"本日のタスクのみ",initChecked:na,handleChange:function(e){return no(e.target.checked)}})})]}),!eM&&(0,l.jsxs)("div",{className:"form",children:[(0,l.jsxs)("div",{className:O().tasks,children:[ni.map(function(e,n){return(0,l.jsx)("div",{className:O().task,children:(0,l.jsxs)(M,{titleChildren:(0,l.jsxs)(l.Fragment,{children:[!!e.name&&(0,l.jsxs)(l.Fragment,{children:[e.name,e.isBacklog&&(0,l.jsx)("p",{className:O()["task-link-wrapper"],children:(0,l.jsx)("a",{className:O().link,rel:"noreferrer",target:"_blank",href:"https://kumukumu.backlog.com/view/".concat(e.project,"-").concat(e.backlogNumber),children:"https://kumukumu.backlog.com/view/".concat(e.project,"-").concat(e.backlogNumber)})})]}),!e.name&&(0,l.jsx)(l.Fragment,{children:"タスク名を入力してください。"})]}),isExpanded:e.isExpanded,onClick:function(){return et(n)},children:[(0,l.jsxs)("div",{className:O()["task-content"],children:[(0,l.jsxs)("span",{className:O()["task-count"],children:[String(e.name.length),"/256"]}),(0,l.jsx)(s,{labelText:"タスク".concat(e.id),maxLength:256,borderColor:"blue",initValue:e.name,handleChange:function(e){return Z("name",n,e.target.value)}})]}),(0,l.jsx)(w.A,{labelText:"Backlogの有無",initChecked:e.isBacklog,handleChange:function(e){return Z("isBacklog",n,"",e.target.checked)}}),e.isBacklog&&(0,l.jsxs)("div",{className:"".concat(O()["task-content"]," ").concat(O()["task-project"]),children:[(0,l.jsxs)("div",{className:O()["task-project-type"],children:[(0,l.jsx)("label",{children:"プロジェクト"}),(0,l.jsx)(E.A,{initValue:e.project,isDisabled:!e.isBacklog,options:D,handleChange:function(e){return Z("project",n,e.target.value)}})]}),(0,l.jsx)(u.A,{labelText:"番号",initValue:e.backlogNumber,isDisabled:!e.isBacklog,handleChange:function(e){Z("backlogNumber",n,e.target.value)}})]}),(0,l.jsxs)("div",{className:O()["task-content"],children:[(0,l.jsxs)("div",{className:O()["target-group"],children:[(0,l.jsxs)("div",{className:O().target,children:[(0,l.jsx)(w.A,{labelText:"今月",initChecked:e.isMonth,handleChange:function(e){return Z("isMonth",n,"",e.target.checked)}}),(0,l.jsx)(S,{initValue:e.monthTarget,handleChange:function(e){return Z("monthTarget",n,e.target.value)}}),(0,l.jsxs)("span",{children:[e.monthTarget,"/100"]})]}),(0,l.jsxs)("div",{className:O().target,children:[(0,l.jsx)(w.A,{labelText:"今週",initChecked:e.isWeek,handleChange:function(e){return Z("isWeek",n,"",e.target.checked)}}),(0,l.jsx)(S,{initValue:e.weekTarget,handleChange:function(e){return Z("weekTarget",n,e.target.value)}}),(0,l.jsxs)("span",{children:[e.weekTarget,"/100"]})]})]}),(0,l.jsxs)("div",{className:O()["target-group"],children:[(0,l.jsxs)("div",{className:O().target,children:[(0,l.jsx)(w.A,{labelText:"本日",initChecked:e.isToday,handleChange:function(e){return Z("isToday",n,"",e.target.checked)}}),(0,l.jsx)(S,{initValue:e.todayTarget,handleChange:function(e){return Z("todayTarget",n,e.target.value)}}),(0,l.jsxs)("span",{children:[e.todayTarget,"/100"]})]}),(0,l.jsxs)("div",{className:O().target,children:[(0,l.jsx)(w.A,{labelText:"予定",initChecked:e.isNext,handleChange:function(e){return Z("isNext",n,"",e.target.checked)}}),(0,l.jsx)(S,{initValue:e.nextTarget,handleChange:function(e){return Z("nextTarget",n,e.target.value)}}),(0,l.jsxs)("span",{children:[e.nextTarget,"/100"]})]})]})]}),(0,l.jsxs)("div",{className:O()["task-content"],children:[(0,l.jsxs)("span",{className:O()["task-count"],children:[String(e.todayProgress.length),"/2000"]}),(0,l.jsx)(v,{labelText:"報告",isDisabled:!e.isToday,maxLength:2e3,borderColor:"blue",initValue:e.todayProgress,handleChange:function(e){Z("todayProgress",n,e.target.value)},height:e.reportHeight,onHeightChange:function(e){return en(e,n)},enableHeightChange:U})]}),(0,l.jsx)(N,{disabled:z.length<=1,iconType:"delete",handleClick:function(){return eK(n)}})]})},n)}),(0,l.jsx)(N,{disabled:z.length>=100,iconType:"add",handleClick:function(){var e={id:ee(),name:"",isBacklog:!0,project:"TICKET_RESERVE",backlogNumber:"100",isMonth:!0,isWeek:!0,isToday:!0,isNext:!0,monthTarget:"100",weekTarget:"100",todayTarget:"100",nextTarget:"100",todayProgress:"",reportHeight:"auto",isExpanded:!1};$(function(n){return[].concat(P(n),[e])})}})]}),(0,l.jsxs)("div",{className:O().times,children:[(0,l.jsxs)("div",{className:O()["operating-times"],children:[ei.map(function(e,n){return(0,l.jsxs)("div",{className:O()["operating-time"],children:[(0,l.jsxs)("label",{children:["稼働時間",n+1]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(g,{initValue:e.startHour,type:"hour",handleChange:function(e){return eg("startHour",e.target.value,n)}}),":",(0,l.jsx)(g,{initValue:e.startMinute,type:"minute",handleChange:function(e){return eg("startMinute",e.target.value,n)}}),"〜",(0,l.jsx)(g,{initValue:e.endHour,type:"hour",handleChange:function(e){return eg("endHour",e.target.value,n)}}),":",(0,l.jsx)(g,{initValue:e.endMinute,type:"minute",handleChange:function(e){return eg("endMinute",e.target.value,n)}})]})]},n)}),(0,l.jsx)(N,{disabled:ei.length>=5,iconType:"add",handleClick:function(){ec(function(e){return[].concat(P(e),[ea])})}}),(0,l.jsx)(N,{disabled:ei.length<=1,iconType:"delete",handleClick:function(){var e=ei.length-1;ec(ei.filter(function(n,t){if(t!==e)return n}))}})]}),(0,l.jsxs)("div",{className:O()["rest-times"],children:[(0,l.jsx)(w.A,{labelText:"追加休憩の有無",initChecked:eh,handleChange:function(e){return em(e.target.checked)}}),eh&&es.map(function(e,n){return(0,l.jsxs)("div",{className:O()["rest-time"],children:[(0,l.jsxs)("label",{children:["追加休憩",n+1]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(g,{initValue:e.startHour,type:"hour",handleChange:function(e){return ef("startHour",e.target.value,n)}}),":",(0,l.jsx)(g,{initValue:e.startMinute,type:"minute",handleChange:function(e){return ef("startMinute",e.target.value,n)}}),"〜",(0,l.jsx)(g,{initValue:e.endHour,type:"hour",handleChange:function(e){return ef("endHour",e.target.value,n)}}),":",(0,l.jsx)(g,{initValue:e.endMinute,type:"minute",handleChange:function(e){return ef("endMinute",e.target.value,n)}})]})]},n)}),eh&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N,{disabled:es.length>=5,iconType:"add",handleClick:function(){eu(function(e){return[].concat(P(e),[er])})}}),(0,l.jsx)(N,{disabled:es.length<=1,iconType:"delete",handleClick:function(){var e=es.length-1;eu(es.filter(function(n,t){if(t!==e)return n}))}})]})]}),(0,l.jsxs)("p",{children:["※稼働時間と追加休憩、コメントは、データ読み込み時に保存されません。",(0,l.jsx)("br",{}),"メール作成の直前に入力してください。"]})]}),(0,l.jsx)("div",{className:O().other,children:(0,l.jsx)(v,{labelText:"コメント",borderColor:"gray",initValue:ep,handleChange:function(e){return e_(e.target.value)}})}),(0,l.jsxs)("details",{children:[(0,l.jsx)("summary",{children:"宛先や名前"}),(0,l.jsxs)("div",{className:"others",children:[(0,l.jsx)("div",{className:O().other,children:(0,l.jsx)(s,{labelText:"宛先",borderColor:"gray",initValue:eb,handleChange:function(e){return ej(e.target.value)}})}),(0,l.jsx)("div",{className:O().other,children:(0,l.jsx)(s,{labelText:"CC",borderColor:"gray",initValue:ey,handleChange:function(e){return eC(e.target.value)}})}),(0,l.jsx)("div",{className:O().other,children:(0,l.jsx)(s,{labelText:"宛先の人の名前",borderColor:"gray",initValue:eN,handleChange:function(e){return eE(e.target.value)}})}),(0,l.jsx)("div",{className:O().other,children:(0,l.jsx)(s,{labelText:"自分の名前",borderColor:"gray",initValue:eS,handleChange:function(e){return eH(e.target.value)}})})]})]}),(0,l.jsxs)("details",{children:[(0,l.jsx)("summary",{children:"改行の設定"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{children:(0,l.jsx)(w.A,{labelText:"今月の目標と今週の目標の下に改行を追加",initChecked:eW,handleChange:function(e){return eQ(e.target.checked)}})}),(0,l.jsx)("div",{children:(0,l.jsx)(w.A,{labelText:"タスクの下に改行を追加",initChecked:eZ,handleChange:function(e){return e1(e.target.checked)}})})]})]})]}),eM&&(0,l.jsxs)("div",{className:"preview",children:[(0,l.jsx)("h3",{className:O()["preview-title"],children:"プレビュー（フォームは読み取り専用です）"}),(0,l.jsx)("div",{className:O()["preview-address"],children:(0,l.jsxs)("label",{children:["宛先",(0,l.jsx)("input",{type:"text",value:eb,readOnly:!0})]})}),(0,l.jsx)("div",{className:O()["preview-cc"],children:(0,l.jsxs)("label",{children:["CC",(0,l.jsx)("input",{type:"text",value:ey,readOnly:!0})]})}),(0,l.jsx)("div",{children:(0,l.jsxs)("label",{children:["本文（メール作成ボタンをクリックすると、クリップボードにコピーされます）",(0,l.jsx)("textarea",{value:nn,readOnly:!0,className:O()["preview-content"]})]})})]})]}),eI&&(0,l.jsx)(I,{isShow:eI,handleClick:function(){eF(!eI)},children:W}),eO&&(0,l.jsx)(F,{isShow:eO,okHandleClick:function(){$(z.filter(function(e,n){if(n!==eR)return e})),eG()},cancelHandleClick:eG,children:"タスク".concat(String(Number(eR)+1),"を削除しますか。\n削除したタスクは復元できません。")})]}),(0,l.jsxs)("footer",{className:O().footer,children:[(0,l.jsx)("a",{href:"https://github.com/khosokawa0716/report-creation#readme",rel:"noreferrer",target:"_blank",className:O().link,children:"README!"}),(0,l.jsx)("a",{href:"./branch-name",className:O().link,children:"ブランチ名作成ツール"})]})]})}},2022:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1960)}])},2128:e=>{e.exports={"com-button":"Button_com-button__vq2eP",disabled:"Button_disabled__natXi",small:"Button_small___Pqfo",blue:"Button_blue__XoEr5",green:"Button_green__aDcRj",red:"Button_red__kVwvM",gray:"Button_gray__9v_tm"}},9731:e=>{e.exports={"com-button-icon":"ButtonIcon_com-button-icon__9sbgR",disabled:"ButtonIcon_disabled__UGtmE",add:"ButtonIcon_add__kYezj",save:"ButtonIcon_save__JUe9q",edit:"ButtonIcon_edit__q4_9P",cancel:"ButtonIcon_cancel__hkeWU",delete:"ButtonIcon_delete__AQs_D"}},5447:e=>{e.exports={"com-checkbox":"Checkbox_com-checkbox__fcXr2"}},6035:e=>{e.exports={"com-expansion-panel":"ExpansionPanel_com-expansion-panel__q1jq2","expansion-panel-header":"ExpansionPanel_expansion-panel-header__93Y9M","expansion-panel-header-icon":"ExpansionPanel_expansion-panel-header-icon__llpaU","expansion-panel-content":"ExpansionPanel_expansion-panel-content__Q8Bjh",expanded:"ExpansionPanel_expanded__E9fml"}},7061:e=>{e.exports={container:"Home_container__B1VFq",main:"Home_main__3vDCl",footer:"Home_footer__S146O",summary:"Home_summary__o_8qb",title:"Home_title__CJM6I",input:"Home_input__Lb3Ap","login-button":"Home_login-button__Y2Ga3","login-message":"Home_login-message__J4kGO",buttons:"Home_buttons__EBgSJ","button-groups":"Home_button-groups__jPgn0","button-group":"Home_button-group__FevH5","file-upload":"Home_file-upload__y7uys",tasks:"Home_tasks__ve0Hc",task:"Home_task__AdPgk","task-content":"Home_task-content__0KuKV","task-count":"Home_task-count__JIvAG","task-project":"Home_task-project__8ZvEu","task-project-type":"Home_task-project-type__1WSKV","target-group":"Home_target-group__k3wiO",target:"Home_target__5lo_V",times:"Home_times__tiUDl","operating-times":"Home_operating-times__X6vTv","rest-times":"Home_rest-times__bioTY","operating-time":"Home_operating-time__uSU0X","rest-time":"Home_rest-time__dnmW1",other:"Home_other__L0z9f","task-link-wrapper":"Home_task-link-wrapper__bshfO",link:"Home_link__yP80F","preview-title":"Home_preview-title__cdlJ0","preview-content":"Home_preview-content__BTXXq","preview-address":"Home_preview-address__unMgy","preview-cc":"Home_preview-cc__tzKqS","layout-option":"Home_layout-option__5do9z"}},8179:e=>{e.exports={"com-input":"InputNumber_com-input__Vspdj"}},1145:e=>{e.exports={"com-input":"InputText_com-input__xUfuW",blue:"InputText_blue__exgt7",gray:"InputText_gray__ZDjA4"}},9171:e=>{e.exports={"com-input-time":"InputTime_com-input-time__6s1Jl"}},1247:e=>{e.exports={modal:"Modal_modal__zQHMg","is-show":"Modal_is-show__OLe2r",content:"Modal_content__04Bc4",overlay:"Modal_overlay__2FT_F",footer:"Modal_footer__rnPSt"}},232:e=>{e.exports={"com-pulldown-menu":"PulldownMenu_com-pulldown-menu__UuQUv"}},2838:e=>{e.exports={"com-textarea":"TextArea_com-textarea__KIt4s",blue:"TextArea_blue__udUsQ",gray:"TextArea_gray__4R9RO"}}},e=>{var n=n=>e(e.s=n);e.O(0,[69,579,636,593,792],()=>n(2022)),_N_E=e.O()}]);