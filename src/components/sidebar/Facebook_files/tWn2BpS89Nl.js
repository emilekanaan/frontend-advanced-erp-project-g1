;/*FB_PKG_DELIM*/

__d("LSClearEventStartAndEndTime",["LSUpdateEventStartAndEndTime"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1];c.n;var d=[],e=[],f;return c.seq([function(e){return c.seq([function(b){return c.islc(c.db.table(201).fetch([[[a[0]]]]),0,c.i64.to_float([0,1])).next().then(function(a,b){var c=a.done;a=a.value;return c?d[0]=f:(b=a.item,d[0]=b.threadId)})},function(a){return c.i64.neq(d[0],f)?c.sp(b("LSUpdateEventStartAndEndTime"),d[0],f,f):c.resolve()}])},function(a){return c.resolve(e)}])}e.exports=a}),null);
__d("LSClearAllCmEventStartAndEndTimes",["LSClearEventStartAndEndTime"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1];c.n;var d=[];return c.seq([function(a){return c.fe(c.db.table(201).fetch(),function(a){a=a.item;return c.sp(b("LSClearEventStartAndEndTime"),a.eventId)})},function(a){return c.resolve(d)}])}e.exports=a}),null);
__d("LSDeleteAllCmFbEventData",["LSArrayGetObjectAt","LSClearAllCmEventStartAndEndTimes"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1];c.n;var d=[],e=[];return c.seq([function(a){return c.seq([function(a){return c.sp(b("LSClearAllCmEventStartAndEndTimes"))},function(a){return d[0]=c.createArray(),c.fe(c.db.table(201).fetch(),function(a){a=a.item;return d[2]=(d[0].push(a.eventId),d[0])})},function(a){return c.fe(c.db.table(202).fetch(),function(a){a=a.item;return d[2]=(d[0].push(a.eventId),d[0])})},function(a){return c.fe(c.db.table(238).fetch(),function(a){a=a.item;return d[2]=(d[0].push(a.eventId),d[0])})},function(a){return c.seq([function(a){return d[2]=c.createArray(),d[3]=c.i64.of_int32(d[0].length),c.i64.gt(d[3],[0,0])?c.loopAsync(d[3],function(a){return d[5]=a,c.seq([function(a){return c.ntop("Array",b("LSArrayGetObjectAt"),d[0],d[5]).then(function(a){return a=a,d[6]=a[0],d[7]=a[1],a})},function(a){return d[8]=(d[2].push(c.i64.to_string(d[6])),d[2])}])}):c.resolve()},function(a){return d[4]=d[2].join(","),d[1]=d[4]}])},function(a){return c.fe(c.ftr(c.db.table(200).fetch(),function(a){return d[0].some(function(b){return c.i64.eq(a.eventId,b)})}),function(a){return a["delete"]()})},function(a){return c.fe(c.db.table(202).fetch(),function(a){return a["delete"]()})},function(a){return c.fe(c.db.table(201).fetch(),function(a){return a["delete"]()})},function(a){return c.fe(c.db.table(238).fetch(),function(a){return a["delete"]()})}])},function(a){return c.resolve(e)}])}e.exports=a}),null);