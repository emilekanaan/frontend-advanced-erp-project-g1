;/*FB_PKG_DELIM*/

__d("useCometSearchRoutingQueryString",["CometRouteParams"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=d("CometRouteParams").useRouteParams();return typeof a.q==="string"?a.q.trim():""}g["default"]=a}),98);
__d("WorkplaceSearchTypeaheadEventEmitterContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=c("react");b=a.createContext();g["default"]=b}),98);
__d("CometSearchScopedTypeaheadInputStrategy.react",["CometTypeaheadInputRoundedStrategy.react","FBLogger","SearchCometTypeaheadEventEmitterContext","WorkplaceSearchTypeaheadEventEmitterContext","react","useCometTypeaheadInputRefs"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useContext,j=b.useEffect;function a(a,b){var d=a.inputExtraProps,e=a.onChange;a=babelHelpers.objectWithoutPropertiesLoose(a,["inputExtraProps","onChange"]);var f=i(c("SearchCometTypeaheadEventEmitterContext")),g=i(c("WorkplaceSearchTypeaheadEventEmitterContext"));g=(f=(f=f)!=null?f:g)!=null?f:{};var k=g.subscribeToScopedSearchTypeaheadFocus;k==null&&c("FBLogger")("search").mustfix("Both event emitter contexts missing");f=c("useCometTypeaheadInputRefs")(b);g=f.composedRef;b=f.inputRef;var l=b.current;j(function(){var a=k==null?void 0:k(function(){if(l==null)return;l.focus();l.value="";e("")});return function(){a==null?void 0:a()}},[l,e,k]);return h.jsx(c("CometTypeaheadInputRoundedStrategy.react"),babelHelpers["extends"]({},a,{inputExtraProps:babelHelpers["extends"]({},d,{size:"medium"}),onChange:e,ref:g}))}a.displayName=a.name+" [from "+f.id+"]";e=h.forwardRef(a);g["default"]=e}),98);
__d("CometSearchScopedTypeahead.react",["BaseTypeahead.react","CometSearchScopedTypeaheadInputStrategy.react","CometTypeaheadLayoutContextualStrategy.react","emptyFunction","react","useStable","withSearchCometTypeaheadBaseNavigationDecorator","withSearchCometTypeaheadSERPWarmCallDecorator"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useMemo,j={typeaheadInput:{alignItems:"x6s0dn4",display:"x78zum5",$$css:!0},typeaheadView:{borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",borderBottomWidth:"xso031l",borderTopColor:"x5q5vme",borderEndColor:"x5fapg",borderBottomColor:"xia5s5o",borderStartColor:"x1vrg8lv",borderEndWidth:"xm81vs4",borderStartWidth:"xy80clv",borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopEndRadius:"x13lgxp2",borderTopStartRadius:"x168nmei",borderTopWidth:"x972fbf",boxShadow:"x1wcvc8b",maxHeight:"x133jd2w",paddingTop:"x1y1aw1k",paddingEnd:"x1sxyh0",paddingBottom:"xwib8y2",paddingStart:"xurb0ha",$$css:!0}},k={12:{paddingStart:"x1ye3gou",paddingEnd:"xn6708d",$$css:!0},16:{paddingStart:"x1swvt13",paddingEnd:"x1pi30zi",$$css:!0}};function a(a){var b=a.paddingHorizontal,d=b===void 0?16:b;b=babelHelpers.objectWithoutPropertiesLoose(a,["paddingHorizontal"]);a=i(function(){return{inputXStyle:[j.typeaheadInput,k[d]],viewXStyle_DO_NOT_USE:j.typeaheadView}},[d]);var e=c("useStable")(function(){var a;return((a=c("withSearchCometTypeaheadSERPWarmCallDecorator"))!=null?a:c("emptyFunction").thatReturnsArgument)(c("withSearchCometTypeaheadBaseNavigationDecorator")(c("BaseTypeahead.react")))});return h.jsx(e,babelHelpers["extends"]({},b,{inputStrategyRenderer:c("CometSearchScopedTypeaheadInputStrategy.react"),layoutStrategyRenderer:c("CometTypeaheadLayoutContextualStrategy.react"),xstyles:a}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useCometSearchScopedTypeaheadPressEntryHandler",["react","searchCometTypeaheadGetHighConfidenceResult","searchCometTypeaheadGetStsDisambiguation","useCometTypeaheadNavigate"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback;function a(a){var b=a.callback,d=a.loggingProvider,e=a.urlBuilder,f=c("useCometTypeaheadNavigate")();return h(function(a){var g=a.rawData;a=a.subtype==="your_group_activity"?g.url:e({entryPointAction:"SEARCH_BOX",highConfidenceResult:c("searchCometTypeaheadGetHighConfidenceResult")(a),query:a.label,stsDisambiguation:(g=c("searchCometTypeaheadGetStsDisambiguation")(a))!=null?g:void 0,typeaheadSessionID:d.getSessionID()});f(a);b&&b()},[e,d,f,b])}g["default"]=a}),98);
__d("useCometSearchScopedTypeaheadSelectFreeformQueryHandler",["react","useCometTypeaheadNavigate"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback;function a(a){var b=a.callback,d=a.loggingProvider,e=a.urlBuilder,f=c("useCometTypeaheadNavigate")();return h(function(a){a=e({entryPointAction:"SEARCH_BOX",query:a,typeaheadSessionID:d.getSessionID()});f(a);b&&b()},[e,d,f,b])}g["default"]=a}),98);