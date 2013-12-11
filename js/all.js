/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2013, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
var libFuncName=null;if("undefined"==typeof jQuery&&"undefined"==typeof Zepto&&"function"==typeof $)libFuncName=$;else if("function"==typeof jQuery)libFuncName=jQuery;else{if("function"!=typeof Zepto)throw new TypeError;libFuncName=Zepto}!function(t){!function(){Array.prototype.filter||(Array.prototype.filter=function(t){"use strict";if(null==this)throw new TypeError;var n=Object(this),i=n.length>>>0;if("function"!=typeof t)try{throw new TypeError}catch(e){return}for(var o=[],s=arguments[1],r=0;i>r;r++)if(r in n){var a=n[r];t&&t.call(s,a,r,n)&&o.push(a)}return o},Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var n=Array.prototype.slice.call(arguments,1),i=this,e=function(){},o=function(){return i.apply(this instanceof e&&t?this:t,n.concat(Array.prototype.slice.call(arguments)))};return e.prototype=this.prototype,o.prototype=new e,o})),t.fn.stop=t.fn.stop||function(){return this}}(),function(n){"use strict";n.Foundation={name:"Foundation",version:"4.0.8",cache:{},init:function(t,n,i,e,o,s){var r,a=[t,i,e,o],c=[],s=s||!1;if(s&&(this.nc=s),this.scope=t||this.scope,n&&"string"==typeof n){if(/off/i.test(n))return this.off();if(r=n.split(" "),r.length>0)for(var h=r.length-1;h>=0;h--)c.push(this.init_lib(r[h],a))}else for(var l in this.libs)c.push(this.init_lib(l,a));return"function"==typeof n&&a.unshift(n),this.response_obj(c,a)},response_obj:function(t,n){for(var i in n)if("function"==typeof n[i])return n[i]({errors:t.filter(function(t){return"string"==typeof t?t:void 0})});return t},init_lib:function(t,n){return this.trap(function(){return this.libs.hasOwnProperty(t)?(this.patch(this.libs[t]),this.libs[t].init.apply(this.libs[t],n)):void 0}.bind(this),t)},trap:function(t,n){if(!this.nc)try{return t()}catch(i){return this.error({name:n,message:"could not be initialized",more:i.name+" "+i.message})}return t()},patch:function(t){this.fix_outer(t)},inherit:function(t,n){for(var i=n.split(" "),e=i.length-1;e>=0;e--)this.lib_methods.hasOwnProperty(i[e])&&(this.libs[t.name][i[e]]=this.lib_methods[i[e]])},random_str:function(t){var n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split("");t||(t=Math.floor(Math.random()*n.length));for(var i="",e=0;t>e;e++)i+=n[Math.floor(Math.random()*n.length)];return i},libs:{},lib_methods:{set_data:function(t,n){var i=[this.name,+new Date,Foundation.random_str(5)].join("-");return Foundation.cache[i]=n,t.attr("data-"+this.name+"-id",i),n},get_data:function(t){return Foundation.cache[t.attr("data-"+this.name+"-id")]},remove_data:function(n){n?(delete Foundation.cache[n.attr("data-"+this.name+"-id")],n.attr("data-"+this.name+"-id","")):t("[data-"+this.name+"-id]").each(function(){delete Foundation.cache[t(this).attr("data-"+this.name+"-id")],t(this).attr("data-"+this.name+"-id","")})},throttle:function(t,n){var i=null;return function(){var e=this,o=arguments;clearTimeout(i),i=setTimeout(function(){t.apply(e,o)},n)}},data_options:function(n){function i(t){return!isNaN(t-0)&&null!==t&&""!==t&&t!==!1&&t!==!0}function e(n){return"string"==typeof n?t.trim(n):n}var o,s,r={},a=(n.attr("data-options")||":").split(";"),c=a.length;for(o=c-1;o>=0;o--)s=a[o].split(":"),/true/i.test(s[1])&&(s[1]=!0),/false/i.test(s[1])&&(s[1]=!1),i(s[1])&&(s[1]=parseInt(s[1],10)),2===s.length&&s[0].length>0&&(r[e(s[0])]=e(s[1]));return r},delay:function(t,n){return setTimeout(t,n)},scrollTo:function(i,e,o){if(!(0>o)){var s=e-t(n).scrollTop(),r=10*(s/o);this.scrollToTimerCache=setTimeout(function(){isNaN(parseInt(r,10))||(n.scrollTo(0,t(n).scrollTop()+r),this.scrollTo(i,e,o-10))}.bind(this),10)}},scrollLeft:function(t){return t.length?"scrollLeft"in t[0]?t[0].scrollLeft:t[0].pageXOffset:void 0},empty:function(t){if(t.length&&t.length>0)return!1;if(t.length&&0===t.length)return!0;for(var n in t)if(hasOwnProperty.call(t,n))return!1;return!0}},fix_outer:function(t){t.outerHeight=function(t,n){return"function"==typeof Zepto?t.height():"undefined"!=typeof n?t.outerHeight(n):t.outerHeight()},t.outerWidth=function(t){return"function"==typeof Zepto?t.width():"undefined"!=typeof bool?t.outerWidth(bool):t.outerWidth()}},error:function(t){return t.name+" "+t.message+"; "+t.more},off:function(){return t(this.scope).off(".fndtn"),t(n).off(".fndtn"),!0},zj:function(){try{return Zepto}catch(t){return jQuery}}()},t.fn.foundation=function(){var t=Array.prototype.slice.call(arguments,0);return this.each(function(){return Foundation.init.apply(Foundation,[this].concat(t)),this})}}(this,this.document)}(libFuncName),function(t,n){"use strict";Foundation.libs.topbar={name:"topbar",version:"4.0.0",settings:{index:0,stickyClass:"sticky",custom_back_text:!0,back_text:"Back",init:!1},init:function(i,e,o){var s=this;return this.scope=i||this.scope,"object"==typeof e&&t.extend(!0,this.settings,e),"string"!=typeof e?(t(".top-bar").each(function(){s.settings.$w=t(n),s.settings.$topbar=t(this),s.settings.$section=s.settings.$topbar.find("section"),s.settings.$titlebar=s.settings.$topbar.children("ul").first(),s.settings.$topbar.data("index",0);var i=t("<div class='top-bar-js-breakpoint'/>").insertAfter(s.settings.$topbar);s.settings.breakPoint=i.width(),i.remove(),s.assemble(),s.settings.$topbar.parent().hasClass("fixed")&&t("body").css("padding-top",s.outerHeight(s.settings.$topbar))}),s.settings.init||this.events(),this.settings.init):this[e].call(this,o)},events:function(){var i=this,e=this.outerHeight(t(".top-bar"));t(this.scope).on("click.fndtn.topbar",".top-bar .toggle-topbar",function(o){var s=t(this).closest(".top-bar"),r=s.find("section, .section");s.children("ul").first(),s.data("height")||i.largestUL(),o.preventDefault(),i.breakpoint()&&s.toggleClass("expanded").css("min-height",""),s.hasClass("expanded")||(r.css({left:"0%"}),r.find(">.name").css({left:"100%"}),r.find("li.moved").removeClass("moved"),s.data("index",0)),s.parent().hasClass("fixed")?(s.parent().removeClass("fixed"),t("body").css("padding-top","0"),n.scrollTo(0)):s.hasClass("fixed expanded")&&(s.parent().addClass("fixed"),t("body").css("padding-top",e))}).on("click.fndtn.topbar",".top-bar .has-dropdown>a",function(n){var e=t(this).closest(".top-bar"),o=e.find("section, .section"),s=e.children("ul").first();if((Modernizr.touch||i.breakpoint())&&n.preventDefault(),i.breakpoint()){var r=t(this),a=r.closest("li");e.data("index",e.data("index")+1),a.addClass("moved"),o.css({left:-(100*e.data("index"))+"%"}),o.find(">.name").css({left:100*e.data("index")+"%"}),r.siblings("ul").height(e.data("height")+i.outerHeight(s,!0)),e.css("min-height",e.data("height")+2*i.outerHeight(s,!0))}}),t(n).on("resize.fndtn.topbar",function(){this.breakpoint()||t(".top-bar").css("min-height","")}.bind(this)),t(this.scope).on("click.fndtn",".top-bar .has-dropdown .back",function(n){n.preventDefault();var i=t(this),e=i.closest(".top-bar"),o=e.find("section, .section"),s=i.closest("li.moved");s.parent(),e.data("index",e.data("index")-1),o.css({left:-(100*e.data("index"))+"%"}),o.find(">.name").css({left:100*e.data("index")+"%"}),0===e.data("index")&&e.css("min-height",0),setTimeout(function(){s.removeClass("moved")},300)})},breakpoint:function(){return t(n).width()<=this.settings.breakPoint||t("html").hasClass("lt-ie9")},assemble:function(){var n=this;this.settings.$section.detach(),this.settings.$section.find(".has-dropdown>a").each(function(){var i=t(this),e=i.siblings(".dropdown"),o=t('<li class="title back js-generated"><h5><a href="#"></a></h5></li>');1==n.settings.custom_back_text?o.find("h5>a").html("&laquo; "+n.settings.back_text):o.find("h5>a").html("&laquo; "+i.html()),e.prepend(o)}),this.settings.$section.appendTo(this.settings.$topbar),this.sticky()},largestUL:function(){var n=this.settings.$topbar.find("section ul ul"),i=n.first(),e=0,o=this;n.each(function(){t(this).children("li").length>i.children("li").length&&(i=t(this))}),i.children("li").each(function(){e+=o.outerHeight(t(this),!0)}),this.settings.$topbar.data("height",e)},sticky:function(){var i="."+this.settings.stickyClass;if(t(i).length>0){var e=t(i).length?t(i).offset().top:0,o=t(n),s=this.outerHeight(t(".top-bar"));o.scroll(function(){o.scrollTop()>=e?(t(i).addClass("fixed"),t("body").css("padding-top",s)):o.scrollTop()<e&&(t(i).removeClass("fixed"),t("body").css("padding-top","0"))})}},off:function(){t(this.scope).off(".fndtn.topbar"),t(n).off(".fndtn.topbar")}}}(Foundation.zj,this,this.document),function(){$(function(){return $(window).load(function(){return $("html").addClass("isReady"),$(".contain-to-grid").one("webkitTransitionEnd otransitionend transitionend").addClass("")}),$(document).foundation()})}.call(this),function(){jQuery(function(){})}.call(this),function(){jQuery(function(t){return t(".j-nav__box").click(function(){return t(".j-section-nav").toggleClass("reveal")}),t(".j-section-nav-close").click(function(){return t(".j-section-nav").toggleClass("reveal")})})}.call(this);