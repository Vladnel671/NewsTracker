import{g as Y,a as J,s as E,c as v,f as U,r as k,h as K,_ as Q,j as u,i as X,l as ee,B as ze,k as m,e as j,w as ne,x as ie,n as le,S as Oe}from"./index-04cc1a8a.js";var fe={exports:{}},Le="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ee=Le,Me=Ee;function ve(){}function pe(){}pe.resetWarningCache=ve;var Te=function(){function e(o,a,n,i,l,c){if(c!==Me){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:pe,resetWarningCache:ve};return r.PropTypes=r,r};fe.exports=Te();var $e=fe.exports;const ke=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},se=ke;function je(e){return Y("MuiPaper",e)}J("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Ne=["className","component","elevation","square","variant"],Se=e=>{const{square:t,elevation:r,variant:o,classes:a}=e,n={root:["root",o,!t&&"rounded",o==="elevation"&&`elevation${r}`]};return ee(n,je,a)},Be=E("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],!r.square&&t.rounded,r.variant==="elevation"&&t[`elevation${r.elevation}`]]}})(({theme:e,ownerState:t})=>{var r;return v({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&v({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${U("#fff",se(t.elevation))}, ${U("#fff",se(t.elevation))})`},e.vars&&{backgroundImage:(r=e.vars.overlays)==null?void 0:r[t.elevation]}))}),He=k.forwardRef(function(t,r){const o=K({props:t,name:"MuiPaper"}),{className:a,component:n="div",elevation:i=1,square:l=!1,variant:c="elevation"}=o,d=Q(o,Ne),f=v({},o,{component:n,elevation:i,square:l,variant:c}),y=Se(f);return u.jsx(Be,v({as:n,ownerState:f,className:X(y.root,a),ref:r},d))}),We=He;function Ue(e){return Y("MuiAlert",e)}const De=J("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),ce=De;function Ve(e){return Y("MuiIconButton",e)}const Fe=J("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),qe=Fe,Ge=["edge","children","className","color","disabled","disableFocusRipple","size"],Ze=e=>{const{classes:t,disabled:r,color:o,edge:a,size:n}=e,i={root:["root",r&&"disabled",o!=="default"&&`color${m(o)}`,a&&`edge${m(a)}`,`size${m(n)}`]};return ee(i,Ve,t)},Ye=E(ze,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.color!=="default"&&t[`color${m(r.color)}`],r.edge&&t[`edge${m(r.edge)}`],t[`size${m(r.size)}`]]}})(({theme:e,ownerState:t})=>v({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:U(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.edge==="start"&&{marginLeft:t.size==="small"?-3:-12},t.edge==="end"&&{marginRight:t.size==="small"?-3:-12}),({theme:e,ownerState:t})=>{var r;const o=(r=(e.vars||e).palette)==null?void 0:r[t.color];return v({},t.color==="inherit"&&{color:"inherit"},t.color!=="inherit"&&t.color!=="default"&&v({color:o==null?void 0:o.main},!t.disableRipple&&{"&:hover":v({},o&&{backgroundColor:e.vars?`rgba(${o.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:U(o.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),t.size==="small"&&{padding:5,fontSize:e.typography.pxToRem(18)},t.size==="large"&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${qe.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})}),Je=k.forwardRef(function(t,r){const o=K({props:t,name:"MuiIconButton"}),{edge:a=!1,children:n,className:i,color:l="default",disabled:c=!1,disableFocusRipple:d=!1,size:f="medium"}=o,y=Q(o,Ge),w=v({},o,{edge:a,color:l,disabled:c,disableFocusRipple:d,size:f}),P=Ze(w);return u.jsx(Ye,v({className:X(P.root,i),centerRipple:!0,focusRipple:!d,disabled:c,ref:r,ownerState:w},y,{children:n}))}),Ke=Je,Qe=j(u.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),Xe=j(u.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),et=j(u.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),tt=j(u.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),ot=j(u.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),rt=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],at=e=>{const{variant:t,color:r,severity:o,classes:a}=e,n={root:["root",`${t}${m(r||o)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return ee(n,Ue,a)},nt=E(We,{name:"MuiAlert",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`${r.variant}${m(r.color||r.severity)}`]]}})(({theme:e,ownerState:t})=>{const r=e.palette.mode==="light"?ne:ie,o=e.palette.mode==="light"?ie:ne,a=t.color||t.severity;return v({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},a&&t.variant==="standard"&&{color:e.vars?e.vars.palette.Alert[`${a}Color`]:r(e.palette[a].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${a}StandardBg`]:o(e.palette[a].light,.9),[`& .${ce.icon}`]:e.vars?{color:e.vars.palette.Alert[`${a}IconColor`]}:{color:e.palette[a].main}},a&&t.variant==="outlined"&&{color:e.vars?e.vars.palette.Alert[`${a}Color`]:r(e.palette[a].light,.6),border:`1px solid ${(e.vars||e).palette[a].light}`,[`& .${ce.icon}`]:e.vars?{color:e.vars.palette.Alert[`${a}IconColor`]}:{color:e.palette[a].main}},a&&t.variant==="filled"&&v({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${a}FilledColor`],backgroundColor:e.vars.palette.Alert[`${a}FilledBg`]}:{backgroundColor:e.palette.mode==="dark"?e.palette[a].dark:e.palette[a].main,color:e.palette.getContrastText(e.palette[a].main)}))}),it=E("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),lt=E("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),ue=E("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),de={success:u.jsx(Qe,{fontSize:"inherit"}),warning:u.jsx(Xe,{fontSize:"inherit"}),error:u.jsx(et,{fontSize:"inherit"}),info:u.jsx(tt,{fontSize:"inherit"})},st=k.forwardRef(function(t,r){var o,a,n,i,l,c;const d=K({props:t,name:"MuiAlert"}),{action:f,children:y,className:w,closeText:P="Close",color:q,components:A={},componentsProps:C={},icon:I,iconMapping:M=de,onClose:_,role:S="alert",severity:z="success",slotProps:R={},slots:B={},variant:_e="standard"}=d,Re=Q(d,rt),O=v({},d,{color:q,severity:z,variant:_e}),T=at(O),Pe=(o=(a=B.closeButton)!=null?a:A.CloseButton)!=null?o:Ke,Ae=(n=(i=B.closeIcon)!=null?i:A.CloseIcon)!=null?n:ot,Ce=(l=R.closeButton)!=null?l:C.closeButton,Ie=(c=R.closeIcon)!=null?c:C.closeIcon;return u.jsxs(nt,v({role:S,elevation:0,ownerState:O,className:X(T.root,w),ref:r},Re,{children:[I!==!1?u.jsx(it,{ownerState:O,className:T.icon,children:I||M[z]||de[z]}):null,u.jsx(lt,{ownerState:O,className:T.message,children:y}),f!=null?u.jsx(ue,{ownerState:O,className:T.action,children:f}):null,f==null&&_?u.jsx(ue,{ownerState:O,className:T.action,children:u.jsx(Pe,v({size:"small","aria-label":P,title:P,color:"inherit",onClick:_},Ce,{children:u.jsx(Ae,v({fontSize:"small"},Ie))}))}):null]}))}),zt=st;var x={},V={};Object.defineProperty(V,"__esModule",{value:!0});V.on=ct;V.off=ut;function ct(e,t,r,o){o=o||!1,e.addEventListener?e.addEventListener(t,r,o):e.attachEvent&&e.attachEvent("on"+t,function(a){r.call(e,a||window.event)})}function ut(e,t,r,o){o=o||!1,e.removeEventListener?e.removeEventListener(t,r,o):e.detachEvent&&e.detachEvent("on"+t,r)}var te={};Object.defineProperty(te,"__esModule",{value:!0});te.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t=e.style.position==="absolute",r=/(scroll|auto)/,o=e;o;){if(!o.parentNode)return e.ownerDocument||document.documentElement;var a=window.getComputedStyle(o),n=a.position,i=a.overflow,l=a["overflow-x"],c=a["overflow-y"];if(n==="static"&&t){o=o.parentNode;continue}if(r.test(i)&&r.test(l)&&r.test(c))return o;o=o.parentNode}return e.ownerDocument||e.documentElement||document.documentElement};var oe={};Object.defineProperty(oe,"__esModule",{value:!0});oe.default=dt;function dt(e,t,r){var o=void 0,a=void 0,n=void 0,i=void 0,l=void 0,c=function d(){var f=+new Date-i;f<t&&f>=0?o=setTimeout(d,t-f):(o=null,r||(l=e.apply(n,a),o||(n=null,a=null)))};return function(){n=this,a=arguments,i=+new Date;var f=r&&!o;return o||(o=setTimeout(c,t)),f&&(l=e.apply(n,a),n=null,a=null),l}}var re={};Object.defineProperty(re,"__esModule",{value:!0});re.default=ft;function ft(e,t,r){t||(t=250);var o,a;return function(){var n=r||this,i=+new Date,l=arguments;o&&i<o+t?(clearTimeout(a),a=setTimeout(function(){o=i,e.apply(n,l)},t)):(o=i,e.apply(n,l))}}Object.defineProperty(x,"__esModule",{value:!0});x.forceVisible=x.forceCheck=x.lazyload=void 0;var he=function(){function e(t,r){for(var o=0;o<r.length;o++){var a=r[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),ae=k,D=N(ae),vt=$e,s=N(vt),L=V,pt=te,G=N(pt),ht=oe,gt=N(ht),yt=re,bt=N(yt);function N(e){return e&&e.__esModule?e:{default:e}}function ge(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ye(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function be(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var g={top:0,right:0,bottom:0,left:0,width:0,height:0},$="data-lazyload-listened",h=[],Z=[],me=!1;try{var mt=Object.defineProperty({},"passive",{get:function(){me=!0}});window.addEventListener("test",null,mt)}catch{}var b=me?{capture:!1,passive:!0}:!1,xt=function(t,r){var o=t.ref,a=void 0,n=void 0,i=void 0,l=void 0;try{var c=r.getBoundingClientRect();a=c.top,n=c.left,i=c.height,l=c.width}catch{a=g.top,n=g.left,i=g.height,l=g.width}var d=window.innerHeight||document.documentElement.clientHeight,f=window.innerWidth||document.documentElement.clientWidth,y=Math.max(a,0),w=Math.max(n,0),P=Math.min(d,a+i)-y,q=Math.min(f,n+l)-w,A=void 0,C=void 0,I=void 0,M=void 0;try{var _=o.getBoundingClientRect();A=_.top,C=_.left,I=_.height,M=_.width}catch{A=g.top,C=g.left,I=g.height,M=g.width}var S=A-y,z=C-w,R=Array.isArray(t.props.offset)?t.props.offset:[t.props.offset,t.props.offset];return S-R[0]<=P&&S+I+R[1]>=0&&z-R[0]<=q&&z+M+R[1]>=0},wt=function(t){var r=t.ref;if(!(r.offsetWidth||r.offsetHeight||r.getClientRects().length))return!1;var o=void 0,a=void 0;try{var n=r.getBoundingClientRect();o=n.top,a=n.height}catch{o=g.top,a=g.height}var i=window.innerHeight||document.documentElement.clientHeight,l=Array.isArray(t.props.offset)?t.props.offset:[t.props.offset,t.props.offset];return o-l[0]<=i&&o+a+l[1]>=0},xe=function(t){var r=t.ref;if(r instanceof HTMLElement){var o=(0,G.default)(r),a=t.props.overflow&&o!==r.ownerDocument&&o!==document&&o!==document.documentElement,n=a?xt(t,o):wt(t);n?t.visible||(t.props.once&&Z.push(t),t.visible=!0,t.forceUpdate()):t.props.once&&t.visible||(t.visible=!1,t.props.unmountIfInvisible&&t.forceUpdate())}},we=function(){Z.forEach(function(t){var r=h.indexOf(t);r!==-1&&h.splice(r,1)}),Z=[]},W=function(){for(var t=0;t<h.length;++t){var r=h[t];xe(r)}we()},_t=function(){for(var t=0;t<h.length;++t){var r=h[t];r.visible=!0,r.forceUpdate()}we()},H=void 0,p=null,Rt=function(t){return typeof t=="string"},F=function(e){be(t,e);function t(r){ge(this,t);var o=ye(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,r));return o.visible=!1,o.setRef=o.setRef.bind(o),o}return he(t,[{key:"componentDidMount",value:function(){var o=window,a=this.props.scrollContainer;a&&Rt(a)&&(o=o.document.querySelector(a));var n=this.props.debounce!==void 0&&H==="throttle"||H==="debounce"&&this.props.debounce===void 0;if(n&&((0,L.off)(o,"scroll",p,b),(0,L.off)(window,"resize",p,b),p=null),p||(this.props.debounce!==void 0?(p=(0,gt.default)(W,typeof this.props.debounce=="number"?this.props.debounce:300),H="debounce"):this.props.throttle!==void 0?(p=(0,bt.default)(W,typeof this.props.throttle=="number"?this.props.throttle:300),H="throttle"):p=W),this.props.overflow){var i=(0,G.default)(this.ref);if(i&&typeof i.getAttribute=="function"){var l=1+ +i.getAttribute($);l===1&&i.addEventListener("scroll",p,b),i.setAttribute($,l)}}else if(h.length===0||n){var c=this.props,d=c.scroll,f=c.resize;d&&(0,L.on)(o,"scroll",p,b),f&&(0,L.on)(window,"resize",p,b)}h.push(this),xe(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var o=(0,G.default)(this.ref);if(o&&typeof o.getAttribute=="function"){var a=+o.getAttribute($)-1;a===0?(o.removeEventListener("scroll",p,b),o.removeAttribute($)):o.setAttribute($,a)}}var n=h.indexOf(this);n!==-1&&h.splice(n,1),h.length===0&&typeof window<"u"&&((0,L.off)(window,"resize",p,b),(0,L.off)(window,"scroll",p,b))}},{key:"setRef",value:function(o){o&&(this.ref=o)}},{key:"render",value:function(){var o=this.props,a=o.height,n=o.children,i=o.placeholder,l=o.className,c=o.classNamePrefix,d=o.style;return D.default.createElement("div",{className:c+"-wrapper "+l,ref:this.setRef,style:d},this.visible?n:i||D.default.createElement("div",{style:{height:a},className:c+"-placeholder"}))}}]),t}(ae.Component);F.propTypes={className:s.default.string,classNamePrefix:s.default.string,once:s.default.bool,height:s.default.oneOfType([s.default.number,s.default.string]),offset:s.default.oneOfType([s.default.number,s.default.arrayOf(s.default.number)]),overflow:s.default.bool,resize:s.default.bool,scroll:s.default.bool,children:s.default.node,throttle:s.default.oneOfType([s.default.number,s.default.bool]),debounce:s.default.oneOfType([s.default.number,s.default.bool]),placeholder:s.default.node,scrollContainer:s.default.oneOfType([s.default.string,s.default.object]),unmountIfInvisible:s.default.bool,style:s.default.object};F.defaultProps={className:"",classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var Pt=function(t){return t.displayName||t.name||"Component"},At=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return function(o){return function(a){be(n,a);function n(){ge(this,n);var i=ye(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return i.displayName="LazyLoad"+Pt(o),i}return he(n,[{key:"render",value:function(){return D.default.createElement(F,t,D.default.createElement(o,this.props))}}]),n}(ae.Component)}};x.lazyload=At;var Ct=x.default=F;x.forceCheck=W;x.forceVisible=_t;const Ot=({src:e,alt:t})=>{const[r,o]=k.useState(!1);return u.jsx(Ct,{style:{height:"100%"},children:u.jsxs("div",{style:{position:"relative",height:"100%"},children:[u.jsx("img",{className:`${le["news-image"]} ${le["image-hover-effect"]}`,draggable:!1,src:e,alt:t,onLoad:()=>o(!0),style:{display:r?"block":"none"}}),u.jsx(Oe,{height:"100%",style:{display:r?"none":"block",position:"absolute",top:0,left:0,width:"100%"}})]})})},Lt={default:3,1260:2,840:1},Et=10,Mt=e=>new Date(e).toLocaleString(void 0,{year:"numeric",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"}),Tt=/<a[^>]*>([^<]+)<\/a>/g;export{zt as A,Ot as N,Et as P,Lt as b,Mt as f,Tt as r};