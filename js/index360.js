webpackJsonp([1,0],[function(t,e,o){function i(){$("#main_img_work").each(function(t){$("<img/>").attr("src",$(C).attr("src")).load(function(){var t=this.width,e=this.height;if(M=t/e,P=Math.round(parseInt($("#wrap").css("height"))/2),q=parseInt($(".progress_bar").css("width")),E=parseInt($(".user_info").css("height")),k=Math.round(parseInt($("#wrap").css("height"))),L=k-E*(.05/1.1)*2,Y=k,X=(k-E*(.03/1.1)*2)*M,W=Math.round(parseInt($("#wrap").css("width"))/M),g(),$("#main_img_work").css("width",Math.round(P*M)),$("#marquePic2").css("left",Math.round(P*M)),marquePic2.innerHTML=marquePic1.innerHTML,$(".circleProgress_wrapper").css({width:Y,height:Y}),$(".circleProgress").css({width:Y,height:Y}),$("#magnifier_box").css({width:L,height:L}),$(".littleComment").remove(),Z&&Z.length>0)for(var o=0;o<Z.length;o++){""!=Z[o].userIcon&&null!=Z[o].userIcon&&void 0!=Z[o].userIcon||(Z[o].userIcon="./img/default_head.png");var i=parseInt(Z[o].x/t*Math.round(P*M)),r=parseInt(Z[o].y/e*Math.round(P)),n="<div class='littleComment' style='left:"+i+"px;top:"+r+"px ' >";n+="<img src="+Z[o].userIcon+" alt='comment'/>",n+="<span class='littleComment_span'>"+Z[o].text+"</span>",n+="</div>",$(".scroll-img-td").append(n)}tt?($(".littleComment").show(),$("#comment").attr("src","img/comment_y.png")):($(".littleComment").hide(),$("#comment").attr("src","img/comment_w.png"))})})}function r(){D=!1,$(".progress_bar").show(),$(".scroll-img-td").show(),$("#scroll-img").removeAttr("style"),$("#scrollImgBox").removeAttr("style"),g(),U=0,$(".user_info").css("top",0),$(".scroll-img").css("top",0),$(".describe").css("top",0),$(".icon_box").css("top",0)}function n(t,e){$(".leftCircle").css({"-webkit-transform":"rotate("+t+"deg)",transform:"rotate("+t+"deg)"}),$(".rightCircle").css({"-webkit-transform":"rotate("+e+"deg)",transform:"rotate("+e+"deg)"})}function s(t,e){a();var o=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,n=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;"turn"==e?($("#turn_div").find("img").attr("src","img/toCross.png"),$(".big_magnifier").show(),$("#magnifier_div").hide(),document.documentElement.style.fontSize="48px",i(),$(t).width(n),$(t).height(o),$(t).css({"transform-origin":"50% 50%","-webkit-transform-origin":"50% 50%",transform:"rotate(90deg) translate("+(n-o)/2+"px,"+(n-o)/2+"px)","-webkit-transform":"rotate(90deg) translate("+(n-o)/2+"px,"+(n-o)/2+"px)","-moz-transform":"rotate(90deg) translate("+(n-o)/2+"px,"+(n-o)/2+"px)","-ms-transform":"rotate(90deg) translate("+(n-o)/2+"px,"+(n-o)/2+"px)"}),g()):"back"==e&&(r(),$(t).removeAttr("style"),$("#turn_div").find("img").attr("src","img/toVertical.png"),$(".big_magnifier").hide(),$("#magnifier_div").hide(),$(".circleProgress_wrapper").hide(),document.documentElement.style.fontSize="48px",i(),g(),j=!0)}function a(){z=!0,$("#switch_div").find("img").attr("src","img/play.png"),clearInterval(B)}function c(){z=!1,$("#switch_div").find("img").attr("src","img/pause.png"),B=D?setInterval(function(){var t=parseInt(Y)/2,e=Math.round(X),o=parseInt($("#scrollImgBox").css("width"))-t;R?(x+=3,U+=Math.round(X)*(3/parseInt($("#scrollImgBox").css("width")))):(x-=3,U-=Math.round(X)*(3/parseInt($("#scrollImgBox").css("width")))),x>=o?R=!1:x<=-t?(x=-t,R=!0):void 0;var i=Math.round(X),r=t-U;if(r>t?r=t:r<=-i+t?r=-i+t:void 0,magnifierImg.style.left=r+"px",U/e>=0&&U/e<=.5){var s=-135+parseInt(360*(U/e));n(-135,s)}else if(U/e>.5&&U/e<=1){var a=-135+parseInt(360*(U/e)-180);n(a,45)}O.style.left=x+"px"},200):setInterval(function(){var t;t=parseInt($("#scrollImgBox").width())>marquePic1.offsetWidth?parseInt($("#scrollImgBox").width())-marquePic1.offsetWidth:0,g(),marquePic1.offsetWidth<=F.scrollLeft+t?F.scrollLeft=0:F.scrollLeft=F.scrollLeft+3},100)}function g(){var t;t=parseInt($("#scrollImgBox").width())>marquePic1.offsetWidth?parseInt($("#scrollImgBox").width())-marquePic1.offsetWidth:0,Q=q*F.scrollLeft/(marquePic1.offsetWidth-t),$(".auto_progress").css("width",Q),Q>=q?Q=0:void 0}function d(t,e){var o=parseInt(Y)/2,i=Math.round(X),r=parseInt($("#scrollImgBox").css("width"))-o;"slide"==e?(x+=t,R=!0,x>=r?x=r:x<=-o?x=-o:void 0,U+=Math.round(X)*(t/parseInt($("#scrollImgBox").css("width"))),U<=0?U=0:U>i?U=i:void 0):"scroll"==e&&(R?(x+=t,U+=Math.round(X)*(t/parseInt($("#scrollImgBox").css("width")))):(x-=t,U-=Math.round(X)*(t/parseInt($("#scrollImgBox").css("width")))),x>=r?R=!1:x<=-o?(x=-o,R=!0):void 0);var s=Math.round(X),a=o-U;if(a>o?a=o:a<=-s+o?a=-s+o:void 0,magnifierImg.style.left=a+"px",U/i>=0&&U/i<=.5){var c=-135+parseInt(360*(U/i));n(-135,c)}else if(U/i>.5&&U/i<=1){var g=-135+parseInt(360*(U/i)-180);n(g,45)}O.style.left=x+"px"}function l(t){g();var e;e=parseInt($("#scrollImgBox").width())>marquePic1.offsetWidth?parseInt($("#scrollImgBox").width())-marquePic1.offsetWidth:0,marquePic1.offsetWidth<=F.scrollLeft+e?F.scrollLeft=0:(F.scrollLeft=F.scrollLeft+t,F.scrollLeft<=0&&(F.scrollLeft=marquePic1.offsetWidth-(e+2),console.log(F.scrollLeft)),F.scrollLeft>=marquePic1.offsetWidth-e&&(F.scrollLeft=0))}function m(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function h(t,e){return{x:(t.x+e.x)/2,y:(t.y+e.y)/2}}function u(t,e){t.style.transform="matrix("+e+", 0, 0, "+e+",  0 , 0)";var o=(V-1)*(P*M/2),i=parseInt($("#wrap").css("width"))+o-P*M*V;parseInt($("#targetImg").css("left"))>=o&&(K=o,$("#targetImg").css({left:K})),parseInt($("#targetImg").css("left"))<=i&&(K=i,$("#targetImg").css({left:K}))}function p(t){K=0,b=1.1*parseInt(document.documentElement.style.fontSize),K=F.scrollLeft+parseInt($("#wrap").css("width"))>marquePic1.offsetWidth?-((marquePic1.offsetWidth-parseInt($("#wrap").css("width")))/marquePic1.offsetWidth)*(P*M):-(F.scrollLeft/marquePic1.offsetWidth)*(P*M),$("#targetImg").css({left:K+"px",top:b+"px"}),$(".modalImg").show(),J.start=m({x:t.touches[0].pageX,y:t.touches[0].pageY},{x:t.touches[1].pageX,y:t.touches[1].pageY})}function f(t){var e,o,i=t.touches[0],r=i.pageX,n=i.pageY,s=E-(P/2+E-P*V/2),a=s-(P*V-2*P),c=(V-1)*(P*M/2),g=parseInt($("#wrap").css("width"))+c-P*M*V;j?(e=(r-_)/10,o=(n-y)/10,K+=e,b+=o,o>=0?b>=s&&(b=s):P*V>=2*P?b<=a&&(b=a):b=s):(e=(n-y)/10,o=(r-_)/10,K+=e,b-=o,o<=0?b>=s&&(b=s):P*V>=2*P?b<=a&&(b=a):b=s),e>=0?K>=c&&(K=c):K<=g&&(K=g),$("#targetImg").css({left:K,top:b})}function w(t){t.preventDefault(),2===t.touches.length?J.start=m({x:t.touches[0].pageX,y:t.touches[0].pageY},{x:t.touches[1].pageX,y:t.touches[1].pageY}):1===t.touches.length&&(_=t.touches[0].pageX,y=t.touches[0].pageY)}o(1);var v;!function(){function t(){v=document.documentElement.clientWidth>360?360:document.documentElement.clientWidth,document.documentElement.style.fontSize=v/7.5+"px"}t(),$(window).on("resize",function(){t(),i()})}(),$.fn.longPress=function(t){for(var e=void 0,o=this,i=0;i<o.length;i++)o[i].addEventListener("touchstart",function(o){function i(e){return function(){t(e)}}e=setTimeout(i(o),1e3)},!1),o[i].addEventListener("touchend",function(){clearTimeout(e)},!1)},$(".scroll-img-td").longPress(function(t){var e=F.scrollLeft+t.targetTouches[0].pageX;e>marquePic1.offsetWidth&&(e-=marquePic1.offsetWidth)});var I,x,_,y,b,P,L,X,W,Y,q,M,B,E,k,C=$(".scroll-img-td img"),z=!0,j=!0,D=!1,H=0,T=0,S=0,A=0,J={},V=1,F=document.getElementById("scrollImgBox"),G=document.getElementById("modalImg"),K=0,N=document.getElementById("magnifier_box"),O=document.getElementById("circleProgress_wrapper"),Q=0,R=!0,U=0,Z=[{x:120,y:50,text:"太美了",userIcon:"./img/user.jpg"},{x:700,y:90,text:"这是哪儿",userIcon:"./img/user.jpg"},{x:2300,y:450,text:"真的好漂亮啊！！",userIcon:"./img/user.jpg"},{x:2830,y:150,text:"一起去玩吧！",userIcon:""},{x:150,y:250,text:"风景不错",userIcon:"./img/user.jpg"},{x:280,y:550,text:"拍的真好啊",userIcon:"./img/user.jpg"}],tt=!1;i(),$("#switch_div").on("click",function(){z?c():a()}),$("#comment_div").on("click",function(){tt=!tt,tt?($(".littleComment").show(),$("#comment").attr("src","img/comment_y.png")):($(".littleComment").hide(),$("#comment").attr("src","img/comment_w.png"))}),$(".big_magnifier").on("click",function(){a();var t=$(C).attr("src");if(magnifierImg.style.left=parseInt(Y)/2+"px",$(".scroll-img-td").hide(),$("#scroll-img").css("height",W),$("#scrollImgBox").css({background:"url("+t+") no-repeat","background-size":"auto 100%"}),90==window.orientation||window.orientation==-90||!j){var e=k/2-(2*E+W)/2;$(".user_info").css("top",e+"px"),$(".scroll-img").css("top",e+"px"),$(".describe").css("top",e+"px"),$(".icon_box").css("top",e+"px")}D=!0,x=-(parseInt(Y)/2),O.style.left=-(parseInt(Y)/2)+"px",$(".big_magnifier").hide(),$("#magnifier_div").show(),$(".progress_bar").hide(),$(".circleProgress_wrapper").show(),n(-135,-135),U=0}),$("#magnifier_div").on("click",function(){a(),D?($(".circleProgress_wrapper").hide(),$("#magnifier_div").show(),$(".big_magnifier").hide(),r()):($(".big_magnifier").show(),$("#magnifier_div").hide())}),$("#turn_div").on("click",function(){var t=window.screen.width,e=window.screen.height;parseInt(e)>parseInt(t)&&(0!=window.orientation&&180!=window.orientation||(j?(j=!1,s(".wrap","turn")):(j=!0,s(".wrap","back"))))}),$(window).bind("orientationchange",function(){90==window.orientation||window.orientation==-90?(s(".wrap","back"),$(".big_magnifier").show(),$("#magnifier_div").hide()):(r(),$(".big_magnifier").hide(),$("#magnifier_div").hide(),$(".circleProgress_wrapper").hide())}),90!=window.orientation&&window.orientation!=-90||$(".big_magnifier").show();var et=function(t){a(),S=t.touches[0].pageX,A=t.touches[0].pageY},ot=function(t){t.preventDefault();var e=t.touches[0],o=e.pageX,i=e.pageY,r=i-A,n=o-S;j?void 0:n=r,n/=50,d(n,"slide")},it=function(t){if(t.preventDefault(),a(),H=t.touches[0].pageX,T=t.touches[0].pageY,90==window.orientation||window.orientation==-90?$("#magnifier_div").show():j?$("#magnifier_div").hide():$("#magnifier_div").show(),$(".big_magnifier").hide(),2===t.touches.length){var e=k-(P+E),o=e+P;j||t.touches[0].pageX>e&&t.touches[1].pageX>e&&t.touches[0].pageX<o&&t.touches[1].pageX<o&&p(t),(90==window.orientation||window.orientation==-90||j)&&t.touches[0].pageY>E&&t.touches[1].pageY>E&&t.touches[0].pageY<P+E&&t.touches[1].pageY<P+E&&p(t)}},rt=function(t){t.preventDefault();var e=t.touches[0],o=e.pageX,i=e.pageY,r=i-T,n=o-H;if(j?void 0:n=r,n*=-1,n/=10,2===t.touches.length){J.stop=m({x:t.touches[0].pageX,y:t.touches[0].pageY},{x:t.touches[1].pageX,y:t.touches[1].pageY});var s=J.stop/J.start;s>1?V+=.05:s<1&&(V-=.08),V<=10&&V>=1&&(I=h({x:t.touches[0].pageX,y:t.touches[0].pageY},{x:t.touches[1].pageX,y:t.touches[1].pageY})),V>=10?V=10:void 0,V<=1?V=1:void 0,u(targetImg,V)}else l(n)},nt=function(t){if(t.preventDefault(),2===t.touches.length){J.stop=m({x:t.touches[0].pageX,y:t.touches[0].pageY},{x:t.touches[1].pageX,y:t.touches[1].pageY});var e=J.stop/J.start;e>1?V+=.05:e<1&&(V-=.08,V<=1&&$(".modalImg").hide()),V<=10&&V>=1&&(I=h({x:t.touches[0].pageX,y:t.touches[0].pageY},{x:t.touches[1].pageX,y:t.touches[1].pageY})),V>=10?V=10:void 0,V<=1?V=1:void 0,u(targetImg,V)}else 1===t.touches.length&&f(t)};F.addEventListener("touchstart",it,!1),F.addEventListener("touchmove",rt,!1),G.addEventListener("touchstart",w,!1),G.addEventListener("touchmove",nt,!1),N.addEventListener("touchstart",et,!1),N.addEventListener("touchmove",ot,!1)},function(t,e){}]);