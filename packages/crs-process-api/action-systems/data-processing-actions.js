import n,{unique_values as u,filter as o,group as l,get_perspective as w}from"./../bin/data_processing.js";await n();class V{static async perform(a,r,s,t){await this[a.action](a,r,s,t)}static init_panic_hook(a,r,s,t){init_panic_hook()}static async unique_values(a,r,s,t){const e=await crs.process.getValue(a.args.source,r,s,t),i=await crs.process.getValue(a.args.fields,r,s,t),c=await crs.process.getValue(a.args.rows,r,s,t);if(!Array.isArray(e))throw new Error("Fields must be an array");if(!Array.isArray(i))throw new Error("Fields must be an array");const g=u(e,i,c);return a.args.target&&await crs.process.setValue(a.args.target,g,r,s,t),g}static async filter(a,r,s,t){const e=await crs.process.getValue(a.args.source,r,s,t),i=await crs.process.getValue(a.args.intent,r,s,t),c=await crs.process.getValue(a.args.case_sensitive??!1,r,s,t),g=o(e,i,c);return a.args.target&&await crs.process.setValue(a.args.target,g,r,s,t),g}static async group(a,r,s,t){const e=await crs.process.getValue(a.args.source,r,s,t),i=await crs.process.getValue(a.args.intent,r,s,t),c=await crs.process.getValue(a.args.rows,r,s,t),g=l(e,i,c);return a.args.target&&await crs.process.setValue(a.args.target,g,r,s,t),g}static async get_perspective(a,r,s,t){const e=await crs.process.getValue(a.args.source,r,s,t),i=await crs.process.getValue(a.args.intent,r,s,t),c=w(e,i);return a.args.target&&await crs.process.setValue(a.args.target,c,r,s,t),c}}crs.intent.data_processing=V;export{V as DataProcessing};
