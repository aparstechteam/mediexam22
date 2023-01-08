import{s as f,O as b,q as k,c as g,r as S,v as C,j as a,k as _,l as t,m as s,y as i,u as c,G as m,C as d,E as u}from"./index.8975ee2e.js";import{e as D}from"./api.e649cbe7.js";const T={key:0,class:"max-w-2xl mx-auto my-5 bg-white border rounded-lg shadow"},w={class:"px-2 py-4 space-y-3 text-center bg-slate-100"},Q={class:"text-2xl font-bold"},q={class:"text-lg font-medium"},E={class:"text-lg font-semibold"},B={class:"text-sm"},M={class:"p-4 space-y-4"},O=t("h3",{class:"text-2xl font-bold text-center"},"\u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE\u09B0\u09CD\u09A5\u09C0\u09A6\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u09A8\u09BF\u09B0\u09CD\u09A6\u09C7\u09B6\u09BE\u09AC\u09B2\u09BF",-1),j=t("div",null,[t("ul",{class:"space-y-2"},[t("li",null," \u09E6\u09E7\u0964 \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF MCQ \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u099A\u09BE\u09B0\u099F\u09BF \u0995\u09B0\u09C7 Option \u0986\u099B\u09C7\u0964 \u09B8\u09A0\u09BF\u0995 \u0985\u09AA\u09B6\u09A8\u099F\u09BF \u09AC\u09C7\u099B\u09C7 \u09A8\u09BF\u09DF\u09C7 \u0989\u09A4\u09CD\u09A4\u09B0 \u09A6\u09BF\u09A4\u09C7 \u09B9\u09AC\u09C7\u0964 \u09B8\u09A0\u09BF\u0995 \u0989\u09A4\u09CD\u09A4\u09B0\u099F\u09BF \u09B8\u09A4\u09B0\u09CD\u0995\u09A4\u09BE\u09B0 \u09B8\u09B9\u09BF\u09A4 Select \u0995\u09B0\u09A4\u09C7 \u09B9\u09AC\u09C7\u0964 \u0995\u09BE\u09B0\u09A3, \u09B8\u09A0\u09BF\u0995 \u0989\u09A4\u09CD\u09A4\u09B0 \u098F\u0995\u09AC\u09BE\u09B0 Select \u0995\u09B0\u09B2\u09C7 \u0986\u09B0 Deselect \u0995\u09B0\u09BE \u09AF\u09BE\u09AC\u09C7 \u09A8\u09BE\u0964 "),t("li",null," \u09E6\u09E8\u0964 \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09B8\u09A0\u09BF\u0995 \u0989\u09A4\u09CD\u09A4\u09B0\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u098F\u0995 (\u09E7) \u09A8\u09AE\u09CD\u09AC\u09B0 \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09AC\u09C7\u0964 "),t("li",null," \u09E6\u09E9\u0964 \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09AD\u09C1\u09B2 \u0989\u09A4\u09CD\u09A4\u09B0\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u09E8\u09EB% \u09A8\u09AE\u09CD\u09AC\u09B0 \u0995\u09BE\u099F\u09BE \u09AF\u09BE\u09AC\u09C7\u0964 "),t("li",null," \u09E6\u09EA\u0964 \u09B6\u09C1\u09A7\u09C1\u09AE\u09BE\u09A4\u09CD\u09B0 \u09B8\u09AE\u09DF \u098F\u09B0 \u09AE\u09BE\u099D\u09C7 MCQ \u098F\u0995\u09CD\u09B8\u09BE\u09AE \u09A6\u09BF\u09B2\u09C7 \u09A4\u09AC\u09C7\u0987 \u0995\u09C7\u09AC\u09B2 \u09B2\u09C0\u09A1\u09BE\u09B0\u09AC\u09CB\u09B0\u09CD\u09A1\u09C7 \u09A8\u09BE\u09AE \u09AA\u09BE\u09AC\u09C7\u0964 ")])],-1),N={key:0,class:"font-semibold"},R={class:"my-3 text-center"},Y={class:"text-lg font-semibold"},$={class:"pb-5 text-center"},z=u("Solution "),A=u(),J=u(" Result "),V=u("Solve Class"),F={key:1,class:"py-10 text-center"},G=t("button",{class:"btn btn-circle loading"},null,-1),K=[G],L={setup(P){const x=f(),h=b();function v(){x.push({name:"ExamQuestion",params:{id:h.params.id}})}const y=k(),n=g(()=>y.state.currentTime),e=S(null);return fetch(D+"?type=examlist&id="+h.params.id).then(o=>o.json()).then(o=>{e.value=o.exam;let p=JSON.parse(localStorage.getItem("mediexam22")).roll,l="https://script.google.com/macros/s/AKfycbz9OmMxzknSGJ96kpT8vuatKAxa2BLJ6qnC-fsCufUkeiSymRniQAs4OFTiHY8lQ3zZ1Q/exec?sheet="+o.exam.exam.substr(39,44);fetch(l+"&type=check&phone="+p).then(r=>r.json()).then(r=>{r.message=="exists"?e.value.status="You have already participated in this exam":new Date(e.end_time).getTime()<Date.now()?e.value.status="Exam is over and you have not participated in this exam":e.value.status="You can participate in this exam"})}),(o,p)=>{const l=C("router-link");return e.value?(a(),_("div",T,[t("div",w,[t("h1",Q,s(e.value.topic),1),t("h1",q,s(e.value.subject)+" | "+s(e.value.chapter),1),t("h2",E,"Total Question: "+s(e.value.question_quantity)+" | Full Marks: "+s(e.value.question_quantity)+" | Duration: "+s(e.value.time)+" Minutes ",1),t("h2",B,s(e.value.start_time)+" - "+s(e.value.end_time),1)]),t("div",M,[O,j,e.value.exam_category=="Weekly"?(a(),_("p",N,"*\u099C\u09C0\u09AC\u09AC\u09BF\u099C\u09CD\u099E\u09BE\u09A8 - \u09E9\u09E6 \u099F\u09BF , \u09B0\u09B8\u09BE\u09DF\u09A8 - \u09E8\u09EB \u099F\u09BF, \u09AA\u09A6\u09BE\u09B0\u09CD\u09A5\u09AC\u09BF\u099C\u09CD\u099E\u09BE\u09A8 - \u09E8\u09E6 \u099F\u09BF, \u0987\u0982\u09B0\u09C7\u099C\u09BF \u09E7\u09EB \u099F\u09BF , \u09B8\u09BE\u09A7\u09BE\u09B0\u09A3 \u099C\u09CD\u099E\u09BE\u09A8 - \u09E7\u09E6 \u099F\u09BF \u0995\u09B0\u09C7 \u09AE\u09CB\u099F \u09E7\u09E6\u09E6\u099F\u09BF \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8 \u09A5\u09BE\u0995\u09AC\u09C7\u0964 ")):i("",!0)]),t("div",R,[t("p",Y,s(e.value.status),1)]),t("div",$,[t("button",{class:"btn_exam",onClick:v},s(Date.parse(e.value.start_time)<c(n)&&Date.parse(e.value.end_time)>c(n)?`${e.value.status=="You have already participated in this exam"?"Practice":"Start Exam"}`:"Practice"),1),new Date(e.value.end_time).getTime()<c(n)?(a(),m(l,{key:0,class:"btn_exam",to:`/solution/${e.value.id}`},{default:d(()=>[z]),_:1},8,["to"])):i("",!0),A,new Date(e.value.start_time).getTime()<c(n)?(a(),m(l,{key:1,class:"btn_exam",to:`/ranking/${e.value.id}`},{default:d(()=>[J]),_:1},8,["to"])):i("",!0),e.value.solve_class?(a(),m(l,{key:2,class:"btn_exam",to:`/solve/${e.value.id}`},{default:d(()=>[V]),_:1},8,["to"])):i("",!0)])])):(a(),_("div",F,K))}}};export{L as default};
