!function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n=window.webpackJsonp;window.webpackJsonp=function(o,p){for(var l,c,s=0,i=[];s<o.length;s++)c=o[s],a[c]&&i.push.apply(i,a[c]),a[c]=0;for(l in p)Object.prototype.hasOwnProperty.call(p,l)&&(e[l]=p[l]);for(n&&n(o,p);i.length;)i.shift().call(null,t);if(p[0])return r[0]=0,t(0)};var r={},a={0:0};t.e=function(e,n){if(0===a[e])return n.call(null,t);if(void 0!==a[e])a[e].push(n);else{a[e]=[n];var r=document.getElementsByTagName("head")[0],o=document.createElement("script");o.type="text/javascript",o.charset="utf-8",o.async=!0,o.src=t.p+""+e+"."+({1:"index"}[e]||e)+".js?596e2f5b1e025ad43018-"+{1:"f2b2fe253d7154f51b54"}[e],r.appendChild(o)}},t.m=e,t.c=r,t.p=""}([]);webpackJsonp([1,0],[function(t,e,s){s(1),$(document).ready(function(){function t(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}function e(t,e){return{x:(t.x+e.x)/2,y:(t.y+e.y)/2}}function s(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function n(){Y?($(".product1").hide(),$(".img_desc1").hide(),$(".product2").show(),$(".img_desc2").show()):($(".product1").show(),$(".img_desc1").show(),$(".img_desc2").hide(),$(".product2").hide())}function a(){Q=!Q,i()}function i(){Y?Q?($(".swx-pic-play").attr("class","swx-pic-play play"),d()):($(".swx-pic-play").attr("class","swx-pic-play pause"),u()):Q?($(".swx-pic-play").attr("class","swx-pic-play play"),o()):($(".swx-pic-play").attr("class","swx-pic-play pause"),l())}function r(t,e){var s=parseInt($("#product1").css("width"))/2,n=parseInt($("#product1").css("width"))/2,a=(s-b.x)/parseInt($("#product1").css("width"))*(parseInt($("#product1").css("width"))*e)-(s-b.x),i=(n-b.y)/parseInt($("#product1").css("width"))*(parseInt($("#product1").css("width"))*e)-(n-b.y);t.style[X]="matrix("+e+", 0, 0, "+e+",  0 , 0)",$(t).css({left:a+A,top:i+F}),"previous-image"==$(t).attr("class")&&$(".previous-image").css({"webkit-transform":"scale("+e+")",transform:"scale("+e+")",left:a+A,top:i+F})}function c(t,e,s){t&&[].forEach.call(t,function(){e!=arguments[1]&&(arguments[0].style.display="none"),arguments[0].className=s})}function o(){z=!1,L=setInterval(function(){O=parseInt(O)+1,O>w.length-1?O=0:void 0,J?J.style.display="none":void 0,P[parseInt(O)]?P[parseInt(O)].style.display="block":void 0,D.length>0&&img_desc1.innerHTML!=D[parseInt(O)]&&(img_desc1.innerHTML=D[parseInt(O)]);var t=parseInt($("#img_desc1").css("height"));$(".swx-pic-play").css("top",ct+t+"px"),J=P[parseInt(O)],K=(new Date).getTime()},800)}function l(){clearInterval(L),L=null,z=!0}function d(){N=setInterval(function(){var t=$("div.slideImgDiv");E+=1,c(t,E,"slideImgDiv"),E==w.length&&(E=0),t[E].style.webkitTransform="translateX(0,0)",t[E].className="slideImgDiv zIndex",t[E].style.display="block",$(".img_desc2").html(D[E])},1500)}function u(){clearInterval(N),N=null}function h(){setTimeout(function(){Z.style.marginBottom="5px",et.innerHTML="可手动放大缩小",$(tt).attr("class","hint-change-icon magnify")},2e3),setTimeout(function(){V.remove()},4e3)}function p(t){var e=parseInt($("#product1").css("width"))*S/2-parseInt($("#product1").css("width"))/2,s=t.touches[0],n=s.pageX,a=s.pageY,i=(n-_)/20,r=(a-M)/20;A+=i,F+=r,S<=1?(A<=e?A=e:A>-e?A=-e:void 0,F<=e?F=e:F>-e?F=-e:void 0):(i>=0?A>=e&&(A=e):A<=-e&&(A=-e),r>=0?F>=e&&(F=e):F<=-e&&(F=-e)),$(t.target).css({left:A,top:F}),"previous-image"==$(t.target).attr("class")&&$(".previous-image").css({left:A,top:F})}function g(){W=!W,W?($(".swx-music").attr("class","swx-music play"),nt.play()):($(".swx-music").attr("class","swx-music pause"),nt.pause())}function m(){R=!R,R?($(".zpg-barrage-container").show(),$(".swx-barrage").attr("class","swx-barrage open")):($(".zpg-barrage-container").hide(),$(".swx-barrage").attr("class","swx-barrage close"))}function f(t){$.getJSON(t,function(t){0!=t.code?console.log("code: "+t.code):x(t.data)})}function x(e){function s(t,e){if(D=[],0==t.length)$("."+e).hide();else{var s=new Array;for(var n in t)""!=t[n]&&(s[s.length]=n);if(1==s.length)D.push(t[s[0]]);else{for(var a=1;a<s.length;a++)for(var i=0;i<parseInt(s[a]-s[a-1]);i++)D.push(t[s[a-1]]);if(s[s.length-1]<=w.length)for(var a=0;a<=w.length-s[s.length-1];a++)D.push(t[s[s.length-1]])}}}function a(){function t(t){var e=parseInt($("#img_desc1").css("height"));return Q&&t.touches.length>=2&&(t.touches[0].pageY>q+e||t.touches[1].pageY>q+e||t.touches[1].pageY<e||t.touches[1].pageY<e?U=!1:(U=!0,Q=!1,i("imgTouchStart"))),t.preventDefault(),l(),T=t.changedTouches[0].clientX,k=T,_=t.touches[0].pageX,M=t.touches[0].pageY,!1}function e(t){if(t.preventDefault(),B==h&&!U&&1==t.touches.length&&Q){var e=-(t.changedTouches[0].clientX-T)/10;return O=(C+e+Math.abs(Math.floor(e/h))*h)%h,J!=P[parseInt(O)]&&(J.style.display="none",P[parseInt(O)].style.display="block",D.length>0&&(m.innerHTML=D[parseInt(O)]),J=P[parseInt(O)]),j=-(t.changedTouches[0].clientX-k)/10,k=t.changedTouches[0].clientX,!1}Q||1!=t.touches.length||"previous-image"!=$(t.target).attr("class")||p(t)}function s(t){t.stopPropagation(),C=O,z&&B==h&&Q&&o(),U=!1}for(o(),c=0;c<h;c++)P[c]||(alert("资源加载失败"),console.log("资源加载失败"));D[0]?m.innerHTML=D[0]:$("#img_desc1").hide(),J=P[0],g.addEventListener("touchstart",t,!1),g.addEventListener("touchmove",e,!1),g.addEventListener("touchend",s,!1)}function r(){if(S=1,l(),u(),$(".previous-image").css({"webkit-transform":"scale( 1 )",transform:"scale(1)",left:0,top:0}),Y=!Y,Q=!0,i(),w=[],n(),Y){l();for(var a=0;a<e.hotPicUrls.length;a++)w.push(e.hotPicUrls[a]);$(".swx-hot-spots").attr("class","swx-hot-spots on"),t(e.hotPicTags)||s(e.hotPicTags,"img_desc2");for(var r="",c=document.getElementById("product2"),a=0;a<w.length;a++)r+=0==a?"<div class='slideImgDiv zIndex'>":"<div class='slideImgDiv'>",r+="<img class='product2_img' src= ' "+w[a]+" ' curImgIndex="+a+"> ",r+="</div>";c.innerHTML=r,$(".img_desc2").html(D[E]),u(),d()}else{for(var a=0;a<e.picUrls.length;a++)w.push(e.picUrls[a]);s(e.picTags,"img_desc1"),$(".swx-hot-spots").attr("class","swx-hot-spots off")}}if(document.title=e.title,null!=e.title?$(".goods_name").text(e.title):void 0,null!=e.desc?$(".goods_item_desc").text(e.desc):void 0,null!=e.price?$("#goods_buy_price").text("价格：￥"+e.price.toFixed(2)):void 0,null!=e.saleCount?$("#goods_buy_count").text("月销量: "+e.saleCount):void 0,null!=e.likeCount?$(".item_like").text(e.likeCount):void 0,null!=e.userName?$(".user_name").text(e.userName):void 0,/^http/.test(e.link)?$(".goods_buy_left_1").attr("href",e.link):$(".goods_buy_left_1").attr("href","http://"+e.link),null!=e.picUrls){w=[];for(var c=0;c<e.picUrls.length;c++)w.push(e.picUrls[c]);var h=w.length;t(e.picTags)||s(e.picTags,"img_desc1");var g=document.getElementById("product1"),m=document.getElementById("img_desc1");for(L=null,G=0;G<h;G++)!function(t){var e=new Image;e.src=w[t],e.onload=function(){e.onload=null;var s=document.createElement("img");s.src=this.src,s.className="previous-image",0==t?s.style.display="block":s.style.display="none",g.appendChild(s),P[t]=s,++B==h&&a()}}(G);for(var f=$("#J_barrage_stage"),x=[{text:"我就是路过看看。。"},{text:"good"},{text:"赞赞赞"},{text:"还想再入一件"},{text:"强烈推荐，美。。"},{text:"666"},{text:"惊呆了"},{text:"这是啥"},{text:"喜欢"}],c=0;c<x.length;c++){var v='<div class="mb5 barrage-inner"><span class="barrage-txt mr16">'+x[c].text+"</span></div>";f.prepend(v)}var y="barrage linear 8s infinite";$(".zpg-barrage-content").css("animation",y),$(".swx-hot-spots").bind("click",r),null!=e.link&&$(".goods_buy_btn").click(function(){window.location.href=e.link})}}function v(t){var e=parseInt($("#img_desc1").css("height"));t.touches.length>=2&&(t.touches[0].pageY>q+e||t.touches[1].pageY>q+e||t.touches[1].pageY<e||t.touches[1].pageY<e?U=!1:(U=!0,Q=!1,i())),this.startX=t.changedTouches[0].pageX,this.startY=t.changedTouches[0].pageY,_=t.touches[0].pageX,M=t.touches[0].pageY,"IMG"==t.target.nodeName&&($(t.target).attr("curImgIndex")&&(E=parseInt($(t.target).attr("curImgIndex")),u()),2===t.touches.length&&(H.start=s({x:t.touches[0].screenX,y:t.touches[0].screenY},{x:t.touches[1].screenX,y:t.touches[1].screenY})))}function y(t){t.preventDefault();var n=t.changedTouches[0].pageY,a=t.changedTouches[0].pageX,i=n-this.startY,o=a-this.startX,l=this.index,d=.2;if("IMG"!=t.target.nodeName){if(this.flag=!0,Math.abs(o)>Math.abs(i))return void(this.flag=!1);if(c(rt,l,"section"),i<0){this.nextIndex=l==rt.length-1?0:l+1;var u=it+i;5==this.nextIndex&&(rt[this.nextIndex].style.webkitTransform="translate(0,"+u+"px)",rt[this.nextIndex].className="section zIndex",rt[this.nextIndex].style.display="block",this.style.webkitTransform="scale("+(1-Math.abs(i/it)*d)+") translate(0,"+i+"px)")}else if(i>0){var u=-it+i;this.nextIndex=0==l?rt.length-1:l-1,0==this.nextIndex&&(rt[this.nextIndex].style.webkitTransform="translate(0,"+u+"px)",rt[this.nextIndex].className="section zIndex",rt[this.nextIndex].style.display="block",this.style.webkitTransform="scale("+(1-Math.abs(i/it)*d)+") translate(0,"+i+"px)")}}else{if($(t.target).attr("curImgIndex"))if(!U&&1==t.touches.length&&Q){var h=$("div.slideImgDiv");if(E=parseInt($(t.target).attr("curImgIndex")),Math.abs(o)>Math.abs(i)&&(this.flag=!1,t.touches.length<2))if(o<0){E+=1,c(h,E,"slideImgDiv"),E==w.length&&(E=0);var u=at+o;h[E].style.webkitTransform="translateX(0,"+u+"px)",h[E].className="slideImgDiv zIndex",h[E].style.display="block",this.style.webkitTransform="scale("+(1-Math.abs(o/at)*d)+") translateX(0,"+o+"px)",$(".img_desc2").html(D[E])}else if(o>0){E-=1,c(h,E,"slideImgDiv"),E==-1&&(E=2);var u=-at+o;h[E].style.webkitTransform="translateX(0,"+u+"px)",h[E].className="slideImgDiv zIndex",h[E].style.display="block",this.style.webkitTransform="scale("+(1-Math.abs(o/at)*d)+") translateX(0,"+o+"px)",$(".img_desc2").html(D[E])}}else Q||1!=t.touches.length||p(t);if(2===t.touches.length&&U){H.stop=s({x:t.touches[0].screenX,y:t.touches[0].screenY},{x:t.touches[1].screenX,y:t.touches[1].screenY});var g=H.stop/H.start;g>1?S+=.03:g<1&&(S-=.03),S<=2&&S>=1&&(b=e({x:event.touches[0].pageX,y:event.touches[0].pageY},{x:event.touches[1].pageX,y:event.touches[1].pageY})),S>=2?S=2:void 0,S<=1?S=1:void 0,r(t.target,S)}}}function I(t){"IMG"!=t.target.nodeName?this.flag&&(rt[this.index].style.webkitTransform="scale(1) translate(0,0)",rt[this.nextIndex].style.webkitTransform="translate(0,0)",rt[this.nextIndex].addEventListener("webkitTransitionEnd",function(){this.style.webkitTransition=""},!1),this.flag=!1):U=!1,$(t.target).attr("curImgIndex")&&Q&&d()}var w,b,T,k,_,M,X="transform",Y=!1,E=0,D=[],L=null,N=null,z=!0,H={},S=1,U=!1,q=parseInt($("#product1").css("width")),P=[],B=0,C=0,G=0,J=null,O=C,j=0,A=0,F=0,W=!1,K=(new Date).getTime(),Q=!0,R=!1,V=document.querySelector(".swx-hint-layer"),Z=document.querySelector(".hint-img-box"),tt=document.querySelector(".hint-change-icon"),et=document.querySelector(".swx-hint-txt"),st=document.querySelector(".swx-pic-play"),nt=document.getElementById("audio"),at=document.documentElement.clientWidth,it=document.documentElement.clientHeight,rt=$("li.section");void 0!==typeof document.body.style.webkitTransform?X="webkitTransform":void 0,st.addEventListener("touchstart",a,!1),$(".swx-music").bind("click",g),$(".swx-barrage").bind("click",m);var ct=parseInt($(".swx-pic-play").css("top"));h(),n(),f("data/example.json"),[].forEach.call(rt,function(){var t=arguments[0];t.index=arguments[1],t.addEventListener("touchstart",v,!1),t.addEventListener("touchmove",y,!1),t.addEventListener("touchend",I,!1)})})},function(t,e){}]);