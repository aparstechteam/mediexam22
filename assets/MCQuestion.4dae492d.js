var H=Object.defineProperty,D=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var T=(d,r,c)=>r in d?H(d,r,{enumerable:!0,configurable:!0,writable:!0,value:c}):d[r]=c,y=(d,r)=>{for(var c in r||(r={}))N.call(r,c)&&T(d,c,r[c]);if(C)for(var c of C(r))A.call(r,c)&&T(d,c,r[c]);return d},v=(d,r)=>D(d,I(r));import{D as M,N as $,H as R,v as L,j as o,k as s,l as i,y as u,E as w,m as b,G as B,C as Q,B as S,F as f,x as k,J as z,K as E,L as g}from"./index.dd5b505d.js";import{e as O}from"./api.e649cbe7.js";import{_ as Y}from"./plugin-vue_export-helper.21dcd24c.js";const F={data(){return{timing:null,solutionv:!1,retake:!1,questions:[],solution:[],result:[],unknown:!1,loading:!0,eload:!1,minute:0,second:0,end:Date.now()+12e6,show:!1,url:"",solutionpdf:"",starttime:Date.now(),ended:null,inttime:109090,immediate:!0,viewDetails:!1,score:null,status:{Correct:0,Wrong:0,Not_Answered:0}}},beforeRouteEnter(d,r,c){var t;if((t=JSON.parse(localStorage.getItem("mediexam22")))==null?void 0:t.roll){c();return}c({path:"/login"})},methods:{endalert(){this.$swal({icon:"warning",title:"Will be available after the time ends"})},getQuestionLink(){this.loading=!0;let d=null;fetch(O+"?type=examlist&id="+this.$route.params.id).then(r=>r.json()).then(r=>{if(new Date(r.exam.start_time).getTime()>Date.now()){this.$router.push("/");return}this.url="https://script.google.com/macros/s/AKfycbz9OmMxzknSGJ96kpT8vuatKAxa2BLJ6qnC-fsCufUkeiSymRniQAs4OFTiHY8lQ3zZ1Q/exec?sheet="+r.exam.exam.substr(39,44),this.sheet_id=r.exam.exam.substr(39,44),this.ended=new Date(r.exam.end_time).getTime(),this.timelimit=r.exam.timelimit*6e4,this.immediate=!r.exam.special,this.qty=r.exam.question_quantity,this.e_category=r.exam.exam_category,this.solutionpdf=r.exam.solve_sheet,d=r.exam.time;const c={English:15,Biology:30,Chemistry:25,Physics:20,GK:10};let p=JSON.parse(localStorage.getItem("mediexam22")).roll;fetch(this.url+"&type=check&phone="+p).then(t=>t.json()).then(t=>{t.message=="exists"||this.ended<Date.now()?(this.result=t.result?t.result:["","Time's up"],fetch(this.url+"&type=question").then(a=>a.json()).then(a=>{this.solution=a.map((n,e)=>(n.question.includes("https://drive.google.com/file/d/")&&(n.question=n.question.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80)),n.a.includes("https://drive.google.com/file/d/")&&(n.a=n.a.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80)),n.b.includes("https://drive.google.com/file/d/")&&(n.b=n.b.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80)),n.c.includes("https://drive.google.com/file/d/")&&(n.c=n.c.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80)),n.d.includes("https://drive.google.com/file/")&&(n.d=n.d.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80)),n.correct.includes("https://drive.google.com/file")&&(n.correct=n.correct.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80)),v(y({},n),{selected:"",id:e})));let m=d;this.inttime=m*6e4,this.end=m*6e4}),this.unknown=!1,this.loading=!1):(this.unknown=!0,fetch(this.url+"&type=question").then(a=>a.json()).then(a=>{let m=localStorage.getItem(`attempt${this.$route.params.id}`);if(m?localStorage.setItem(`attempt${this.$route.params.id}`,Number(m)+1):localStorage.setItem(`attempt${this.$route.params.id}`,1),this.questions=a.map((e,l)=>(e.question.includes("https://drive.google.com/file/d/")&&(e.question=e.question.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80)),e.a.includes("https://drive.google.com/file/d/")&&(e.a=e.a.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80)),e.b.includes("https://drive.google.com/file/d/")&&(e.b=e.b.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80)),e.c.includes("https://drive.google.com/file/d/")&&(e.c=e.c.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80)),e.d.includes("https://drive.google.com/file/")&&(e.d=e.d.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80)),e.correct.includes("https://drive.google.com/file")&&(e.correct=e.correct.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80)),v(y({},e),{selected:"",id:l}))),this.e_category=="Daily"){const e={Physics:50,Chemistry:50,Biology:50,English:10,GK:10};let l=[];for(let h in e){let _=this.questions.filter(j=>j.subject==h);_=_.length>e[h]?_.sort(()=>Math.random()-.5):_,_=_.slice(0,e[h]),l=[...l,..._]}this.questions=l}else if(this.e_category=="Paper Final")this.questions=this.questions.sort(()=>Math.random()-.5).slice(0,100);else{let e=[];for(let l in c){let h=this.questions.filter(_=>_.subject==l);h=h.length>c[l]?h.sort(()=>Math.random()-.5):h,h=h.slice(0,c[l]),e=[...e,...h]}this.questions=e}let n=d;this.inttime=n*6e4,this.end=n*6e4,this.starttime=Date.now(),this.loading=!1,this.showRemaining(this.end+Date.now()),this.autoSubmit()}))})})},startRetake(){this.retake=!0,this.showRemaining(Date.now()+this.end)},retakeResult(){let d=this.solution.reduce((r,c)=>(c.correct==c.selected?(r+=1,this.status.Correct+=1):c.selected?(r-=.25,this.status.Wrong+=1):this.status.Not_Answered+=1,r),0);this.$swal({icon:"success",title:"Success",text:`You Scored ${d}`}).then(()=>{this.retake=!1,this.show=!1,this.questions=this.solution,this.viewDetails=!this.viewDetails,this.inttime=this.solution.length,this.score=d,this.solution=this.solution.map(r=>v(y({},r),{selected:""})),window.scroll(0,0)})},millisecToTime(d){var r=Math.floor(d/6e4),c=(d%6e4/1e3).toFixed(0);return r+":"+(c<10?"0":"")+c},submitAns(){let d=this.millisecToTime(Date.now()-this.starttime);this.eload=!0;let r=this.questions.reduce((n,e)=>(e.correct==e.selected?(n+=1,this.status.Correct+=1):e.selected?(n-=.25,this.status.Wrong+=1):this.status.Not_Answered+=1,n),0);clearTimeout(this.timing);let{roll:c,name:p,college:t}=JSON.parse(localStorage.getItem("mediexam22")),a=this.questions.map(n=>{let l=[n.a,n.b,n.c,n.d].indexOf(n.selected);return{id:n.id,s:l}}).filter(n=>n.s>-1),m="https://script.google.com/macros/s/AKfycbz7fnQLFtMIoE2UhBlIIF5DcZ1iTCEfKsss6uiKiIVAOpTpcgN9faiB_AD2j3YyMcgPSA/exec?sheet="+this.sheet_id;fetch(m,{method:"POST",mode:"no-cors",cache:"no-cache",redirect:"follow",body:JSON.stringify({roll:c,name:p,attempt:localStorage.getItem(`attempt${this.$route.params.id}`)||1,score:r,college:t,duration:d,submission:JSON.stringify(a),dtime:Date.now()-this.starttime})}).then(()=>{clearTimeout(this.timing),M.post("https://vtd9zgfthi.execute-api.us-east-1.amazonaws.com/result",{exam_id:parseInt(this.$route.params.id),roll:c,name:p,attempt:Number(localStorage.getItem(`attempt${this.$route.params.id}`)||1),score:r,college:t,duration:d,submission:a}).then(n=>{console.log(n)}).catch(n=>{console.log(n)}),this.$swal({icon:"success",title:"Success",text:`You Scored ${r}`}).then(()=>{localStorage.removeItem(`attempt${this.$route.params.id}`),this.show=!1,this.viewDetails=!0,this.score=r,window.scroll(0,0)})}).catch(n=>{console.log(n),M.post("https://vtd9zgfthi.execute-api.us-east-1.amazonaws.com/result",{exam_id:parseInt(this.$route.params.id),roll:c,name:p,attempt:Number(localStorage.getItem(`attempt${this.$route.params.id}`)||1),score:r,college:t,duration:d,submission:a}).then(e=>{this.$swal({icon:"success",title:"Success",text:`You Scored ${r}`}).then(()=>{localStorage.removeItem(`attempt${this.$route.params.id}`),this.show=!1,this.viewDetails=!0,this.score=r,window.scroll(0,0)})}).catch(e=>{console.log(e)})})},gotoLeaderboard(){this.$router.replace(`/ranking/${this.$route.params.id}`)},autoSubmit(){this.timing=setTimeout(()=>{this.show=!1,this.submitAns()},this.inttime)},showRemaining(d){this.show=!0;const r=setInterval(()=>{const c=d-Date.now();if(c<0){clearInterval(r);return}const p=Math.floor(c/this._days),t=Math.floor(c%this._days/this._hours),a=Math.floor(c%this._hours/this._minutes),m=Math.floor(c%this._minutes/this._seconds);this.second=m<10?"0"+m:m,this.minute=a<10?"0"+a:a,this.hours=t<10?"0"+t:t,this.days=p<10?"0"+p:p},1e3)}},created(){this.getQuestionLink(),window.scrollTo(0,0)},computed:v(y({},$(["user"])),{_seconds:()=>1e3,_minutes(){return this._seconds*60},_hours(){return this._minutes*60},_days(){return this._hours*24},currentTime:()=>R.state.currentTime})},x=d=>(z("data-v-feff0638"),d=d(),E(),d),J={key:0,class:"py-5 mx-auto mt-5 rounded bg-gray-50 md:w-2/3"},K={class:"py-3 text-center"},V={key:0,class:"my-4 text-2xl font-bold text-gray-900 ma-auto"},W={key:0},P={key:1,class:"text-center text-gray-900"},G={class:"py-5"},U=w(" View Solution "),Z=["textContent"],X={key:0,class:"my-5 text-center"},q={key:1,class:"text-center"},ee=["textContent"],te={key:2,class:"text-center"},oe=x(()=>i("button",{class:"btn loading btn-circle"},null,-1)),se=[oe],re={key:3,class:"my-4 font-semibold text-center text-gray-900"},ie={key:1,class:"pb-10"},ne={class:"py-4 text-center"},le={class:"text-2xl font-bold text-gray-900"},ce=x(()=>i("p",{class:"text-center"}," \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09C7\u09B0 \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0\u09C7 \u09A4\u09C1\u09AE\u09BF \u0995\u09C7\u09AC\u09B2 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u0995\u09B0\u09BE\u09B0 \u09B8\u09C1\u09AF\u09CB\u0997 \u09AA\u09BE\u09AC\u09C7\u0964 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u09B8\u09BF\u09B2\u09C7\u0995\u09CD\u099F \u0995\u09B0\u09BE\u09B0 \u09AA\u09B0 \u09A4\u09BE \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09BE\u09B0 \u0995\u09CB\u09A8\u09CB \u09B8\u09C1\u09AF\u09CB\u0997 \u09A8\u09BE\u0987\u0964 ",-1)),de={class:"mx-2 text-gray-900 md:w-2/3 md:mx-auto"},ae=["src"],ue=["innerHTML"],he={class:"flex gap-3"},ge={class:"btn btn-sm"},be={key:0,class:"btn btn-sm"},me={class:"mt-2"},pe=["src","onClick"],_e=["innerHTML","onClick"],ye=["src","onClick"],ve=["innerHTML","onClick"],fe=["src","onClick"],we=["innerHTML","onClick"],xe=["src","onClick"],ke=["innerHTML","onClick"],Ce={class:"mb-10 text-center"},Te={key:2,class:"pb-10"},Me={class:"py-4 text-center"},Le={class:"text-2xl font-bold text-gray-900"},Se=x(()=>i("p",{class:"text-center"}," \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09C7\u09B0 \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0\u09C7 \u09A4\u09C1\u09AE\u09BF \u0995\u09C7\u09AC\u09B2 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u0995\u09B0\u09BE\u09B0 \u09B8\u09C1\u09AF\u09CB\u0997 \u09AA\u09BE\u09AC\u09C7\u0964 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u09B8\u09BF\u09B2\u09C7\u0995\u09CD\u099F \u0995\u09B0\u09BE\u09B0 \u09AA\u09B0 \u09A4\u09BE \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09BE\u09B0 \u0995\u09CB\u09A8\u09CB \u09B8\u09C1\u09AF\u09CB\u0997 \u09A8\u09BE\u0987\u0964 ",-1)),je={key:0,class:"mx-2 md:w-2/3 md:mx-auto"},He=["src"],De=["innerHTML"],Ie={class:"flex gap-3"},Ne={class:"btn btn-sm"},Ae={key:0,class:"btn btn-sm"},$e={class:"mt-2"},Re=["src","onClick"],Be={key:1},Qe=["innerHTML","onClick"],ze=["src","onClick"],Ee={key:3},Oe=["innerHTML","onClick"],Ye=["src","onClick"],Fe=["innerHTML","onClick"],Je=["src","onClick"],Ke=["innerHTML","onClick"],Ve={key:0,class:"my-2 text-center"},We={key:1,class:"mb-10 text-center"},Pe=["disabled"],Ge={key:1,class:"mx-2 md:w-2/3 md:mx-auto"},Ue={class:"flex flex-wrap justify-center"},Ze={class:"w-full p-3 md:w-1/2"},Xe={class:"text-center"},qe={class:"text-lg font-semibold text-gray-900"},et={class:"text-gray-600"},tt={class:"flex flex-wrap items-center justify-center gap-3 p-3 rounded bg-gray-50"},ot={class:"text-gray-900"},st={class:"text-lg font-bold"},rt={class:"text-lg font-bold"},it={class:"text-lg font-bold"},nt={class:"text-lg font-bold"},lt=["src"],ct=["innerHTML"],dt={class:"flex gap-3"},at={class:"btn btn-sm"},ut={key:0,class:"btn btn-sm"},ht={class:"mt-2"},gt=["src"],bt={key:1},mt=["innerHTML"],pt=["src"],_t={key:3},yt=["innerHTML"],vt=["src"],ft=["innerHTML"],wt=["src"],xt=["innerHTML"],kt={key:2,class:"my-2 poppins"},Ct=["innerHTML"],Tt={class:"material-icons"},Mt={key:0,class:"my-2 text-center"},Lt={key:1,class:"mb-10 text-center"},St=["disabled"],jt={key:3,class:"white--text fixed__timer"},Ht={class:"text-white bg-blue-500 border border-white shadow"},Dt={key:1,class:"flex items-center justify-center w-full h-screen"},It=x(()=>i("div",{class:"flex items-center justify-center -mt-24 space-x-1 text-sm text-gray-700"},[i("svg",{fill:"none",class:"w-10 h-10 animate-spin",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},[i("path",{"clip-rule":"evenodd",d:"M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z",fill:"currentColor","fill-rule":"evenodd"})]),i("div",{class:"text-lg"},"Loading ...")],-1)),Nt=[It];function At(d,r,c,p,t,a){const m=L("router-link"),n=L("pie-chart");return t.loading?(o(),s("div",Dt,Nt)):(o(),s("div",{key:0,onContextmenu:e=>!1},[!t.unknown&&!t.loading&&!t.retake?(o(),s("div",J,[i("div",K,[t.result[1]?(o(),s("h2",V,[t.result[1]!=="Time's up"?(o(),s("span",W,"You Scored:")):u("",!0),w(" "+b(t.result[1]),1)])):u("",!0),t.result[1]=="Time's up"?(o(),s("p",P,"But you can still give the exam. Click 'Test yourself again'.")):u("",!0),i("div",G,[this.ended<a.currentTime||t.immediate?(o(),B(m,{key:0,to:`/solution/${this.$route.params.id}`,class:"my-2 btn btn-primary"},{default:Q(()=>[U]),_:1},8,["to"])):(o(),s("button",{key:1,class:"btn btn-primary",onClick:r[0]||(r[0]=(...e)=>a.endalert&&a.endalert(...e)),textContent:b("View Solution")},null,8,Z))])]),!t.retake&&t.solution.length>0?(o(),s("div",X,[S(m,{to:`/ranking/${this.$route.params.id}`,class:"mx-auto my-2 btn btn-primary",text:"View Your Rank"},null,8,["to"])])):u("",!0),!t.retake&&t.solution.length>0?(o(),s("div",q,[i("button",{class:"mx-auto btn btn-primary",onClick:r[1]||(r[1]=(...e)=>a.startRetake&&a.startRetake(...e)),textContent:b("Test Yourself Again")},null,8,ee)])):(o(),s("div",te,se)),!t.retake&&t.solution.length>0?(o(),s("div",re," Retake exam score will not be recorded ")):u("",!0)])):u("",!0),t.retake?(o(),s("div",ie,[i("div",ne,[i("h1",le," Retake Exam - "+b(this.$route.params.id),1),ce]),i("div",de,[(o(!0),s(f,null,k(t.solution,(e,l)=>(o(),s("div",{key:l,class:g(["p-5 mx-auto my-3 text-lg text-gray-900 bg-white border border-gray-300 rounded-md shadow-lg kalpurush",{"stop-events":t.solution[l].selected}])},[e.question.includes("drive.google.com")?(o(),s("img",{key:0,src:e.question,class:"object-contain w-full py-3",alt:""},null,8,ae)):(o(),s("div",{key:1,class:"mb-2 text-lg font-semibold text-gray-900",innerHTML:e.question},null,8,ue)),i("div",he,[i("span",ge,"Q No. "+b(l+1),1),e.subject?(o(),s("span",be,b(e.subject),1)):u("",!0)]),i("div",me,[e.a.includes("drive.google.com")?(o(),s("img",{key:0,src:e.a,onClick:h=>t.solution[l].selected=e.a,class:g(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500 bg-white ":" bg-white "}`]),alt:""},null,10,pe)):e.a?(o(),s("div",{key:1,innerHTML:e.a,onClick:h=>t.solution[l].selected=e.a,class:g(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`)},null,10,_e)):u("",!0),e.b.includes("drive.google.com")?(o(),s("img",{key:2,src:e.b,onClick:h=>t.solution[l].selected=e.b,class:g(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`]),alt:""},null,10,ye)):e.b?(o(),s("div",{key:3,innerHTML:e.b,onClick:h=>t.solution[l].selected=e.b,class:g(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`)},null,10,ve)):u("",!0),e.c.includes("drive.google.com")?(o(),s("img",{key:4,src:e.c,onClick:h=>t.solution[l].selected=e.c,class:g(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`]),alt:""},null,10,fe)):e.c?(o(),s("div",{key:5,innerHTML:e.c,onClick:h=>t.solution[l].selected=e.c,class:g(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`)},null,10,we)):u("",!0),e.d.includes("drive.google.com")?(o(),s("img",{key:6,src:e.d,onClick:h=>t.solution[l].selected=e.d,class:g(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`]),alt:""},null,10,xe)):e.d?(o(),s("div",{key:7,innerHTML:e.d,onClick:h=>t.solution[l].selected=e.d,class:g(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`)},null,10,ke)):u("",!0)])],2))),128)),i("div",Ce,[i("button",{onClick:r[2]||(r[2]=(...e)=>a.retakeResult&&a.retakeResult(...e)),class:"px-4 py-3 mx-auto font-semibold text-white rounded shadow outline-none hover:shadow-lg bg-gradient-to-t from-green-500 to-green-400"}," Submit ")])])])):u("",!0),t.questions.length>0?(o(),s("div",Te,[i("div",Me,[i("h1",Le," Exam - "+b(this.$route.params.id),1),Se]),t.viewDetails?(o(),s("div",Ge,[i("div",null,[i("div",Ue,[i("div",Ze,[i("div",Xe,[i("h3",qe," You Scored: "+b(t.score)+" ("+b((t.score*100/t.questions.length).toFixed(2))+"%) ",1),i("p",et," out of "+b(t.questions.length),1)])])])]),i("div",null,[i("div",tt,[i("div",null,[S(n,{data:t.status},null,8,["data"])]),i("div",ot,[i("p",st," Total: "+b(t.questions.length),1),i("p",rt," Correct: "+b(t.status.Correct),1),i("p",it," Incorrect: "+b(t.status.Wrong),1),i("p",nt," Not Answered: "+b(t.status.Not_Answered),1)])])]),(o(!0),s(f,null,k(t.questions,(e,l)=>(o(),s("div",{key:l,class:"p-5 mx-auto my-3 text-lg bg-white border border-gray-300 rounded-md shadow-lg kalpurush"},[e.question.includes("drive.google.com")?(o(),s("img",{key:0,src:e.question,class:"object-contain w-full py-3",alt:""},null,8,lt)):(o(),s("div",{key:1,class:"mb-2 text-lg font-semibold text-gray-900",innerHTML:e.question},null,8,ct)),i("div",dt,[i("span",at,"Q No. "+b(l+1),1),e.subject?(o(),s("span",ut,b(e.subject),1)):u("",!0)]),i("div",ht,[e.a.includes("drive.google.com")?(o(),s("img",{key:0,src:e.a,class:g(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.a==e.correct?"border-2 border-green-500 bg-white ":` bg-white border-2 border-gray-300 ${e.a==e.selected?"border-red-500":""}`}`]),alt:""},null,10,gt)):(o(),s("div",bt,[i("div",{innerHTML:e.a,"velse-if":"q.a",class:g(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded    ${e.a==e.correct?"border-2 border-green-500 bg-white ":` bg-white border-2 border-gray-300 ${e.a==e.selected?"border-red-500":""}`} `)},null,10,mt)])),e.b.includes("drive.google.com")?(o(),s("img",{key:2,src:e.b,class:g(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.b==e.selected?"border-red-500":""} ${e.b==e.correct?"border-2 border-green-500 bg-white ":` bg-white border-2 border-gray-300 ${e.b==e.selected?"border-red-500":""}`}`]),alt:""},null,10,pt)):(o(),s("div",_t,[e.b?(o(),s("div",{key:0,innerHTML:e.b,class:g(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded   ${e.b==e.correct?"border-2 border-green-500 bg-white ":` bg-white border-2 border-gray-300 ${e.b==e.selected?"border-red-500":""}`}`)},null,10,yt)):u("",!0)])),e.c.includes("drive.google.com")?(o(),s("img",{key:4,src:e.c,class:g(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.c==e.correct?"border-2 border-green-500 bg-white ":` bg-white border-2 border-gray-300 ${e.c==e.selected?"border-red-500":""}`}`]),alt:""},null,10,vt)):e.c?(o(),s("div",{key:5,innerHTML:e.c,class:g(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.c==e.correct?"border-2 border-green-500 bg-white ":` bg-white border-2 border-gray-300 ${e.c==e.selected?"border-red-500":""}`}`)},null,10,ft)):u("",!0),e.d.includes("drive.google.com")?(o(),s("img",{key:6,src:e.d,class:g(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.d==e.correct?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`]),alt:""},null,10,wt)):e.d?(o(),s("div",{key:7,innerHTML:e.d,class:g(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.d==e.correct?"border-2 border-green-500 bg-white ":` bg-white border-2 border-gray-300 ${e.d==e.selected?"border-red-500":""}`}`)},null,10,xt)):u("",!0)]),e.explain?(o(),s("h2",kt,"Explain:")):u("",!0),e.explain?(o(),s("div",{key:3,class:"p-3 my-3 bg-white border border-green-500 rounded",innerHTML:e.explain},null,8,Ct)):u("",!0),i("div",{class:g(["flex gap-2 my-2 text-xl font-semibold",{"text-red-500":e.correct!=e.selected,"text-green-500":e.correct==e.selected}])},[i("span",Tt,b(e.correct==e.selected?"done":"close"),1),e.selected?(o(),s(f,{key:0},[w(b(e.correct==e.selected?"Correct":"Wrong"),1)],64)):u("",!0),w(" "+b(e.selected?"":"Not answered"),1)],2)]))),128)),t.viewDetails?(o(),s("div",Mt)):u("",!0),t.viewDetails?u("",!0):(o(),s("div",Lt,[i("button",{onClick:r[5]||(r[5]=(...e)=>a.submitAns&&a.submitAns(...e)),disabled:t.eload,class:"px-4 py-3 mx-auto font-semibold text-white rounded shadow outline-none hover:shadow-lg bg-gradient-to-t from-green-500 to-green-400"},b(t.eload?"Loading...":"Submit"),9,St)]))])):(o(),s("div",je,[(o(!0),s(f,null,k(t.questions,(e,l)=>(o(),s("div",{key:l,class:g(["p-5 mx-auto my-3 text-lg bg-white border border-gray-300 rounded-md shadow-lg kalpurush",{"stop-events":t.questions[l].selected}])},[e.question.includes("drive.google.com")?(o(),s("img",{key:0,src:e.question,class:"object-contain w-full py-3",alt:""},null,8,He)):(o(),s("div",{key:1,class:"mb-2 text-lg font-semibold text-gray-900",innerHTML:e.question},null,8,De)),i("div",Ie,[i("span",Ne,"Q No. "+b(l+1),1),e.subject?(o(),s("span",Ae,b(e.subject),1)):u("",!0)]),i("div",$e,[e.a.includes("drive.google.com")?(o(),s("img",{key:0,src:e.a,onClick:h=>t.questions[l].selected=e.a,class:g(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`]),alt:""},null,10,Re)):(o(),s("div",Be,[i("div",{innerHTML:e.a,"velse-if":"q.a",onClick:h=>t.questions[l].selected=e.a,class:g(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`)},null,10,Qe)])),e.b.includes("drive.google.com")?(o(),s("img",{key:2,src:e.b,onClick:h=>t.questions[l].selected=e.b,class:g(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`]),alt:""},null,10,ze)):(o(),s("div",Ee,[e.b?(o(),s("div",{key:0,innerHTML:e.b,onClick:h=>t.questions[l].selected=e.b,class:g(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`)},null,10,Oe)):u("",!0)])),e.c.includes("drive.google.com")?(o(),s("img",{key:4,src:e.c,onClick:h=>t.questions[l].selected=e.c,class:g(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`]),alt:""},null,10,Ye)):e.c?(o(),s("div",{key:5,innerHTML:e.c,onClick:h=>t.questions[l].selected=e.c,class:g(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`)},null,10,Fe)):u("",!0),e.d.includes("drive.google.com")?(o(),s("img",{key:6,src:e.d,onClick:h=>t.questions[l].selected=e.d,class:g(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`]),alt:""},null,10,Je)):e.d?(o(),s("div",{key:7,innerHTML:e.d,onClick:h=>t.questions[l].selected=e.d,class:g(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`)},null,10,Ke)):u("",!0)])],2))),128)),t.viewDetails?(o(),s("div",Ve,[i("button",{onClick:r[3]||(r[3]=(...e)=>a.gotoLeaderboard&&a.gotoLeaderboard(...e)),class:"btn btn-large btn-primary"}," Leaderboard ")])):u("",!0),t.viewDetails?u("",!0):(o(),s("div",We,[i("button",{onClick:r[4]||(r[4]=(...e)=>a.submitAns&&a.submitAns(...e)),disabled:t.eload,class:"px-4 py-3 mx-auto font-semibold text-white rounded shadow outline-none hover:shadow-lg bg-gradient-to-t from-green-500 to-green-400"},b(t.eload?"Loading...":"Submit"),9,Pe)]))]))])):u("",!0),t.show?(o(),s("div",jt,[i("div",Ht,b(t.minute)+" : "+b(t.second),1)])):u("",!0)],32))}var zt=Y(F,[["render",At],["__scopeId","data-v-feff0638"]]);export{zt as default};
