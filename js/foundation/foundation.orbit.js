!function(t,s,e,i){"use strict";Foundation.libs=Foundation.libs||{},Foundation.libs.orbit={name:"orbit",version:"4.0.0",settings:{timer_speed:1e4,animation_speed:500,bullets:!0,stack_on_small:!0,container_class:"orbit-container",stack_on_small_class:"orbit-stack-on-small",next_class:"orbit-next",prev_class:"orbit-prev",timer_container_class:"orbit-timer",timer_paused_class:"paused",timer_progress_class:"orbit-progress",slides_container_class:"orbit-slides-container",bullets_container_class:"orbit-bullets",bullets_active_class:"active",slide_number_class:"orbit-slide-number",caption_class:"orbit-caption",active_slide_class:"active",orbit_transition_class:"orbit-transitioning"},init:function(s,e){var i=this;Foundation.inherit(i,"data_options"),"object"==typeof e&&t.extend(!0,i.settings,e),t("[data-orbit]",s).each(function(s,e){var n=t.extend(!0,{},i);n._init(s,e)})},_container_html:function(){var t=this;return'<div class="'+t.settings.container_class+'"></div>'},_bullets_container_html:function(s){var e=this,i=t('<ol class="'+e.settings.bullets_container_class+'"></ol>');return s.each(function(s){var n=t('<li data-orbit-slide-number="'+(s+1)+'" class=""></li>');0===s&&n.addClass(e.settings.bullets_active_class),i.append(n)}),i},_slide_number_html:function(s,e){var i=this,n=t('<div class="'+i.settings.slide_number_class+'"></div>');return n.append("<span>"+s+"</span> of <span>"+e+"</span>"),n},_timer_html:function(){var t=this;return"number"==typeof t.settings.timer_speed&&t.settings.timer_speed>0?'<div class="'+t.settings.timer_container_class+'"><span></span><div class="'+t.settings.timer_progress_class+'"></div></div>':""},_next_html:function(){var t=this;return'<a href="#" class="'+t.settings.next_class+'">Next <span></span></a>'},_prev_html:function(){var t=this;return'<a href="#" class="'+t.settings.prev_class+'">Prev <span></span></a>'},_init:function(s,e){var i=this,n=t(e),a=n.wrap(i._container_html()).parent(),r=n.children();t.extend(!0,i.settings,i.data_options(n)),a.append(i._prev_html()),a.append(i._next_html()),n.addClass(i.settings.slides_container_class),i.settings.stack_on_small&&a.addClass(i.settings.stack_on_small_class),a.append(i._slide_number_html(1,r.length)),a.append(i._timer_html()),i.settings.bullets&&a.after(i._bullets_container_html(r)),n.append(r.first().clone().attr("data-orbit-slide","")),n.prepend(r.last().clone().attr("data-orbit-slide","")),n.css("marginLeft","-100%"),r.first().addClass(i.settings.active_slide_class),i._init_events(n),i._init_dimensions(n),i._start_timer(n)},_init_events:function(n){var a=this,r=n.parent();t(s).on("load.fndtn.orbit",function(){n.height(""),n.height(n.height(r.height())),n.trigger("orbit:ready")}).on("resize.fndtn.orbit",function(){n.height(""),n.height(n.height(r.height()))}),t(e).on("click.fndtn.orbit","[data-orbit-link]",function(s){s.preventDefault();var e=t(s.currentTarget).attr("data-orbit-link"),i=n.find("[data-orbit-slide="+e+"]").first();1===i.length&&(a._reset_timer(n,!0),a._goto(n,i.index(),function(){}))}),r.siblings("."+a.settings.bullets_container_class).on("click.fndtn.orbit","[data-orbit-slide-number]",function(s){s.preventDefault(),a._reset_timer(n,!0),a._goto(n,t(s.currentTarget).data("orbit-slide-number"),function(){})}),r.on("orbit:after-slide-change.fndtn.orbit",function(t,s){var e=r.find("."+a.settings.slide_number_class);1===e.length&&e.replaceWith(a._slide_number_html(s.slide_number,s.total_slides))}).on("orbit:next-slide.fndtn.orbit click.fndtn.orbit","."+a.settings.next_class,function(t){t.preventDefault(),a._reset_timer(n,!0),a._goto(n,"next",function(){})}).on("orbit:prev-slide.fndtn.orbit click.fndtn.orbit","."+a.settings.prev_class,function(t){t.preventDefault(),a._reset_timer(n,!0),a._goto(n,"prev",function(){})}).on("orbit:toggle-play-pause.fndtn.orbit click.fndtn.orbit touchstart.fndtn.orbit","."+a.settings.timer_container_class,function(s){s.preventDefault();var e=t(s.currentTarget).toggleClass(a.settings.timer_paused_class),i=e.closest("."+a.settings.container_class).find("."+a.settings.slides_container_class);e.hasClass(a.settings.timer_paused_class)?a._stop_timer(i):a._start_timer(i)}).on("touchstart.fndtn.orbit",function(t){t.touches||(t=t.originalEvent);var s={start_page_x:t.touches[0].pageX,start_page_y:t.touches[0].pageY,start_time:(new Date).getTime(),delta_x:0,is_scrolling:i};r.data("swipe-transition",s),t.stopPropagation()}).on("touchmove.fndtn.orbit",function(t){if(t.touches||(t=t.originalEvent),!(t.touches.length>1||t.scale&&1!==t.scale)){var s=r.data("swipe-transition");if("undefined"==typeof s&&(s={}),s.delta_x=t.touches[0].pageX-s.start_page_x,"undefined"==typeof s.is_scrolling&&(s.is_scrolling=!!(s.is_scrolling||Math.abs(s.delta_x)<Math.abs(t.touches[0].pageY-s.start_page_y))),!s.is_scrolling&&!s.active){t.preventDefault(),a._stop_timer(n);var e=s.delta_x<0?"next":"prev";s.active=!0,a._goto(n,e,function(){})}}}).on("touchend.fndtn.orbit",function(t){r.data("swipe-transition",{}),t.stopPropagation()})},_init_dimensions:function(t){var s=t.parent(),e=t.children();t.css("width",100*e.length+"%"),e.css("width",100/e.length+"%"),t.height(s.height()),t.css("width",100*e.length+"%")},_start_timer:function(t){var s=this,e=t.parent(),i=function(){s._reset_timer(t,!1),s._goto(t,"next",function(){s._start_timer(t)})},n=e.find("."+s.settings.timer_container_class),a=n.find("."+s.settings.timer_progress_class),r=a.width()/n.width(),l=s.settings.timer_speed-r*s.settings.timer_speed;a.animate({width:"100%"},l,"linear",i),t.trigger("orbit:timer-started")},_stop_timer:function(t){var s=this,e=t.parent(),i=e.find("."+s.settings.timer_container_class),n=i.find("."+s.settings.timer_progress_class),a=n.width()/i.width();s._rebuild_timer(e,100*a+"%"),t.trigger("orbit:timer-stopped"),i=e.find("."+s.settings.timer_container_class),i.addClass(s.settings.timer_paused_class)},_reset_timer:function(t,s){var e=this,i=t.parent();if(e._rebuild_timer(i,"0%"),"boolean"==typeof s&&s){var n=i.find("."+e.settings.timer_container_class);n.addClass(e.settings.timer_paused_class)}},_rebuild_timer:function(s,e){var i=this,n=s.find("."+i.settings.timer_container_class),a=t(i._timer_html()),r=a.find("."+i.settings.timer_progress_class);if("function"==typeof Zepto)n.remove(),s.append(a),r.css("width",e);else if("function"==typeof jQuery){var l=n.find("."+i.settings.timer_progress_class);l.css("width",e),l.stop()}},_goto:function(s,e,i){var n=this,a=s.parent(),r=s.children(),l=s.find("."+n.settings.active_slide_class),o=l.index();if(a.hasClass(n.settings.orbit_transition_class))return!1;"prev"===e?0===o?o=r.length-1:o--:"next"===e?o=(o+1)%r.length:"number"==typeof e&&(o=e%r.length),o===r.length-1&&"next"===e?(s.css("marginLeft","0%"),o=1):0===o&&"prev"===e&&(s.css("marginLeft","-"+100*(r.length-1)+"%"),o=r.length-2),a.addClass(n.settings.orbit_transition_class),l.removeClass(n.settings.active_slide_class),t(r[o]).addClass(n.settings.active_slide_class);var _=a.siblings("."+n.settings.bullets_container_class);1===_.length&&(_.children().removeClass(n.settings.bullets_active_class),t(_.children()[o-1]).addClass(n.settings.bullets_active_class));var c="-"+100*o+"%";s.trigger("orbit:before-slide-change"),s.css("marginLeft")===c?(a.removeClass(n.settings.orbit_transition_class),s.trigger("orbit:after-slide-change",[{slide_number:o,total_slides:s.children().length-2}]),i()):s.animate({marginLeft:c},n.settings.animation_speed,"linear",function(){a.removeClass(n.settings.orbit_transition_class),s.trigger("orbit:after-slide-change",[{slide_number:o,total_slides:s.children().length-2}]),i()})}}}(Foundation.zj,this,this.document);