"use strict";(self["webpackChunkvue_router"]=self["webpackChunkvue_router"]||[]).push([[198],{2198:function(t,o,e){e.r(o),e.d(o,{default:function(){return l}});var r=e(6252);const s={class:"container"},c=(0,r._)("h2",null,"單一產品",-1),u=["src"];function a(t,o,e,a,n,i){return(0,r.wg)(),(0,r.iD)("div",s,[c,(0,r._)("img",{src:n.product.imageUrl,alt:""},null,8,u)])}var n={data(){return{product:{}}},methods:{getProduct(){const{id:t}=this.$route.params;this.$http.get(`https://vue3-course-api.hexschool.io/v2/api/hsiaoi/product/${t}`).then((t=>{console.log(t),this.product=t.data.product,console.log(this.product),console.log("https://vue3-course-api.hexschool.io","hsiaoi")})).catch((t=>{console.log(t.data.message)}))}},mounted(){this.getProduct()}},i=e(3744);const h=(0,i.Z)(n,[["render",a]]);var l=h}}]);
//# sourceMappingURL=198.64fe599c.js.map