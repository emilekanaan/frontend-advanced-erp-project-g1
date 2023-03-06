;/*FB_PKG_DELIM*/

__d("CDSIcon.react",["react","stylex","testID"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={icon:{display:"x1lliihq",transitionDuration:"x1k90msu",transitionProperty:"x2h7rmj",transitionTimingFunction:"x1qfuztq",$$css:!0},inline:{display:"x1rg5ohu",$$css:!0},shadow:{filter:"x1ssd25i",$$css:!0}},j={8:{height:"xdk7pt",width:"x1xc55vz",$$css:!0},10:{height:"x170jfvy",width:"x1fsd2vl",$$css:!0},12:{height:"x1kpxq89",width:"xsmyaan",$$css:!0},16:{height:"xlup9mm",width:"x1kky2od",$$css:!0},18:{height:"xmix8c7",width:"x1xp8n7a",$$css:!0},20:{height:"x1qx5ct2",width:"xw4jnvo",$$css:!0},24:{height:"xxk0z11",width:"xvy4d1p",$$css:!0},28:{height:"x1fgtraw",width:"xgd8bvy",$$css:!0},30:{height:"x1gnnpzl",width:"x1849jeq",$$css:!0},32:{height:"x10w6t97",width:"x1td3qas",$$css:!0},36:{height:"xc9qbxq",width:"x14qfxbe",$$css:!0},40:{height:"x1vqgdyp",width:"x100vrsf",$$css:!0},48:{height:"xsdox4t",width:"x1useyqa",$$css:!0},52:{height:"xdd8jsf",width:"xvni27",$$css:!0},56:{height:"xnnlda6",width:"x15yg21f",$$css:!0},60:{height:"xng8ra",width:"x1247r65",$$css:!0},72:{height:"xy75621",width:"xni59qk",$$css:!0},96:{height:"xjp8j0k",width:"x13oubkp",$$css:!0},112:{height:"x19swzb4",width:"xj35x94",$$css:!0},132:{height:"x1h5wmu3",width:"x16s0kzc",$$css:!0}},k={"active-tab":{color:"x5e5rjt",$$css:!0},black:{color:"x1p6odiv",$$css:!0},blueLink:{color:"x1fey0fg",$$css:!0},disabled:{color:"x1eu2eya",$$css:!0},highlight:{color:"x1fey0fg",$$css:!0},"inactive-tab":{color:"xcza8v6",$$css:!0},"list-cell-chevron":{color:"x1v20y45",$$css:!0},negative:{color:"x1a1m0xk",$$css:!0},none:{color:"x19co3pv",$$css:!0},positive:{color:"x6u5lvz",$$css:!0},primary:{color:"x198g3q0",$$css:!0},"primary-button":{color:"xtk6v10",$$css:!0},secondary:{color:"xcza8v6",$$css:!0},"secondary-button":{color:"x1dem4cn",$$css:!0},tertiary:{color:"xfuq9xy",$$css:!0},"toast-DO_NOT_USE_WILL_BE_DELETED_WITHOUT_NOTICE":{color:"xm4wzdf",$$css:!0},warning:{color:"xcly8g5",$$css:!0},white:{color:"x14ctfv",$$css:!0}};function a(a){var b=a.alt,d=a.color;d=d===void 0?"primary":d;var e=a.icon,f=a.inline;f=f===void 0?!1:f;var g=a.shadow;g=g===void 0?!1:g;var l=a.size;l=l===void 0?8:l;a=a.testid;return h.jsx(e,babelHelpers["extends"]({className:c("stylex")([i.icon,f&&i.inline,g&&i.shadow,k[d],j[l]]),title:b==null||b===""?void 0:b},c("testID")(a)))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CDSShadow.react",["react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={shadow:{borderTopWidth:"x972fbf",borderEndWidth:"xcfux6l",borderBottomWidth:"x1qhh985",borderStartWidth:"xm0m39n",boxShadow:"xi1c1fh",boxSizing:"x1afcbsf",height:"x5yr21d",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",width:"xh8yej3",zIndex:"x8knxv4",$$css:!0}};function a(a){a=a.xstyle;return h.jsx("div",{className:c("stylex")([i.shadow,a])})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CDSIconButton.react",["CDSShadow.react","CometPressable.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={contained:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",display:"x3nfvp2",isolation:"xc8icb0",position:"x1n2onr6",$$css:!0},disabled:{opacity:"xti2d7y",$$css:!0},pressable:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",display:"x3nfvp2",paddingTop:"x1y1aw1k",paddingEnd:"x1sxyh0",paddingBottom:"xwib8y2",paddingStart:"xurb0ha",$$css:!0},pressableContained:{backgroundColor:"x1jx94hy",$$css:!0},pressed:{transform:"x1n5d1j9",$$css:!0},shadow:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",$$css:!0}};function a(a,b){var d=a.children,e=a.type;e=e===void 0?"default":e;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","type"]);var f=e==="contained";e=h.jsx(c("CometPressable.react"),babelHelpers["extends"]({},a,{overlayRadius:"50%",ref:b,xstyle:function(a){var b=a.disabled;a=a.pressed;return[i.pressable,a&&i.pressed,f&&i.pressableContained,b&&i.disabled]},children:d}));return f?h.jsxs("div",{className:"x14yjl9h xudhj91 x18nykt9 xww2gxu x3nfvp2 xc8icb0 x1n2onr6",children:[h.jsx(c("CDSShadow.react"),{xstyle:i.shadow}),e]}):e}a.displayName=a.name+" [from "+f.id+"]";b=h.forwardRef(a);g["default"]=b}),98);
__d("FundraiserCometProfileListDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5849346805147668"}),null);/*FB_PKG_DELIM*/
__d("WebauthnAuthenticatorLoginFailureFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1744524");b=d("FalcoLoggerInternal").create("webauthn_authenticator_login_failure",a);e=b;g["default"]=e}),98);
__d("WebauthnAuthenticatorLoginSuccessFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1744525");b=d("FalcoLoggerInternal").create("webauthn_authenticator_login_success",a);e=b;g["default"]=e}),98);
__d("WebauthnAuthenticatorRegisterFailureFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1744526");b=d("FalcoLoggerInternal").create("webauthn_authenticator_register_failure",a);e=b;g["default"]=e}),98);
__d("WebauthnAuthenticatorRegisterSuccessFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1744527");b=d("FalcoLoggerInternal").create("webauthn_authenticator_register_success",a);e=b;g["default"]=e}),98);
__d("WebAuthN",["Promise","WebauthnAuthenticatorLoginFailureFalcoEvent","WebauthnAuthenticatorLoginSuccessFalcoEvent","WebauthnAuthenticatorRegisterFailureFalcoEvent","WebauthnAuthenticatorRegisterSuccessFalcoEvent"],(function(a,b,c,d,e,f,g){"use strict";a=function(a,d){d=d.publicKey;var e={challenge:Uint8Array.from(d.challenge.split("").map(function(a){return a.charCodeAt(0)})),rpId:d.rpId,allowCredentials:h(d.allowCredentials),userVerification:"preferred",timeout:6e4};d.extensions&&d.extensions.appid&&(e.extensions={appid:d.extensions.appid});return a.get({publicKey:e}).then(function(a){return b("Promise").resolve({credential_id:a.id,raw_id:i(a.rawId),type:a.type,response:{authenticator_data:m(a.response.authenticatorData),client_data_json:m(a.response.clientDataJSON),signature:m(a.response.signature),user_handle:m(a.response.userHandle)}})}).then(function(a){c("WebauthnAuthenticatorLoginSuccessFalcoEvent").log(function(){return{key_handle_id:a.credential_id}});return b("Promise").resolve(a)})["catch"](function(a){c("WebauthnAuthenticatorLoginFailureFalcoEvent").log(function(){return{error_code:a.code,error_name:a.name,error_message:a.message}});return b("Promise").reject(a)})};d=function(a){c("WebauthnAuthenticatorRegisterSuccessFalcoEvent").log(function(){return{key_handle_id:a.id}});return{credential_id:a.id,raw_id:i(a.rawId),type:a.type,client_data_json:m(a.response.clientDataJSON),attestation_object:m(a.response.attestationObject)}};e=function(a){var d=window.navigator.credentials;if(d===null||d===void 0){var e="The user agent  does not support WebAuthN";c("WebauthnAuthenticatorRegisterFailureFalcoEvent").log(function(){return{error_code:-1,error_name:"NotSupportedError",error_message:e}});return b("Promise").reject(e)}try{a=a.publicKey;return d.create({publicKey:{challenge:j(a.challenge),attestation:a.attestation,authenticatorSelection:babelHelpers["extends"]({},a.authSelection),rp:a.rp,timeout:a.timeout,pubKeyCredParams:a.pubKeyCredParams,excludeCredentials:h(a.excludeCredentials),user:babelHelpers["extends"]({},a.user,{id:j(a.user.id)})}})}catch(a){c("WebauthnAuthenticatorRegisterFailureFalcoEvent").log(function(){return{error_code:a.code,error_name:a.name,error_message:a.message}});return b("Promise").reject(a)}};var h=function(a){return a.map(function(a){return{type:a.type,id:k(a.id)}})},i=function(a){return m(a).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")},j=function(a){return new Uint8Array(a.length).map(function(b,c){return a.charCodeAt(c)})},k=function(a){return j(atob(l(a)))},l=function(a){return(a+"===").slice(0,a.length+(4-a.length%4)%4).replace(/-/g,"+").replace(/_/g,"/")},m=function(a){a=new Uint8Array(a);var b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=a.length%3;function d(a){return b.charAt(a>>18&63)+b.charAt(a>>12&63)+b.charAt(a>>6&63)+b.charAt(a&63)}var e="";for(var f=0,g=a.length-c;f<g;f+=3){var h=(a[f]<<16)+(a[f+1]<<8)+a[f+2];e+=d(h)}switch(c){case 1:h=a[a.length-1];e+=b.charAt(h>>2);e+=b.charAt(h<<4&63);e+="==";break;case 2:h=(a[a.length-2]<<8)+a[a.length-1];e+=b.charAt(h>>10);e+=b.charAt(h>>4&63);e+=b.charAt(h<<2&63);e+="=";break;default:break}return e};g.createLoginChallenge=a;g.createRegisterRequest=d;g.getKeyCrenditial=e;g.encodeCredentials=h;g.bufferEncode=i;g.string2buffer=j;g.base64ToBuffer=k;g.Base64DecodeUrl=l;g.encodeByteArray=m}),98);/*FB_PKG_DELIM*/
__d("CometSSRViewportHints",[],(function(a,b,c,d,e,f){"use strict";e={max:function(a,b){return a<=b},min:function(a,b){return a>=b}};var g=null,h=null,i=[];function a(a){return a==="width"?g:h}function b(a){g=a.width_px,h=a.height_px}function c(a,b,c,d){var e=i.findIndex(function(b){return b.dimension===a&&b.operation===c&&b.result===d});if(e===-1)i.push({dimension:a,numPixels:b,operation:c,result:d});else{var f=c==="min"&&d===!0||c==="max"&&d===!1,g=i[e].numPixels;i[e].numPixels=f?Math.max(g,b):Math.min(g,b)}}function d(){i.length=0}f.check=e;f.useMatchViewportResults=i;f.getDimension=a;f.setDimensions=b;f.addUseMatchViewportResult=c;f.clearUseMatchViewportResults=d}),66);
__d("useMatchViewport",["CometSSRViewportHints","ExecutionEnvironment","react","useLayoutEffect_SAFE_FOR_SSR"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useState;function a(a,b,e){var f=h(function(){if(!c("ExecutionEnvironment").canUseDOM){var f=d("CometSSRViewportHints").getDimension(b);return f!=null?d("CometSSRViewportHints").check[a](f,e):!1}return!!window.matchMedia&&window.matchMedia(i(a,b,e)).matches}),g=f[0],j=f[1];c("ExecutionEnvironment").canUseDOM||d("CometSSRViewportHints").addUseMatchViewportResult(b,e,a,g);c("useLayoutEffect_SAFE_FOR_SSR")(function(){if(!window.matchMedia)return;var c=i(a,b,e),d=window.matchMedia(c),f=function(a){return j(a.matches)};d.addListener(f);return function(){return d.removeListener(f)}},[a,b,e]);return g}function i(a,b,c){return"("+a+"-"+b+": "+c+"px)"}g["default"]=a}),98);
__d("useProfileCometIsCenteredLayout",["CometLeftRailLayoutContext","CometRouteRenderType","react","useMatchViewport"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useContext;function a(){var a=h(c("CometLeftRailLayoutContext")),b=d("CometRouteRenderType").useIsHosted();a=a||b;b=a?1259:899;return c("useMatchViewport")("max","width",b)}g["default"]=a}),98);/*FB_PKG_DELIM*/
__d("TwoStepVerificationLogger",[],(function(a,b,c,d,e,f){"use strict";a={logAlwaysConfirmItsMeClicked:function(){},logCodeResponseInvalid:function(a,b){},logCodeResponseValid:function(a){},logCodeSubmitted:function(a){},logMethodPageShown:function(a){},logMethodPickerOpened:function(){},logMethodSelected:function(a){},logSmsResendClicked:function(){},logSmsResendResponseFailed:function(a){},logSmsResendResponseSuccessful:function(){},logTrustDevicePageShown:function(){},logTrustThisDeviceClicked:function(){},logTwoFactorLoginEnded:function(){},logTwoFactorLoginStart:function(){},logUnexpectedErrorAfterSessionIssued:function(a){},logUnexpectedErrorBeforeSessionIssued:function(a){}};f.NoopTwoStepVerificationLogger=a}),66);
__d("useOnFirstImpression",["react","usePartialViewImpression"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useState;function i(a,b){var d=h(null),e=d[0],f=d[1];return c("usePartialViewImpression")({onImpressionStart:function(){if(e===b)return;a();f(b)}})}function a(a){return i(a,!0)}g.useOnFirstImpressionWithDependency=i;g.useOnFirstImpression=a}),98);
__d("SecuredActionMethodPickerDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5859941650756300"}),null);/*FB_PKG_DELIM*/
__d("CDSReplayFilled24.svg.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsxs("svg",babelHelpers["extends"]({fill:"currentColor","data-name":"Icon (Expanded)",viewBox:"0 0 24 24",width:"1em",height:"1em"},a,{children:[a.title!=null&&h.jsx("title",{children:a.title}),a.children!=null&&h.jsx("defs",{children:a.children}),h.jsx("path",{d:"M12 4.75a8.838 8.838 0 0 0-1.638.156l1.666-1.666a.502.502 0 0 0 0-.71L10.97 1.472a.502.502 0 0 0-.71 0L5.795 5.938a1.502 1.502 0 0 0 0 2.124l4.465 4.466a.502.502 0 0 0 .71 0l1.058-1.058a.502.502 0 0 0 0-.71l-2.84-2.84a6.252 6.252 0 1 1-3.42 6.058.504.504 0 0 0-.496-.478H3.773a.505.505 0 0 0-.508.524A8.75 8.75 0 1 0 12 4.75z"})]}))}a.displayName=a.name+" [from "+f.id+"]";a._isSVG=!0;b=a;g["default"]=b}),98);/*FB_PKG_DELIM*/
__d("CDSParagraphs.react",["BaseTextContext","CDSText.react","CDSTextConfig","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=c("CDSTextConfig").offsets("body");var i=b[0],j=b[1];function a(a){a=a.children;return h.jsx(c("CDSText.react"),{children:h.jsx(d("BaseTextContext").BaseTextContextProvider,{nested:!1,children:h.Children.toArray(a).map(function(a,b,d){return h.jsx("div",{className:"x78zum5 xdt5ytf x11i5rnm xat24cr x1mh8g0r"+(b!==0?" x1sy10c2":" xdj266r"),style:{marginBottom:b===d.length-1?j:null,marginTop:b===0?i:null},children:h.jsx(c("CDSText.react"),{children:a})},b)})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);