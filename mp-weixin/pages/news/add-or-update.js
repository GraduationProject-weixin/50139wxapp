(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news/add-or-update"],{1215:function(t,e,n){"use strict";var r=n("7eae"),i=n.n(r);i.a},3265:function(t,e,n){"use strict";n.r(e);var r=n("88b3"),i=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);e["default"]=i.a},"764c":function(t,e,n){"use strict";(function(t){n("9ea4"),n("921b");r(n("66fd"));var e=r(n("9f44"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"7eae":function(t,e,n){},"88b3":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,r,i,u,a){try{var o=t[u](a),c=o.value}catch(s){return void n(s)}o.done?e(c):Promise.resolve(c).then(r,i)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function o(t){u(a,r,i,o,c,"next",t)}function c(t){u(a,r,i,o,c,"throw",t)}o(void 0)}))}}var o=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("2549"))}.bind(null,n)).catch(n.oe)},c={data:function(){return{ruleForm:{title:"",introduction:"",picture:"",content:""},user:{},ro:{title:!1,introduction:!1,picture:!1,content:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var e=a(r.default.mark((function e(n){var i,u,a,o;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t.getStorageSync("nowTable"),e.next=3,this.$api.session(i);case 3:if(u=e.sent,this.user=u.data,this.ruleForm.userid=t.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=t.getStorageSync("nickname")),!n.id){e.next=13;break}return this.ruleForm.id=n.id,e.next=11,this.$api.info("news",this.ruleForm.id);case 11:u=e.sent,this.ruleForm=u.data;case 13:if(!n.cross){e.next=36;break}a=t.getStorageSync("crossObj"),e.t0=r.default.keys(a);case 16:if((e.t1=e.t0()).done){e.next=36;break}if(o=e.t1.value,"title"!=o){e.next=22;break}return this.ruleForm.title=a[o],this.ro.title=!0,e.abrupt("continue",16);case 22:if("introduction"!=o){e.next=26;break}return this.ruleForm.introduction=a[o],this.ro.introduction=!0,e.abrupt("continue",16);case 26:if("picture"!=o){e.next=30;break}return this.ruleForm.picture=a[o],this.ro.picture=!0,e.abrupt("continue",16);case 30:if("content"!=o){e.next=34;break}return this.ruleForm.content=a[o],this.ro.content=!0,e.abrupt("continue",16);case 34:e.next=16;break;case 36:this.styleChange();case 37:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},pictureTap:function(){var t=this;this.$api.upload((function(e){t.ruleForm.picture=t.$base.url+"upload/"+e.file,t.$forceUpdate(),t.$nextTick((function(){t.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=a(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.title){t.next=3;break}return this.$utils.msg("标题不能为空"),t.abrupt("return");case 3:if(this.ruleForm.picture){t.next=6;break}return this.$utils.msg("图片不能为空"),t.abrupt("return");case 6:if(this.ruleForm.content){t.next=9;break}return this.$utils.msg("内容不能为空"),t.abrupt("return");case 9:if(!this.ruleForm.id){t.next=14;break}return t.next=12,this.$api.update("news",this.ruleForm);case 12:t.next=16;break;case 14:return t.next=16,this.$api.add("news",this.ruleForm);case 16:this.$utils.msgBack("提交成功");case 17:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),optionsChange:function(t){this.index=t.target.value},bindDateChange:function(t){this.date=t.target.value},getDate:function(t){var e=new Date,n=e.getFullYear(),r=e.getMonth()+1,i=e.getDate();return"start"===t?n-=60:"end"===t&&(n+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(n,"-").concat(r,"-").concat(i)},toggleTab:function(t){this.$refs[t].show()}}};e.default=c}).call(this,n("543d")["default"])},"896a":function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return r}))},"9f44":function(t,e,n){"use strict";n.r(e);var r=n("896a"),i=n("3265");for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);n("1215");var a,o=n("f0c5"),c=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"ec9f5350",null,!1,r["a"],a);e["default"]=c.exports}},[["764c","common/runtime","common/vendor"]]]);