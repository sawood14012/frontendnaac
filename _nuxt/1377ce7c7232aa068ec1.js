(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{426:function(t,n,e){var content=e(427);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(8).default)("08d4b84c",content,!0,{sourceMap:!1})},427:function(t,n,e){(t.exports=e(7)(!1)).push([t.i,".v-form>.container{padding:16px}.v-form>.container>.layout>.flex{padding:8px}.v-form>.container>.layout:only-child{margin:-8px}.v-form>.container>.layout:not(:only-child){margin:auto -8px}",""])},428:function(t,n,e){var content=e(429);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(8).default)("881d4714",content,!0,{sourceMap:!1})},429:function(t,n,e){(t.exports=e(7)(!1)).push([t.i,".theme--light.v-pagination .v-pagination__item{background:#fff;color:#000;width:auto;min-width:34px;padding:0 5px}.theme--light.v-pagination .v-pagination__item--active{color:#fff}.theme--light.v-pagination .v-pagination__navigation{background:#fff}.theme--light.v-pagination .v-pagination__navigation .v-icon{color:rgba(0,0,0,.54)}.theme--dark.v-pagination .v-pagination__item{background:#424242;color:#fff;width:auto;min-width:34px;padding:0 5px}.theme--dark.v-pagination .v-pagination__item--active{color:#fff}.theme--dark.v-pagination .v-pagination__navigation{background:#424242}.theme--dark.v-pagination .v-pagination__navigation .v-icon{color:#fff}.v-pagination{align-items:center;display:inline-flex;list-style-type:none;margin:0;max-width:100%;padding:0}.v-pagination>li{align-items:center;display:flex}.v-pagination--circle .v-pagination__item,.v-pagination--circle .v-pagination__more,.v-pagination--circle .v-pagination__navigation{border-radius:50%}.v-pagination--disabled{pointer-events:none;opacity:.6}.v-pagination__item{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);border-radius:4px;font-size:14px;background:transparent;height:34px;width:34px;margin:.3rem;text-decoration:none;transition:.3s cubic-bezier(0,0,.2,1)}.v-pagination__item--active{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-pagination__navigation{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);display:inline-flex;justify-content:center;align-items:center;text-decoration:none;height:2rem;border-radius:4px;width:2rem;margin:.3rem 10px}.v-pagination__navigation .v-icon{font-size:2rem;transition:.2s cubic-bezier(.4,0,.6,1);vertical-align:middle}.v-pagination__navigation--disabled{opacity:.6;pointer-events:none}.v-pagination__more{margin:.3rem;display:inline-flex;align-items:flex-end;justify-content:center;height:2rem;width:2rem}",""])},433:function(t,n,e){"use strict";e(9),e(48),e(20),e(185),e(28),e(31),e(426);var r=e(40);n.a={name:"v-form",mixins:[Object(r.b)("form")],inheritAttrs:!1,props:{value:Boolean,lazyValidation:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(){var t=Object.values(this.errorBag).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,n=function(input){return input.$watch("hasError",function(n){t.$set(t.errorBag,input._uid,n)},{immediate:!0})},e={_uid:input._uid,valid:void 0,shouldValidate:void 0};return this.lazyValidation?e.shouldValidate=input.$watch("shouldValidate",function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(e.valid=n(input)))}):e.valid=n(input),e},validate:function(){return!this.inputs.filter(function(input){return!input.validate(!0)}).length},reset:function(){for(var t=this,i=this.inputs.length;i--;)this.inputs[i].reset();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},resetValidation:function(){for(var t=this,i=this.inputs.length;i--;)this.inputs[i].resetValidation();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},register:function(input){var t=this.watchInput(input);this.inputs.push(input),this.watchers.push(t)},unregister:function(input){var t=this.inputs.find(function(i){return i._uid===input._uid});if(t){var n=this.watchers.find(function(i){return i._uid===t._uid});n.valid&&n.valid(),n.shouldValidate&&n.shouldValidate(),this.watchers=this.watchers.filter(function(i){return i._uid!==t._uid}),this.inputs=this.inputs.filter(function(i){return i._uid!==t._uid}),this.$delete(this.errorBag,t._uid)}}},render:function(t){var n=this;return t("form",{staticClass:"v-form",attrs:Object.assign({novalidate:!0},this.$attrs),on:{submit:function(t){return n.$emit("submit",t)}}},this.$slots.default)}}},434:function(t,n,e){"use strict";e(56),e(57),e(15),e(39),e(58),e(9),e(428);var r=e(38),o=e(59),l=e(11),c=e(12),v=e(6),d=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var n in source)Object.prototype.hasOwnProperty.call(source,n)&&(t[n]=source[n])}return t};function h(t){if(Array.isArray(t)){for(var i=0,n=Array(t.length);i<t.length;i++)n[i]=t[i];return n}return Array.from(t)}n.a=Object(l.a)(c.a,v.a).extend({name:"v-pagination",directives:{Resize:o.a},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1==0}},totalVisible:[Number,String],nextIcon:{type:String,default:"$vuetify.icons.next"},prevIcon:{type:String,default:"$vuetify.icons.prev"},value:{type:Number,default:0}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return d({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10)||this.maxButtons;if(this.length<=t)return this.range(1,this.length);var n=t%2==0?1:0,e=Math.floor(t/2),r=this.length-e+1+n;if(this.value>e&&this.value<r){var o=this.value-e+2,l=this.value+e-2-n;return[1,"..."].concat(h(this.range(o,l)),["...",this.length])}if(this.value===e){var c=this.value+e-1-n;return[].concat(h(this.range(1,c)),["...",this.length])}if(this.value===r){var v=this.value-e+1;return[1,"..."].concat(h(this.range(v,this.length)))}return[].concat(h(this.range(1,e)),["..."],h(this.range(r,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout(function(){return t.selected=t.value},100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,n){for(var e=[],i=t=t>0?t:1;i<=n;i++)e.push(i);return e},genIcon:function(t,n,e,o){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":e},attrs:{type:"button"},on:e?{}:{click:o}},[t(r.a,[n])])])},genItem:function(t,i){var n=this,e=i===this.value&&(this.color||"primary");return t("button",this.setBackgroundColor(e,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":i===this.value},attrs:{type:"button"},on:{click:function(){return n.$emit("input",i)}}}),[i.toString()])},genItems:function(t){var n=this;return this.items.map(function(i,e){return t("li",{key:e},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):n.genItem(t,i)])})}},render:function(t){var n=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next)];return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},n)}})},495:function(t,n,e){"use strict";e.r(n);var r={layout:"dashboard",$_veeValidate:{validator:"new"},data:function(){return{valid:!0,page:1}},computed:{data1:function(){return this.$store.state.websitep},lengthofd:function(){return this.$store.state.length_l}},fetch:function(t){t.store.dispatch("getweb","2_5_2")},mounted:function(){this.$validator.localize("en",this.dictionary)},methods:{}},o=e(14),l=e(16),c=e.n(l),v=e(135),d=e(136),h=e(421),f=e(410),m=e(123),_=e(408),x=e(129),y=e(433),w=e(137),V=e(124),$=e(434),k=e(134),I=e(414),B=e(419),C=e(138),z=e(415),component=Object(o.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.data1[t.page-1]&&"approved"===t.data1[t.page-1].status?e("div",[e("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{sm12:""}},[e("h3",[t._v("2.5.2 Mechanism to deal with examination-related grievances is transparent, time-bound and efficient")]),t._v(" "),e("br"),t._v(" "),e("v-divider",{attrs:{inset:""}}),t._v(" "),e("v-chip",{attrs:{label:"",color:"pink","text-color":"white"}},[e("v-icon",{attrs:{left:""}},[t._v("label")]),t._v("Data requirement for the last five years:\n        ")],1),t._v(" "),e("v-chip",[t._v("Details of University examinations / Continuous Internal Evaluations (CIE) conducted during the last five years")]),t._v(" "),e("v-chip",[t._v("Number of grievances regarding University examinations/Internal Evaluation")]),t._v(" "),e("v-chip",[t._v("Any other relevant information")])],1),t._v(" "),e("v-flex",{attrs:{lg12:""}},[e("v-card",[e("v-toolbar",{attrs:{color:"success",dark:"",flat:"",dense:"",cad:""}},[e("v-toolbar-title",{staticClass:"subheading"},[t._v("Upload")]),t._v(" "),e("v-spacer"),t._v(" "),e("v-divider")],1),t._v(" "),e("v-card-text",{},[e("v-form",{model:{value:t.valid,callback:function(n){t.valid=n},expression:"valid"}},[e("h3",[t._v("Details of University examinations / Continuous Internal Evaluations (CIE) conducted during the last five years")]),t._v(" "),e("v-btn",{attrs:{block:"",color:"secondary",href:t.data1[t.page-1].file1,dark:""}},[t._v(t._s(t.data1[t.page-1].file1name))]),t._v(" "),e("br"),t._v(" "),e("h3",[t._v("Number of grievances regarding University examinations/Internal Evaluation")]),t._v(" "),e("v-btn",{attrs:{block:"",color:"secondary",href:t.data1[t.page-1].file2,dark:""}},[t._v(t._s(t.data1[t.page-1].file2name))]),t._v(" "),e("br"),t._v(" "),e("v-text-field",{attrs:{label:"Any other info",name:"info",readonly:"","error-messages":t.errors.collect("desc")},model:{value:t.data1[t.page-1].otherinfo,callback:function(n){t.$set(t.data1[t.page-1],"otherinfo",n)},expression:"data1[page-1].otherinfo"}}),t._v(" "),e("v-spacer")],1),t._v(" "),e("div",{staticClass:"text-xs-center"},[e("v-pagination",{attrs:{length:t.lengthofd},model:{value:t.page,callback:function(n){t.page=n},expression:"page"}})],1)],1)],1)],1)],1)],1)],1):e("div",[e("v-progress-linear",{attrs:{indeterminate:!0}})],1)},[],!1,null,null,null);n.default=component.exports;c()(component,{VBtn:v.a,VCard:d.a,VCardText:h.b,VChip:f.a,VContainer:m.a,VDivider:_.a,VFlex:x.a,VForm:y.a,VIcon:w.a,VLayout:V.a,VPagination:$.a,VProgressLinear:k.a,VSpacer:I.a,VTextField:B.a,VToolbar:C.a,VToolbarTitle:z.a})}}]);