"use strict";(self["webpackChunkvue_router"]=self["webpackChunkvue_router"]||[]).push([[638],{7181:function(a,t,e){e.d(t,{Z:function(){return C}});var s=e(6252),n=e(3577);const r={class:"navbar navbar-expand-lg navbar-light bg-light pt-3"},l={class:"container-fluid"},o=(0,s.Uk)("前台"),i=(0,s._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,s._)("span",{class:"navbar-toggler-icon"})],-1),c={class:"collapse navbar-collapse",id:"navbarNav"},u={class:"navbar-nav"},d={class:"nav-item"},p=(0,s.Uk)("首頁"),m={class:"nav-item"},v=(0,s.Uk)("產品列表"),b={class:"nav-item"},h=(0,s.Uk)("購物車"),g={class:"nav-item"},_=(0,s.Uk)("登入後台"),f={type:"button",class:"btn btn-primary me-5"},k=(0,s.Uk)(" 結帳 "),w={class:"position-absolute top-0 start-80 me-5 pt-5translate-middle badge rounded-pill bg-danger"},x=(0,s._)("span",{class:"visually-hidden"},"unread messages",-1);function y(a,t,e,y,U,I){const D=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("nav",r,[(0,s._)("div",l,[(0,s.Wm)(D,{to:"/",class:"navbar-brand",href:"#"},{default:(0,s.w5)((()=>[o])),_:1}),i,(0,s._)("div",c,[(0,s._)("ul",u,[(0,s._)("li",d,[(0,s.Wm)(D,{to:"/",class:"nav-link active","aria-current":"page",href:"#"},{default:(0,s.w5)((()=>[p])),_:1})]),(0,s._)("li",m,[(0,s.Wm)(D,{to:"/products",class:"nav-link",href:"#"},{default:(0,s.w5)((()=>[v])),_:1})]),(0,s._)("li",b,[(0,s.Wm)(D,{to:"/cart",class:"nav-link",href:"#"},{default:(0,s.w5)((()=>[h])),_:1})]),(0,s._)("li",g,[(0,s.Wm)(D,{to:"/login",class:"nav-link",href:"#"},{default:(0,s.w5)((()=>[_])),_:1})])])]),(0,s._)("button",f,[k,(0,s._)("span",w,[(0,s.Uk)((0,n.zw)(U.cartData.carts.length)+" ",1),x])])])])}var U=e(4902),I={data(){return{cartData:{carts:[]}}},methods:{getCart(){this.$http.get("https://vue3-course-api.hexschool.io/api/hsiaoi/cart").then((a=>{this.cartData=a.data.data})).catch((a=>{alert(a.data.message)}))}},mounted(){this.getCart(),U.Z.on("get-cart",(()=>{this.getCart()}))}},D=e(3744);const W=(0,D.Z)(I,[["render",y]]);var C=W},9638:function(a,t,e){e.r(t),e.d(t,{default:function(){return g}});var s=e(6252),n=e(9963);const r={class:"container mt-5"},l=(0,s._)("h2",null,"登入",-1),o={class:"mb-3"},i=(0,s._)("label",{for:"exampleInputEmail1",class:"form-label"},"帳號",-1),c={class:"mb-3"},u=(0,s._)("label",{for:"exampleInputPassword1",class:"form-label"},"密碼",-1),d=(0,s._)("button",{type:"submit",class:"btn btn-primary w-100"},"登入",-1);function p(a,t,e,p,m,v){const b=(0,s.up)("FrontNavbar");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(b),(0,s._)("div",r,[l,(0,s._)("form",{onSubmit:t[2]||(t[2]=(0,n.iM)(((...a)=>v.signIn&&v.signIn(...a)),["prevent"]))},[(0,s._)("div",o,[i,(0,s.wy)((0,s._)("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp","onUpdate:modelValue":t[0]||(t[0]=a=>m.user.username=a)},null,512),[[n.nr,m.user.username]])]),(0,s._)("div",c,[u,(0,s.wy)((0,s._)("input",{type:"password",class:"form-control",id:"exampleInputPassword1","onUpdate:modelValue":t[1]||(t[1]=a=>m.user.password=a)},null,512),[[n.nr,m.user.password]])]),d],32)])],64)}var m=e(7181),v={components:{FrontNavbar:m.Z},data(){return{user:{username:"",password:""}}},methods:{signIn(){this.$http.post("https://vue3-course-api.hexschool.io/v2/admin/signin",this.user).then((a=>{console.log(a);const{token:t,expired:e}=a.data;document.cookie=`hexToken=${t}; expires=${new Date(e)}`,this.$router.push("/admin/products")})).catch((a=>{alert(a.response.data.message)}))},test(){console.log("click")}}},b=e(3744);const h=(0,b.Z)(v,[["render",p]]);var g=h}}]);
//# sourceMappingURL=638.c1c8813c.js.map