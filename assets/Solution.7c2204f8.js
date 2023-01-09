import{e as x}from"./api.e649cbe7.js";import{_ as v}from"./plugin-vue_export-helper.21dcd24c.js";import{j as o,k as s,l,m as c,F as m,x as f,y as h,L as b}from"./index.a1e79c04.js";const w={data(){return{solution:[],loading:!1,unknown:!1,download:""}},methods:{downloadQuestion(){window.open(this.download,"_blank")},endalert(){this.$swal({icon:"warning",title:"Will be available after the time ends"})},getQuestionLink(){fetch(`${x}?type=examlist&id=${this.$route.params.id}`).then(i=>i.json()).then(i=>{this.url="https://script.google.com/macros/s/AKfycbzOBSdG0T8p7OIhwx8FSVELW8OwReJ-hS-HBS09FT3abMJR6MEeUyGFjItGBoVJYLDCkQ/exec?sheet="+i.exam.exam.substr(39,44),i.exam.pdfsolve&&(this.download=`https://drive.google.com/uc?id=${i.exam.pdfsolve.substr(32,33)}&export=download`);let g=JSON.parse(localStorage.getItem("mediexam22")).roll;fetch(this.url+"&type=check&phone="+g).then(a=>a.json()).then(a=>{a.message=="exists"||new Date(i.exam.end_time).getTime()<Date.now()?(fetch(this.url+"&type=question").then(r=>r.json()).then(r=>{r=r.map(t=>(t.question.includes("https://drive.google.com/file/d/")&&(t.question=t.question.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80).replace("/vie","")),t.a.includes("https://drive.google.com/file/d/")&&(t.a=t.a.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80).replace("/vie","")),t.b.includes("https://drive.google.com/file/d/")&&(t.b=t.b.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80).replace("/vie","")),t.c.includes("https://drive.google.com/file/d/")&&(t.c=t.c.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80).replace("/vie","")),t.d.includes("https://drive.google.com/file/")&&(t.d=t.d.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80).replace("/vie","")),t.correct.includes("https://drive.google.com/file")&&(t.correct=t.correct.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80).replace("/vie","")),t.explain.includes("https://drive.google.com/file")&&(t.explain=t.explain.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80).replace("/vie","")),t)),fetch(this.url).then(t=>t.json()).then(t=>{let u=r.map((e,d)=>(e.total_ans=0,e.t_0=0,e.t_1=0,e.t_2=0,e.t_3=0,t.forEach(n=>{JSON.parse(n.submission).forEach(_=>{d==_.id&&(e[`t_${_.s}`]++,e.total_ans++)})}),e.per_a=e.t_0/e.total_ans*100||0,e.per_b=e.t_1/e.total_ans*100||0,e.per_c=e.t_2/e.total_ans*100||0,e.per_d=e.t_3/e.total_ans*100||0,e));this.solution=u})}),this.loading=!1):(this.$router.push("/"),this.unknown=!0)})})}},created(){this.getQuestionLink()}},y={key:0},k={key:0,class:"pb-10"},j={class:"py-4 text-center"},L={class:"text-2xl font-bold text-gray-800 poppins"},$={class:"mx-2 md:w-2/3 md:mx-auto print:text-black",ref:"content"},S=["src"],T=["innerHTML"],M={class:"flex gap-3 my-3"},B={class:"btn btn-sm"},E={key:0,class:"btn btn-sm"},H={class:"mt-3 space-y-2"},F=["src"],J=["innerHTML"],N={class:"text-sm print:hidden"},O={class:"print:hidden"},Q={key:2,class:"my-2 poppins"},C=["src"],D=["innerHTML"],I={key:1},R=l("h2",{class:"mt-10 text-2xl text-center"}," You must participate in the exam or you will not be able to view this solution untill time ends. ",-1),V=[R],z={key:1,class:"flex items-center justify-center w-full h-screen"},G=l("div",{class:"flex items-center justify-center -mt-24 space-x-1 text-sm text-gray-700"},[l("svg",{fill:"none",class:"w-10 h-10 animate-spin",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},[l("path",{"clip-rule":"evenodd",d:"M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z",fill:"currentColor","fill-rule":"evenodd"})]),l("div",{class:"text-lg"},"Loading ...")],-1),A=[G];function W(i,g,a,r,t,u){return t.solution.length>0?(o(),s("div",y,[t.unknown?(o(),s("div",I,V)):(o(),s("div",k,[l("div",j,[l("h1",L," Solution for Exam - "+c(this.$route.params.id),1)]),l("div",$,[(o(!0),s(m,null,f(t.solution,(e,d)=>(o(),s("div",{key:d,class:"p-5 mx-auto my-3 text-lg bg-white border border-gray-300 rounded-md shadow-lg print:border-none print:shadow-none print:p-1 kalpurush"},[e.question.includes("drive.google.com")?(o(),s("img",{key:0,src:e.question,class:"object-contain w-full py-3",alt:""},null,8,S)):(o(),s("div",{key:1,class:"inline-flex print:text-black",innerHTML:`<span class='mr-2'>${d+1})</span  >`+e.question},null,8,T)),l("div",M,[l("span",B,"Q No. "+c(d+1),1),e.subject?(o(),s("span",E,c(e.subject),1)):h("",!0)]),l("div",H,[(o(),s(m,null,f(["a","b","c","d"],(n,p)=>l("div",{key:p,class:b(["flex flex-col p-3 rounded shadow",{"border-2 border-green-500 print:border-gray-900":e[n]==e.correct}])},[e[n].includes("drive.google.com")?(o(),s("img",{key:0,src:e[n],class:"object-contain w-full py-3",alt:""},null,8,F)):(o(),s("div",{key:1,innerHTML:e[n]},null,8,J)),l("div",N,"Response: "+c(e[`t_ ${p}`])+" ("+c(parseInt(e[`per_${n}`]))+"%) ",1)],2)),64)),l("p",O,"Total Response: "+c(e.total_ans),1)]),e.explain?(o(),s("h2",Q,"Explain:")):h("",!0),e.explain&&e.explain.includes("drive.google.com")?(o(),s("img",{key:3,src:e.question,class:"object-contain w-full py-3",alt:""},null,8,C)):e.explain?(o(),s("div",{key:4,class:"p-3 my-3 bg-white border border-green-500 rounded print:text-black",innerHTML:e.explain},null,8,D)):h("",!0)]))),128))],512)]))])):(o(),s("div",z,A))}var P=v(w,[["render",W]]);export{P as default};
