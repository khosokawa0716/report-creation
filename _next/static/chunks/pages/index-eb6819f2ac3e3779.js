(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return __webpack_require__(1401)}])},1401:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Home}});var jsx_runtime=__webpack_require__(5893),head=__webpack_require__(9008),head_default=__webpack_require__.n(head),react=__webpack_require__(7294),InputText_module=__webpack_require__(5030),InputText_module_default=__webpack_require__.n(InputText_module);function InputText(param){let{borderColor,labelText,maxLength=5e3,initValue,handleChange}=param;return(0,jsx_runtime.jsxs)("label",{className:"".concat(InputText_module_default()["com-input"],"  ").concat("blue"===borderColor?InputText_module_default().blue:InputText_module_default().gray),children:[labelText,(0,jsx_runtime.jsx)("input",{type:"text",minLength:0,maxLength:maxLength,value:initValue,onChange:e=>handleChange(e)})]})}var InputNumber_module=__webpack_require__(9314),InputNumber_module_default=__webpack_require__.n(InputNumber_module);function InputNumber(param){let{labelText,initValue,isDisabled,handleChange}=param;return(0,jsx_runtime.jsxs)("label",{className:InputNumber_module_default()["com-input"],children:[labelText,(0,jsx_runtime.jsx)("input",{type:"number",min:"0",max:"99999",value:initValue,disabled:isDisabled,onChange:e=>handleChange(e)})]})}var InputTime_module=__webpack_require__(4631),InputTime_module_default=__webpack_require__.n(InputTime_module);function InputTime(param){let{initValue,type,handleChange}=param;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("select",{className:InputTime_module_default()["com-input-time"],value:initValue,onChange:e=>handleChange(e),children:(()=>{let hours=[...Array(24)].map((_,i)=>String(i).padStart(2,"0"));return("hour"===type?hours:["00","15","30","45"]).map((time,index)=>(0,jsx_runtime.jsx)("option",{value:time,children:time},index))})()})})}function InputPassword_InputText(param){let{labelText,initValue,handleChange}=param;return(0,jsx_runtime.jsxs)("label",{className:"".concat(InputText_module_default()["com-input"],"  ").concat(InputText_module_default().blue),children:[labelText,(0,jsx_runtime.jsx)("input",{type:"password",minLength:0,maxLength:256,value:initValue,onChange:e=>handleChange(e)})]})}var TextArea_module=__webpack_require__(9589),TextArea_module_default=__webpack_require__.n(TextArea_module);function TextArea(param){let{borderColor,labelText,isDisabled=!1,maxLength=5e3,initValue,handleChange}=param;return(0,jsx_runtime.jsxs)("label",{className:"".concat(TextArea_module_default()["com-textarea"],"  ").concat("blue"===borderColor?TextArea_module_default().blue:TextArea_module_default().gray),children:[labelText,(0,jsx_runtime.jsx)("textarea",{value:initValue,disabled:isDisabled,minLength:0,maxLength:maxLength,onChange:e=>handleChange(e)})]})}var Button_module=__webpack_require__(2364),Button_module_default=__webpack_require__.n(Button_module);function Button(param){let{backGroundColor,handleClick,children,isSmall=!1,disabled=!1}=param;return(0,jsx_runtime.jsx)("button",{className:"".concat(Button_module_default()["com-button"]," ").concat(Button_module_default()[backGroundColor]," ").concat(isSmall?Button_module_default().small:""," ").concat(disabled?Button_module_default().disabled:""),disabled:disabled,onClick:e=>handleClick(e),children:children})}var PulldownMenu_module=__webpack_require__(1468),PulldownMenu_module_default=__webpack_require__.n(PulldownMenu_module);function PulldownMenu(param){let{initValue,isDisabled,handleChange,options}=param,optionItems=options.map((option,index)=>(0,jsx_runtime.jsx)("option",{value:option.value,children:option.label},index));return(0,jsx_runtime.jsx)("select",{className:PulldownMenu_module_default()["com-pulldown-menu"],value:initValue,disabled:isDisabled,onChange:e=>handleChange(e),children:optionItems})}var Checkbox_module=__webpack_require__(8258),Checkbox_module_default=__webpack_require__.n(Checkbox_module);function Checkbox(param){let{labelText,initChecked,handleChange}=param;return(0,jsx_runtime.jsxs)("label",{className:Checkbox_module_default()["com-checkbox"],children:[labelText,(0,jsx_runtime.jsx)("input",{type:"checkbox",checked:initChecked,onChange:e=>handleChange(e)})]})}function Range(param){let{initValue,handleChange}=param,optionItems=["10","20","30","40","50","60","70","80","90","100"].map((option,index)=>(0,jsx_runtime.jsx)("option",{value:option},index));return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("input",{type:"range",step:"5",list:"range-list",value:initValue,onChange:e=>handleChange(e)}),(0,jsx_runtime.jsx)("datalist",{id:"range-list",children:optionItems})]})}var Modal_module=__webpack_require__(9185),Modal_module_default=__webpack_require__.n(Modal_module);function Modal(param){let{isShow,handleClick,children}=param,stopScrollingBackContent=()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="auto"});return(0,react.useEffect)(stopScrollingBackContent,[]),(0,jsx_runtime.jsxs)("div",{className:"".concat(Modal_module_default().modal," ").concat(isShow?Modal_module_default()["is-show"]:""),children:[(0,jsx_runtime.jsx)("div",{className:Modal_module_default().overlay,onClick:e=>handleClick(e)}),(0,jsx_runtime.jsxs)("div",{className:Modal_module_default().content,children:[(0,jsx_runtime.jsx)("h3",{children:"入力に不備があります。"}),(0,jsx_runtime.jsx)("ul",{children:children.map((item,index)=>(0,jsx_runtime.jsx)("li",{children:item},index))}),(0,jsx_runtime.jsx)("div",{className:Modal_module_default().footer,children:(0,jsx_runtime.jsx)(Button,{backGroundColor:"gray",handleClick:e=>handleClick(e),children:"閉じる"})})]})]})}function ModalCaution_Modal(param){let{isShow,okHandleClick,cancelHandleClick,children}=param,stopScrollingBackContent=()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="auto"});return(0,react.useEffect)(stopScrollingBackContent,[]),(0,jsx_runtime.jsxs)("div",{className:"".concat(Modal_module_default().modal," ").concat(isShow?Modal_module_default()["is-show"]:""),children:[(0,jsx_runtime.jsx)("div",{className:Modal_module_default().overlay,onClick:e=>cancelHandleClick(e)}),(0,jsx_runtime.jsxs)("div",{className:Modal_module_default().content,children:[(0,jsx_runtime.jsx)("h3",{children:"タスクの削除"}),(0,jsx_runtime.jsx)("p",{children:children}),(0,jsx_runtime.jsxs)("div",{className:Modal_module_default().footer,children:[(0,jsx_runtime.jsx)(Button,{backGroundColor:"gray",handleClick:e=>cancelHandleClick(e),children:"キャンセル"}),(0,jsx_runtime.jsx)(Button,{backGroundColor:"blue",handleClick:e=>okHandleClick(e),children:"OK"})]})]})]})}var Home_module=__webpack_require__(1633),Home_module_default=__webpack_require__.n(Home_module);function Home(){let result,result1,result2,result3,result4,result5,result6;let pageTitle="日報作成ツール",[isLogin,setIsLogin]=(0,react.useState)(!1),[loginPass,setLoginPass]=(0,react.useState)(""),[loginMessage,setLoginMessage]=(0,react.useState)(""),strageKey="report-creation-password",password="report",handleLogin=()=>{loginPass===password?(localStorage.setItem(strageKey,loginPass),setLoginPass(""),setIsLogin(!0)):setLoginMessage("パスワードが違います。")};(0,react.useEffect)(()=>{let inputedPassword=localStorage.getItem(strageKey);inputedPassword===password&&setIsLogin(!0)},[]);let projects=[{label:"F2023",value:"FUTURE_DEVELOP_GOALS_2023"},{label:"MKPL",value:"MKPL_MAINTE_DEV"},{label:"CMS_DEFECT",value:"CMS_DEFECT"},{label:"EC_DEFECT",value:"EC_DEFECT"},{label:"TICKET_DEFECT",value:"TICKET_DEFECT"},{label:"GOURMET_DEFECT",value:"GOURMET_DEFECT"},{label:"HOME_DEFECT",value:"HOME_DEFECT"},{label:"BEAUTY_DEFECT",value:"BEAUTY_DEFECT"},{label:"FARM",value:"FARM"},{label:"QC_FB",value:"QC_FB"}],readData=e=>{let file_reader=new FileReader;file_reader.addEventListener("load",function(e){if(null===e.target||"string"!=typeof e.target.result)return;let importData=JSON.parse(e.target.result);setAddress(importData.address),setCarbonCopy(importData.carbonCopy),setToName(importData.toName),setFromName(importData.fromName),setOperatingTimes(importData.operatingTimes),setIsRestTime(importData.isRestTime),setRestTimes(importData.restTimes),setTasks(importData.tasks),setComment(importData.comment)}),null!==e.target.files&&file_reader.readAsText(e.target.files[0])},getFileName=()=>{let today=new Date,zeroPadding=time=>String(time).padStart(2,"0"),year=String(today.getFullYear()),month=zeroPadding(today.getMonth()+1),date=zeroPadding(today.getDate()),hours=zeroPadding(today.getHours()),minutes=zeroPadding(today.getMinutes()),seconds=zeroPadding(today.getSeconds());return"daily-report_".concat(year).concat(month).concat(date).concat(hours).concat(minutes).concat(seconds,".json")},exportData=()=>{let fileName=getFileName(),data=JSON.stringify({address,carbonCopy,toName,fromName,operatingTimes,isRestTime,restTimes,tasks,comment}),link=document.createElement("a");link.href="data:text/plain,"+encodeURIComponent(data),link.download=fileName,link.click()},[errorMessages,setErrorMessages]=(0,react.useState)([]),valide=()=>{let errorArr=[];return tasks.forEach((task,index)=>{task.name||(errorArr=[...errorArr,"タスク".concat(index+1,"が未入力です。")]),task.isToday&&!task.todayProgress&&(errorArr=[...errorArr,"タスク".concat(index+1,"の本日にチェックが入っている状態で、報告が未入力です。")]),task.isBacklog&&!task.backlogNumber&&(errorArr=[...errorArr,"タスク".concat(index+1,"のBacklogの有無にチェックが入っている状態で、番号が未入力です。")])}),setErrorMessages(errorArr),errorArr},closePreview=()=>{setIsShowPreview(!1)},showPreview=()=>{let countError=valide().length;if(countError>0){setIsShowModal(!0);return}setIsShowPreview(!0)},createMail=()=>{if(navigator.clipboard)return navigator.clipboard.writeText(previewContent).then(()=>{let subject="業務委託日報：".concat(fromName,"：").concat(dateStr),link=document.createElement("a");link.href="mailto:".concat(address,"?cc=").concat(carbonCopy,"&subject=").concat(subject),link.setAttribute("target","_blank"),link.click()})},task={name:"",isBacklog:!0,project:"FUTURE_DEVELOP_GOALS_2023",backlogNumber:"100",isMonth:!0,isWeek:!0,isToday:!0,isNext:!0,monthTarget:"100",weekTarget:"100",todayTarget:"100",nextTarget:"100",todayProgress:""},[tasks,setTasks]=(0,react.useState)([task]),setTaskContent=function(taskKey,index){let taskStringContent=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",taskBooleanContent=arguments.length>3&&void 0!==arguments[3]&&arguments[3];setTasks(tasks.map((task,taskIndex)=>(taskIndex!==index||("isBacklog"===taskKey||"isMonth"===taskKey||"isWeek"===taskKey||"isToday"===taskKey||"isNext"===taskKey?task[taskKey]=taskBooleanContent:task[taskKey]=taskStringContent),task)))},addTask=()=>{setTasks(prevState=>[...prevState,task])},operatingTime={startHour:"10",startMinute:"00",endHour:"19",endMinute:"00"},restTime={startHour:"00",startMinute:"00",endHour:"00",endMinute:"00"},[operatingTimes,setOperatingTimes]=(0,react.useState)([operatingTime]),[restTimes,setRestTimes]=(0,react.useState)([restTime]),[isRestTime,setIsRestTime]=(0,react.useState)(!1),addOperatingTime=()=>{setOperatingTimes(prevState=>[...prevState,operatingTime])},deleteOperatingTime=()=>{let lastIndex=operatingTimes.length-1;setOperatingTimes(operatingTimes.filter((time,index)=>{if(index!==lastIndex)return time}))},addRestTime=()=>{setRestTimes(prevState=>[...prevState,restTime])},deleteRestTime=()=>{let lastIndex=restTimes.length-1;setRestTimes(restTimes.filter((time,index)=>{if(index!==lastIndex)return time}))},setOperatingTimesContent=(timeKey,timeContent,index)=>{setOperatingTimes(operatingTimes.map((time,timeIndex)=>(timeIndex===index&&(time[timeKey]=timeContent),time)))},setRestTimesContent=(timeKey,timeContent,index)=>{setRestTimes(restTimes.map((time,timeIndex)=>(timeIndex===index&&(time[timeKey]=timeContent),time)))},[comment,setComment]=(0,react.useState)("本日は特にありません。"),[address,setAddress]=(0,react.useState)("example0@mail.com"),[carbonCopy,setCarbonCopy]=(0,react.useState)("example1@mail.com, example2@mail.com"),[toName,setToName]=(0,react.useState)("山田太郎様"),[fromName,setFromName]=(0,react.useState)("鈴木一郎"),[isShowPreview,setIsShowPreview]=(0,react.useState)(!1),[isShowModal,setIsShowModal]=(0,react.useState)(!1),[isShowModalCaution,setIsShowModalCaution]=(0,react.useState)(!1),[selectedTaskIndex,setSelectedTaskIndex]=(0,react.useState)(null),toggleIsShowModal=()=>{setIsShowModal(!isShowModal)},toggleIsShowModalCaution=()=>{setIsShowModalCaution(!isShowModalCaution)},showModalCaution=index=>{setSelectedTaskIndex(index),toggleIsShowModalCaution()},deleteTask=()=>{setTasks(tasks.filter((task,index)=>{if(index!==selectedTaskIndex)return task})),toggleIsShowModalCaution()},operatingTimesStr=(result="",operatingTimes.forEach(time=>{let timeStr="".concat(time.startHour,":").concat(time.startMinute,"〜").concat(time.endHour,":").concat(time.endMinute);result+=timeStr}),result),restTimesStr=isRestTime?(result1="【追加休憩】\n",restTimes.forEach(time=>{let timeStr="".concat(time.startHour,":").concat(time.startMinute,"〜").concat(time.endHour,":").concat(time.endMinute)+"\n";result1+=timeStr}),result1):"",dateStr=(()=>{let today=new Date,year=String(today.getFullYear()),month=String(today.getMonth()+1),date=String(today.getDate());return"".concat(year,"/").concat(month,"/").concat(date)})(),monthTasks=(result2="",tasks.forEach(task=>{if(task.isMonth){let taskStr="・".concat(task.name,"（").concat(task.monthTarget,"/100）\n");result2+=taskStr}}),result2),weekTasks=(result3="",tasks.forEach(task=>{if(task.isWeek){let taskStr="・".concat(task.name,"（").concat(task.weekTarget,"/100）\n");result3+=taskStr}}),result3),todayProgress=(result4="",tasks.forEach(task=>{let url="https://kumukumu.backlog.com/view/".concat(task.project,"-").concat(task.backlogNumber,"\n"),taskStr="・".concat(task.name,"（").concat(task.todayTarget,"/100）\n");task.isToday&&task.isBacklog?result4=result4+taskStr+url:task.isToday&&!task.isBacklog&&(result4+=taskStr)}),result4),todayReport=(result5="",tasks.forEach(task=>{if(task.isToday){let taskStr="・".concat(task.name,"\n").concat(task.todayProgress,"\n");result5+=taskStr}}),result5),nextTasks=(result6="",tasks.forEach(task=>{let url="https://kumukumu.backlog.com/view/".concat(task.project,"-").concat(task.backlogNumber,"\n"),taskStr="・".concat(task.name,"（").concat(task.nextTarget,"/100）\n");task.isNext&&task.isBacklog?result6=result6+taskStr+url:task.isNext&&!task.isBacklog&&(result6+=taskStr)}),result6),greeting=(()=>{let today=new Date,day=today.getDay();return 5===day||6===day?"来週も宜しくお願い致します。":"明日も宜しくお願い致します。"})(),previewContent="".concat(toName,"\n\nお世話になっております。\n本日の業務をご報告申し上げます。\n\n【作業日・業務時間】\n").concat(dateStr,"\n").concat(operatingTimesStr,"\n").concat(restTimesStr,"\n【今月の目標】\n").concat(monthTasks,"\n【今週の目標】\n").concat(weekTasks,"\n【本日の業務と進捗】\n").concat(todayProgress,"\n【業務報告】\n").concat(todayReport,"\n【次の稼働日の業務予定】\n").concat(nextTasks,"\n【コメント】\n").concat(comment,"\n以上です、本日もありがとうございました。\n").concat(greeting,"\n\n").concat(fromName),[isShowTodayTasks,setIsShowTodayTasks]=(0,react.useState)(!1),getTodayTasks=checked=>{setIsShowTodayTasks(checked)},filteredTasks=isShowTodayTasks?tasks.filter(task=>!0===task.isToday):tasks;return(0,jsx_runtime.jsxs)("div",{className:Home_module_default().container,children:[(0,jsx_runtime.jsxs)(head_default(),{children:[(0,jsx_runtime.jsx)("title",{children:pageTitle}),(0,jsx_runtime.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,jsx_runtime.jsx)("meta",{name:"robots",content:"noindex"}),(0,jsx_runtime.jsx)("link",{rel:"icon",href:"./favicon.ico"})]}),(0,jsx_runtime.jsxs)("main",{className:Home_module_default().main,children:[!isLogin&&(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h1",{className:Home_module_default().title,children:pageTitle}),(0,jsx_runtime.jsx)("div",{className:Home_module_default().input,children:(0,jsx_runtime.jsx)(InputPassword_InputText,{labelText:"パスワード",initValue:loginPass,handleChange:e=>setLoginPass(e.target.value)})}),(0,jsx_runtime.jsx)("div",{className:Home_module_default()["login-button"],children:(0,jsx_runtime.jsx)(Button,{backGroundColor:"blue",handleClick:handleLogin,children:"ログイン"})}),(0,jsx_runtime.jsx)("p",{className:Home_module_default()["login-message"],children:loginMessage})]}),isLogin&&(0,jsx_runtime.jsxs)("div",{className:"wrapper",children:[(0,jsx_runtime.jsx)("h1",{className:Home_module_default().title,children:pageTitle}),(0,jsx_runtime.jsxs)("div",{className:Home_module_default().buttons,children:[(0,jsx_runtime.jsxs)("div",{className:Home_module_default()["button-groups"],children:[(0,jsx_runtime.jsxs)("div",{className:Home_module_default()["button-group"],children:[(0,jsx_runtime.jsxs)("label",{htmlFor:"file-upload",className:Home_module_default()["file-upload"],children:["データの読み込み",(0,jsx_runtime.jsx)("input",{type:"file",onInput:e=>readData(e),id:"file-upload"})]}),(0,jsx_runtime.jsx)(Button,{backGroundColor:"blue",handleClick:exportData,children:"データの書き出し"})]}),(0,jsx_runtime.jsxs)("div",{children:[isShowPreview?(0,jsx_runtime.jsx)(Button,{backGroundColor:"green",handleClick:closePreview,children:"プレビュー"}):(0,jsx_runtime.jsx)(Button,{backGroundColor:"green",handleClick:showPreview,children:"プレビュー"}),(0,jsx_runtime.jsx)(Button,{backGroundColor:"blue",handleClick:createMail,children:"メール作成"})]})]}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Checkbox,{labelText:"本日のタスクのみ",initChecked:isShowTodayTasks,handleChange:e=>getTodayTasks(e.target.checked)})})]}),!isShowPreview&&(0,jsx_runtime.jsxs)("div",{className:"form",children:[(0,jsx_runtime.jsxs)("div",{className:Home_module_default().tasks,children:[filteredTasks.map((_task,index)=>(0,jsx_runtime.jsxs)("div",{className:Home_module_default().task,children:[(0,jsx_runtime.jsxs)("div",{className:Home_module_default()["task-content"],children:[(0,jsx_runtime.jsxs)("span",{className:Home_module_default()["task-count"],children:[String(_task.name.length),"/256"]}),(0,jsx_runtime.jsx)(InputText,{labelText:"タスク".concat(index+1),maxLength:256,borderColor:"blue",initValue:_task.name,handleChange:e=>setTaskContent("name",index,e.target.value)})]}),(0,jsx_runtime.jsxs)("div",{className:"".concat(Home_module_default()["task-content"]," ").concat(Home_module_default()["task-project"]),children:[(0,jsx_runtime.jsxs)("div",{className:Home_module_default()["task-project-type"],children:[(0,jsx_runtime.jsx)("h3",{children:"プロジェクト"}),(0,jsx_runtime.jsx)(PulldownMenu,{initValue:_task.project,isDisabled:!_task.isBacklog,options:projects,handleChange:e=>setTaskContent("project",index,e.target.value)})]}),(0,jsx_runtime.jsx)(InputNumber,{labelText:"番号",initValue:_task.backlogNumber,isDisabled:!_task.isBacklog,handleChange(e){setTaskContent("backlogNumber",index,e.target.value)}}),(0,jsx_runtime.jsxs)("div",{className:Home_module_default()["task-backlog"],children:[(0,jsx_runtime.jsx)(Checkbox,{labelText:"Backlogの有無",initChecked:_task.isBacklog,handleChange:e=>setTaskContent("isBacklog",index,"",e.target.checked)}),_task.isBacklog&&(0,jsx_runtime.jsx)("a",{className:Home_module_default()["task-link"],rel:"noreferrer",target:"_blank",href:"https://kumukumu.backlog.com/view/".concat(_task.project,"-").concat(_task.backlogNumber),children:"https://kumukumu.backlog.com/view/".concat(_task.project,"-").concat(_task.backlogNumber)})]})]}),(0,jsx_runtime.jsxs)("div",{className:Home_module_default()["task-content"],children:[(0,jsx_runtime.jsxs)("div",{className:Home_module_default()["target-group"],children:[(0,jsx_runtime.jsxs)("div",{className:Home_module_default().target,children:[(0,jsx_runtime.jsx)(Checkbox,{labelText:"今月",initChecked:_task.isMonth,handleChange:e=>setTaskContent("isMonth",index,"",e.target.checked)}),(0,jsx_runtime.jsx)(Range,{initValue:_task.monthTarget,handleChange:e=>setTaskContent("monthTarget",index,e.target.value)}),(0,jsx_runtime.jsxs)("span",{children:[_task.monthTarget,"/100"]})]}),(0,jsx_runtime.jsxs)("div",{className:Home_module_default().target,children:[(0,jsx_runtime.jsx)(Checkbox,{labelText:"今週",initChecked:_task.isWeek,handleChange:e=>setTaskContent("isWeek",index,"",e.target.checked)}),(0,jsx_runtime.jsx)(Range,{initValue:_task.weekTarget,handleChange:e=>setTaskContent("weekTarget",index,e.target.value)}),(0,jsx_runtime.jsxs)("span",{children:[_task.weekTarget,"/100"]})]})]}),(0,jsx_runtime.jsxs)("div",{className:Home_module_default()["target-group"],children:[(0,jsx_runtime.jsxs)("div",{className:Home_module_default().target,children:[(0,jsx_runtime.jsx)(Checkbox,{labelText:"本日",initChecked:_task.isToday,handleChange:e=>setTaskContent("isToday",index,"",e.target.checked)}),(0,jsx_runtime.jsx)(Range,{initValue:_task.todayTarget,handleChange:e=>setTaskContent("todayTarget",index,e.target.value)}),(0,jsx_runtime.jsxs)("span",{children:[_task.todayTarget,"/100"]})]}),(0,jsx_runtime.jsxs)("div",{className:Home_module_default().target,children:[(0,jsx_runtime.jsx)(Checkbox,{labelText:"予定",initChecked:_task.isNext,handleChange:e=>setTaskContent("isNext",index,"",e.target.checked)}),(0,jsx_runtime.jsx)(Range,{initValue:_task.nextTarget,handleChange:e=>setTaskContent("nextTarget",index,e.target.value)}),(0,jsx_runtime.jsxs)("span",{children:[_task.nextTarget,"/100"]})]})]})]}),(0,jsx_runtime.jsxs)("div",{className:Home_module_default()["task-content"],children:[(0,jsx_runtime.jsxs)("span",{className:Home_module_default()["task-count"],children:[String(_task.todayProgress.length),"/2000"]}),(0,jsx_runtime.jsx)(TextArea,{labelText:"報告",isDisabled:!_task.isToday,maxLength:2e3,borderColor:"blue",initValue:_task.todayProgress,handleChange:e=>setTaskContent("todayProgress",index,e.target.value)})]}),(0,jsx_runtime.jsx)(Button,{disabled:tasks.length<=1,isSmall:!0,backGroundColor:"red",handleClick:()=>showModalCaution(index),children:"削除"})]},index)),(0,jsx_runtime.jsx)(Button,{disabled:tasks.length>=100,isSmall:!0,backGroundColor:"blue",handleClick:addTask,children:"追加"})]}),(0,jsx_runtime.jsxs)("div",{className:Home_module_default().times,children:[(0,jsx_runtime.jsxs)("div",{className:Home_module_default()["operating-times"],children:[operatingTimes.map((_operatingTime,index)=>(0,jsx_runtime.jsxs)("div",{className:Home_module_default()["operating-time"],children:[(0,jsx_runtime.jsxs)("h3",{children:["稼働時間",index+1]}),(0,jsx_runtime.jsx)(InputTime,{initValue:_operatingTime.startHour,type:"hour",handleChange:e=>setOperatingTimesContent("startHour",e.target.value,index)}),":",(0,jsx_runtime.jsx)(InputTime,{initValue:_operatingTime.startMinute,type:"minute",handleChange:e=>setOperatingTimesContent("startMinute",e.target.value,index)}),"〜",(0,jsx_runtime.jsx)(InputTime,{initValue:_operatingTime.endHour,type:"hour",handleChange:e=>setOperatingTimesContent("endHour",e.target.value,index)}),":",(0,jsx_runtime.jsx)(InputTime,{initValue:_operatingTime.endMinute,type:"minute",handleChange:e=>setOperatingTimesContent("endMinute",e.target.value,index)})]},index)),(0,jsx_runtime.jsx)(Button,{disabled:operatingTimes.length>=5,isSmall:!0,backGroundColor:"green",handleClick:addOperatingTime,children:"追加"}),(0,jsx_runtime.jsx)(Button,{disabled:operatingTimes.length<=1,isSmall:!0,backGroundColor:"red",handleClick:deleteOperatingTime,children:"削除"})]}),(0,jsx_runtime.jsxs)("div",{className:Home_module_default()["rest-times"],children:[(0,jsx_runtime.jsx)(Checkbox,{labelText:"追加休憩の有無",initChecked:isRestTime,handleChange:e=>setIsRestTime(e.target.checked)}),isRestTime&&restTimes.map((_restTime,index)=>(0,jsx_runtime.jsxs)("div",{className:Home_module_default()["rest-time"],children:[(0,jsx_runtime.jsxs)("h3",{children:["追加休憩",index+1]}),(0,jsx_runtime.jsx)(InputTime,{initValue:_restTime.startHour,type:"hour",handleChange:e=>setRestTimesContent("startHour",e.target.value,index)}),":",(0,jsx_runtime.jsx)(InputTime,{initValue:_restTime.startMinute,type:"minute",handleChange:e=>setRestTimesContent("startMinute",e.target.value,index)}),"〜",(0,jsx_runtime.jsx)(InputTime,{initValue:_restTime.endHour,type:"hour",handleChange:e=>setRestTimesContent("endHour",e.target.value,index)}),":",(0,jsx_runtime.jsx)(InputTime,{initValue:_restTime.endMinute,type:"minute",handleChange:e=>setRestTimesContent("endMinute",e.target.value,index)})]},index)),isRestTime&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button,{disabled:restTimes.length>=5,isSmall:!0,backGroundColor:"green",handleClick:addRestTime,children:"追加"}),(0,jsx_runtime.jsx)(Button,{disabled:restTimes.length<=1,isSmall:!0,backGroundColor:"red",handleClick:deleteRestTime,children:"削除"})]})]})]}),(0,jsx_runtime.jsxs)("div",{className:"others",children:[(0,jsx_runtime.jsx)("div",{className:Home_module_default().other,children:(0,jsx_runtime.jsx)(TextArea,{labelText:"コメント",borderColor:"gray",initValue:comment,handleChange:e=>setComment(e.target.value)})}),(0,jsx_runtime.jsx)("div",{className:Home_module_default().other,children:(0,jsx_runtime.jsx)(InputText,{labelText:"宛先",borderColor:"gray",initValue:address,handleChange:e=>setAddress(e.target.value)})}),(0,jsx_runtime.jsx)("div",{className:Home_module_default().other,children:(0,jsx_runtime.jsx)(InputText,{labelText:"CC",borderColor:"gray",initValue:carbonCopy,handleChange:e=>setCarbonCopy(e.target.value)})}),(0,jsx_runtime.jsx)("div",{className:Home_module_default().other,children:(0,jsx_runtime.jsx)(InputText,{labelText:"宛先の人の名前",borderColor:"gray",initValue:toName,handleChange:e=>setToName(e.target.value)})}),(0,jsx_runtime.jsx)("div",{className:Home_module_default().other,children:(0,jsx_runtime.jsx)(InputText,{labelText:"自分の名前",borderColor:"gray",initValue:fromName,handleChange:e=>setFromName(e.target.value)})})]})]}),isShowPreview&&(0,jsx_runtime.jsxs)("div",{className:"preview",children:[(0,jsx_runtime.jsx)("h3",{className:Home_module_default()["preview-title"],children:"プレビュー（フォームは読み取り専用です）"}),(0,jsx_runtime.jsx)("div",{className:Home_module_default()["preview-address"],children:(0,jsx_runtime.jsxs)("label",{children:["宛先",(0,jsx_runtime.jsx)("input",{type:"text",value:address,readOnly:!0})]})}),(0,jsx_runtime.jsx)("div",{className:Home_module_default()["preview-cc"],children:(0,jsx_runtime.jsxs)("label",{children:["CC",(0,jsx_runtime.jsx)("input",{type:"text",value:carbonCopy,readOnly:!0})]})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)("label",{children:["本文（メール作成ボタンをクリックすると、クリップボードにコピーされます）",(0,jsx_runtime.jsx)("textarea",{value:previewContent,readOnly:!0,className:Home_module_default()["preview-content"]})]})})]})]}),isShowModal&&(0,jsx_runtime.jsx)(Modal,{isShow:isShowModal,handleClick:toggleIsShowModal,children:errorMessages}),isShowModalCaution&&(0,jsx_runtime.jsx)(ModalCaution_Modal,{isShow:isShowModalCaution,okHandleClick:deleteTask,cancelHandleClick:toggleIsShowModalCaution,children:"タスク".concat(String(Number(selectedTaskIndex)+1),"を削除しますか。\n削除したタスクは復元できません。")})]}),(0,jsx_runtime.jsxs)("footer",{className:Home_module_default().footer,children:[(0,jsx_runtime.jsx)("a",{href:"https://github.com/khosokawa0716/report-creation#readme",rel:"noreferrer",target:"_blank",className:Home_module_default()["footer-link"],children:"README!"}),(0,jsx_runtime.jsx)("a",{href:"https://khosokawa0716.github.io/branchname-and-command/",rel:"noreferrer",target:"_blank",className:Home_module_default()["footer-link"],children:"ブランチ作成ツール"})]})]})}},2364:function(module){module.exports={"com-button":"Button_com-button__LY6pl",disabled:"Button_disabled__bixQW",small:"Button_small__7HEPY",blue:"Button_blue__UBUiW",green:"Button_green__kmJ1R",red:"Button_red__ocyzR",gray:"Button_gray__Yq0ev"}},8258:function(){},1633:function(module){module.exports={container:"Home_container__97eC3",main:"Home_main__OVLM4",footer:"Home_footer__zed0_",title:"Home_title__q0Qg4",input:"Home_input__ZZ4GD","login-button":"Home_login-button__PR5Pe","login-message":"Home_login-message__hZhVN",buttons:"Home_buttons__kEItN","button-groups":"Home_button-groups__KPECy","button-group":"Home_button-group__XVPS0","file-upload":"Home_file-upload__oHbbo",tasks:"Home_tasks___fxtj",task:"Home_task__ZUMuU","task-content":"Home_task-content__kjVa9","task-count":"Home_task-count__gn6P_","task-project":"Home_task-project__QNgRm","task-project-type":"Home_task-project-type__OtOSw","task-backlog":"Home_task-backlog__rlQqP","task-link":"Home_task-link__lMSXa","target-group":"Home_target-group__8Fwp_",target:"Home_target__E_xu_",times:"Home_times__RggTT","operating-times":"Home_operating-times__iUeuF","rest-times":"Home_rest-times__fuIzn","operating-time":"Home_operating-time__Un8Rs","rest-time":"Home_rest-time__9ZsAC",other:"Home_other__CiVCr","footer-link":"Home_footer-link__57kQE","preview-title":"Home_preview-title__ioOh4","preview-content":"Home_preview-content__Fq5mE","preview-address":"Home_preview-address__Omwax","preview-cc":"Home_preview-cc__Y9kJ1"}},9314:function(module){module.exports={"com-input":"InputNumber_com-input__TlYOH"}},5030:function(module){module.exports={"com-input":"InputText_com-input__8W5L1",blue:"InputText_blue__KL7rx",gray:"InputText_gray__wnItt"}},4631:function(module){module.exports={"com-input-time":"InputTime_com-input-time__u6IQI"}},9185:function(module){module.exports={modal:"Modal_modal__fbvPB","is-show":"Modal_is-show__AGaDN",content:"Modal_content__BWcLg",overlay:"Modal_overlay__Ca5IT",footer:"Modal_footer__IanSV"}},1468:function(module){module.exports={"com-pulldown-menu":"PulldownMenu_com-pulldown-menu__PWk59"}},9589:function(module){module.exports={"com-textarea":"TextArea_com-textarea__eA2qJ",blue:"TextArea_blue__5Hmxi",gray:"TextArea_gray__gO5UL"}},9008:function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__(3121)}},function(__webpack_require__){__webpack_require__.O(0,[774,888,179],function(){return __webpack_require__(__webpack_require__.s=8312)}),_N_E=__webpack_require__.O()}]);