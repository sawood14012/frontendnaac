(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{426:function(t,e,n){var content=n(427);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("08d4b84c",content,!0,{sourceMap:!1})},427:function(t,e,n){(t.exports=n(7)(!1)).push([t.i,".v-form>.container{padding:16px}.v-form>.container>.layout>.flex{padding:8px}.v-form>.container>.layout:only-child{margin:-8px}.v-form>.container>.layout:not(:only-child){margin:auto -8px}",""])},428:function(t,e,n){var content=n(429);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("881d4714",content,!0,{sourceMap:!1})},429:function(t,e,n){(t.exports=n(7)(!1)).push([t.i,".theme--light.v-pagination .v-pagination__item{background:#fff;color:#000;width:auto;min-width:34px;padding:0 5px}.theme--light.v-pagination .v-pagination__item--active{color:#fff}.theme--light.v-pagination .v-pagination__navigation{background:#fff}.theme--light.v-pagination .v-pagination__navigation .v-icon{color:rgba(0,0,0,.54)}.theme--dark.v-pagination .v-pagination__item{background:#424242;color:#fff;width:auto;min-width:34px;padding:0 5px}.theme--dark.v-pagination .v-pagination__item--active{color:#fff}.theme--dark.v-pagination .v-pagination__navigation{background:#424242}.theme--dark.v-pagination .v-pagination__navigation .v-icon{color:#fff}.v-pagination{align-items:center;display:inline-flex;list-style-type:none;margin:0;max-width:100%;padding:0}.v-pagination>li{align-items:center;display:flex}.v-pagination--circle .v-pagination__item,.v-pagination--circle .v-pagination__more,.v-pagination--circle .v-pagination__navigation{border-radius:50%}.v-pagination--disabled{pointer-events:none;opacity:.6}.v-pagination__item{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);border-radius:4px;font-size:14px;background:transparent;height:34px;width:34px;margin:.3rem;text-decoration:none;transition:.3s cubic-bezier(0,0,.2,1)}.v-pagination__item--active{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-pagination__navigation{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);display:inline-flex;justify-content:center;align-items:center;text-decoration:none;height:2rem;border-radius:4px;width:2rem;margin:.3rem 10px}.v-pagination__navigation .v-icon{font-size:2rem;transition:.2s cubic-bezier(.4,0,.6,1);vertical-align:middle}.v-pagination__navigation--disabled{opacity:.6;pointer-events:none}.v-pagination__more{margin:.3rem;display:inline-flex;align-items:flex-end;justify-content:center;height:2rem;width:2rem}",""])},433:function(t,e,n){"use strict";n(9),n(48),n(20),n(185),n(28),n(31),n(426);var r=n(40);e.a={name:"v-form",mixins:[Object(r.b)("form")],inheritAttrs:!1,props:{value:Boolean,lazyValidation:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(){var t=Object.values(this.errorBag).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",function(e){t.$set(t.errorBag,input._uid,e)},{immediate:!0})},n={_uid:input._uid,valid:void 0,shouldValidate:void 0};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))}):n.valid=e(input),n},validate:function(){return!this.inputs.filter(function(input){return!input.validate(!0)}).length},reset:function(){for(var t=this,i=this.inputs.length;i--;)this.inputs[i].reset();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},resetValidation:function(){for(var t=this,i=this.inputs.length;i--;)this.inputs[i].resetValidation();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},register:function(input){var t=this.watchInput(input);this.inputs.push(input),this.watchers.push(t)},unregister:function(input){var t=this.inputs.find(function(i){return i._uid===input._uid});if(t){var e=this.watchers.find(function(i){return i._uid===t._uid});e.valid&&e.valid(),e.shouldValidate&&e.shouldValidate(),this.watchers=this.watchers.filter(function(i){return i._uid!==t._uid}),this.inputs=this.inputs.filter(function(i){return i._uid!==t._uid}),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object.assign({novalidate:!0},this.$attrs),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}},434:function(t,e,n){"use strict";n(56),n(57),n(15),n(39),n(58),n(9),n(428);var r=n(38),o=n(59),l=n(11),c=n(12),d=n(6),h=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t};function v(t){if(Array.isArray(t)){for(var i=0,e=Array(t.length);i<t.length;i++)e[i]=t[i];return e}return Array.from(t)}e.a=Object(l.a)(c.a,d.a).extend({name:"v-pagination",directives:{Resize:o.a},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1==0}},totalVisible:[Number,String],nextIcon:{type:String,default:"$vuetify.icons.next"},prevIcon:{type:String,default:"$vuetify.icons.prev"},value:{type:Number,default:0}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return h({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10)||this.maxButtons;if(this.length<=t)return this.range(1,this.length);var e=t%2==0?1:0,n=Math.floor(t/2),r=this.length-n+1+e;if(this.value>n&&this.value<r){var o=this.value-n+2,l=this.value+n-2-e;return[1,"..."].concat(v(this.range(o,l)),["...",this.length])}if(this.value===n){var c=this.value+n-1-e;return[].concat(v(this.range(1,c)),["...",this.length])}if(this.value===r){var d=this.value-n+1;return[1,"..."].concat(v(this.range(d,this.length)))}return[].concat(v(this.range(1,n)),["..."],v(this.range(r,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout(function(){return t.selected=t.value},100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){for(var n=[],i=t=t>0?t:1;i<=e;i++)n.push(i);return n},genIcon:function(t,e,n,o){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":n},attrs:{type:"button"},on:n?{}:{click:o}},[t(r.a,[e])])])},genItem:function(t,i){var e=this,n=i===this.value&&(this.color||"primary");return t("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":i===this.value},attrs:{type:"button"},on:{click:function(){return e.$emit("input",i)}}}),[i.toString()])},genItems:function(t){var e=this;return this.items.map(function(i,n){return t("li",{key:n},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):e.genItem(t,i)])})}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next)];return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}})},560:function(t,e,n){"use strict";n.r(e);var r,o=n(143),l=(n(142),r={layout:"dashboard",$_veeValidate:{validator:"new"},data:function(){return{valid:!0,page:1}},computed:{data1:function(){return this.$store.state.websitep},lengthofd:function(){return this.$store.state.length_l}},fetch:function(t){t.store.dispatch("getweb","6_4_2")},mounted:function(){this.$validator.localize("en",this.dictionary)}},Object(o.a)(r,"mounted",function(){this.$validator.localize("en",this.dictionary)}),Object(o.a)(r,"methods",{submit:function(){var data={id:"6_4_2",link:this.data1[page-1].link,otherinfo:this.data1[page-1].otherinfo};this.$store.commit("upload1_1_1",data),this.clear()},clear:function(){this.data1[page-1]={}}}),r),c=n(14),d=n(16),h=n.n(d),v=n(136),f=n(421),m=n(123),x=n(408),_=n(129),y=n(433),w=n(124),k=n(434),$=n(134),V=n(414),I=n(419),B=n(138),z=n(415),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[t.data1[t.page-1]&&"approved"===t.data1[t.page-1].status?n("div",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{sm12:""}},[n("h3",[t._v("6.4.2 Institution conducts internal and external financial audits regularly")]),t._v(" "),n("h4",[t._v("Enumerate the various internal and external financial audits carried out during the last five years with the mechanism for settling any audit objections within 500 words")]),t._v(" "),n("br"),t._v(" "),n("v-divider",{attrs:{inset:""}})],1),t._v(" "),n("v-flex",{attrs:{lg12:""}},[n("v-card",[n("v-toolbar",{attrs:{color:"success",dark:"",flat:"",dense:"",cad:""}},[n("v-toolbar-title",{staticClass:"subheading"},[t._v("Provide weblink to:")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-divider")],1),t._v(" "),n("v-card-text",{},[n("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{label:"Documents pertaining to internal and external audits year-wise for the last five years",name:"link",placeholder:"https://example.com","data-vv-name":"link",readonly:"","error-messages":t.errors.collect("link"),required:""},model:{value:t.data1[t.page-1].link,callback:function(e){t.$set(t.data1[t.page-1],"link",e)},expression:"data1[page-1].link"}}),t._v(" "),n("v-text-field",{attrs:{label:"Any other info",name:"info",readonly:"","error-messages":t.errors.collect("desc")},model:{value:t.data1[t.page-1].otherinfo,callback:function(e){t.$set(t.data1[t.page-1],"otherinfo",e)},expression:"data1[page-1].otherinfo"}}),t._v(" "),n("v-spacer")],1),t._v(" "),n("div",{staticClass:"text-xs-center"},[n("v-pagination",{attrs:{length:t.lengthofd},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)],1)],1)],1)],1):n("div",[n("v-progress-linear",{attrs:{indeterminate:!0}})],1)])},[],!1,null,null,null);e.default=component.exports;h()(component,{VCard:v.a,VCardText:f.b,VContainer:m.a,VDivider:x.a,VFlex:_.a,VForm:y.a,VLayout:w.a,VPagination:k.a,VProgressLinear:$.a,VSpacer:V.a,VTextField:I.a,VToolbar:B.a,VToolbarTitle:z.a})}}]);