;/*FB_PKG_DELIM*/

__d("CometTahoeUpNextOverlayAndEndScreenWrapperConditionalLoader_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"caller"}],kind:"Fragment",metadata:null,name:"CometTahoeUpNextOverlayAndEndScreenWrapperConditionalLoader_video",selections:[{alias:null,args:[{kind:"Variable",name:"caller",variableName:"caller"}],concreteType:null,kind:"LinkedField",name:"comet_tahoe_up_next_overlay_renderer",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"CometTahoeUpNextOverlayAndEndScreenWrapperConditionalLoader_video",fragmentName:"CometTahoeUpNextOverlayAndEndScreenWrapper_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"CometTahoeVODUpNextOverlayRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometTahoeUpNextOverlayAndEndScreenWrapperConditionalLoader_video",fragmentName:"CometTahoeUpNextEndCardWrapper_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"CometTahoeEndCardRenderer",abstractKey:null}],storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometRadioListCell.react",["CometListCell.react","CometListCellRadioAddOn.react","react","useCometUniqueID"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a,b){var d=a.radioAddonComponent;d=d===void 0?c("CometListCellRadioAddOn.react"):d;var e=a.radioAddonProps;a=babelHelpers.objectWithoutPropertiesLoose(a,["radioAddonComponent","radioAddonProps"]);var f=e["aria-label"];e=babelHelpers.objectWithoutPropertiesLoose(e,["aria-label"]);var g=c("useCometUniqueID")();d=h.jsx(d,babelHelpers["extends"]({},e,{"aria-labelledby":f!=null?void 0:g}));return h.jsx(c("CometListCell.react"),babelHelpers["extends"]({},a,{addOnEnd:d,contentId:g,ref:b}))}a.displayName=a.name+" [from "+f.id+"]";b=h.forwardRef(a);g["default"]=b}),98);
__d("CometGamingFollowLifecycleStrings",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a=h._("__JHASH__kv5c1KWFUGh__JHASH__");b=h._("__JHASH__XPvRzkR0Bh5__JHASH__");c=h._("__JHASH__DBLqRJm7ZgF__JHASH__");d=h._("__JHASH__BhX5wL1ntg2__JHASH__");e=h._("__JHASH__YDU4u2z3MLx__JHASH__");f=h._("__JHASH__EKJiuk2txdm__JHASH__");var i=h._("__JHASH__ZNKc894D45Y__JHASH__"),j=h._("__JHASH__06xqEohcw28__JHASH__"),k=h._("__JHASH__UQ7n9E0X2SO__JHASH__"),l=h._("__JHASH__h_5MLRPvWvQ__JHASH__"),m=h._("__JHASH__OHfODFC-6Nd__JHASH__"),n=h._("__JHASH__d9ReT1LsSWH__JHASH__"),o=h._("__JHASH__LP3O3RE6EBG__JHASH__"),p=h._("__JHASH__0jvmW9UXbEi__JHASH__"),q=h._("__JHASH__4SrqCpPNnul__JHASH__"),r=h._("__JHASH__-a5FWmp2LLg__JHASH__"),s=h._("__JHASH__olfEPdLfkty__JHASH__"),t=h._("__JHASH__Olc6eD0h6ae__JHASH__");h=h._("__JHASH__wZXVPbhOrvX__JHASH__");g.NOTIF_ALL_VIDEOS=a;g.NOTIF_ALL_VIDEOS_TAHOE=b;g.NOTIF_HIGHLIGHTS=c;g.NOTIF_HIGHLIGHTS_TAHOE=d;g.NOTIF_NONE=e;g.NOTIF_NONE_TAHOE=f;g.NOTIF_ALL_VIDEOS_DESC=i;g.NOTIF_ALL_VIDEOS_DESC_TAHOE=j;g.NOTIF_HIGHLIGHTS_DESC=k;g.NOTIF_HIGHLIGHTS_DESC_TAHOE=l;g.NOTIF_NONE_DESC=m;g.NOTIF_NONE_DESC_TAHOE=n;g.NOTIF_MENU_TITLE=o;g.UNFOLLOW_DESC=p;g.UNFOLLOW_DESC_TAHOE=q;g.UNFOLLOW=r;g.FOLLOW=s;g.MESSENGER_NOTIFS=t;g.MESSENGER_NOTIFS_DESC=h}),98);
__d("useConfiguredMutation",["CometRelay","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback;function a(a,b){a=d("CometRelay").useMutation(a);var c=a[0];a=a[1];var e=h(function(a){if(a==null)return c(b);else if(typeof a==="function")return c(babelHelpers["extends"]({},b,a(b)));else return c(babelHelpers["extends"]({},b,a))},[c,b]);return[e,a]}g["default"]=a}),98);
__d("GamingVideoDestinationLoggingContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b={external_entrypoint:"unknown",surface:"unknown"};c=a.createContext(b);g["default"]=c}),98);
__d("useGamingDestinationLoggedInCallback",["fbt","useCAALoggedOutDialogWrapper","useIsLoggedOut"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a){var b=c("useIsLoggedOut")(),d=h._("__JHASH__E1INKxrXP_F__JHASH__");d=c("useCAALoggedOutDialogWrapper")({title:d});return b?d:a}g["default"]=a}),98);
__d("GamingDestinationTypedLoggerLite",["generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:GamingDestinationLoggerConfig")}),null);
__d("useGamingVideoDestinationEventLogger",["GamingDestinationTypedLoggerLite","GamingVideoDestinationLoggingContext","react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useCallback,i=b.useContext;function a(){var a=i(c("GamingVideoDestinationLoggingContext")),b=h(function(b,d){c("GamingDestinationTypedLoggerLite").log(babelHelpers["extends"]({event:b},a,d))},[a]),d=h(function(a){b("click",a)},[b]),e=h(function(a){b("impression",a)},[b]);return{logClick:d,logEvent:b,logImpression:e}}g["default"]=a}),98);
__d("CometTahoeUpNextOverlayAndEndScreenWrapperConditionalLoader.react",["CometPlaceholder.react","CometRelay","CometTahoeUpNextOverlayAndEndScreenWrapperConditionalLoader_video.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e=a.initialTracePolicy,f=a.logTahoeEvent,g=a.openNextVideoInPermalink,j=a.pressInteraction,k=a.reactionVideoChannelType,l=a.subOrigin,m=a.video$key;a=a.videoID;m=d("CometRelay").useFragment(h!==void 0?h:h=b("CometTahoeUpNextOverlayAndEndScreenWrapperConditionalLoader_video.graphql"),m);return i.jsx(c("CometPlaceholder.react"),{fallback:null,children:i.jsx(d("CometRelay").MatchContainer,{match:m==null?void 0:m.comet_tahoe_up_next_overlay_renderer,props:{initialTracePolicy:e,logTahoeEvent:f,openNextVideoInPermalink:g,pressInteraction:j,reactionVideoChannelType:k,subOrigin:l,videoID:a}})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CommunityModerationEventFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1743433");b=d("FalcoLoggerInternal").create("community_moderation_event",a);e=b;g["default"]=e}),98);
__d("XCometWoodhengeSignUpControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/{page_token}/support/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("WoodhengeClientTypedLoggerLite",["generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:WoodhengeClientLoggerConfig")}),null);
__d("randomShuffle",["randomInt"],(function(a,b,c,d,e,f,g){function a(a,b,d){b===void 0&&(b=0);d===void 0&&(d=0);if(b>a.length-1-d)return a;for(d=a.length-1-d;d>b;d--){var e=c("randomInt")(d+1);if(e!==d){var f=a[e];a[e]=a[d];a[d]=f}}return a}g["default"]=a}),98);
__d("ReactDOM",["cr:4865","err"],(function(a,b,c,d,e,f,g){var h,i,j,k,l;function m(){var a=c("err")("This React API is not implemented in this environment. Use ReactDOMComet instead.");throw a}function n(){var a=c("err")("This React API is not implemented in this environment. Use ReactDOMLegacy_DEPRECATED instead.");throw a}d=(a=b("cr:4865").createRoot)!=null?a:function(){return m()};f=(e=b("cr:4865").hydrateRoot)!=null?e:function(){return m()};e=(a=b("cr:4865").unstable_createEventHandleInternal)!=null?a:function(){return m()};a=(a=b("cr:4865").unstable_flushControlled)!=null?a:function(){return m()};h=(h=b("cr:4865").findDOMNode)!=null?h:function(){return n()};i=(i=b("cr:4865").hydrate)!=null?i:function(){return n()};j=(j=b("cr:4865").render)!=null?j:function(){return n()};k=(k=b("cr:4865").unmountComponentAtNode)!=null?k:function(){return n()};l=(l=b("cr:4865").unstable_renderSubtreeIntoContainer)!=null?l:function(){return n()};g.createRoot=d;g.hydrateRoot=f;g.unstable_createEventHandle=e;g.unstable_flushControlled=a;g.findDOMNode=h;g.hydrate=i;g.render=j;g.unmountComponentAtNode=k;g.unstable_renderSubtreeIntoContainer=l;g.createPortal=b("cr:4865").createPortal;g.flushSync=b("cr:4865").flushSync;g.unstable_batchedUpdates=b("cr:4865").unstable_batchedUpdates;g.version=b("cr:4865").version;g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b("cr:4865").__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED}),98);
__d("ReactDOMLegacy_DEPRECATED",["ReactInternalLogger","cr:1108857","cr:1294246"],(function(a,b,c,d,e,f,g){a=d("ReactInternalLogger").wrapWithLog(d("ReactInternalLogger").Module.ReactDOMLegacy,d("ReactInternalLogger").Method.FindDOMNode,b("cr:1294246").findDOMNode);c=d("ReactInternalLogger").wrapWithLog(d("ReactInternalLogger").Module.ReactDOMLegacy,d("ReactInternalLogger").Method.Hydrate,b("cr:1294246").hydrate);e=d("ReactInternalLogger").wrapWithLog(d("ReactInternalLogger").Module.ReactDOMLegacy,d("ReactInternalLogger").Method.Render,b("cr:1294246").render);g.createPortal=b("cr:1294246").createPortal;g.findDOMNode=a;g.flushSync=b("cr:1294246").flushSync;g.hydrate=c;g.render=e;g.unmountComponentAtNode=b("cr:1294246").unmountComponentAtNode;g.unstable_batchedUpdates=b("cr:1294246").unstable_batchedUpdates;g.unstable_renderSubtreeIntoContainer=b("cr:1294246").unstable_renderSubtreeIntoContainer;g.version=b("cr:1294246").version;g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b("cr:1294246").__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED}),98);