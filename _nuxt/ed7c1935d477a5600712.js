(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{480:function(e,t,r){"use strict";r.r(t);var o={layout:"dashboard",$_veeValidate:{validator:"new"},data:function(){return{valid:!0,page:1,headers:[{text:"Year",align:"left",value:"year"},{text:"Number of students admitted under the reserved categories",value:"number1"},{text:"Total number of seats earmarked for reserved categories",value:"number2"}]}},computed:{data1:function(){return this.$store.state.websitep},lengthofd:function(){return this.$store.state.length_l}},fetch:function(e){e.store.dispatch("getweb","2_1_3")},mounted:function(){this.$validator.localize("en",this.dictionary)},methods:{}},n=r(14),l=r(16),d=r.n(l),v=r(135),c=r(136),f=r(421),_=r(410),h=r(123),m=r(465),y=r(408),x=r(129),V=r(433),k=r(137),w=r(124),T=r(434),C=r(134),$=r(414),D=r(419),F=r(138),L=r(415),component=Object(n.a)(o,function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.data1[e.page-1]&&"approved"===e.data1[e.page-1].status?r("div",[r("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{sm12:""}},[r("h3",[e._v("2.1.3 Average percentage of Students enrolled demonstrates a national spread and includes students from other states")]),e._v(" "),r("br"),e._v(" "),r("v-divider",{attrs:{inset:""}}),e._v(" "),r("v-chip",{attrs:{label:"",color:"pink","text-color":"white"}},[r("v-icon",{attrs:{left:""}},[e._v("label")]),e._v("Number of students enrolled from other states year-wise during the last five years\n        ")],1),e._v(" "),r("v-chip",[e._v("2.1.3.1 Number of students from other states year-wise; during the last five years")]),e._v(" "),r("v-chip",[e._v("2.1.3.2 Total number of students enrolled in the specified year")])],1),e._v(" "),r("v-flex",{attrs:{lg12:""}},[r("v-card",[r("v-toolbar",{attrs:{color:"success",dark:"",flat:"",dense:"",cad:""}},[r("v-toolbar-title",{staticClass:"subheading"},[e._v("Upload:")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-divider")],1),e._v(" "),r("v-card-text",{},[r("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("div",[r("v-data-table",{attrs:{headers:e.headers,items:e.data1[e.page-1].table,"hide-actions":""},scopedSlots:e._u([{key:"items",fn:function(t){return[r("td",[e._v(e._s(t.item.year))]),e._v(" "),r("td",[e._v(e._s(t.item.number_of_students))]),e._v(" "),r("td",[e._v(e._s(t.item.total_of_students))])]}}])})],1),e._v(" "),r("v-divider"),e._v(" "),r("br"),e._v(" "),r("h3",[e._v("List of students enrolled from other states year-wise during the last 5 years")]),e._v(" "),r("v-btn",{attrs:{block:"",color:"secondary",href:e.data1[e.page-1].file1,dark:""}},[e._v(e._s(e.data1[e.page-1].file1name))]),e._v(" "),r("br"),e._v(" "),r("h3",[e._v("E-copies of admission letters of the students enrolled from other states")]),e._v(" "),r("v-btn",{attrs:{block:"",color:"secondary",href:e.data1[e.page-1].file2,dark:""}},[e._v(e._s(e.data1[e.page-1].file2name))]),e._v(" "),r("br"),e._v(" "),r("h3",[e._v("Institutional data in prescribed format (Data Template)")]),e._v(" "),r("v-btn",{attrs:{block:"",color:"secondary",href:e.data1[e.page-1].file3,dark:""}},[e._v(e._s(e.data1[e.page-1].file3name))]),e._v(" "),r("br"),e._v(" "),r("v-text-field",{attrs:{label:"Any other info",name:"info",readonly:"","error-messages":e.errors.collect("desc")},model:{value:e.data1[e.page-1].otherinfo,callback:function(t){e.$set(e.data1[e.page-1],"otherinfo",t)},expression:"data1[page-1].otherinfo"}}),e._v(" "),r("v-spacer")],1),e._v(" "),r("div",{staticClass:"text-xs-center"},[r("v-pagination",{attrs:{length:e.lengthofd},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1)],1)],1)],1)],1)],1)],1):r("div",[r("v-progress-linear",{attrs:{indeterminate:!0}})],1)},[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:v.a,VCard:c.a,VCardText:f.b,VChip:_.a,VContainer:h.a,VDataTable:m.a,VDivider:y.a,VFlex:x.a,VForm:V.a,VIcon:k.a,VLayout:w.a,VPagination:T.a,VProgressLinear:C.a,VSpacer:$.a,VTextField:D.a,VToolbar:F.a,VToolbarTitle:L.a})}}]);