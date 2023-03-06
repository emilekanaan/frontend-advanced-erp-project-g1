;/*FB_PKG_DELIM*/

__d("CometGroupsPathingQPLSharingConfig",["$InternalEnum","qpl"],(function(a,b,c,d,e,f,g){"use strict";a=b("$InternalEnum").Mirrored(["CONTENT_ACTION","CONTENT_ACTION_EVENTS","NAVIGATION"]);d=new Map([[a.CONTENT_ACTION,new Set(["COMET_GROUP_SWITCHER_CLICK","COMET_GROUP_SWITCHER_ITEM_CLICK","COMPOSER_CLOSE_CANCEL","COMPOSER_OPEN","CREATE_COMMENT","CREATE_POST","HOME_PLINK_CLICK","HOME_TAB_CLICK","INVITE_FLOW_OPEN","MORE_ACTION_MENU_SHARE_OPEN","REACTION_MENU_LIKE","REACTION_MENU_LOVE","REACTION_MENU_SUPPORT","REACTION_MENU_HAHA","REACTION_MENU_WOW","REACTION_MENU_ANGER","SCOPED_SEARCH_SAVED_CONTENT_CLICK"])],[a.CONTENT_ACTION_EVENTS,new Set(["EVENT_ADD_TO_CALENDAR","EVENT_EXPORT_FLOW_OPEN","EVENT_SEND_TO_EMAIL","EVENT_SHARE_FLOW_OPEN","EVENT_FOOTER_PERMALINK","EVENT_RSVP","EVENT_PHOTO_PERMALINK"])],[a.NAVIGATION,new Set(["BACK_NATIVE_DEVICE_AFFORDANCE","LOAD_GROUP_MALL","SCROLL_LOAD_MORE_GROUP_MALL"])]]);e=new Map([[c("qpl")._(2101056,"431"),{providers:new Set([a.CONTENT_ACTION,a.CONTENT_ACTION_EVENTS,a.NAVIGATION])}]]);f={ppRegistration:d,ppSubscriptions:e};g.CometGroupsPathingQPLPointProvider=a;g.CometGroupsPathingQPLSharingConfig=f}),98);
__d("GroupsPathingQPLActionPoint",[],(function(a,b,c,d,e,f){a=Object.freeze({AUDIO_CHANNEL_LOBBY_OPEN:"AUDIO_CHANNEL_LOBBY_OPEN",COMET_GROUP_SWITCHER_CLICK:"COMET_GROUP_SWITCHER_CLICK",COMET_GROUP_SWITCHER_ITEM_CLICK:"COMET_GROUP_SWITCHER_ITEM_CLICK",COMET_ENTITY_MENU_POPOVER_CLICK:"comet_entity_menu_popover_click",COMPOSER_CLOSE_CANCEL:"COMPOSER_CLOSE_CANCEL",COMPOSER_OPEN:"COMPOSER_OPEN",CREATE_COMMENT:"CREATE_COMMENT",CREATE_POST:"CREATE_POST",EVENT_ADD_TO_CALENDAR:"EVENT_ADD_TO_CALENDAR",EVENT_EXPORT_FLOW_OPEN:"EVENT_EXPORT_FLOW_OPEN",EVENT_SEND_TO_EMAIL:"EVENT_SEND_TO_EMAIL",EVENT_FOOTER_OPEN_PERMALINK:"EVENT_FOOTER_PERMALINK",EVENT_PHOTO_OPEN_PERMALINK:"EVENT_PHOTO_PERMALINK",EVENT_INVITE_FLOW_OPEN:"EVENT_INVITE_FLOW_OPEN",EVENT_PURCHASE_TICKET_FLOW_OPEN:"EVENT_PURCHASE_TICKET_FLOW_OPEN",EVENT_RSVP:"EVENT_RSVP",EVENT_SAVE:"EVENT_SAVE",EVENT_SHARE_FLOW_OPEN:"EVENT_SHARE_FLOW_OPEN",EVENT_URL_SHARE:"EVENT_SHARE",GROUPS_TAB_PLINK_CLICK:"GROUPS_TAB_PLINK_TAP",HOME_PLINK_CLICK:"HOME_PLINK_CLICK",HOME_TAB_CLICK:"HOME_TAB_CLICK",INVITE_FLOW_OPEN:"INVITE_FLOW_OPEN",INVITE_WITH_EMAIL_FLOW_OPEN:"INVITE_WITH_EMAIL_FLOW_OPEN",MORE_ACTION_MENU_SHARE_OPEN:"MORE_ACTION_MENU_SHARE_OPEN",REACTION_MENU_LIKE:"REACTION_MENU_LIKE",REACTION_MENU_LOVE:"REACTION_MENU_LOVE",REACTION_MENU_SUPPORT:"REACTION_MENU_SUPPORT",REACTION_MENU_HAHA:"REACTION_MENU_HAHA",REACTION_MENU_WOW:"REACTION_MENU_WOW",REACTION_MENU_SORRY:"REACTION_MENU_SORRY",REACTION_MENU_ANGER:"REACTION_MENU_ANGER",SCOPED_SEARCH_SAVED_CONTENT_CLICK:"SCOPED_SEARCH_SAVED_CONTENT_CLICK",SHARE_FLOW_OPEN:"SHARE_FLOW_OPEN",UFI_REACTION_LIKE:"UFI_REACTION_LIKE",UFI_TAP_COMMENT:"UFI_TAP_COMMENT"});f["default"]=a}),66);
__d("GroupsPathingQPLNavigationPoint",[],(function(a,b,c,d,e,f){a=Object.freeze({BACK_NATIVE_APP_BAR:"BACK_NATIVE_APP_BAR",BACK_NATIVE_DEVICE_AFFORDANCE:"BACK_NATIVE_DEVICE_AFFORDANCE",BACK_NATIVE_DEVICE_AFFORDANCE_CANCEL:"BACK_NATIVE_DEVICE_AFFORDANCE_CANCEL",REENTER_GROUP_MALL:"REENTER_GROUP_MALL",LOAD_COMMENT_BOTTOM_SHEET:"LOAD_COMMENT_BOTTOM_SHEET",LOAD_EVENT_PERMALINK:"LOAD_EVENT_PERMALINK",LOAD_GROUP_EVENT_DETAILS:"LOAD_GROUP_EVENT_DETAILS",LOAD_GROUP_MALL:"LOAD_GROUP_MALL",LOAD_GROUP_POST_PERMALINK:"LOAD_GROUP_POST_PERMALINK",LOAD_GROUPS_TAB:"LOAD_GROUPS_TAB",LOAD_GROUPS_TAB_DISCOVER:"LOAD_GROUPS_TAB_DISCOVER",SCROLL_LOAD_MORE_GROUP_MALL:"SCROLL_LOAD_MORE_GROUP_MALL",UNLOAD_GROUP_MALL:"UNLOAD_GROUP_MALL",EVENTS_GROUP_TITLE_CLICK:"EVENTS_GROUP_TITLE_CLICK",EVENTS_CARD_CLICK:"EVENTS_CARD_CLICK",ENTITY_MENU_CLICK:"ENTITY_MENU_CLICK",ENTITY_MENU_MEMBER_TOOL_ICON_CLICK:"ENTITY_MENU_MEMBER_TOOL_ICON_CLICK",ENTITY_MENU_NOTIFICATION_ICON_CLICK:"ENTITY_MENU_NOTIFICATION_ICON_CLICK"});f["default"]=a}),66);
__d("QPLSharing",["FBLogger","QPLEvent","QPLUserFlow","QuickLogActionType","QuickPerformanceLogger"],(function(a,b,c,d,e,f,g){"use strict";function h(a){var b,c=a.ppSubscriptions?i(a.ppSubscriptions):new Map(),d=a.lmSubscriptions?j(a.lmSubscriptions):new Map(),e=a.lmSubscriptions?k(a.lmSubscriptions):new Map(),f=a.lmSubscriptions?l(a.lmSubscriptions):new Map();return{ppRegistration:(b=a.ppRegistration)!=null?b:new Map(),ppSubscriptions:c,lmSubscriptions:d,lmSubeventLabels:(b=a.lmSubeventLabels)!=null?b:new Map(),lmEnds:e,lmStarts:f,customPointFn:a.customPointFn,customFlowPointFn:a.customFlowPointFn}}function i(a){var b=new Map();for(a of a){var c=a[0],d=a[1];d=d==null?void 0:d.providers;if(d)for(d of d)m(b,d,new Set()).add(c)}return b}function j(a){var b=new Map();for(a of a){var c=a[0],e=a[1];e=e==null?void 0:e.subspans;if(e)for(e of e)m(b,d("QPLEvent").getMarkerId(e),new Set()).add(c)}return b}function k(a){var b=new Map();for(a of a){var c=a[0],e=a[1];e=e==null?void 0:e.ends;if(e)for(e of e){var f=e.event;e.event=c;m(b,d("QPLEvent").getMarkerId(f),[]).push(e)}}return b}function l(a){var b=new Map();for(a of a){var c=a[0],e=a[1];e=e==null?void 0:e.starts;if(e)for(e of e){var f=e.event;e.event=c;m(b,d("QPLEvent").getMarkerId(f),[]).push(e)}}return b}function m(a,b,c){var d=a.get(b);if(d!=null)return d;a.set(b,c);return c}function n(a,b){return a+b}function a(a){var b=new Map();for(a of Object.entries(a)){var c=a[0],d=a[1];if(typeof d!=="number")continue;b.set(d,c)}return b}b=function(){function a(){var b=this;this.$4=function(a,c,d){b.$6(a,d),b.$7(a,{timestamp:d},"_start")};this.$5=function(c,d,e,f){var g={timestamp:f,data:{string:{QuickLogAction:a.$3.get(c)||""}}};b.$7(d,g,"_end");b.$8(d,c,f,e)};this.$1={ppRegistration:new Map(),ppSubscriptions:new Map(),lmSubscriptions:new Map(),lmSubeventLabels:new Map(),lmEnds:new Map(),lmStarts:new Map(),customPointFn:void 0,customFlowPointFn:void 0};this.$2=new Map();c("QuickPerformanceLogger").addListener({onMarkerStart:this.$4,onMarkerEnd:this.$5})}var b=a.prototype;b.init=function(a){this.$1=h(a)};b.$9=function(a,b){var c;if(a.excludeActions!=null&&a.excludeActions.has(b))return null;a.defaultAction!=null&&(c=a.defaultAction);a.mirrorAction!=null&&(c=b);a.actionMap!=null&&a.actionMap.has(b)&&(c=a.actionMap.get(b));return c};b.$6=function(a,b){var e=this.$1.lmStarts;e=e.get(d("QPLEvent").getMarkerId(a));if(!e)return;for(a of e){var f,g,h;e=a.event;var i=a.type;f=(f=a.markerOverride)!=null?f:!1;g=(g=a.regularOptions)!=null?g:{};h=(h=a.flowOptions)!=null?h:{};if(!f&&c("QuickPerformanceLogger").getActiveMarkerIds({type:i}).includes(d("QPLEvent").getMarkerId(e)))continue;if(a.customStartFn!=null){h.timestamp=b;a.customStartFn(e,i,a.regularInstanceKey,g,h);continue}switch(i){case 1:c("QuickPerformanceLogger").markerStart(e,a.regularInstanceKey,b,g);break;case 2:h.timestamp=b;c("QPLUserFlow").start(e,h);break}}};b.$8=function(a,b,e,f){var g=this,h=this.$1.lmEnds;h=h.get(d("QPLEvent").getMarkerId(a));var i=this.$1.lmSubeventLabels.get(a)||"";if(h){var j=function(h){var j=h.event,k=null,l=d("QPLEvent").getMarkerId(a),m=d("QPLEvent").getMarkerId(j);if(h.customAction){k=h.customAction(b,l,m,f,e);if(k==null)return"continue"}if(k==null){k=g.$9(h,b);if(k==null)return"continue"}c("QuickPerformanceLogger").forEachMarkerInstance(d("QPLEvent").getMarkerId(j),function(g){var m;if(k==null)return;var n=c("QuickPerformanceLogger").getMarker(j,g),o=c("QuickPerformanceLogger").getMarker(a,f);m=(m=h.shouldIgnoreSharing==null?void 0:h.shouldIgnoreSharing(n,o))!=null?m:!1;var p={bool:{should_ignore_sharing:m},"int":{submarker:l,submarker_instance_key:f}};if(h.shouldDropMarker==null?void 0:h.shouldDropMarker(n,o))c("QuickPerformanceLogger").markerDrop(j,g);else if(!m)switch(n==null?void 0:n.type){case 1:c("QuickPerformanceLogger").markerEnd(j,k,g,e);break;case 2:switch(k){case 4:c("QPLUserFlow").endCancel(j,{annotations:p,instanceKey:g,cancelReason:4});break;case 630:c("QPLUserFlow").endCancel(j,{annotations:p,instanceKey:g,cancelReason:630});break;case 615:c("QPLUserFlow").endCancel(j,{annotations:p,instanceKey:g,cancelReason:615});break;case 706:c("QPLUserFlow").endCancel(j,{annotations:p,instanceKey:g,cancelReason:706});break;case 113:c("QPLUserFlow").endTimeout(j,{annotations:p,instanceKey:g});break;case 3:case 87:c("QPLUserFlow").endFailure(j,"linked_marker_failed",{annotations:p,instanceKey:g});break;case 2:c("QPLUserFlow").endSuccess(j,{annotations:p,instanceKey:g});break;default:c("FBLogger")("qpl","linkedMarkers").blameToPreviousFrame().warn("Falling back to end main marker with raw QPL due to submarker's action type not being an official end type for QPL User Flows. Main marker: %s submarker: %s Action: %s",d("QPLEvent").getMarkerId(j),i,b),c("QuickPerformanceLogger").markerAnnotate(j,p,{instanceKey:g}),c("QuickPerformanceLogger").markerEnd(j,k,g)}break}})};for(h of h){var k=j(h);if(k==="continue")continue}}};b.$10=function(a){a=this.$1.lmSubeventLabels.has(a);!a;return a};b.$7=function(a,b,c){var e=this.$1.lmSubscriptions;e=e.get(d("QPLEvent").getMarkerId(a));if(e){if(!this.$10(a))return;a=this.$1.lmSubeventLabels.get(a)||"";a+=c;for(c of e)this.$11(c,a,b)}};b.emitPoint=function(a,b,c,d){if(!this.$12(a,b))return;this.$13(a,b,c,d);this.$14(n(a,b),{ppName:a,pointName:b,options:c})};b.$12=function(a,b){var c=this.$1.ppRegistration;a=((c=c.get(a))==null?void 0:c.has(b))||!1;!a;return a};b.$13=function(a,b,d,e){var f=this.$1.ppSubscriptions;d=d?d:{timestamp:c("QuickPerformanceLogger").currentTimestamp()};d.timestamp=(d==null?void 0:d.timestamp)||c("QuickPerformanceLogger").currentTimestamp();f=f.get(a);if(f)for(f of f)this.$11(f,a+"/"+b,d,e)};b.$11=function(a,b,e,f){var g=this;c("QuickPerformanceLogger").forEachMarkerInstance(d("QPLEvent").getMarkerId(a),function(d){var h={instanceKey:d,data:(e==null?void 0:e.data)||void 0,timestamp:e==null?void 0:e.timestamp};switch((d=c("QuickPerformanceLogger").getMarker(a,d))==null?void 0:d.type){case 1:g.$15(a,b,h,f);break;case 2:g.$16(a,b,h,f);break}})};b.$15=function(a,b,d,e){this.$1.customPointFn?this.$1.customPointFn(a,b,d,e):c("QuickPerformanceLogger").markerPoint(a,b,d)};b.$16=function(a,b,d,e){this.$1.customFlowPointFn?this.$1.customFlowPointFn(a,b,d,e):c("QPLUserFlow").addPoint(a,b,d)};b.$14=function(a,b){a=this.$2.get(a);if(a)for(a of a)a(b)};b.onSharedPoint=function(a,b,c){var d=this;m(this.$2,n(a,b),[]).push(c);return{dispose:function(){var e=d.$2.get(n(a,b));if(e){var f=e.indexOf(c);f!==-1&&e.splice(f,1)}}}};b.clearOnSharedPoints=function(){this.$2=new Map()};return a}();b.$3=a(c("QuickLogActionType"));e=new b();g["default"]=e}),98);
__d("CometGroupsPathingFunnelLogger",["CometGroupsPathingQPLSharingConfig","GroupsPathingQPLActionPoint","GroupsPathingQPLNavigationPoint","QPLEvent","QPLSharing","QPLUserFlow","QuickPerformanceLogger","gkx","qpl"],(function(a,b,c,d,e,f,g){"use strict";var h=18e4;function i(a){var b=a.active_badges;a=babelHelpers.objectWithoutPropertiesLoose(a,["active_badges"]);b=((b=b)!=null?b:[]).map(function(a){return a});return{stringAnnotations:a,stringArrayAnnotations:{active_badges:b}}}function a(a){switch(a){case"1635855486666999":return"REACTION_MENU_LIKE";case"1678524932434102":return"REACTION_MENU_LOVE";case"478547315650144":return"REACTION_MENU_WOW";case"115940658764963":return"REACTION_MENU_HAHA";case"908563459236466":return"REACTION_MENU_SORRY";case"444813342392137":return"REACTION_MENU_ANGER";case"613557422527858":return"REACTION_MENU_SUPPORT";default:return void 0}}function b(a,b,e){if(!c("gkx")("5462"))return;if(c("QPLUserFlow").getActiveFlowIDs().includes(d("QPLEvent").getMarkerId(c("qpl")._(2101056,"431")))){var f;f=(f=c("QuickPerformanceLogger").getMarker(c("qpl")._(2101056,"431"),0))==null?void 0:(f=f.annotations)==null?void 0:f.string;var g=f==null?void 0:f.trigger_source;if(g==="LOAD_GROUPS_TAB")c("QPLUserFlow").addAnnotations(c("qpl")._(2101056,"431"),{bool:{from_tab:!0},string:{entry_point:a,group_id:b,trigger_source:a}});else{a==="LOAD_GROUPS_TAB"&&c("QPLUserFlow").addPoint(c("qpl")._(2101056,"431"),"LOAD_GROUPS_TAB");g=f==null?void 0:f.group_id;g!=null&&g!==(b==null?void 0:b.toString())&&c("QPLUserFlow").addAnnotations(c("qpl")._(2101056,"431"),{bool:{multiple_groups_visited:!0}});g=f==null?void 0:f.first_reentry_point;g==null?(c("QPLUserFlow").addPoint(c("qpl")._(2101056,"431"),"REENTER_GROUP_MALL"),c("QPLUserFlow").addAnnotations(c("qpl")._(2101056,"431"),{string:{first_reentry_point:a}})):c("QPLUserFlow").endSuccess(c("qpl")._(2101056,"431"),{annotations:{string:{exit_reason:"MULTIPLE_HOME_VISITS"}}})}}else{g=i((f=e)!=null?f:{});e=g.stringAnnotations;f=g.stringArrayAnnotations;c("QPLUserFlow").start(c("qpl")._(2101056,"431"),{annotations:{string:babelHelpers["extends"]({},e,{entry_point:a,group_id:b,trigger_source:a}),string_array:babelHelpers["extends"]({},f)},timeoutInMs:h})}}function e(a){if(!c("gkx")("5462"))return;c("QPLUserFlow").addPoint(c("qpl")._(2101056,"431"),a)}function f(a,b){if(!c("gkx")("5462"))return;var e=null;Object.values(c("GroupsPathingQPLActionPoint")).includes(a)?e=d("CometGroupsPathingQPLSharingConfig").CometGroupsPathingQPLPointProvider.CONTENT_ACTION:Object.values(c("GroupsPathingQPLNavigationPoint")).includes(a)&&(e=d("CometGroupsPathingQPLSharingConfig").CometGroupsPathingQPLPointProvider.NAVIGATION);if(e==null)return;if(b){b=i(b);var f=b.stringAnnotations;b=b.stringArrayAnnotations;c("QPLSharing").emitPoint(e,a,{data:{string:f,string_array:b}})}else c("QPLSharing").emitPoint(e,a)}function j(a,b,e){if(!c("gkx")("5462"))return;if(a==null)return;a=d("CometGroupsPathingQPLSharingConfig").CometGroupsPathingQPLPointProvider.CONTENT_ACTION_EVENTS;if(e){e=i(e);var f=e.stringAnnotations;e=e.stringArrayAnnotations;c("QPLSharing").emitPoint(a,b,{data:{string:f,string_array:e}})}else c("QPLSharing").emitPoint(a,b)}function k(a){if(!c("gkx")("5462"))return;c("QPLUserFlow").endCancel(c("qpl")._(2101056,"431"),{annotations:{string:{exit_reason:a}}})}g.getReactionQPLPointFromReaction=a;g.start=b;g.addPoint=e;g.addSharedPoint=f;g.addEventSharedPoint=j;g.endCancel=k}),98);
__d("CometUFIFunnelLogger",["$InternalEnum","QPLUserFlow","qpl","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h=b("$InternalEnum")({COMMENT_CREATE:"comment_create_start",COMMENT_CREATE_SUCCESS:"comment_create_success",COMMENT_CREATE_ERROR:"comment_create_error",COMMENT_EDIT:"comment_edit_start",COMMENT_EDIT_SUCCESS:"comment_edit_success",COMMENT_EDIT_ERROR:"comment_edit_error",COMMENT_MENU_ITEM_EDIT:"comment_menu_item_edit",COMMENT_MENU_ITEM_DELETE:"comment_menu_item_delete",COMMENT_MENU_ITEM_DELETE_SUCCESS:"comment_menu_item_delete_sucess",COMMENT_MENU_ITEM_DELETE_ERROR:"comment_menu_item_delete_error",COMMENT_MENU_ITEM_HIDE:"comment_menu_item_hide",COMMENT_MENU_ITEM_UNHIDE:"comment_menu_item_unhide",COMMENT_ACTION_REACT:"comment_action_react",COMMENT_ACTION_REPLY:"comment_action_reply",COMMENT_ACTION_HIDE:"comment_action_hide",COMMENT_ACTION_UNHIDE:"comment_action_unhide",COMMENT_ACTION_TIMESTAMP:"comment_action_timestamp",LEVEL_0_PAGER_CLICK:"level_0_pager_click",LEVEL_1_PAGER_CLICK:"level_1_pager_click",LEVEL_2_PAGER_CLICK:"level_2_pager_click",REACTION_MENU_LIKE:"reaction_menu_like",REACTION_MENU_LOVE:"reaction_menu_love",REACTION_MENU_SUPPORT:"reaction_menu_support",REACTION_MENU_HAHA:"reaction_menu_haha",REACTION_MENU_WOW:"reaction_menu_wow",REACTION_MENU_SORRY:"reaction_menu_sorry",REACTION_MENU_ANGER:"reaction_menu_anger"});b=3e3;var i={};function j(a){if(i[a])return;c("QPLUserFlow").start(c("qpl")._(3747131,"4389"),{instanceKey:a});i[a]=!0}function a(a){c("QPLUserFlow").endSuccess(c("qpl")._(3747131,"4389"),{instanceKey:a}),i[a]=!1}function d(a,b){i[a]||j(a),c("QPLUserFlow").addPoint(c("qpl")._(3747131,"4389"),b,{instanceKey:a})}function e(a){if(a>2||a<0){c("recoverableViolation")("Depth should be 0 to 2.","ufi2");return}switch(a){case 0:return h.LEVEL_0_PAGER_CLICK;case 1:return h.LEVEL_1_PAGER_CLICK;case 2:return h.LEVEL_2_PAGER_CLICK}}function f(a){switch(a){case"1635855486666999":return h.REACTION_MENU_LIKE;case"1678524932434102":return h.REACTION_MENU_LOVE;case"478547315650144":return h.REACTION_MENU_WOW;case"115940658764963":return h.REACTION_MENU_HAHA;case"908563459236466":return h.REACTION_MENU_SORRY;case"444813342392137":return h.REACTION_MENU_ANGER;case"613557422527858":return h.REACTION_MENU_SUPPORT}}g.CometUFIFunnelLoggerEvents=h;g.COMET_UFI_FUNNEL_LOGGER_START_DELAY=b;g.start=j;g.endSuccess=a;g.addPoint=d;g.getPagerEventFromDepth=e;g.getReactionMenuEventFromReaction=f}),98);
__d("forEachCometUFIReplies",["UFI2CommentsConnectionHandler"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,c){var e=!1;a=d("UFI2CommentsConnectionHandler").unstable_getAllConnectionsWithKey(a,b,"CometUFICommentsProvider_feedback_replies");a!=null&&a.length>0&&(a.forEach(c),e=!0);return e}g["default"]=a}),98);
__d("forEachCommentRenderingInstanceComments",["invariant","UFI2CommentsConnectionHandler","relay-runtime/mutations/RelayRecordProxy","relay-runtime/mutations/RelayRecordSourceProxy","relay-runtime/mutations/RelayRecordSourceSelectorProxy"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a,b,c){var e=!1;b=i(a,b);b.forEach(function(b){b=d("UFI2CommentsConnectionHandler").unstable_getAllConnectionsWithKey(a,b,"CometUFICommentsProvider_feedback_comment_rendering_instance_comments");b!=null&&b.length>0&&(b==null?void 0:b.forEach(c),e=!0)});return e}function i(a,b){var d=[],e="comment_rendering_instance",f=a;a instanceof c("relay-runtime/mutations/RelayRecordSourceSelectorProxy")&&(f=a.__recordSource);b instanceof c("relay-runtime/mutations/RelayRecordProxy")&&f instanceof c("relay-runtime/mutations/RelayRecordSourceProxy")||h(0,14424);a=f.__mutator.unstable_getRawRecordWithChanges(b.getDataID());if(a==null)return d;Object.keys(a).forEach(function(a){if(a!==e&&a.indexOf(e+"(")!==0)return;a=b.getLinkedRecord(a);a!=null&&d.push(a)});return d}g["default"]=a}),98);
__d("forEachUFI2DisplayCommentsConnection",["UFI2CommentsConnectionHandler"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,c){var e=!1;a=d("UFI2CommentsConnectionHandler").unstable_getAllConnectionsWithKey(a,b,"UFI2CommentsProvider_feedback_display_comments");a!=null&&a.length>0&&(a.forEach(c),e=!0);return e}g["default"]=a}),98);
__d("BlobFactory",["emptyFunction"],(function(a,b,c,d,e,f){var g;function h(){try{new a.Blob(),g=!0}catch(a){g=!1}}var i=a.BlobBuilder||a.WebKitBlobBuilder||a.MozBlobBuilder||a.MSBlobBuilder;a.Blob?c={getBlob:function(b,c){b=b||[];c=c||{};g===void 0&&h();if(g)return new a.Blob(b,c);else{var d=new i();for(var e=0;e<b.length;e++)d.append(b[e]);return d.getBlob(c.type)}},isSupported:b("emptyFunction").thatReturnsTrue}:c={getBlob:function(){},isSupported:b("emptyFunction").thatReturnsFalse};e.exports=c}),null);
__d("useBrowserStorage",["FBLogger","isStringNullOrEmpty","react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useCallback,i=b.useEffect,j=b.useRef,k=b.useState;function a(a,b,d){var e=h(function(){if(!a||b==null)return d;var e=a.getItem(b);try{return c("isStringNullOrEmpty")(e)?d:JSON.parse(e)}catch(a){return d}},[d,b,a]),f=k(e),g=f[0],l=f[1],m=j(g),n=j(!1);i(function(){if(!a||b==null)return;function d(d){if(!n.current)return;d=JSON.stringify(d);if(d==null)return;try{a.setItem(b,d),n.current=!1}catch(b){d=b;d!=null&&d.code===22&&a.clear();var e=c("FBLogger")("use_local_storage");d instanceof Error&&(e=e.catching(d));e.warn("Cannot save to local storage.")}}d(g);return function(){d(m.current)}},[b,a,g]);var o=h(function(a){typeof a==="function"?m.current=a(m.current):m.current=a;n.current=!0;return l(a)},[]);f=h(function(a){o(a),n.current=!1},[o]);var p=h(function(){var a=e();o(a);n.current=!1;return a},[e,o]);return[g,o,{refreshValue:p,setValueWithoutPersistence:f}]}g["default"]=a}),98);
__d("useLocalStorage",["WebStorage","useBrowserStorage"],(function(a,b,c,d,e,f,g){"use strict";var h=c("WebStorage").getLocalStorage();function a(a,b){return c("useBrowserStorage")(h,a,b)}g["default"]=a}),98);
__d("DelightsTextTriggerPostTappedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1497");b=d("FalcoLoggerInternal").create("delights_text_trigger_post_tapped",a);e=b;g["default"]=e}),98);
__d("BinarySearch",["unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";e={GREATEST_LOWER_BOUND:"GREATEST_LOWER_BOUND",GREATEST_STRICT_LOWER_BOUND:"GREATEST_STRICT_LOWER_BOUND",LEAST_STRICT_UPPER_BOUND:"LEAST_STRICT_UPPER_BOUND",LEAST_UPPER_BOUND:"LEAST_UPPER_BOUND",NEAREST:"NEAREST"};var h=function(a,b){if(typeof a!=="number"||typeof b!=="number")throw c("unrecoverableViolation")("The default comparator can only be used with sequences of numbers.","comet_infra");return a-b},i=e.GREATEST_LOWER_BOUND,j=e.GREATEST_STRICT_LOWER_BOUND,k=e.LEAST_STRICT_UPPER_BOUND,l=e.LEAST_UPPER_BOUND,m=e.NEAREST;function n(a,b,c,d,e){e===void 0&&(e=h);var f=l;f=p(a,b,c,d,e,f);if(c<=f&&f<d){c=a(f);return e(c,b)===0?c:void 0}else return void 0}function o(a,b,c,d,e){e===void 0&&(e=h);var f=l;f=p(a,b,c,d,e,f);if(c<=f&&f<d)return e(a(f),b)===0?f:-1;else return-1}function p(a,b,d,e,f,g){switch(g){case l:return q(a,b,d,e,f);case i:return r(a,b,d,e,f);case k:return s(a,b,d,e,f);case j:return t(a,b,d,e,f);case m:return u(a,b,d,e,f);default:throw c("unrecoverableViolation")("Invalid mode "+g,"comet_infra")}}function q(a,b,c,d,e){c=c;d=d;while(c+1<d){var f=c+Math.floor((d-c)/2);e(a(f),b)>=0?d=f:c=f}return c<d&&e(a(c),b)>=0?c:d}function r(a,b,c,d,e){return s(a,b,c,d,e)-1}function s(a,b,c,d,e){c=c;d=d;while(c+1<d){var f=c+Math.floor((d-c)/2);e(a(f),b)>0?d=f:c=f}return c<d&&e(a(c),b)>0?c:d}function t(a,b,c,d,e){return q(a,b,c,d,e)-1}function u(a,b,c,d,e){var f=r(a,b,c,d,e),g=Math.abs(e(a(f),b));e=Math.abs(e(a(f+1),b));return g<e?Math.max(f,c):Math.min(f+1,d-1)}function a(a,b,c){return n(function(b){return a[b]},b,0,a.length,c)}function b(a,b,c){return o(function(b){return a[b]},b,0,a.length,c)}function d(a,b,c,d){return p(function(b){return a[b]},b,0,a.length,c,d)}g.GREATEST_LOWER_BOUND=i;g.GREATEST_STRICT_LOWER_BOUND=j;g.LEAST_STRICT_UPPER_BOUND=k;g.LEAST_UPPER_BOUND=l;g.NEAREST=m;g.find=n;g.findIndex=o;g.findBound=p;g.leastUpperBound=q;g.greatestLowerBound=r;g.leastStrictUpperBound=s;g.greatestStrictLowerBound=t;g.nearest=u;g.findInArray=a;g.findIndexInArray=b;g.findBoundInArray=d}),98);