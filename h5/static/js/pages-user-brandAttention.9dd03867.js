(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-brandAttention"],{"11eb":function(e,t,a){"use strict";var n=a("d55d"),i=a.n(n);i.a},"77b7":function(e,t,a){"use strict";a.r(t);var n=a("f23d"),i=a("e591");for(var o in i)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(o);a("11eb");var r=a("828b"),d=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"174eade2",null,!1,n["a"],void 0);t["default"]=d.exports},8226:function(e,t,a){var n=a("c86c");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-174eade2],\n.content[data-v-174eade2]{background:#f8f8f8}body.?%PAGE?%[data-v-174eade2]{background:#f8f8f8}.hot-section[data-v-174eade2]{display:flex;flex-wrap:wrap;margin-top:%?16?%}.hot-section .guess-item[data-v-174eade2]{display:flex;flex-direction:row;width:100%;padding:0 %?30?%;margin-bottom:%?16?%;background-color:#fff;align-items:center}.hot-section .image-wrapper[data-v-174eade2]{width:30%;height:%?170?%;border-radius:3px;overflow:hidden;background:#fff}.hot-section .image-wrapper uni-image[data-v-174eade2]{width:100%;height:100%;opacity:1}.hot-section .title[data-v-174eade2]{font-size:%?32?%;color:#303133;line-height:%?80?%}.hot-section .title2[data-v-174eade2]{font-size:%?24?%;color:#909399;line-height:%?40?%;height:%?80?%;overflow:hidden;text-overflow:ellipsis;display:block}.hot-section .price[data-v-174eade2]{font-size:%?32?%;color:#fa436a;line-height:%?80?%}.hot-section .txt[data-v-174eade2]{width:70%;display:flex;flex-direction:row;padding-left:%?40?%;align-items:center}.hot-section .hor-txt[data-v-174eade2]{display:flex;justify-content:space-between}.hot-section .time[data-v-174eade2]{font-size:%?24?%;color:#303133;line-height:%?80?%}',""]),e.exports=t},a23e:function(e,t,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("c223");var i=n(a("2634")),o=n(a("2fdc")),r=n(a("d3e8")),d=n(a("d5b4")),s=a("a0d8"),u=a("ba4e"),c={components:{uniLoadMore:d.default,empty:r.default},data:function(){return{loadingType:"more",brandList:[],searchParam:{pageNum:1,pageSize:6}}},onLoad:function(e){this.loadData()},onPullDownRefresh:function(){this.loadData("refresh")},onReachBottom:function(){this.searchParam.pageNum++,this.loadData()},onNavigationBarButtonTap:function(e){var t=e.index,a=this;0===t&&uni.showModal({title:"Hint",content:"Do you want to clear subscribes?",success:function(e){e.confirm&&(0,u.clearBrandAttention)().then((function(e){a.loadData("refresh")}))}})},filters:{formatDateTime:function(e){if(null==e||""===e)return"N/A";var t=new Date(e);return(0,s.formatDate)(t,"yyyy-MM-dd hh:mm:ss")}},methods:{loadData:function(){var e=arguments,t=this;return(0,o.default)((0,i.default)().mark((function a(){var n,o;return(0,i.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n=e.length>0&&void 0!==e[0]?e[0]:"add",o=e.length>1?e[1]:void 0,"add"!==n){a.next=8;break}if("nomore"!==t.loadingType){a.next=5;break}return a.abrupt("return");case 5:t.loadingType="loading",a.next=9;break;case 8:t.loadingType="more";case 9:"refresh"===n&&(t.searchParam.pageNum=1,t.brandList=[]),(0,u.fetchBrandAttentionList)(t.searchParam).then((function(e){var a=e.data.list;0===a.length?(t.loadingType="nomore",t.searchParam.pageNum--):(a.length<t.searchParam.pageSize?(t.loadingType="nomore",t.searchParam.pageNum--):t.loadingType="more",t.brandList=t.brandList.concat(a)),"refresh"===n&&(1==o?uni.hideLoading():uni.stopPullDownRefresh())}));case 11:case"end":return a.stop()}}),a)})))()},navToDetailPage:function(e){var t=e.brandId;uni.navigateTo({url:"/pages/brand/brandDetail?id=".concat(t)})},stopPrevent:function(){}}};t.default=c},ba4e:function(e,t,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.brandAttentionDetail=function(e){return(0,i.default)({method:"GET",url:"/member/attention/detail",params:e})},t.clearBrandAttention=function(){return(0,i.default)({method:"POST",url:"/member/attention/clear"})},t.createBrandAttention=function(e){return(0,i.default)({method:"POST",url:"/member/attention/add",data:e})},t.deleteBrandAttention=function(e){return(0,i.default)({method:"POST",url:"/member/attention/delete",params:e})},t.fetchBrandAttentionList=function(e){return(0,i.default)({method:"GET",url:"/member/attention/list",params:e})};var i=n(a("2965"))},d55d:function(e,t,a){var n=a("8226");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("967d").default;i("0936ce0a",n,!0,{sourceMap:!1,shadowMode:!1})},e591:function(e,t,a){"use strict";a.r(t);var n=a("a23e"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=i.a},f23d:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return n}));var n={uniLoadMore:a("d5b4").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"content"},[null==e.brandList||0===e.brandList.length?a("empty"):e._e(),a("v-uni-view",{staticClass:"hot-section"},e._l(e.brandList,(function(t,n){return a("v-uni-view",{key:n,staticClass:"guess-item",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.navToDetailPage(t)}}},[a("v-uni-view",{staticClass:"image-wrapper"},[a("v-uni-image",{attrs:{src:t.brandLogo,mode:"aspectFit"}})],1),a("v-uni-view",{staticClass:"txt"},[a("v-uni-text",{staticClass:"title clamp"},[e._v(e._s(t.brandName))])],1)],1)})),1),a("uni-load-more",{attrs:{status:e.loadingType}})],1)},o=[]}}]);