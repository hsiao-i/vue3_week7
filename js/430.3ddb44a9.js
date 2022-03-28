"use strict";(self["webpackChunkvue_router"]=self["webpackChunkvue_router"]||[]).push([[430],{9725:function(t,e,l){l.d(e,{Z:function(){return k}});var o=l(6252),a=l(3577);const s={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},d={class:"modal-dialog"},i={class:"modal-content border-0"},r={class:"modal-header bg-danger text-white"},n={id:"delProductModalLabel",class:"modal-title"},c=(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),u={class:"modal-body"},p=(0,o.Uk)(" 是否刪除 "),m={class:"text-danger"},g=(0,o.Uk)(" 商品(刪除後將無法恢復)。 "),h={class:"modal-footer"},b=(0,o._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function _(t,e,l,_,P,v){return(0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("div",d,[(0,o._)("div",i,[(0,o._)("div",r,[(0,o._)("h5",n,[(0,o._)("span",null,"刪除 "+(0,a.zw)(l.delproduct.title)+" 產品",1)]),c]),(0,o._)("div",u,[p,(0,o._)("strong",m,(0,a.zw)(l.delproduct.title),1),g]),(0,o._)("div",h,[b,(0,o._)("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=e=>t.$emit("del-product"))}," 確認刪除 ")])])])],512)}var P=l(7424),v=l.n(P),w={props:{delproduct:{}},emits:["del-product"],data(){return{modal:""}},methods:{openModal(){this.modal.show()},closeModal(){this.modal.hide()}},mounted(){this.modal=new(v())(this.$refs.delProductModal),console.log(this.delproduct.id)}},f=l(3744);const y=(0,f.Z)(w,[["render",_]]);var k=y},5430:function(t,e,l){l.r(e),l.d(e,{default:function(){return Zt}});var o=l(6252),a=l(3577);const s=(0,o._)("h2",null,"後台產品列表",-1),d={class:"container"},i={class:"text-end mt-4"},r={class:"table mt-4"},n=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",{width:"120"},"分類"),(0,o._)("th",null,"產品名稱"),(0,o._)("th",{width:"120"},"原價"),(0,o._)("th",{width:"120"},"售價"),(0,o._)("th",{width:"100"},"是否啟用"),(0,o._)("th",{width:"120"},"編輯")])],-1),c={class:"text-end"},u={class:"text-end"},p={key:0,class:"text-success"},m={key:1},g={class:"btn-group"},h=["onClick"],b=["onClick"];function _(t,e,l,_,P,v){const w=(0,o.up)("LoadingOverlay"),f=(0,o.up)("ProductModal"),y=(0,o.up)("DelModal"),k=(0,o.up)("PaginationCom");return(0,o.wg)(),(0,o.iD)(o.HY,null,[s,(0,o._)("div",d,[(0,o.Wm)(w,{active:P.isLoading,"z-index":1e3},null,8,["active"]),(0,o._)("div",i,[(0,o._)("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=t=>v.openModal("new"))}," 建立新的產品 ")]),(0,o._)("table",r,[n,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(P.products,(t=>((0,o.wg)(),(0,o.iD)("tr",{key:t.id},[(0,o._)("td",null,(0,a.zw)(t.category),1),(0,o._)("td",null,(0,a.zw)(t.title),1),(0,o._)("td",c,(0,a.zw)(t.origin_price),1),(0,o._)("td",u,(0,a.zw)(t.price),1),(0,o._)("td",null,[t.is_enabled?((0,o.wg)(),(0,o.iD)("span",p,"啟用")):((0,o.wg)(),(0,o.iD)("span",m,"未啟用"))]),(0,o._)("td",null,[(0,o._)("div",g,[(0,o._)("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:e=>v.openModal("edit",t)}," 編輯 ",8,h),(0,o._)("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:e=>v.openDelModal(t)}," 刪除 ",8,b)])])])))),128))])]),(0,o.Wm)(f,{ref:"productModal",product:P.tempProduct,"is-new":P.isNew,onUpdateProducts:v.updateProducts},null,8,["product","is-new","onUpdateProducts"]),(0,o.Wm)(y,{ref:"delModal",delproduct:P.tempProduct,onDelProduct:v.delProduct},null,8,["delproduct","onDelProduct"]),(0,o.Wm)(k,{page:P.pagination,onChangePage:v.getProducts},null,8,["page","onChangePage"])])],64)}var P=l(9963);const v={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},w={class:"modal-dialog modal-xl"},f={class:"modal-content border-0"},y={class:"modal-header bg-dark text-white"},k={id:"productModalLabel",class:"modal-title"},U={key:0},M={key:1},x=(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),C={class:"modal-body"},D={class:"row"},L={class:"col-sm-4"},$={class:"mb-2"},V={class:"mb-3"},z=(0,o._)("label",{for:"imageUrl",class:"form-label"},"輸入主要圖片網址",-1),N=["src","alt"],Z={class:"mb-3"},H=(0,o._)("h3",null,"多圖新增",-1),Y={key:0},W=(0,o._)("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1),K=["onUpdate:modelValue"],j=["src","alt"],A={key:0},O={key:1},B={key:1},q=(0,o._)("button",{class:"btn btn-outline-primary btn-sm d-block w-100"}," 新增圖片 ",-1),E=[q],F={class:"col-sm-8"},G={class:"mb-3"},I=(0,o._)("label",{for:"title",class:"form-label"},"標題",-1),J={class:"row"},Q={class:"mb-3 col-md-6"},R=(0,o._)("label",{for:"category",class:"form-label"},"分類",-1),S={class:"mb-3 col-md-6"},T=(0,o._)("label",{for:"price",class:"form-label"},"單位",-1),X={class:"row"},tt={class:"mb-3 col-md-6"},et=(0,o._)("label",{for:"origin_price",class:"form-label"},"原價",-1),lt={class:"mb-3 col-md-6"},ot=(0,o._)("label",{for:"price",class:"form-label"},"售價",-1),at=(0,o._)("hr",null,null,-1),st={class:"mb-3"},dt=(0,o._)("label",{for:"description",class:"form-label"},"產品描述",-1),it={class:"mb-3"},rt=(0,o._)("label",{for:"content",class:"form-label"},"說明內容",-1),nt={class:"mb-3"},ct={class:"form-check"},ut=(0,o._)("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),pt={class:"modal-footer"},mt=(0,o._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function gt(t,e,l,a,s,d){return(0,o.wg)(),(0,o.iD)("div",v,[(0,o._)("div",w,[(0,o._)("div",f,[(0,o._)("div",y,[(0,o._)("h5",k,[l.isNew?((0,o.wg)(),(0,o.iD)("span",U,"新增產品")):((0,o.wg)(),(0,o.iD)("span",M,"編輯產品"))]),x]),(0,o._)("div",C,[(0,o._)("div",D,[(0,o._)("div",L,[(0,o._)("div",$,[(0,o._)("div",V,[z,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[0]||(e[0]=t=>s.tempProduct.imageUrl=t)},null,512),[[P.nr,s.tempProduct.imageUrl]])]),(0,o._)("img",{class:"img-fluid",src:s.tempProduct.imageUrl,alt:s.tempProduct.title},null,8,N)]),(0,o._)("div",Z,[H,Array.isArray(s.tempProduct.imagesUrl)?((0,o.wg)(),(0,o.iD)("div",Y,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.tempProduct.imagesUrl,((t,e)=>((0,o.wg)(),(0,o.iD)(o.HY,{key:e+1},[W,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":t=>s.tempProduct.imagesUrl[e]=t},null,8,K),[[P.nr,s.tempProduct.imagesUrl[e]]]),(0,o._)("img",{class:"img-fluid",src:t,alt:t.title},null,8,j)],64)))),128)),!s.tempProduct.imagesUrl.length||s.tempProduct.imagesUrl[s.tempProduct.imagesUrl.length-1]?((0,o.wg)(),(0,o.iD)("div",A,[(0,o._)("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[1]||(e[1]=t=>s.tempProduct.imagesUrl.push(""))}," 新增圖片 ")])):((0,o.wg)(),(0,o.iD)("div",O,[(0,o._)("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:e[2]||(e[2]=t=>s.tempProduct.imagesUrl.pop())}," 刪除圖片 ")]))])):((0,o.wg)(),(0,o.iD)("div",B,E))])]),(0,o._)("div",F,[(0,o._)("div",G,[I,(0,o.wy)((0,o._)("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[3]||(e[3]=t=>s.tempProduct.title=t)},null,512),[[P.nr,s.tempProduct.title]])]),(0,o._)("div",J,[(0,o._)("div",Q,[R,(0,o.wy)((0,o._)("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":e[4]||(e[4]=t=>s.tempProduct.category=t)},null,512),[[P.nr,s.tempProduct.category]])]),(0,o._)("div",S,[T,(0,o.wy)((0,o._)("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":e[5]||(e[5]=t=>s.tempProduct.unit=t)},null,512),[[P.nr,s.tempProduct.unit]])])]),(0,o._)("div",X,[(0,o._)("div",tt,[et,(0,o.wy)((0,o._)("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":e[6]||(e[6]=t=>s.tempProduct.origin_price=t)},null,512),[[P.nr,s.tempProduct.origin_price]])]),(0,o._)("div",lt,[ot,(0,o.wy)((0,o._)("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":e[7]||(e[7]=t=>s.tempProduct.price=t)},null,512),[[P.nr,s.tempProduct.price]])])]),at,(0,o._)("div",st,[dt,(0,o.wy)((0,o._)("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":e[8]||(e[8]=t=>s.tempProduct.description=t)},"\n                ",512),[[P.nr,s.tempProduct.description]])]),(0,o._)("div",it,[rt,(0,o.wy)((0,o._)("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":e[9]||(e[9]=t=>s.tempProduct.content=t)},"\n                ",512),[[P.nr,s.tempProduct.content]])]),(0,o._)("div",nt,[(0,o._)("div",ct,[(0,o.wy)((0,o._)("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[10]||(e[10]=t=>s.tempProduct.is_enabled=t)},null,512),[[P.e8,s.tempProduct.is_enabled]]),ut])])])])]),(0,o._)("div",pt,[mt,(0,o._)("button",{type:"button",class:"btn btn-primary",onClick:e[11]||(e[11]=e=>t.$emit("update-products",s.tempProduct))}," 確認 ")])])])],512)}var ht=l(2703),bt={mixins:[ht.Z],emits:["update-products"],props:{product:{type:Object,default(){return{}}},isNew:{type:Boolean,default:!1}},data(){return{tempProduct:{},modal:""}},watch:{product(){this.tempProduct=this.product,this.tempProduct.imageUrl||(this.tempProduct.imageUrl=""),this.tempProduct.imagesUrl||(this.tempProduct.imagesUrl=[])}},mounted(){console.log(this.tempProduct)}},_t=l(3744);const Pt=(0,_t.Z)(bt,[["render",gt]]);var vt=Pt,wt=l(9725);const ft={"aria-label":"Page navigation example"},yt={class:"pagination"},kt=(0,o._)("span",{"aria-hidden":"true"},"«",-1),Ut=[kt],Mt=["onClick"],xt=(0,o._)("span",{"aria-hidden":"true"},"»",-1),Ct=[xt];function Dt(t,e,l,s,d,i){return(0,o.wg)(),(0,o.iD)("nav",ft,[(0,o._)("ul",yt,[(0,o._)("li",{class:(0,a.C_)(["page-item",{disabled:!l.page.has_pre}])},[(0,o._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=(0,P.iM)((t=>i.changePage(l.page.current_page-1)),["prevent"]))},Ut)],2),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.page.total_pages,(t=>((0,o.wg)(),(0,o.iD)("li",{class:(0,a.C_)(["page-item",{active:t===t.current_page}]),key:t+1},[(0,o._)("a",{class:"page-link",href:"#",onClick:(0,P.iM)((e=>i.changePage(t)),["prevent"])},(0,a.zw)(t),9,Mt)],2)))),128)),(0,o._)("li",{class:(0,a.C_)(["page-item",{disabled:!l.page.has_next}])},[(0,o._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=(0,P.iM)((t=>i.changePage(l.page.current_page+1)),["prevent"]))},Ct)],2)])])}var Lt={props:["page"],methods:{changePage(t){this.$emit("change-page",t)}}};const $t=(0,_t.Z)(Lt,[["render",Dt]]);var Vt=$t,zt={inject:["emitter"],components:{ProductModal:vt,DelModal:wt.Z,PaginationCom:Vt},data(){return{products:[],isNew:!1,tempProduct:{imagesUrl:[]},pagination:{},currentPage:1,isLoading:!1}},methods:{getProducts(t=1){this.currentPage=t,this.isLoading=!0,this.$http.get(`https://vue3-course-api.hexschool.io/v2/api/hsiaoi/admin/products?page=${t}`).then((t=>{console.log(t),this.products=t.data.products,this.pagination=t.data.pagination,this.isLoading=!1})).catch((t=>{alert("新增產品失敗"),alert(t.response.message),this.isLoading=!1}))},openModal(t,e){console.log(t,e),"new"===t?(this.tempProduct={},this.isNew=!0):"edit"===t&&(this.tempProduct={...e},this.isNew=!1);const l=this.$refs.productModal;l.openModal()},updateProducts(t){this.tempProduct=t,this.isLoading=!0;let e="https://vue3-course-api.hexschool.io/v2/api/hsiaoi/admin/product",l="post",o="新增產品成功";this.isNew||(e=`https://vue3-course-api.hexschool.io/v2/api/hsiaoi/admin/product/${this.tempProduct.id}`,l="put",o="更新產品成功"),this.$http[l](e,{data:this.tempProduct}).then((t=>{console.log(t);const e=this.$refs.productModal;alert(`${o}`),e.closeModal(),this.isLoading=!1,this.getProducts()})).catch((t=>{alert(t.response.message),this.isLoading=!1}))},openDelModal(t){this.tempProduct={...t};const e=this.$refs.delModal;e.openModal()},delProduct(){this.isLoading=!0,this.$http.delete(`https://vue3-course-api.hexschool.io/v2/api/hsiaoi/admin/order/${this.tempProduct.id}`).then((t=>{console.log(t),alert("刪除品項成功"),this.isLoading=!1;const e=this.$refs.delModal;e.closeModal()})).catch((t=>{alert(t.response.message),this.isLoading=!1}))}},mounted(){this.getProducts(),console.log(this.tempProduct)}};const Nt=(0,_t.Z)(zt,[["render",_]]);var Zt=Nt}}]);
//# sourceMappingURL=430.3ddb44a9.js.map