import"../../expressions/code-factories/case.js";import{ClassListBase as c}from"./classlist-base.js";class i extends c{get providerKey(){return"classlist.case"}async parse(s,t){const e=o(s.value);await super.parse(s,t,e,async l=>await crs.binding.expression.caseFactory(l))}}function o(r){const s=new Set,t=r.split(",");for(const e of t){const n=(e.indexOf(":")!=-1?e.split(":"):[0,e])[1].replaceAll("[","").replaceAll("]",":").replaceAll(",",":").replaceAll("'","").split(":").map(a=>a.trim()).filter(a=>a.length>0);s.add(...n)}return Array.from(s)}export{i as default};
