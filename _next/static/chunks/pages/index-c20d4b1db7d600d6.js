(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4665:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return Button}}),__webpack_require__(7294);var _styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2364),_styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5893);function Button(_ref){var backGroundColor=_ref.backGroundColor,handleClick=_ref.handleClick,children=_ref.children,_ref$isSmall=_ref.isSmall,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{className:"".concat(_styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["com-button"]," ").concat(_styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[backGroundColor]," ").concat(void 0!==_ref$isSmall&&_ref$isSmall?_styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_2___default().small:""," ").concat(disabled?_styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_2___default().disabled:""),disabled:disabled,onClick:function(e){return handleClick(e)},children:children})}},7969:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return Checkbox}}),__webpack_require__(7294);var _styles_Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8258),_styles_Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_styles_Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5893);function Checkbox(_ref){var labelText=_ref.labelText,initChecked=_ref.initChecked,handleChange=_ref.handleChange;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label",{className:_styles_Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["com-checkbox"],children:[labelText,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{type:"checkbox",checked:initChecked,onChange:function(e){return handleChange(e)}})]})}},1069:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return InputNumber}}),__webpack_require__(7294);var _styles_InputNumber_module_scss__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9314),_styles_InputNumber_module_scss__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_styles_InputNumber_module_scss__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5893);function InputNumber(_ref){var labelText=_ref.labelText,initValue=_ref.initValue,isDisabled=_ref.isDisabled,handleChange=_ref.handleChange;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label",{className:_styles_InputNumber_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["com-input"],children:[labelText,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{type:"number",min:"0",max:"99999",value:initValue,disabled:isDisabled,onChange:function(e){return handleChange(e)}})]})}},8703:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return InputText}}),__webpack_require__(7294);var _styles_InputText_module_scss__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5030),_styles_InputText_module_scss__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_styles_InputText_module_scss__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5893);function InputText(_ref){var labelText=_ref.labelText,initValue=_ref.initValue,handleChange=_ref.handleChange;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label",{className:"".concat(_styles_InputText_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["com-input"],"  ").concat(_styles_InputText_module_scss__WEBPACK_IMPORTED_MODULE_2___default().blue),children:[labelText,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{type:"password",minLength:0,maxLength:256,value:initValue,onChange:function(e){return handleChange(e)}})]})}},1772:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return PulldownMenu}}),__webpack_require__(7294);var _styles_PulldownMenu_module_scss__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1468),_styles_PulldownMenu_module_scss__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_styles_PulldownMenu_module_scss__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5893);function PulldownMenu(_ref){var initValue=_ref.initValue,isDisabled=_ref.isDisabled,handleChange=_ref.handleChange,optionItems=_ref.options.map(function(option,index){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option",{value:option.value,children:option.label},index)});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("select",{className:_styles_PulldownMenu_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["com-pulldown-menu"],value:initValue,disabled:isDisabled,onChange:function(e){return handleChange(e)},children:optionItems})}},1288:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Home}});var head=__webpack_require__(9008),head_default=__webpack_require__.n(head),react=__webpack_require__(7294),InputText_module=__webpack_require__(5030),InputText_module_default=__webpack_require__.n(InputText_module),jsx_runtime=__webpack_require__(5893);function InputText(_ref){var borderColor=_ref.borderColor,labelText=_ref.labelText,_ref$maxLength=_ref.maxLength,initValue=_ref.initValue,handleChange=_ref.handleChange;return(0,jsx_runtime.jsxs)("label",{className:"".concat(InputText_module_default()["com-input"],"  ").concat("blue"===borderColor?InputText_module_default().blue:InputText_module_default().gray),children:[labelText,(0,jsx_runtime.jsx)("input",{type:"text",minLength:0,maxLength:void 0===_ref$maxLength?5e3:_ref$maxLength,value:initValue,onChange:function(e){return handleChange(e)}})]})}var InputNumber=__webpack_require__(1069),InputTime_module=__webpack_require__(4631),InputTime_module_default=__webpack_require__.n(InputTime_module);function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function InputTime(_ref){var arr,hours,initValue=_ref.initValue,type=_ref.type,handleChange=_ref.handleChange;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("select",{className:InputTime_module_default()["com-input-time"],value:initValue,onChange:function(e){return handleChange(e)},children:(hours=((function(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)})(arr=Array(24))||function(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}}(arr)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map(function(_,i){return i}),("hour"===type?hours:["00","15","30","45"]).map(function(time,index){return(0,jsx_runtime.jsx)("option",{value:time,children:time},index)}))})})}var InputPassword=__webpack_require__(8703),TextArea_module=__webpack_require__(9589),TextArea_module_default=__webpack_require__.n(TextArea_module);function TextArea(_ref){var borderColor=_ref.borderColor,labelText=_ref.labelText,_ref$isDisabled=_ref.isDisabled,_ref$maxLength=_ref.maxLength,initValue=_ref.initValue,handleChange=_ref.handleChange;return(0,jsx_runtime.jsxs)("label",{className:"".concat(TextArea_module_default()["com-textarea"],"  ").concat("blue"===borderColor?TextArea_module_default().blue:TextArea_module_default().gray),children:[labelText,(0,jsx_runtime.jsx)("textarea",{value:initValue,disabled:void 0!==_ref$isDisabled&&_ref$isDisabled,minLength:0,maxLength:void 0===_ref$maxLength?5e3:_ref$maxLength,onChange:function(e){return handleChange(e)}})]})}var Button=__webpack_require__(4665),ButtonIcon_module=__webpack_require__(3906),ButtonIcon_module_default=__webpack_require__.n(ButtonIcon_module),free_solid_svg_icons=__webpack_require__(9417),index_es=__webpack_require__(9603),iconText={add:free_solid_svg_icons.r8p,delete:free_solid_svg_icons.$aW,edit:free_solid_svg_icons.Xcf,save:free_solid_svg_icons.r6l,cancel:free_solid_svg_icons.NBC};function ButtonIcon_Button(_ref){var iconType=_ref.iconType,handleClick=_ref.handleClick,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled;return(0,jsx_runtime.jsx)("button",{className:"".concat(ButtonIcon_module_default()["com-button-icon"]," ").concat(ButtonIcon_module_default()[iconType]," ").concat(disabled?ButtonIcon_module_default().disabled:""),disabled:disabled,onClick:function(e){return handleClick(e)},children:(0,jsx_runtime.jsx)(index_es.G,{icon:iconText[iconType]})})}var PulldownMenu=__webpack_require__(1772),Checkbox=__webpack_require__(7969);function Range(_ref){var initValue=_ref.initValue,handleChange=_ref.handleChange,optionItems=["10","20","30","40","50","60","70","80","90","100"].map(function(option,index){return(0,jsx_runtime.jsx)("option",{value:option},index)});return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("input",{type:"range",step:"5",list:"range-list",value:initValue,onChange:function(e){return handleChange(e)}}),(0,jsx_runtime.jsx)("datalist",{id:"range-list",children:optionItems})]})}var Modal_module=__webpack_require__(9185),Modal_module_default=__webpack_require__.n(Modal_module);function Modal(_ref){var isShow=_ref.isShow,_handleClick=_ref.handleClick,children=_ref.children;return(0,react.useEffect)(function(){return document.body.style.overflow="hidden",function(){document.body.style.overflow="auto"}},[]),(0,jsx_runtime.jsxs)("div",{className:"".concat(Modal_module_default().modal," ").concat(isShow?Modal_module_default()["is-show"]:""),children:[(0,jsx_runtime.jsx)("div",{className:Modal_module_default().overlay,onClick:function(e){return _handleClick(e)}}),(0,jsx_runtime.jsxs)("div",{className:Modal_module_default().content,children:[(0,jsx_runtime.jsx)("h3",{children:"入力に不備があります。"}),(0,jsx_runtime.jsx)("ul",{children:children.map(function(item,index){return(0,jsx_runtime.jsx)("li",{children:item},index)})}),(0,jsx_runtime.jsx)("div",{className:Modal_module_default().footer,children:(0,jsx_runtime.jsx)(Button.Z,{backGroundColor:"gray",handleClick:function(e){return _handleClick(e)},children:"閉じる"})})]})]})}function ModalCaution_Modal(_ref){var isShow=_ref.isShow,okHandleClick=_ref.okHandleClick,cancelHandleClick=_ref.cancelHandleClick,children=_ref.children;return(0,react.useEffect)(function(){return document.body.style.overflow="hidden",function(){document.body.style.overflow="auto"}},[]),(0,jsx_runtime.jsxs)("div",{className:"".concat(Modal_module_default().modal," ").concat(isShow?Modal_module_default()["is-show"]:""),children:[(0,jsx_runtime.jsx)("div",{className:Modal_module_default().overlay,onClick:function(e){return cancelHandleClick(e)}}),(0,jsx_runtime.jsxs)("div",{className:Modal_module_default().content,children:[(0,jsx_runtime.jsx)("h3",{children:"タスクの削除"}),(0,jsx_runtime.jsx)("p",{children:children}),(0,jsx_runtime.jsxs)("div",{className:Modal_module_default().footer,children:[(0,jsx_runtime.jsx)(Button.Z,{backGroundColor:"gray",handleClick:function(e){return cancelHandleClick(e)},children:"キャンセル"}),(0,jsx_runtime.jsx)(Button.Z,{backGroundColor:"blue",handleClick:function(e){return okHandleClick(e)},children:"OK"})]})]})]})}var Home_module=__webpack_require__(1633),Home_module_default=__webpack_require__.n(Home_module);function pages_toConsumableArray(arr){return function(arr){if(Array.isArray(arr))return pages_arrayLikeToArray(arr)}(arr)||function(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||pages_unsupportedIterableToArray(arr)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _slicedToArray(arr,i){return function(arr){if(Array.isArray(arr))return arr}(arr)||function(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||pages_unsupportedIterableToArray(arr,i)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function pages_unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return pages_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return pages_arrayLikeToArray(o,minLen)}}function pages_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Home(){var today,year,month,date,dayOfWeek,pageTitle="日報作成ツール",_useState2=_slicedToArray((0,react.useState)(!1),2),isLogin=_useState2[0],setIsLogin=_useState2[1],_useState4=_slicedToArray((0,react.useState)(""),2),loginPass=_useState4[0],setLoginPass=_useState4[1],_useState6=_slicedToArray((0,react.useState)(""),2),loginMessage=_useState6[0],setLoginMessage=_useState6[1],strageKey="report-creation-password",password="report";(0,react.useEffect)(function(){localStorage.getItem(strageKey)===password&&setIsLogin(!0)},[]);var projects=[{label:"F2023",value:"FUTURE_DEVELOP_GOALS_2023"},{label:"MKPL",value:"MKPL_MAINTE_DEV"},{label:"FB_MKPL",value:"FB_MKPL"},{label:"CMS_DEFECT",value:"CMS_DEFECT"},{label:"EC_DEFECT",value:"EC_DEFECT"},{label:"TICKET_DEFECT",value:"TICKET_DEFECT"},{label:"GOURMET_DEFECT",value:"GOURMET_DEFECT"},{label:"HOME_DEFECT",value:"HOME_DEFECT"},{label:"BEAUTY_DEFECT",value:"BEAUTY_DEFECT"},{label:"FARM",value:"FARM"},{label:"QC_FB",value:"QC_FB"}],readData=function(e){var file_reader=new FileReader;file_reader.addEventListener("load",function(e){if(null!==e.target&&"string"==typeof e.target.result){var importData=JSON.parse(e.target.result);setAddress(importData.address),setCarbonCopy(importData.carbonCopy),setToName(importData.toName),setFromName(importData.fromName),setTasks(importData.tasks)}}),null!==e.target.files&&file_reader.readAsText(e.target.files[0])},getFileName=function(){var today=new Date,zeroPadding=function(time){return String(time).padStart(2,"0")},year=String(today.getFullYear()),month=zeroPadding(today.getMonth()+1),date=zeroPadding(today.getDate()),hours=zeroPadding(today.getHours()),minutes=zeroPadding(today.getMinutes()),seconds=zeroPadding(today.getSeconds());return"daily-report_".concat(year).concat(month).concat(date).concat(hours).concat(minutes).concat(seconds,".json")},_useState8=_slicedToArray((0,react.useState)([]),2),errorMessages=_useState8[0],setErrorMessages=_useState8[1],valide=function(){var errorArr=[];return tasks.forEach(function(task,index){task.name||(errorArr=[].concat(pages_toConsumableArray(errorArr),["タスク".concat(index+1,"が未入力です。")])),task.isToday&&!task.todayProgress&&(errorArr=[].concat(pages_toConsumableArray(errorArr),["タスク".concat(index+1,"の本日にチェックが入っている状態で、報告が未入力です。")])),task.isBacklog&&!task.backlogNumber&&(errorArr=[].concat(pages_toConsumableArray(errorArr),["タスク".concat(index+1,"のBacklogの有無にチェックが入っている状態で、番号が未入力です。")]))}),setErrorMessages(errorArr),errorArr},task={name:"",isBacklog:!0,project:"FUTURE_DEVELOP_GOALS_2023",backlogNumber:"100",isMonth:!0,isWeek:!0,isToday:!0,isNext:!0,monthTarget:"100",weekTarget:"100",todayTarget:"100",nextTarget:"100",todayProgress:""},_useState10=_slicedToArray((0,react.useState)([task]),2),tasks=_useState10[0],setTasks=_useState10[1],setTaskContent=function(taskKey,index){var taskStringContent=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",taskBooleanContent=arguments.length>3&&void 0!==arguments[3]&&arguments[3];setTasks(tasks.map(function(task,taskIndex){return taskIndex!==index||("isBacklog"===taskKey||"isMonth"===taskKey||"isWeek"===taskKey||"isToday"===taskKey||"isNext"===taskKey?task[taskKey]=taskBooleanContent:task[taskKey]=taskStringContent),task}))},operatingTime={startHour:"10",startMinute:"00",endHour:"19",endMinute:"00"},restTime={startHour:"00",startMinute:"00",endHour:"00",endMinute:"00"},_useState12=_slicedToArray((0,react.useState)([operatingTime]),2),operatingTimes=_useState12[0],setOperatingTimes=_useState12[1],_useState14=_slicedToArray((0,react.useState)([restTime]),2),restTimes=_useState14[0],setRestTimes=_useState14[1],_useState16=_slicedToArray((0,react.useState)(!1),2),isRestTime=_useState16[0],setIsRestTime=_useState16[1],setOperatingTimesContent=function(timeKey,timeContent,index){setOperatingTimes(operatingTimes.map(function(time,timeIndex){return timeIndex===index&&(time[timeKey]=timeContent),time}))},setRestTimesContent=function(timeKey,timeContent,index){setRestTimes(restTimes.map(function(time,timeIndex){return timeIndex===index&&(time[timeKey]=timeContent),time}))},_useState18=_slicedToArray((0,react.useState)("本日は特にありません。"),2),comment=_useState18[0],setComment=_useState18[1],_useState20=_slicedToArray((0,react.useState)("example0@mail.com"),2),address=_useState20[0],setAddress=_useState20[1],_useState22=_slicedToArray((0,react.useState)("example1@mail.com, example2@mail.com"),2),carbonCopy=_useState22[0],setCarbonCopy=_useState22[1],_useState24=_slicedToArray((0,react.useState)("山田太郎様"),2),toName=_useState24[0],setToName=_useState24[1],_useState26=_slicedToArray((0,react.useState)("鈴木一郎"),2),fromName=_useState26[0],setFromName=_useState26[1],_useState28=_slicedToArray((0,react.useState)(!1),2),isShowPreview=_useState28[0],setIsShowPreview=_useState28[1],_useState30=_slicedToArray((0,react.useState)(!1),2),isShowModal=_useState30[0],setIsShowModal=_useState30[1],_useState32=_slicedToArray((0,react.useState)(!1),2),isShowModalCaution=_useState32[0],setIsShowModalCaution=_useState32[1],_useState34=_slicedToArray((0,react.useState)(null),2),selectedTaskIndex=_useState34[0],setSelectedTaskIndex=_useState34[1],toggleIsShowModalCaution=function(){setIsShowModalCaution(!isShowModalCaution)},showModalCaution=function(index){setSelectedTaskIndex(index),toggleIsShowModalCaution()},formatTime=function(hour,minute){return"".concat(hour.padStart(2,"0"),":").concat(minute.padStart(2,"0"))},operatingTimesStr=operatingTimes.map(function(time){return"".concat(formatTime(time.startHour,time.startMinute),"〜").concat(formatTime(time.endHour,time.endMinute))}).join("\n"),restTimesStr=isRestTime?"【追加休憩】\n"+restTimes.map(function(time){return"".concat(formatTime(time.startHour,time.startMinute),"〜").concat(formatTime(time.endHour,time.endMinute))}).join("\n"):"",dateStr=(year=String((today=new Date).getFullYear()),month=String(today.getMonth()+1),date=String(today.getDate()),"".concat(year,"/").concat(month,"/").concat(date)),monthTasks=tasks.filter(function(task){return task.isMonth}).map(function(task){return"・".concat(task.name,"（").concat(task.monthTarget,"/100）")}).join("\n"),weekTasks=tasks.filter(function(task){return task.isWeek}).map(function(task){return"・".concat(task.name,"（").concat(task.weekTarget,"/100）")}).join("\n"),todayProgress=tasks.filter(function(task){return task.isToday}).map(function(task){var progress="・".concat(task.name,"（").concat(task.todayTarget,"/100）");return task.isBacklog?"".concat(progress,"\nhttps://kumukumu.backlog.com/view/").concat(task.project,"-").concat(task.backlogNumber,"\n"):"".concat(progress,"\n")}).join(""),todayReport=tasks.filter(function(task){return task.isToday}).map(function(task){return"・".concat(task.name,"\n").concat(task.todayProgress)}).join("\n"),nextTasks=tasks.filter(function(task){return task.isNext}).map(function(task){var progress="・".concat(task.name,"（").concat(task.nextTarget,"/100）");return task.isBacklog?"".concat(progress,"\nhttps://kumukumu.backlog.com/view/").concat(task.project,"-").concat(task.backlogNumber,"\n"):"".concat(progress,"\n")}).join(""),greeting=5===(dayOfWeek=new Date().getDay())||6===dayOfWeek?"来週も宜しくお願い致します。":"明日も宜しくお願い致します。",previewContent="".concat(toName,"\n\nお世話になっております。\n本日の業務をご報告申し上げます。\n\n【作業日・業務時間】\n").concat(dateStr,"\n").concat(operatingTimesStr,"\n").concat(restTimesStr,"\n【今月の目標】\n").concat(monthTasks,"\n【今週の目標】\n").concat(weekTasks,"\n【本日の業務と進捗】\n").concat(todayProgress,"\n【業務報告】\n").concat(todayReport,"\n【次の稼働日の業務予定】\n").concat(nextTasks,"\n【コメント】\n").concat(comment,"\n以上です、本日もありがとうございました。\n").concat(greeting,"\n\n").concat(fromName),_useState36=_slicedToArray((0,react.useState)(!1),2),isShowTodayTasks=_useState36[0],setIsShowTodayTasks=_useState36[1],getTodayTasks=function(checked){setIsShowTodayTasks(checked)},filteredTasks=isShowTodayTasks?tasks.filter(function(task){return!0===task.isToday}):tasks;return(0,jsx_runtime.jsxs)("div",{className:Home_module_default().container,children:[(0,jsx_runtime.jsxs)(head_default(),{children:[(0,jsx_runtime.jsx)("title",{children:pageTitle}),(0,jsx_runtime.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,jsx_runtime.jsx)("meta",{name:"robots",content:"noindex"}),(0,jsx_runtime.jsx)("link",{rel:"icon",href:"./favicon.ico"})]}),(0,jsx_runtime.jsxs)("main",{className:Home_module_default().main,children:[!isLogin&&(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h1",{className:Home_module_default().title,children:pageTitle}),(0,jsx_runtime.jsx)("div",{className:Home_module_default().input,children:(0,jsx_runtime.jsx)(InputPassword.Z,{labelText:"パスワード",initValue:loginPass,handleChange:function(e){return setLoginPass(e.target.value)}})}),(0,jsx_runtime.jsx)("div",{className:Home_module_default()["login-button"],children:(0,jsx_runtime.jsx)(Button.Z,{backGroundColor:"blue",handleClick:function(){loginPass===password?(localStorage.setItem(strageKey,loginPass),setLoginPass(""),setIsLogin(!0)):setLoginMessage("パスワードが違います。")},children:"ログイン"})}),(0,jsx_runtime.jsx)("p",{className:Home_module_default()["login-message"],children:loginMessage})]}),isLogin&&(0,jsx_runtime.jsxs)("div",{className:"wrapper",children:[(0,jsx_runtime.jsx)("h1",{className:Home_module_default().title,children:pageTitle}),(0,jsx_runtime.jsxs)("div",{className:Home_module_default().buttons,children:[(0,jsx_runtime.jsxs)("div",{className:Home_module_default()["button-groups"],children:[(0,jsx_runtime.jsxs)("div",{className:Home_module_default()["button-group"],children:[(0,jsx_runtime.jsxs)("label",{htmlFor:"file-upload",className:Home_module_default()["file-upload"],children:["データの読み込み",(0,jsx_runtime.jsx)("input",{type:"file",onInput:function(e){return readData(e)},id:"file-upload"})]}),(0,jsx_runtime.jsx)(Button.Z,{backGroundColor:"blue",handleClick:function(){var fileName=getFileName(),data=JSON.stringify({address:address,carbonCopy:carbonCopy,toName:toName,fromName:fromName,tasks:tasks}),link=document.createElement("a");link.href="data:text/plain,"+encodeURIComponent(data),link.download=fileName,link.click()},children:"データの書き出し"})]}),(0,jsx_runtime.jsxs)("div",{children:[isShowPreview?(0,jsx_runtime.jsx)(Button.Z,{backGroundColor:"green",handleClick:function(){setIsShowPreview(!1)},children:"プレビュー"}):(0,jsx_runtime.jsx)(Button.Z,{backGroundColor:"green",handleClick:function(){if(valide().length>0){setIsShowModal(!0);return}setIsShowPreview(!0)},children:"プレビュー"}),(0,jsx_runtime.jsx)(Button.Z,{backGroundColor:"blue",handleClick:function(){if(navigator.clipboard)return navigator.clipboard.writeText(previewContent).then(function(){var subject="業務委託日報：".concat(fromName,"：").concat(dateStr),link=document.createElement("a");link.href="mailto:".concat(address,"?cc=").concat(carbonCopy,"&subject=").concat(subject),link.setAttribute("target","_blank"),link.click()})},children:"メール作成"})]})]}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Checkbox.Z,{labelText:"本日のタスクのみ",initChecked:isShowTodayTasks,handleChange:function(e){return getTodayTasks(e.target.checked)}})})]}),!isShowPreview&&(0,jsx_runtime.jsxs)("div",{className:"form",children:[(0,jsx_runtime.jsxs)("div",{className:Home_module_default().tasks,children:[filteredTasks.map(function(_task,index){return(0,jsx_runtime.jsx)("div",{className:Home_module_default().task,children:(0,jsx_runtime.jsxs)("details",{children:[(0,jsx_runtime.jsxs)("summary",{children:[!!_task.name&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[_task.name,_task.isBacklog&&(0,jsx_runtime.jsx)("p",{className:Home_module_default()["task-link-wrapper"],children:(0,jsx_runtime.jsx)("a",{className:Home_module_default().link,rel:"noreferrer",target:"_blank",href:"https://kumukumu.backlog.com/view/".concat(_task.project,"-").concat(_task.backlogNumber),children:"https://kumukumu.backlog.com/view/".concat(_task.project,"-").concat(_task.backlogNumber)})})]}),!_task.name&&(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"タスク名が未入力です。"})]}),(0,jsx_runtime.jsxs)("div",{className:Home_module_default()["task-content"],children:[(0,jsx_runtime.jsxs)("span",{className:Home_module_default()["task-count"],children:[String(_task.name.length),"/256"]}),(0,jsx_runtime.jsx)(InputText,{labelText:"タスク".concat(index+1),maxLength:256,borderColor:"blue",initValue:_task.name,handleChange:function(e){return setTaskContent("name",index,e.target.value)}})]}),(0,jsx_runtime.jsx)(Checkbox.Z,{labelText:"Backlogの有無",initChecked:_task.isBacklog,handleChange:function(e){return setTaskContent("isBacklog",index,"",e.target.checked)}}),(0,jsx_runtime.jsxs)("div",{className:"".concat(Home_module_default()["task-content"]," ").concat(Home_module_default()["task-project"]),children:[(0,jsx_runtime.jsxs)("div",{className:Home_module_default()["task-project-type"],children:[(0,jsx_runtime.jsx)("label",{children:"プロジェクト"}),(0,jsx_runtime.jsx)(PulldownMenu.Z,{initValue:_task.project,isDisabled:!_task.isBacklog,options:projects,handleChange:function(e){return setTaskContent("project",index,e.target.value)}})]}),(0,jsx_runtime.jsx)(InputNumber.Z,{labelText:"番号",initValue:_task.backlogNumber,isDisabled:!_task.isBacklog,handleChange:function(e){setTaskContent("backlogNumber",index,e.target.value)}})]}),(0,jsx_runtime.jsxs)("div",{className:Home_module_default()["task-content"],children:[(0,jsx_runtime.jsxs)("div",{className:Home_module_default()["target-group"],children:[(0,jsx_runtime.jsxs)("div",{className:Home_module_default().target,children:[(0,jsx_runtime.jsx)(Checkbox.Z,{labelText:"今月",initChecked:_task.isMonth,handleChange:function(e){return setTaskContent("isMonth",index,"",e.target.checked)}}),(0,jsx_runtime.jsx)(Range,{initValue:_task.monthTarget,handleChange:function(e){return setTaskContent("monthTarget",index,e.target.value)}}),(0,jsx_runtime.jsxs)("span",{children:[_task.monthTarget,"/100"]})]}),(0,jsx_runtime.jsxs)("div",{className:Home_module_default().target,children:[(0,jsx_runtime.jsx)(Checkbox.Z,{labelText:"今週",initChecked:_task.isWeek,handleChange:function(e){return setTaskContent("isWeek",index,"",e.target.checked)}}),(0,jsx_runtime.jsx)(Range,{initValue:_task.weekTarget,handleChange:function(e){return setTaskContent("weekTarget",index,e.target.value)}}),(0,jsx_runtime.jsxs)("span",{children:[_task.weekTarget,"/100"]})]})]}),(0,jsx_runtime.jsxs)("div",{className:Home_module_default()["target-group"],children:[(0,jsx_runtime.jsxs)("div",{className:Home_module_default().target,children:[(0,jsx_runtime.jsx)(Checkbox.Z,{labelText:"本日",initChecked:_task.isToday,handleChange:function(e){return setTaskContent("isToday",index,"",e.target.checked)}}),(0,jsx_runtime.jsx)(Range,{initValue:_task.todayTarget,handleChange:function(e){return setTaskContent("todayTarget",index,e.target.value)}}),(0,jsx_runtime.jsxs)("span",{children:[_task.todayTarget,"/100"]})]}),(0,jsx_runtime.jsxs)("div",{className:Home_module_default().target,children:[(0,jsx_runtime.jsx)(Checkbox.Z,{labelText:"予定",initChecked:_task.isNext,handleChange:function(e){return setTaskContent("isNext",index,"",e.target.checked)}}),(0,jsx_runtime.jsx)(Range,{initValue:_task.nextTarget,handleChange:function(e){return setTaskContent("nextTarget",index,e.target.value)}}),(0,jsx_runtime.jsxs)("span",{children:[_task.nextTarget,"/100"]})]})]})]}),(0,jsx_runtime.jsxs)("div",{className:Home_module_default()["task-content"],children:[(0,jsx_runtime.jsxs)("span",{className:Home_module_default()["task-count"],children:[String(_task.todayProgress.length),"/2000"]}),(0,jsx_runtime.jsx)(TextArea,{labelText:"報告",isDisabled:!_task.isToday,maxLength:2e3,borderColor:"blue",initValue:_task.todayProgress,handleChange:function(e){return setTaskContent("todayProgress",index,e.target.value)}})]}),(0,jsx_runtime.jsx)(ButtonIcon_Button,{disabled:tasks.length<=1,iconType:"delete",handleClick:function(){return showModalCaution(index)}})]})},index)}),(0,jsx_runtime.jsx)(ButtonIcon_Button,{disabled:tasks.length>=100,iconType:"add",handleClick:function(){setTasks(function(prevState){return[].concat(pages_toConsumableArray(prevState),[task])})}})]}),(0,jsx_runtime.jsxs)("div",{className:Home_module_default().times,children:[(0,jsx_runtime.jsxs)("div",{className:Home_module_default()["operating-times"],children:[operatingTimes.map(function(_operatingTime,index){return(0,jsx_runtime.jsxs)("div",{className:Home_module_default()["operating-time"],children:[(0,jsx_runtime.jsxs)("label",{children:["稼働時間",index+1]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(InputTime,{initValue:_operatingTime.startHour,type:"hour",handleChange:function(e){return setOperatingTimesContent("startHour",e.target.value,index)}}),":",(0,jsx_runtime.jsx)(InputTime,{initValue:_operatingTime.startMinute,type:"minute",handleChange:function(e){return setOperatingTimesContent("startMinute",e.target.value,index)}}),"〜",(0,jsx_runtime.jsx)(InputTime,{initValue:_operatingTime.endHour,type:"hour",handleChange:function(e){return setOperatingTimesContent("endHour",e.target.value,index)}}),":",(0,jsx_runtime.jsx)(InputTime,{initValue:_operatingTime.endMinute,type:"minute",handleChange:function(e){return setOperatingTimesContent("endMinute",e.target.value,index)}})]})]},index)}),(0,jsx_runtime.jsx)(ButtonIcon_Button,{disabled:operatingTimes.length>=5,iconType:"add",handleClick:function(){setOperatingTimes(function(prevState){return[].concat(pages_toConsumableArray(prevState),[operatingTime])})}}),(0,jsx_runtime.jsx)(ButtonIcon_Button,{disabled:operatingTimes.length<=1,iconType:"delete",handleClick:function(){var lastIndex=operatingTimes.length-1;setOperatingTimes(operatingTimes.filter(function(time,index){if(index!==lastIndex)return time}))}})]}),(0,jsx_runtime.jsxs)("div",{className:Home_module_default()["rest-times"],children:[(0,jsx_runtime.jsx)(Checkbox.Z,{labelText:"追加休憩の有無",initChecked:isRestTime,handleChange:function(e){return setIsRestTime(e.target.checked)}}),isRestTime&&restTimes.map(function(_restTime,index){return(0,jsx_runtime.jsxs)("div",{className:Home_module_default()["rest-time"],children:[(0,jsx_runtime.jsxs)("label",{children:["追加休憩",index+1]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(InputTime,{initValue:_restTime.startHour,type:"hour",handleChange:function(e){return setRestTimesContent("startHour",e.target.value,index)}}),":",(0,jsx_runtime.jsx)(InputTime,{initValue:_restTime.startMinute,type:"minute",handleChange:function(e){return setRestTimesContent("startMinute",e.target.value,index)}}),"〜",(0,jsx_runtime.jsx)(InputTime,{initValue:_restTime.endHour,type:"hour",handleChange:function(e){return setRestTimesContent("endHour",e.target.value,index)}}),":",(0,jsx_runtime.jsx)(InputTime,{initValue:_restTime.endMinute,type:"minute",handleChange:function(e){return setRestTimesContent("endMinute",e.target.value,index)}})]})]},index)}),isRestTime&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(ButtonIcon_Button,{disabled:restTimes.length>=5,iconType:"add",handleClick:function(){setRestTimes(function(prevState){return[].concat(pages_toConsumableArray(prevState),[restTime])})}}),(0,jsx_runtime.jsx)(ButtonIcon_Button,{disabled:restTimes.length<=1,iconType:"delete",handleClick:function(){var lastIndex=restTimes.length-1;setRestTimes(restTimes.filter(function(time,index){if(index!==lastIndex)return time}))}})]})]}),(0,jsx_runtime.jsxs)("p",{children:["※稼働時間と追加休憩、コメントは、データ読み込み時に保存されません。",(0,jsx_runtime.jsx)("br",{}),"メール作成の直前に入力してください。"]})]}),(0,jsx_runtime.jsx)("div",{className:Home_module_default().other,children:(0,jsx_runtime.jsx)(TextArea,{labelText:"コメント",borderColor:"gray",initValue:comment,handleChange:function(e){return setComment(e.target.value)}})}),(0,jsx_runtime.jsxs)("details",{children:[(0,jsx_runtime.jsx)("summary",{children:"宛先や名前"}),(0,jsx_runtime.jsxs)("div",{className:"others",children:[(0,jsx_runtime.jsx)("div",{className:Home_module_default().other,children:(0,jsx_runtime.jsx)(InputText,{labelText:"宛先",borderColor:"gray",initValue:address,handleChange:function(e){return setAddress(e.target.value)}})}),(0,jsx_runtime.jsx)("div",{className:Home_module_default().other,children:(0,jsx_runtime.jsx)(InputText,{labelText:"CC",borderColor:"gray",initValue:carbonCopy,handleChange:function(e){return setCarbonCopy(e.target.value)}})}),(0,jsx_runtime.jsx)("div",{className:Home_module_default().other,children:(0,jsx_runtime.jsx)(InputText,{labelText:"宛先の人の名前",borderColor:"gray",initValue:toName,handleChange:function(e){return setToName(e.target.value)}})}),(0,jsx_runtime.jsx)("div",{className:Home_module_default().other,children:(0,jsx_runtime.jsx)(InputText,{labelText:"自分の名前",borderColor:"gray",initValue:fromName,handleChange:function(e){return setFromName(e.target.value)}})})]})]})]}),isShowPreview&&(0,jsx_runtime.jsxs)("div",{className:"preview",children:[(0,jsx_runtime.jsx)("h3",{className:Home_module_default()["preview-title"],children:"プレビュー（フォームは読み取り専用です）"}),(0,jsx_runtime.jsx)("div",{className:Home_module_default()["preview-address"],children:(0,jsx_runtime.jsxs)("label",{children:["宛先",(0,jsx_runtime.jsx)("input",{type:"text",value:address,readOnly:!0})]})}),(0,jsx_runtime.jsx)("div",{className:Home_module_default()["preview-cc"],children:(0,jsx_runtime.jsxs)("label",{children:["CC",(0,jsx_runtime.jsx)("input",{type:"text",value:carbonCopy,readOnly:!0})]})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)("label",{children:["本文（メール作成ボタンをクリックすると、クリップボードにコピーされます）",(0,jsx_runtime.jsx)("textarea",{value:previewContent,readOnly:!0,className:Home_module_default()["preview-content"]})]})})]})]}),isShowModal&&(0,jsx_runtime.jsx)(Modal,{isShow:isShowModal,handleClick:function(){setIsShowModal(!isShowModal)},children:errorMessages}),isShowModalCaution&&(0,jsx_runtime.jsx)(ModalCaution_Modal,{isShow:isShowModalCaution,okHandleClick:function(){setTasks(tasks.filter(function(task,index){if(index!==selectedTaskIndex)return task})),toggleIsShowModalCaution()},cancelHandleClick:toggleIsShowModalCaution,children:"タスク".concat(String(Number(selectedTaskIndex)+1),"を削除しますか。\n削除したタスクは復元できません。")})]}),(0,jsx_runtime.jsxs)("footer",{className:Home_module_default().footer,children:[(0,jsx_runtime.jsx)("a",{href:"https://github.com/khosokawa0716/report-creation#readme",rel:"noreferrer",target:"_blank",className:Home_module_default().link,children:"README!"}),(0,jsx_runtime.jsx)("a",{href:"./branch-name",className:Home_module_default().link,children:"ブランチ名作成ツール"})]})]})}},8312:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return __webpack_require__(1288)}])},2364:function(module){module.exports={"com-button":"Button_com-button__LY6pl",disabled:"Button_disabled__bixQW",small:"Button_small__7HEPY",blue:"Button_blue__UBUiW",green:"Button_green__kmJ1R",red:"Button_red__ocyzR",gray:"Button_gray__Yq0ev"}},3906:function(module){module.exports={"com-button-icon":"ButtonIcon_com-button-icon__RF_P2",disabled:"ButtonIcon_disabled__gUfPl",add:"ButtonIcon_add__m_Ezd",save:"ButtonIcon_save__KZxeL",edit:"ButtonIcon_edit__3wP5V",cancel:"ButtonIcon_cancel__xFE5u",delete:"ButtonIcon_delete__MQaU8"}},8258:function(){},1633:function(module){module.exports={container:"Home_container__97eC3",main:"Home_main__OVLM4",footer:"Home_footer__zed0_",title:"Home_title__q0Qg4",input:"Home_input__ZZ4GD","login-button":"Home_login-button__PR5Pe","login-message":"Home_login-message__hZhVN",buttons:"Home_buttons__kEItN","button-groups":"Home_button-groups__KPECy","button-group":"Home_button-group__XVPS0","file-upload":"Home_file-upload__oHbbo",tasks:"Home_tasks___fxtj",task:"Home_task__ZUMuU","task-content":"Home_task-content__kjVa9","task-count":"Home_task-count__gn6P_","task-project":"Home_task-project__QNgRm","task-project-type":"Home_task-project-type__OtOSw","target-group":"Home_target-group__8Fwp_",target:"Home_target__E_xu_",times:"Home_times__RggTT","operating-times":"Home_operating-times__iUeuF","rest-times":"Home_rest-times__fuIzn","operating-time":"Home_operating-time__Un8Rs","rest-time":"Home_rest-time__9ZsAC",other:"Home_other__CiVCr","task-link-wrapper":"Home_task-link-wrapper__1YHX7",link:"Home_link__huVil","preview-title":"Home_preview-title__ioOh4","preview-content":"Home_preview-content__Fq5mE","preview-address":"Home_preview-address__Omwax","preview-cc":"Home_preview-cc__Y9kJ1"}},9314:function(module){module.exports={"com-input":"InputNumber_com-input__TlYOH"}},5030:function(module){module.exports={"com-input":"InputText_com-input__8W5L1",blue:"InputText_blue__KL7rx",gray:"InputText_gray__wnItt"}},4631:function(module){module.exports={"com-input-time":"InputTime_com-input-time__u6IQI"}},9185:function(module){module.exports={modal:"Modal_modal__fbvPB","is-show":"Modal_is-show__AGaDN",content:"Modal_content__BWcLg",overlay:"Modal_overlay__Ca5IT",footer:"Modal_footer__IanSV"}},1468:function(module){module.exports={"com-pulldown-menu":"PulldownMenu_com-pulldown-menu__PWk59"}},9589:function(module){module.exports={"com-textarea":"TextArea_com-textarea__eA2qJ",blue:"TextArea_blue__5Hmxi",gray:"TextArea_gray__gO5UL"}}},function(__webpack_require__){__webpack_require__.O(0,[976,870,774,888,179],function(){return __webpack_require__(__webpack_require__.s=8312)}),_N_E=__webpack_require__.O()}]);