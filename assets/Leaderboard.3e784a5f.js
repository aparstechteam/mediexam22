var g=Object.defineProperty,f=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var m=(e,t,s)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,c=(e,t)=>{for(var s in t||(t={}))x.call(t,s)&&m(e,s,t[s]);if(h)for(var s of h(t))y.call(t,s)&&m(e,s,t[s]);return e},_=(e,t)=>f(e,b(t));import{_ as v}from"./lodash.8ce7164e.js";import{e as w}from"./api.e649cbe7.js";import{E as R,j as d,k as u,l as r,m as l,y as L,G as S,F as k,v as B,J as C,H as M,I as j}from"./index.ae3b388a.js";import{_ as H}from"./plugin-vue_export-helper.21dcd24c.js";const T={data(){return{search:"",testResults:[],allresult:[],results:[]}},methods:{modeltestResults(){fetch(`${w}?type=examlist&id=${this.$route.params.id}`).then(e=>e.json()).then(e=>{this.url="https://script.google.com/macros/s/AKfycbxHZMx1M1oGvp-wPb7mHwQrfkDBpkS3BG0WtciUJ_HHJTswLgJ2Ba4f8XBLNHOkjYEERQ/exec?sheet="+e.exam.exam.substr(39,44),fetch(this.url).then(t=>t.json()).then(t=>{let s=t;this.testResults=v.sortBy(s.map(a=>_(c({},a),{attempt:a.attempt||1})),[a=>-a.score,"duration"]).map((a,i)=>c({position:i+1},a)),this.allresult=this.testResults,setTimeout(()=>{location.hash=`#${this.user.reg}`},1e3)})})},millisToMinutesAndSeconds(e){if(e.includes(":"))return e;let t=this.hduration*6e4;if(e>t)return this.hduration+":00";var s=Math.floor(e/6e4),a=(e%6e4/1e3).toFixed(0);return s+":"+(a<10?"0":"")+a},searchResult(){this.testResults=this.allresult.filter(e=>{if(e.name.toLowerCase().includes(this.search.toLowerCase())||e.college.toLowerCase().includes(this.search.toLowerCase()))return e})},getStyle(e){return e==1?"success":e==2?"orange darken-2":e==3?"indigo":""},getborderStyle(e){let t={1:"s singleResult mb-2",2:"f singleResult mb-2",3:"d singleResult mb-2"};return t[e]?t[e]:"singleResult mb-2"}},created(){this.modeltestResults(),window.scrollTo(0,0)},computed:{user(){return R.state.user}}},I=e=>(M("data-v-03cb1e7f"),e=e(),j(),e),D={class:"leaderboard"},E={class:"my-4 text-3xl font-bold text-center text-gray-900"},J={class:"p-5 mx-1 rounded md:w-1/2 md:mx-auto bg-gray-50"},A={class:"form-control"},F={class:"mt-4"},G={key:0},N=["id"],Q={class:"flex items-center justify-center w-10 h-10 font-semibold text-white rounded-full bg-gradient-to-t from-indigo-400 to-indigo-600"},K={class:"flex-1 ml-2 text-gray-900 md:ml-4"},U={class:"text-lg font-semibold"},V={class:"text-sm text-gray-500"},$={class:"p-2 text-gray-900 border-2 border-blue-400"},z={key:1,class:"text-center"},O=I(()=>r("button",{class:"btn loader btn-primary"},"Loading...",-1)),P=[O];function W(e,t,s,a,i,n){return d(),u("div",D,[r("div",null,[r("h1",E,"MCQ Leaderboard-"+l(this.$route.params.id),1),r("div",J,[r("div",A,[L(r("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>i.search=o),placeholder:"Search by Name/College",onKeyup:t[1]||(t[1]=(...o)=>n.searchResult&&n.searchResult(...o)),class:"input input-primary input-bordered"},null,544),[[S,i.search]])]),r("div",F,[i.allresult.length>0?(d(),u("div",G,[(d(!0),u(k,null,B(i.testResults,(o,p)=>(d(),u("div",{key:p,id:o.reg,class:C(`${n.getborderStyle(o.position)} flex justify-between items-center p-5   rounded  shadow-md ${o.reg==n.user.reg?"bg-green-200":""}`),style:{"scroll-margin":"100px"}},[r("span",Q,l(o.position),1),r("div",K,[r("h2",U,l(o.name),1),r("p",null,l(o.college),1),r("p",V," Duration: "+l(n.millisToMinutesAndSeconds(o.duration))+" minutes ",1)]),r("div",$,l(o.score),1)],10,N))),128))])):(d(),u("div",z,P))])])])])}var te=H(T,[["render",W],["__scopeId","data-v-03cb1e7f"]]);export{te as default};
