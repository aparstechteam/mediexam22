var g=Object.defineProperty,f=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var h=(e,t,s)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,u=(e,t)=>{for(var s in t||(t={}))b.call(t,s)&&h(e,s,t[s]);if(m)for(var s of m(t))y.call(t,s)&&h(e,s,t[s]);return e},_=(e,t)=>f(e,x(t));import{_ as v}from"./lodash.141f8683.js";import{A as w,G as R,m as d,q as c,s as r,B as i,H as L,I as S,F as k,v as B,M,K as C,L as H}from"./index.ab7ccd91.js";import{_ as T}from"./plugin-vue_export-helper.21dcd24c.js";const j={data(){return{search:"",testResults:[],allresult:[],results:[]}},methods:{modeltestResults(){fetch(`${w}?type=examlist&id=${this.$route.params.id}`).then(e=>e.json()).then(e=>{this.url="https://script.google.com/macros/s/AKfycbxHZMx1M1oGvp-wPb7mHwQrfkDBpkS3BG0WtciUJ_HHJTswLgJ2Ba4f8XBLNHOkjYEERQ/exec?sheet="+e.exam.exam.substr(39,44),fetch(this.url).then(t=>t.json()).then(t=>{let s=t;this.testResults=v.sortBy(s.map(l=>_(u({},l),{attempt:l.attempt||1})),[l=>-l.score,"duration"]).map((l,a)=>u({position:a+1},l)),this.allresult=this.testResults,setTimeout(()=>{location.hash=`#${this.user.reg}`},1e3)})})},millisToMinutesAndSeconds(e){var t=Math.floor(e/6e4),s=(e%6e4/1e3).toFixed(0);return t+":"+(s<10?"0":"")+s},searchResult(){this.testResults=this.allresult.filter(e=>{if(e.name.toLowerCase().includes(this.search.toLowerCase())||e.college.toLowerCase().includes(this.search.toLowerCase()))return e})},getStyle(e){return e==1?"success":e==2?"orange darken-2":e==3?"indigo":""},getborderStyle(e){let t={1:"s singleResult mb-2",2:"f singleResult mb-2",3:"d singleResult mb-2"};return t[e]?t[e]:"singleResult mb-2"}},created(){this.modeltestResults(),window.scrollTo(0,0)},computed:{user(){return R.state.user}}},I=e=>(C("data-v-dd404cec"),e=e(),H(),e),A={class:"leaderboard"},D={class:"my-4 text-3xl font-bold text-center text-gray-900 dark:text-white"},E={class:"p-5 mx-1 rounded md:w-1/2 md:mx-auto bg-gray-50"},F={class:"form-control"},G={class:"mt-4"},J={key:0},K=["id"],N={class:"flex items-center justify-center w-10 h-10 font-semibold text-white rounded-full bg-gradient-to-t from-indigo-400 to-indigo-600"},Q={class:"flex-1 ml-2 text-gray-900 md:ml-4"},U={class:"text-lg font-semibold"},V={class:"text-sm text-gray-500"},$={class:"p-2 text-gray-900 border-2 border-blue-400"},q={key:1,class:"text-center"},z=I(()=>r("button",{class:"btn loader btn-primary"},"Loading...",-1)),O=[z];function P(e,t,s,l,a,n){return d(),c("div",A,[r("div",null,[r("h1",D,"MCQ Leaderboard-"+i(this.$route.params.id),1),r("div",E,[r("div",F,[L(r("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>a.search=o),placeholder:"Search by Name/College",onKeyup:t[1]||(t[1]=(...o)=>n.searchResult&&n.searchResult(...o)),class:"input input-primary input-bordered"},null,544),[[S,a.search]])]),r("div",G,[a.allresult.length>0?(d(),c("div",J,[(d(!0),c(k,null,B(a.testResults,(o,p)=>(d(),c("div",{key:p,id:o.reg,class:M(`${n.getborderStyle(o.position)} flex justify-between items-center p-5   rounded  shadow-md ${o.reg==n.user.reg?"bg-green-200":""}`),style:{"scroll-margin":"100px"}},[r("span",N,i(o.position),1),r("div",Q,[r("h2",U,i(o.name),1),r("p",null,i(o.college),1),r("p",V," Duration: "+i(n.millisToMinutesAndSeconds(o.duration))+" minutes ",1)]),r("div",$,i(o.score),1)],10,K))),128))])):(d(),c("div",q,O))])])])])}var ee=T(j,[["render",P],["__scopeId","data-v-dd404cec"]]);export{ee as default};
