(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[45],{"+ylz":function(e,t,n){"use strict";n.d(t,"b",(function(){return v}));var r=n("rePB"),o=n("03FM"),a=n("396a"),i=n("E891"),c=n("i7Pf");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=Object(o.a)(),d=s.initialState,f=s.reducers,p=Object(c.c)({name:"page/url",initialState:d,reducers:f});t.a=p.reducer;var v=l(l({},p.actions),{},{load:function(e,t){return Object(r.a)({},a.a,{types:p.actions,endpoint:"".concat("page/url","/").concat(t,"/").concat(e),postProcess:i.a,getHeaders:!0})}})},"+zGO":function(e,t,n){"use strict";var r=n("YTst"),o=n("cNwE"),a=Object(r.b)({defaultTheme:o.a});t.a=a},"5R4e":function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));var r=n("mymk"),o=n("X9L9");function a(e){if(null==e)return null;if(e.responseJSON&&null!=e.responseJSON.errorText)return e.responseJSON.errorText;if(null!=e.responseJSON&&null!=e.responseJSON.errors){var t="";for(var n in e.responseJSON.errors)t+="<p>".concat(r.a.capitalizeFirstLetter(n),": ").concat(e.responseJSON.errors[n].toLowerCase(),"</p>");return t}return null}function i(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;if(e){var a="".concat(window.location.protocol,"//").concat(window.location.hostname),i=window.location.port?"".concat(a,":").concat(window.location.port):a;if(401!==e.status||r&&-1!==r.indexOf(e.status))if(404!==e.status||r&&-1!==r.indexOf(e.status)){if(!(409!==e.status||r&&-1!==r.indexOf(e.status)))return!0;if(400===e.status&&(!r||-1===r.indexOf(e.status)))return!0}else t(o.b.set(!0));else{var c;if(null===n||void 0===n||null===(c=n.query)||void 0===c?void 0:c.ru)return!1;var u=null;if(n){u=n.pathname;var l="/explore"===n.pathname||"/mycourses"===n.pathname?"/":"/login";return window.location.replace("".concat(i,"/").concat(l,"?ru=").concat(u)),!1}window.location.replace("".concat(i,"/login"))}}return!1}var c=function(e){var t,n,r,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(null===e||void 0===e||null===(t=e.responseJSON)||void 0===t?void 0:t.errorText)||(null===e||void 0===e||null===(n=e.responseJSON)||void 0===n||null===(r=n.errors)||void 0===r?void 0:r[o])}},"7q2A":function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n("i7Pf"),o={},a=Object(r.c)({name:"commentsSelectedKey",initialState:o,reducers:{set:function(e,t){return{key:t.payload}},setComment:function(e,t){var n=t.payload;e.commentId=n},clear:function(e){return o},clearComment:function(e){return{key:e.key}}}});t.a=a.reducer;var i=a.actions},"8/g6":function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=a.default.memo(a.default.forwardRef((function(t,n){return a.default.createElement(i.default,(0,o.default)({ref:n},t),e)})));0;return n.muiName=i.default.muiName,n};var o=r(n("pVnL")),a=r(n("q1tI")),i=r(n("UJJ5"))},FMDu:function(e,t,n){"use strict";n.d(t,"b",(function(){return b}));var r=n("o0o1"),o=n.n(r),a=n("HaE+"),i=n("rePB"),c=n("03FM"),u=n("396a"),l=n("i7Pf");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=Object(c.a)(),p=f.initialState,v=f.reducers,g=Object(l.c)({name:"executionMetadata/languages",initialState:p,reducers:v});t.a=g.reducer;var O=function(e){var t=JSON.parse(e).languages;return{languages:Object.keys(t).sort().reduce((function(e,n){return e[n]=t[n],e}),{})}},b=d(d({},g.actions),{},{load:function(){return function(){var e=Object(a.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n().executionMetadata.loaded||n().executionMetadata.loading||t(Object(i.a)({},u.a,{types:g.actions,endpoint:"code/languages",overrideAjaxMode:!0,postProcess:O}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}})},HR5l:function(e,t,n){"use strict";var r=n("wx14"),o=n("Ff2n"),a=n("q1tI"),i=(n("17x9"),n("iuhU")),c=n("H2TA"),u=n("NqtD"),l=a.forwardRef((function(e,t){var n=e.children,c=e.classes,l=e.className,s=e.color,d=void 0===s?"inherit":s,f=e.component,p=void 0===f?"svg":f,v=e.fontSize,g=void 0===v?"default":v,O=e.htmlColor,b=e.titleAccess,m=e.viewBox,y=void 0===m?"0 0 24 24":m,h=Object(o.a)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return a.createElement(p,Object(r.a)({className:Object(i.a)(c.root,l,"inherit"!==d&&c["color".concat(Object(u.a)(d))],"default"!==g&&c["fontSize".concat(Object(u.a)(g))]),focusable:"false",viewBox:y,color:O,"aria-hidden":!b||void 0,role:b?"img":void 0,ref:t},h),n,b?a.createElement("title",null,b):null)}));l.muiName="SvgIcon",t.a=Object(c.a)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(l)},MF81:function(e,t,n){"use strict";n.d(t,"e",(function(){return l})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return f})),n.d(t,"f",(function(){return p}));var r=n("rePB"),o=n("i7Pf");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c={loading:!1,savingWidget:null,resettingWidget:null,snapshots:{},copiedWidget:null},u=Object(o.c)({name:"widgetsData",initialState:c,reducers:{pending:function(e){e.loading=!0},rejected:function(e){e.loading=!1,e.snapshots={}},fulfilled:function(e,t){var n=t.payload;e.loading=!1,e.snapshots=n},saveRequest:function(e,t){var n=t.payload;e.savingWidget=n.reset?null:n.compId,e.resettingWidget=n.reset?n.compId:null},saveFailure:function(e){e.savingWidget=null,e.resettingWidget=null},saveSuccess:function(e,t){var n=t.payload;e.savingWidget=null,e.resettingWidget=null,e.snapshots=i(i({},e.snapshots),n)},copy:function(e,t){var n=t.payload;e.copiedWidget=n},reset:function(){return c}}}),l=function(e){return e.widgetsData.snapshots},s=function(e){return e.widgetsData.savingWidget},d=function(e){return e.widgetsData.resettingWidget},f=function(e){var t=e.userId,n=e.collectionId,r=e.pageId,o=e.shotId,a=e.editorPageId,i=e.authorId,c=e.compId;return o?"".concat("WidgetUserData","_").concat(t,"_").concat(o,"_").concat(c):a?"".concat("WidgetUserData","_").concat(t,"_").concat(a,"_").concat(c):n?"".concat("WidgetUserData","_").concat(t,"_").concat(i,"_").concat(n,"_").concat(r,"_").concat(c):"".concat("WidgetUserData","_").concat(t,"_").concat(i,"_").concat(r,"_").concat(c)};t.b=u.reducer;var p=u.actions},OYQK:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}));var r={operationNotAllowedException:400,accessDeniedException:403,AlreadyExistsException:409,serverError:500},o={AssetUploadFailedException:"ASSET_UPLOAD_FAILED"},a={versionOutDatedMessage:"Version outdated",shotUrlNotUniqueMessage:"Shot already exists with url",canonicalUrlNotValid:"Invalid Canonical Url.",programmaticallyCancelled:"Operation was programmatically cancelled"}},QMhA:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("17x9"),i=n.n(a);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,i=void 0===a?24:a,l=u(e,["color","size"]);return o.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),o.a.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),o.a.createElement("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"}))}));l.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},l.displayName="AlertCircle",t.a=l},UJJ5:function(e,t,n){"use strict";n.r(t);var r=n("HR5l");n.d(t,"default",(function(){return r.a}))},X9L9:function(e,t,n){"use strict";n.d(t,"b",(function(){return a}));var r=n("i7Pf"),o=Object(r.c)({name:"notFoundPage",initialState:!1,reducers:{set:function(e,t){return t.payload}}});t.a=o.reducer;var a=o.actions},YTst:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n("wx14"),o=n("Ff2n"),a=n("q1tI"),i=n.n(a),c=(n("17x9"),n("2mql")),u=n.n(c),l=n("aXM8");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultTheme,n=function(e){var n=i.a.forwardRef((function(n,a){var c=n.innerRef,u=Object(o.a)(n,["innerRef"]),s=Object(l.a)()||t;return i.a.createElement(e,Object(r.a)({theme:s,ref:c||a},u))}));return u()(n,e),n};return n}var d=s();t.a=d},e6MJ:function(e,t,n){"use strict";n.d(t,"b",(function(){return a}));var r=n("i7Pf"),o=Object(r.c)({name:"widgetsWrapper",initialState:{},reducers:{set:function(e,t){return t.payload}}});t.a=o.reducer;var a=o.actions},fDKo:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var r=n("i7Pf"),o={loading:!1,loaded:!1,keys:{}},a=function(e,t,n){return Object.keys(t).forEach((function(r){e.hasOwnProperty(r)&&"UPDATE"===n?e[r]!==t[r]&&(e[r]=t[r].toString()):e[r]=t[r].toString()}))},i=Object(r.c)({name:"user",initialState:o,reducers:{pending:function(e){e.loading=!0,e.loaded=!1},rejected:function(e){e.loading=!1,e.loaded=!1},fulfilled:function(e,t){var n=t.payload,r=n.keys,o=void 0===r?{}:r,i=n.action,c=void 0===i?"UPDATE":i;a(e.keys,o,c),e.loading=!1,e.loaded=!0},saveRequest:function(e){e.loading=!0,e.loaded=!1},saveFailure:function(e){e.loading=!1,e.loaded=!1},saveSuccess:function(e,t){var n=t.payload,r=n.keys,o=void 0===r?{}:r,i=n.action,c=void 0===i?"UPDATE":i;a(e.keys,o,c),e.loading=!1,e.loaded=!0},reset:function(){return o}}});t.a=i.reducer;var c=i.actions},pVnL:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},wb2y:function(e,t,n){"use strict";var r=n("wx14"),o=n("Ff2n"),a=n("q1tI"),i=(n("17x9"),n("iuhU")),c=n("H2TA"),u=n("ye/S"),l=a.forwardRef((function(e,t){var n=e.absolute,c=void 0!==n&&n,u=e.classes,l=e.className,s=e.component,d=void 0===s?"hr":s,f=e.flexItem,p=void 0!==f&&f,v=e.light,g=void 0!==v&&v,O=e.orientation,b=void 0===O?"horizontal":O,m=e.role,y=void 0===m?"hr"!==d?"separator":void 0:m,h=e.variant,j=void 0===h?"fullWidth":h,w=Object(o.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return a.createElement(d,Object(r.a)({className:Object(i.a)(u.root,l,"fullWidth"!==j&&u[j],c&&u.absolute,p&&u.flexItem,g&&u.light,"vertical"===b&&u.vertical),role:y,ref:t},w))}));t.a=Object(c.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(u.b)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(l)}}]);
//# sourceMappingURL=cb5327f17f890fd6bb11e87bd293d2a300ef55fb.075679311fdedfd3d3bf.js.map