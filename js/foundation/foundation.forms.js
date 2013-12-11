!function(s,t,e,n){"use strict";Foundation.libs.forms={name:"forms",version:"4.0.4",settings:{disable_class:"no-custom"},init:function(t,e,n){return this.scope=t||this.scope,"object"==typeof e&&s.extend(!0,this.settings,e),"string"!=typeof e?(this.settings.init||this.events(),this.assemble(),this.settings.init):this[e].call(this,n)},assemble:function(){s('form.custom input[type="radio"]',s(this.scope)).not('[data-customforms="disabled"]').each(this.append_custom_markup),s('form.custom input[type="checkbox"]',s(this.scope)).not('[data-customforms="disabled"]').each(this.append_custom_markup),s("form.custom select",s(this.scope)).not('[data-customforms="disabled"]').each(this.append_custom_select)},events:function(){var t=this;s(this.scope).on("change.fndtn.forms",'form.custom select:not([data-customforms="disabled"])',function(){t.refresh_custom_select(s(this))}).on("click.fndtn.forms","form.custom label",function(e){var n,i,o=s("#"+t.escape(s(this).attr("for"))+':not([data-customforms="disabled"])');0!==o.length&&("checkbox"===o.attr("type")?(e.preventDefault(),n=s(this).find("span.custom.checkbox"),0==n.length&&(n=s(this).next("span.custom.checkbox")),0==n.length&&(n=s(this).prev("span.custom.checkbox")),t.toggle_checkbox(n)):"radio"===o.attr("type")&&(e.preventDefault(),i=s(this).find("span.custom.radio"),0==i.length&&(i=s(this).next("span.custom.radio")),0==i.length&&(i=s(this).prev("span.custom.radio")),t.toggle_radio(i)))}).on("click.fndtn.forms","form.custom div.custom.dropdown a.current, form.custom div.custom.dropdown a.selector",function(e){var n=s(this),i=n.closest("div.custom.dropdown"),o=i.prev();return i.hasClass("open")||s(t.scope).trigger("click"),e.preventDefault(),!1===o.is(":disabled")?(i.toggleClass("open"),i.hasClass("open")?s(t.scope).on("click.fndtn.forms.customdropdown",function(){i.removeClass("open"),s(t.scope).off(".fndtn.forms.customdropdown")}):s(t.scope).on(".fndtn.forms.customdropdown"),!1):void 0}).on("click.fndtn.forms touchend.fndtn.forms","form.custom div.custom.dropdown li",function(t){var e=s(this),n=e.closest("div.custom.dropdown"),i=n.prev(),o=0;if(t.preventDefault(),t.stopPropagation(),!s(this).hasClass("disabled")){s("div.dropdown").not(n).removeClass("open");var a=e.closest("ul").find("li.selected");a.removeClass("selected"),e.addClass("selected"),n.removeClass("open").find("a.current").html(e.html()),e.closest("ul").find("li").each(function(s){e[0]==this&&(o=s)}),i[0].selectedIndex=o,i.data("prevalue",a.html()),i.trigger("change")}}),this.settings.init=!0},append_custom_markup:function(t,e){var n=s(e).hide(),i=n.attr("type"),o=n.next("span.custom."+i);0===o.length&&(o=s('<span class="custom '+i+'"></span>').insertAfter(n)),o.toggleClass("checked",n.is(":checked")),o.toggleClass("disabled",n.is(":disabled"))},append_custom_select:function(t,e){var n,i=Foundation.libs.forms,o=s(e),a=o.next("div.custom.dropdown"),d=a.find("ul"),c=(a.find(".current"),a.find(".selector")),l=o.find("option"),r=l.filter(":selected"),h=o.attr("class")?o.attr("class").split(" "):[],u=0,f="",m=!1;if(!o.hasClass(i.settings.disable_class)){if(0===a.length){var p=o.hasClass("small")?"small":o.hasClass("medium")?"medium":o.hasClass("large")?"large":o.hasClass("expand")?"expand":"";a=s('<div class="'+["custom","dropdown",p].concat(h).filter(function(s,t,e){return""==s?!1:e.indexOf(s)==t}).join(" ")+'"><a href="#" class="selector"></a><ul /></div>'),c=a.find(".selector"),d=a.find("ul"),f=l.map(function(){return"<li>"+s(this).html()+"</li>"}).get().join(""),d.append(f),m=a.prepend('<a href="#" class="current">'+r.html()+"</a>").find(".current"),o.after(a).hide()}else f=l.map(function(){return"<li>"+s(this).html()+"</li>"}).get().join(""),d.html("").append(f);if(a.toggleClass("disabled",o.is(":disabled")),n=d.find("li"),l.each(function(t){this.selected&&(n.eq(t).addClass("selected"),m&&m.html(s(this).html())),s(this).is(":disabled")&&n.eq(t).addClass("disabled")}),!a.is(".small, .medium, .large, .expand")){a.addClass("open");var i=Foundation.libs.forms;i.hidden_fix.adjust(d),u=i.outerWidth(n)>u?i.outerWidth(n):u,Foundation.libs.forms.hidden_fix.reset(),a.removeClass("open")}}},refresh_custom_select:function(t){var e=this,n=0,i=t.next(),o=t.find("option");i.find("ul").html(""),o.each(function(){var t=s("<li>"+s(this).html()+"</li>");i.find("ul").append(t)}),o.each(function(t){this.selected&&(i.find("li").eq(t).addClass("selected"),i.find(".current").html(s(this).html())),s(this).is(":disabled")&&i.find("li").eq(t).addClass("disabled")}),i.removeAttr("style").find("ul").removeAttr("style"),i.find("li").each(function(){i.addClass("open"),e.outerWidth(s(this))>n&&(n=e.outerWidth(s(this))),i.removeClass("open")})},toggle_checkbox:function(s){var t=s.prev(),e=t[0];!1===t.is(":disabled")&&(e.checked=e.checked?!1:!0,s.toggleClass("checked"),t.trigger("change"))},toggle_radio:function(s){var t=s.prev(),e=t.closest("form.custom"),n=t[0];!1===t.is(":disabled")&&(e.find('input[type="radio"][name="'+this.escape(t.attr("name"))+'"]').next().not(s).removeClass("checked"),s.hasClass("checked")||s.toggleClass("checked"),n.checked=s.hasClass("checked"),t.trigger("change"))},escape:function(s){return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},hidden_fix:{tmp:[],hidden:null,adjust:function(t){var e=this;e.hidden=t.parents().andSelf().filter(":hidden"),e.hidden.each(function(){var t=s(this);e.tmp.push(t.attr("style")),t.css({visibility:"hidden",display:"block"})})},reset:function(){var t=this;t.hidden.each(function(e){var i=s(this),o=t.tmp[e];o===n?i.removeAttr("style"):i.attr("style",o)}),t.tmp=[],t.hidden=null}},off:function(){s(this.scope).off(".fndtn.forms")}}}(Foundation.zj,this,this.document);