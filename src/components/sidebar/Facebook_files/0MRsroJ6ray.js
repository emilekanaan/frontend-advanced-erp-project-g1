;/*FB_PKG_DELIM*/

__d("CometGamingVideoGameHubHeaderQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4957336697691891"}),null);
__d("CometGamingVideoGameHubHeaderQuery$Parameters",["CometGamingVideoGameHubHeaderQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometGamingVideoGameHubHeaderQuery_facebookRelayOperation"),metadata:{},name:"CometGamingVideoGameHubHeaderQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGamingVideoGameHubRootContentQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6180303478656778"}),null);
__d("CometGamingVideoGameHubRootContentQuery$Parameters",["CometGamingVideoGameHubRootContentQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometGamingVideoGameHubRootContentQuery_facebookRelayOperation"),metadata:{},name:"CometGamingVideoGameHubRootContentQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGamingVideoGameHubRoot.entrypoint",["CometGamingVideoGameHubHeaderQuery$Parameters","CometGamingVideoGameHubRootContentQuery$Parameters","JSResourceForInteraction","WebPixelRatio","buildCometGamingRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";var h=d("WebPixelRatio").get();a=c("buildCometGamingRoute.entrypoint")("GAMING_VIDEO")(c("JSResourceForInteraction")("CometGamingVideoGameHubRoot.react").__setRef("CometGamingVideoGameHubRoot.entrypoint"),function(a){return{queries:{contentQueryReference:{parameters:b("CometGamingVideoGameHubRootContentQuery$Parameters"),variables:{game_id:a.routeProps.game_id,scale:h}},headerQueryReference:{parameters:b("CometGamingVideoGameHubHeaderQuery$Parameters"),variables:{params:{game_id:a.routeProps.game_id}}}}}});g["default"]=a}),98);