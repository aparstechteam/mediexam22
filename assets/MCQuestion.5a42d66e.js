var j=Object.defineProperty,H=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var C=(c,r,l)=>r in c?j(c,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):c[r]=l,_=(c,r)=>{for(var l in r||(r={}))D.call(r,l)&&C(c,l,r[l]);if(k)for(var l of k(r))N.call(r,l)&&C(c,l,r[l]);return c},y=(c,r)=>H(c,S(r));import{N as A,H as I,v as T,j as o,k as s,l as i,y as u,E as f,m as b,G as R,C as Q,B as L,F as v,x,J as B,K as O,L as h}from"./index.8975ee2e.js";import{e as J}from"./api.e649cbe7.js";import{_ as E}from"./plugin-vue_export-helper.21dcd24c.js";const V={data(){return{timing:null,solutionv:!1,retake:!1,questions:[],solution:[],result:[],unknown:!1,loading:!0,eload:!1,minute:0,second:0,end:Date.now()+12e6,show:!1,url:"",solutionpdf:"",starttime:Date.now(),ended:null,inttime:109090,immediate:!0,viewDetails:!1,score:null,status:{Correct:0,Wrong:0,Not_Answered:0}}},beforeRouteEnter(c,r,l){var t;if((t=JSON.parse(localStorage.getItem("mediexam22")))==null?void 0:t.roll){l();return}l({path:"/login"})},methods:{endalert(){this.$swal({icon:"warning",title:"Will be available after the time ends"})},getQuestionLink(){this.loading=!0;let c=null;fetch(J+"?type=examlist&id="+this.$route.params.id).then(r=>r.json()).then(r=>{if(new Date(r.exam.start_time).getTime()>Date.now()){this.$router.push("/");return}this.url="https://script.google.com/macros/s/AKfycbz9OmMxzknSGJ96kpT8vuatKAxa2BLJ6qnC-fsCufUkeiSymRniQAs4OFTiHY8lQ3zZ1Q/exec?sheet="+r.exam.exam.substr(39,44),this.ended=new Date(r.exam.end_time).getTime(),this.timelimit=r.exam.timelimit*6e4,this.immediate=!r.exam.special,this.qty=r.exam.question_quantity,this.e_category=r.exam.exam_category,this.solutionpdf=r.exam.solve_sheet,c=r.exam.time;const l={English:15,Biology:30,Chemistry:25,Physics:20,GK:10};let p=JSON.parse(localStorage.getItem("mediexam22")).roll;fetch(this.url+"&type=check&phone="+p).then(t=>t.json()).then(t=>{t.message=="exists"||this.ended<Date.now()?(this.result=t.result?t.result:["","Time's up"],fetch(this.url+"&type=question").then(a=>a.json()).then(a=>{this.solution=a.map((d,e)=>(d.question.includes("https://drive.google.com/file/d/")&&(d.question=d.question.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80)),d.a.includes("https://drive.google.com/file/d/")&&(d.a=d.a.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80)),d.b.includes("https://drive.google.com/file/d/")&&(d.b=d.b.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80)),d.c.includes("https://drive.google.com/file/d/")&&(d.c=d.c.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80)),d.d.includes("https://drive.google.com/file/")&&(d.d=d.d.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80)),d.correct.includes("https://drive.google.com/file")&&(d.correct=d.correct.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80)),y(_({},d),{selected:"",id:e})));let g=c;if(this.inttime=g*6e4,this.end=g*6e4,this.e_category=="Daily")this.solution=this.questions.sort(()=>Math.random()-.5).slice(0,Number(this.qty));else{let d=[];for(let e in l){let n=this.questions.filter(m=>m.subject==e);n=n.sort(()=>Math.random()-.5).slice(0,l[e]),d=[...d,...n]}this.solution=d}}),this.unknown=!1,this.loading=!1):(this.unknown=!0,fetch(this.url+"&type=question").then(a=>a.json()).then(a=>{let g=localStorage.getItem(`attempt${this.$route.params.id}`);if(g?localStorage.setItem(`attempt${this.$route.params.id}`,Number(g)+1):localStorage.setItem(`attempt${this.$route.params.id}`,1),this.questions=a.map((e,n)=>(e.question.includes("https://drive.google.com/file/d/")&&(e.question=e.question.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80)),e.a.includes("https://drive.google.com/file/d/")&&(e.a=e.a.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80)),e.b.includes("https://drive.google.com/file/d/")&&(e.b=e.b.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80)),e.c.includes("https://drive.google.com/file/d/")&&(e.c=e.c.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80)),e.d.includes("https://drive.google.com/file/")&&(e.d=e.d.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80)),e.correct.includes("https://drive.google.com/file")&&(e.correct=e.correct.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80)),y(_({},e),{selected:"",id:n}))),this.e_category=="Daily")this.questions=this.questions.sort(()=>Math.random()-.5).slice(0,Number(this.qty));else{let e=[];for(let n in l){let m=this.questions.filter(M=>M.subject==n);m=m.sort(()=>Math.random()-.5).slice(0,l[n]),e=[...e,...m]}this.questions=e}let d=c;this.inttime=d*6e4,this.end=d*6e4,this.starttime=Date.now(),this.loading=!1,this.showRemaining(this.end+Date.now()),this.autoSubmit()}))})})},startRetake(){this.retake=!0,this.showRemaining(Date.now()+this.end)},retakeResult(){let c=this.solution.reduce((r,l)=>(l.correct==l.selected?(r+=1,this.status.Correct+=1):l.selected?(r-=.25,this.status.Wrong+=1):this.status.Not_Answered+=1,r),0);this.$swal({icon:"success",title:"Success",text:`You Scored ${c}`}).then(()=>{this.retake=!1,this.show=!1,this.questions=this.solution,this.viewDetails=!this.viewDetails,this.inttime=this.solution.length,this.score=c,this.solution=this.solution.map(r=>y(_({},r),{selected:""})),window.scroll(0,0)})},millisecToTime(c){var r=Math.floor(c/6e4),l=(c%6e4/1e3).toFixed(0);return r+":"+(l<10?"0":"")+l},submitAns(){let c=this.millisecToTime(Date.now()-this.starttime);this.eload=!0;let r=this.questions.reduce((g,d)=>(d.correct==d.selected?(g+=1,this.status.Correct+=1):d.selected?(g-=.25,this.status.Wrong+=1):this.status.Not_Answered+=1,g),0);clearTimeout(this.timing);let{roll:l,name:p,college:t}=JSON.parse(localStorage.getItem("mediexam22")),a=this.questions.map(g=>{let e=[g.a,g.b,g.c,g.d].indexOf(g.selected);return{id:g.id,s:e}}).filter(g=>g.s>-1);fetch(this.url,{method:"POST",mode:"no-cors",cache:"no-cache",redirect:"follow",body:JSON.stringify({roll:l,name:p,attempt:localStorage.getItem(`attempt${this.$route.params.id}`)||1,score:r,college:t,duration:c,submission:JSON.stringify(a)})}).then(()=>{clearTimeout(this.timing),r>=this.questions.length*.4,this.$swal({icon:"success",title:"Success",text:`You Scored ${r}`}).then(()=>{localStorage.removeItem(`attempt${this.$route.params.id}`),this.show=!1,this.viewDetails=!0,this.score=r,window.scroll(0,0)})})},gotoLeaderboard(){this.$router.replace(`/ranking/${this.$route.params.id}`)},autoSubmit(){this.timing=setTimeout(()=>{this.show=!1,this.submitAns()},this.inttime)},showRemaining(c){this.show=!0;const r=setInterval(()=>{const l=c-Date.now();if(l<0){clearInterval(r);return}const p=Math.floor(l/this._days),t=Math.floor(l%this._days/this._hours),a=Math.floor(l%this._hours/this._minutes),g=Math.floor(l%this._minutes/this._seconds);this.second=g<10?"0"+g:g,this.minute=a<10?"0"+a:a,this.hours=t<10?"0"+t:t,this.days=p<10?"0"+p:p},1e3)}},created(){this.getQuestionLink(),window.scrollTo(0,0)},computed:y(_({},A(["user"])),{_seconds:()=>1e3,_minutes(){return this._seconds*60},_hours(){return this._minutes*60},_days(){return this._hours*24},currentTime:()=>I.state.currentTime})},w=c=>(B("data-v-3a611f12"),c=c(),O(),c),Y={key:0,class:"py-5 mx-auto mt-5 rounded bg-gray-50 md:w-2/3"},W={class:"py-3 text-center"},$={key:0,class:"my-4 text-2xl font-bold text-gray-900 ma-auto"},z={key:0},F={key:1,class:"text-center text-gray-900"},K={class:"py-5"},G=f(" View Solution "),P=["textContent"],U={key:0,class:"my-5 text-center"},Z={key:1,class:"text-center"},X=["textContent"],q={key:2,class:"text-center"},ee=w(()=>i("button",{class:"btn loading btn-circle"},null,-1)),te=[ee],oe={key:3,class:"my-4 font-semibold text-center text-gray-900"},se={key:1,class:"pb-10"},re={class:"py-4 text-center"},ie={class:"text-2xl font-bold text-gray-900"},ne=w(()=>i("p",{class:"text-center"}," \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09C7\u09B0 \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0\u09C7 \u09A4\u09C1\u09AE\u09BF \u0995\u09C7\u09AC\u09B2 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u0995\u09B0\u09BE\u09B0 \u09B8\u09C1\u09AF\u09CB\u0997 \u09AA\u09BE\u09AC\u09C7\u0964 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u09B8\u09BF\u09B2\u09C7\u0995\u09CD\u099F \u0995\u09B0\u09BE\u09B0 \u09AA\u09B0 \u09A4\u09BE \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09BE\u09B0 \u0995\u09CB\u09A8\u09CB \u09B8\u09C1\u09AF\u09CB\u0997 \u09A8\u09BE\u0987\u0964 ",-1)),le={class:"mx-2 text-gray-900 md:w-2/3 md:mx-auto"},de=["src"],ce=["innerHTML"],ae={class:"flex gap-3"},ue={class:"btn btn-sm"},he={key:0,class:"btn btn-sm"},ge={class:"mt-2"},be=["src","onClick"],me=["innerHTML","onClick"],pe=["src","onClick"],_e=["innerHTML","onClick"],ye=["src","onClick"],ve=["innerHTML","onClick"],fe=["src","onClick"],we=["innerHTML","onClick"],xe={class:"mb-10 text-center"},ke={key:2,class:"pb-10"},Ce={class:"py-4 text-center"},Te={class:"text-2xl font-bold text-gray-900"},Le=w(()=>i("p",{class:"text-center"}," \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09C7\u09B0 \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0\u09C7 \u09A4\u09C1\u09AE\u09BF \u0995\u09C7\u09AC\u09B2 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u0995\u09B0\u09BE\u09B0 \u09B8\u09C1\u09AF\u09CB\u0997 \u09AA\u09BE\u09AC\u09C7\u0964 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u09B8\u09BF\u09B2\u09C7\u0995\u09CD\u099F \u0995\u09B0\u09BE\u09B0 \u09AA\u09B0 \u09A4\u09BE \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09BE\u09B0 \u0995\u09CB\u09A8\u09CB \u09B8\u09C1\u09AF\u09CB\u0997 \u09A8\u09BE\u0987\u0964 ",-1)),Me={key:0,class:"mx-2 md:w-2/3 md:mx-auto"},je=["src"],He=["innerHTML"],Se={class:"flex gap-3"},De={class:"btn btn-sm"},Ne={key:0,class:"btn btn-sm"},Ae={class:"mt-2"},Ie=["src","onClick"],Re={key:1},Qe=["innerHTML","onClick"],Be=["src","onClick"],Oe={key:3},Je=["innerHTML","onClick"],Ee=["src","onClick"],Ve=["innerHTML","onClick"],Ye=["src","onClick"],We=["innerHTML","onClick"],$e={key:0,class:"my-2 text-center"},ze={key:1,class:"mb-10 text-center"},Fe=["disabled"],Ke={key:1,class:"mx-2 md:w-2/3 md:mx-auto"},Ge={class:"flex flex-wrap justify-center"},Pe={class:"w-full p-3 md:w-1/2"},Ue={class:"text-center"},Ze={class:"text-lg font-semibold text-gray-900"},Xe={class:"text-gray-600"},qe={class:"flex flex-wrap items-center justify-center gap-3 p-3 rounded bg-gray-50"},et={class:"text-gray-900"},tt={class:"text-lg font-bold"},ot={class:"text-lg font-bold"},st={class:"text-lg font-bold"},rt={class:"text-lg font-bold"},it=["src"],nt=["innerHTML"],lt={class:"flex gap-3"},dt={class:"btn btn-sm"},ct={key:0,class:"btn btn-sm"},at={class:"mt-2"},ut=["src"],ht={key:1},gt=["innerHTML"],bt=["src"],mt={key:3},pt=["innerHTML"],_t=["src"],yt=["innerHTML"],vt=["src"],ft=["innerHTML"],wt={key:2,class:"my-2 poppins"},xt=["innerHTML"],kt={class:"material-icons"},Ct={key:0,class:"my-2 text-center"},Tt={key:1,class:"mb-10 text-center"},Lt=["disabled"],Mt={key:3,class:"white--text fixed__timer"},jt={class:"text-white bg-blue-500 border border-white shadow"},Ht={key:1,class:"flex items-center justify-center w-full h-screen"},St=w(()=>i("div",{class:"flex items-center justify-center -mt-24 space-x-1 text-sm text-gray-700"},[i("svg",{fill:"none",class:"w-10 h-10 animate-spin",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},[i("path",{"clip-rule":"evenodd",d:"M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z",fill:"currentColor","fill-rule":"evenodd"})]),i("div",{class:"text-lg"},"Loading ...")],-1)),Dt=[St];function Nt(c,r,l,p,t,a){const g=T("router-link"),d=T("pie-chart");return t.loading?(o(),s("div",Ht,Dt)):(o(),s("div",{key:0,onContextmenu:e=>!1},[!t.unknown&&!t.loading&&!t.retake?(o(),s("div",Y,[i("div",W,[t.result[1]?(o(),s("h2",$,[t.result[1]!=="Time's up"?(o(),s("span",z,"You Scored:")):u("",!0),f(" "+b(t.result[1]),1)])):u("",!0),t.result[1]=="Time's up"?(o(),s("p",F,"But you can still give the exam. Click 'Test yourself again'.")):u("",!0),i("div",K,[this.ended<a.currentTime||t.immediate?(o(),R(g,{key:0,to:`/solution/${this.$route.params.id}`,class:"my-2 btn btn-primary"},{default:Q(()=>[G]),_:1},8,["to"])):(o(),s("button",{key:1,class:"btn btn-primary",onClick:r[0]||(r[0]=(...e)=>a.endalert&&a.endalert(...e)),textContent:b("View Solution")},null,8,P))])]),!t.retake&&t.solution.length>0?(o(),s("div",U,[L(g,{to:`/ranking/${this.$route.params.id}`,class:"mx-auto my-2 btn btn-primary",text:"View Your Rank"},null,8,["to"])])):u("",!0),!t.retake&&t.solution.length>0?(o(),s("div",Z,[i("button",{class:"mx-auto btn btn-primary",onClick:r[1]||(r[1]=(...e)=>a.startRetake&&a.startRetake(...e)),textContent:b("Test Yourself Again")},null,8,X)])):(o(),s("div",q,te)),!t.retake&&t.solution.length>0?(o(),s("div",oe," Retake exam score will not be recorded ")):u("",!0)])):u("",!0),t.retake?(o(),s("div",se,[i("div",re,[i("h1",ie," Retake Exam - "+b(this.$route.params.id),1),ne]),i("div",le,[(o(!0),s(v,null,x(t.solution,(e,n)=>(o(),s("div",{key:n,class:h(["p-5 mx-auto my-3 text-lg text-gray-900 bg-white border border-gray-300 rounded-md shadow-lg kalpurush",{"stop-events":t.solution[n].selected}])},[e.question.includes("drive.google.com")?(o(),s("img",{key:0,src:e.question,class:"object-contain w-full py-3",alt:""},null,8,de)):(o(),s("div",{key:1,class:"mb-2 text-lg font-semibold text-gray-900",innerHTML:e.question},null,8,ce)),i("div",ae,[i("span",ue,"Q No. "+b(n+1),1),e.subject?(o(),s("span",he,b(e.subject),1)):u("",!0)]),i("div",ge,[e.a.includes("drive.google.com")?(o(),s("img",{key:0,src:e.a,onClick:m=>t.solution[n].selected=e.a,class:h(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500 bg-white ":" bg-white "}`]),alt:""},null,10,be)):e.a?(o(),s("div",{key:1,innerHTML:e.a,onClick:m=>t.solution[n].selected=e.a,class:h(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`)},null,10,me)):u("",!0),e.b.includes("drive.google.com")?(o(),s("img",{key:2,src:e.b,onClick:m=>t.solution[n].selected=e.b,class:h(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`]),alt:""},null,10,pe)):e.b?(o(),s("div",{key:3,innerHTML:e.b,onClick:m=>t.solution[n].selected=e.b,class:h(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`)},null,10,_e)):u("",!0),e.c.includes("drive.google.com")?(o(),s("img",{key:4,src:e.c,onClick:m=>t.solution[n].selected=e.c,class:h(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`]),alt:""},null,10,ye)):e.c?(o(),s("div",{key:5,innerHTML:e.c,onClick:m=>t.solution[n].selected=e.c,class:h(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`)},null,10,ve)):u("",!0),e.d.includes("drive.google.com")?(o(),s("img",{key:6,src:e.d,onClick:m=>t.solution[n].selected=e.d,class:h(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`]),alt:""},null,10,fe)):e.d?(o(),s("div",{key:7,innerHTML:e.d,onClick:m=>t.solution[n].selected=e.d,class:h(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`)},null,10,we)):u("",!0)])],2))),128)),i("div",xe,[i("button",{onClick:r[2]||(r[2]=(...e)=>a.retakeResult&&a.retakeResult(...e)),class:"px-4 py-3 mx-auto font-semibold text-white rounded shadow outline-none hover:shadow-lg bg-gradient-to-t from-green-500 to-green-400"}," Submit ")])])])):u("",!0),t.questions.length>0?(o(),s("div",ke,[i("div",Ce,[i("h1",Te," Exam - "+b(this.$route.params.id),1),Le]),t.viewDetails?(o(),s("div",Ke,[i("div",null,[i("div",Ge,[i("div",Pe,[i("div",Ue,[i("h3",Ze," You Scored: "+b(t.score)+" ("+b((t.score*100/t.questions.length).toFixed(2))+"%) ",1),i("p",Xe," out of "+b(t.questions.length),1)])])])]),i("div",null,[i("div",qe,[i("div",null,[L(d,{data:t.status},null,8,["data"])]),i("div",et,[i("p",tt," Total: "+b(t.questions.length),1),i("p",ot," Correct: "+b(t.status.Correct),1),i("p",st," Incorrect: "+b(t.status.Wrong),1),i("p",rt," Not Answered: "+b(t.status.Not_Answered),1)])])]),(o(!0),s(v,null,x(t.questions,(e,n)=>(o(),s("div",{key:n,class:"p-5 mx-auto my-3 text-lg bg-white border border-gray-300 rounded-md shadow-lg kalpurush"},[e.question.includes("drive.google.com")?(o(),s("img",{key:0,src:e.question,class:"object-contain w-full py-3",alt:""},null,8,it)):(o(),s("div",{key:1,class:"mb-2 text-lg font-semibold text-gray-900",innerHTML:e.question},null,8,nt)),i("div",lt,[i("span",dt,"Q No. "+b(n+1),1),e.subject?(o(),s("span",ct,b(e.subject),1)):u("",!0)]),i("div",at,[e.a.includes("drive.google.com")?(o(),s("img",{key:0,src:e.a,class:h(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.a==e.correct?"border-2 border-green-500 bg-white ":` bg-white border-2 border-gray-300 ${e.a==e.selected?"border-red-500":""}`}`]),alt:""},null,10,ut)):(o(),s("div",ht,[i("div",{innerHTML:e.a,"velse-if":"q.a",class:h(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.a==e.selected?"border-red-500":""}  ${e.a==e.correct?"border-2 border-green-500 bg-white ":` bg-white border-2 border-gray-300 ${e.a==e.selected?"border-red-500":""}`} `)},null,10,gt)])),e.b.includes("drive.google.com")?(o(),s("img",{key:2,src:e.b,class:h(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.b==e.selected?"border-red-500":""} ${e.b==e.correct?"border-2 border-green-500 bg-white ":` bg-white border-2 border-gray-300 ${e.b==e.selected?"border-red-500":""}`}`]),alt:""},null,10,bt)):(o(),s("div",mt,[e.b?(o(),s("div",{key:0,innerHTML:e.b,class:h(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded   ${e.b==e.correct?"border-2 border-green-500 bg-white ":` bg-white border-2 border-gray-300 ${e.b==e.selected?"border-red-500":""}`}`)},null,10,pt)):u("",!0)])),e.c.includes("drive.google.com")?(o(),s("img",{key:4,src:e.c,class:h(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.c==e.correct?"border-2 border-green-500 bg-white ":` bg-white border-2 border-gray-300 ${e.c==e.selected?"border-red-500":""}`}`]),alt:""},null,10,_t)):e.c?(o(),s("div",{key:5,innerHTML:e.c,class:h(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.c==e.correct?"border-2 border-green-500 bg-white ":` bg-white border-2 border-gray-300 ${e.c==e.selected?"border-red-500":""}`}`)},null,10,yt)):u("",!0),e.d.includes("drive.google.com")?(o(),s("img",{key:6,src:e.d,class:h(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.d==e.correct?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`]),alt:""},null,10,vt)):e.d?(o(),s("div",{key:7,innerHTML:e.d,class:h(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.d==e.correct?"border-2 border-green-500 bg-white ":` bg-white border-2 border-gray-300 ${e.d==e.selected?"border-red-500":""}`}`)},null,10,ft)):u("",!0)]),e.explain?(o(),s("h2",wt,"Explain:")):u("",!0),e.explain?(o(),s("div",{key:3,class:"p-3 my-3 bg-white border border-green-500 rounded",innerHTML:e.explain},null,8,xt)):u("",!0),i("div",{class:h(["flex gap-2 my-2 text-xl font-semibold",{"text-red-500":e.correct!=e.selected,"text-green-500":e.correct==e.selected}])},[i("span",kt,b(e.correct==e.selected?"done":"close"),1),e.selected?(o(),s(v,{key:0},[f(b(e.correct==e.selected?"Correct":"Wrong"),1)],64)):u("",!0),f(" "+b(e.selected?"":"Not answered"),1)],2)]))),128)),t.viewDetails?(o(),s("div",Ct,[i("button",{onClick:r[5]||(r[5]=(...e)=>a.gotoLeaderboard&&a.gotoLeaderboard(...e)),class:"btn btn-large btn-primary"}," Leaderboard ")])):u("",!0),t.viewDetails?u("",!0):(o(),s("div",Tt,[i("button",{onClick:r[6]||(r[6]=(...e)=>a.submitAns&&a.submitAns(...e)),disabled:t.eload,class:"px-4 py-3 mx-auto font-semibold text-white rounded shadow outline-none hover:shadow-lg bg-gradient-to-t from-green-500 to-green-400"},b(t.eload?"Loading...":"Submit"),9,Lt)]))])):(o(),s("div",Me,[(o(!0),s(v,null,x(t.questions,(e,n)=>(o(),s("div",{key:n,class:h(["p-5 mx-auto my-3 text-lg bg-white border border-gray-300 rounded-md shadow-lg kalpurush",{"stop-events":t.questions[n].selected}])},[e.question.includes("drive.google.com")?(o(),s("img",{key:0,src:e.question,class:"object-contain w-full py-3",alt:""},null,8,je)):(o(),s("div",{key:1,class:"mb-2 text-lg font-semibold text-gray-900",innerHTML:e.question},null,8,He)),i("div",Se,[i("span",De,"Q No. "+b(n+1),1),e.subject?(o(),s("span",Ne,b(e.subject),1)):u("",!0)]),i("div",Ae,[e.a.includes("drive.google.com")?(o(),s("img",{key:0,src:e.a,onClick:m=>t.questions[n].selected=e.a,class:h(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`]),alt:""},null,10,Ie)):(o(),s("div",Re,[i("div",{innerHTML:e.a,"velse-if":"q.a",onClick:m=>t.questions[n].selected=e.a,class:h(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`)},null,10,Qe)])),e.b.includes("drive.google.com")?(o(),s("img",{key:2,src:e.b,onClick:m=>t.questions[n].selected=e.b,class:h(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`]),alt:""},null,10,Be)):(o(),s("div",Oe,[e.b?(o(),s("div",{key:0,innerHTML:e.b,onClick:m=>t.questions[n].selected=e.b,class:h(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`)},null,10,Je)):u("",!0)])),e.c.includes("drive.google.com")?(o(),s("img",{key:4,src:e.c,onClick:m=>t.questions[n].selected=e.c,class:h(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`]),alt:""},null,10,Ee)):e.c?(o(),s("div",{key:5,innerHTML:e.c,onClick:m=>t.questions[n].selected=e.c,class:h(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`)},null,10,Ve)):u("",!0),e.d.includes("drive.google.com")?(o(),s("img",{key:6,src:e.d,onClick:m=>t.questions[n].selected=e.d,class:h(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`]),alt:""},null,10,Ye)):e.d?(o(),s("div",{key:7,innerHTML:e.d,onClick:m=>t.questions[n].selected=e.d,class:h(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`)},null,10,We)):u("",!0)])],2))),128)),t.viewDetails?(o(),s("div",$e,[i("button",{onClick:r[3]||(r[3]=(...e)=>a.gotoLeaderboard&&a.gotoLeaderboard(...e)),class:"btn btn-large btn-primary"}," Leaderboard ")])):u("",!0),t.viewDetails?u("",!0):(o(),s("div",ze,[i("button",{onClick:r[4]||(r[4]=(...e)=>a.submitAns&&a.submitAns(...e)),disabled:t.eload,class:"px-4 py-3 mx-auto font-semibold text-white rounded shadow outline-none hover:shadow-lg bg-gradient-to-t from-green-500 to-green-400"},b(t.eload?"Loading...":"Submit"),9,Fe)]))]))])):u("",!0),t.show?(o(),s("div",Mt,[i("div",jt,b(t.minute)+" : "+b(t.second),1)])):u("",!0)],32))}var Bt=E(V,[["render",Nt],["__scopeId","data-v-3a611f12"]]);export{Bt as default};
