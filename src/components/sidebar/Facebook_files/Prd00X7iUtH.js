;/*FB_PKG_DELIM*/

__d("ProfilePlusIntentBasedSwitchingDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6148432611889598"}),null);
__d("ProfilePlusIntentBasedSwitchingDialogQuery$Parameters",["ProfilePlusIntentBasedSwitchingDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("ProfilePlusIntentBasedSwitchingDialogQuery_facebookRelayOperation"),metadata:{},name:"ProfilePlusIntentBasedSwitchingDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("ProfilePlusIntentBasedSwitchingDialog.entrypoint",["JSResourceForInteraction","ProfilePlusIntentBasedSwitchingDialogQuery$Parameters"],(function(a,b,c,d,e,f,g){"use strict";a=c("JSResourceForInteraction")("ProfilePlusIntentBasedSwitchingDialog.react").__setRef("ProfilePlusIntentBasedSwitchingDialog.entrypoint");b={getPreloadProps:function(a){return{queries:{queryReference:{options:{fetchPolicy:"network-only"},parameters:c("ProfilePlusIntentBasedSwitchingDialogQuery$Parameters"),variables:{profileID:a.routeParams.id,queryAllEligibleProfiles:a.otherParams.queryAllEligibleProfiles}}}}},root:a};d=b;g["default"]=d}),98);
__d("XBizSuiteControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/latest/{?*rest}",Object.freeze({auto_open_promote:!1,launch_notifications:!1,launch_onboarding:!1,partnership_messages:!1}),void 0);b=a;g["default"]=b}),98);
__d("goURIOnWindow",["ConstUriUtils","FBLogger","err"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){var e=typeof b==="string"?d("ConstUriUtils").getUri(b):d("ConstUriUtils").isConstUri(b);if(e)a.location=e.toString();else{a="Invalid URI "+b.toString()+" provided to goURIOnWindow";c("FBLogger")("comet_infra").blameToPreviousFrame().mustfix(a)}}g["default"]=a}),98);
__d("goUriOnNewWindow",["goURIOnWindow"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=window.open("","_blank");c("goURIOnWindow")(b,a)}g["default"]=a}),98);