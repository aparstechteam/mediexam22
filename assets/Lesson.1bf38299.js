import{e as r}from"./api.e649cbe7.js";import{O as _,r as a,v as u,j as n,k as c,l as e,B as p,C as m,m as o}from"./index.8975ee2e.js";const v={key:0,class:"container pt-5 mx-auto"},h={class:"flex gap-4 my-5"},x={class:"flex-1 max-w-3xl mx-auto overflow-hidden rounded-lg"},f=["data-plyr-embed-id"],y={class:"pb-5 text-center"},b={class:"text-2xl font-bold"},k={class:"text-xl font-semibold"},g={key:1,class:"py-20 text-center"},B=e("button",{class:"btn-circle btn loading"},null,-1),j=[B],D={setup(w){const d=_(),t=a(null),l=a(null);return fetch(r+"?type=examlist&id="+d.params.id).then(s=>s.json()).then(s=>{t.value=s.exam,l.value=s.exam.solve_class}),(s,C)=>{const i=u("vue-plyr");return t.value?(n(),c("div",v,[e("div",h,[e("div",x,[p(i,null,{default:m(()=>[e("div",{"data-plyr-provider":"youtube","data-plyr-embed-id":l.value},null,8,f)]),_:1})])]),e("div",y,[e("h1",b,o(t.value.subject),1),e("h1",k,o(t.value.chapter)+" | "+o(t.value.topic),1)])])):(n(),c("div",g,j))}}};export{D as default};
