import React, { useEffect, useRef } from "react";
import { gsap, Power2, Power3 } from "gsap";


export default function Loader() {
    let wrap = useRef(null)
    useEffect(()=>{
        PageLoad();
    }, [])

    function PageLoad() {	
		// Page Navigation Events
		function initOnFirstLoad() {
		
			document.waitForImages({
				finished: function() {
					gsap.to((".percentage-intro, .percentage"), {duration: 2.0, opacity:0, y:-10, delay:0, ease:Power2.easeInOut});
					gsap.to((".preloader-intro"), {duration: 2.0, fopacity:1, y:-400, delay:0.2, ease:Power2.easeInOut});						
					gsap.to(wrap, {duration: 2.0, yPercent: -101, delay:0.7, ease:Power2.easeInOut});
					gsap.set(wrap, {visibility:'hidden', delay:1.7, opacity:0});					
					setTimeout(function(){
						document.waitForImages({
							finished: function() {
								gsap.to((".header-middle, #footer-container, .showcase-counter, .swiper-pagination-bullet-active .counter"), {duration: 1, opacity:1, delay:0, ease:Power2.easeOut}); 										
							},
							waitForAll: true
						});
						
						if( ('.hero-video-wrapper').length > 0 ){
							('#hero-image-wrapper').find('video').each(function() {
								(this).get(0).play();
							}); 
						}
						
						gsap.to(("#main"), {duration: 0, opacity:1, delay:0, ease:Power2.easeOut});//modified time
						if( ('#hero').hasClass("has-image")) {								
							gsap.set(("#hero-bg-image"), {scale:1.1 , opacity:0});
							gsap.to(("#hero-bg-image"), {duration: 1, force3D:true, scale:1 , opacity:1, delay:0.2, ease:Power2.easeOut});							
							gsap.to((".hero-arrow"), {duration: 0.5, force3D:true, y:-60, opacity:1, delay:0.6, ease:Power2.easeOut});
							gsap.set(("#hero .hero-subtitle span"), {y: 60, opacity:0});					
							gsap.to(("#hero .hero-subtitle span"), {duration: 0.7, y: 0, opacity:1, stagger:0.1, delay:0.6, ease:Power3.easeOut});
							gsap.to(("#hero-caption .hero-title span"), {y: 120, opacity:0});					
							gsap.to(("#hero-caption .hero-title span"), {duration: 1, y: 0, opacity:1, stagger:0.1, delay:0.7, ease:Power3.easeOut});
							gsap.to((".hero-footer-right"), {duration: 1, force3D:true, y:0, opacity:1, rotation:0, delay:0.8, ease:Power2.easeOut});																				
							gsap.to(("#main-page-content, #page-nav"), {duration: 0.4, opacity:1, delay:1.15, ease:Power2.easeOut});
						} else {
							gsap.to((".hero-arrow"), {duration: 0.5, force3D:true, y:-60, opacity:1, delay:0.5, ease:Power2.easeOut});							
							gsap.set(("#hero .hero-subtitle span"), {y: 60, opacity:0});					
							gsap.to(("#hero .hero-subtitle span"), {duration: 0.7, y: 0, opacity:1, stagger:0.1, delay:0.5, ease:Power3.easeOut});			
							gsap.to(("#hero-caption .hero-title span"), {y: 120, opacity:0});					
							gsap.to(("#hero-caption .hero-title span"), {duration: 1, y: 0, opacity:1, stagger:0.1, delay:0.6, ease:Power3.easeOut});
							gsap.to((".hero-footer-right"), {duration: 0.7, force3D:true, y:0, opacity:1, rotation:0, delay:0.8, ease:Power2.easeOut});									
							gsap.to(("#main-page-content, #page-nav"), {duration: 0.7, opacity:1, delay:1.1, ease:Power2.easeOut});
							gsap.to((".error-button"), {duration: 0.4, y: 0, opacity:1, rotation:0, delay:1, ease:Power2.easeOut});				
						}	
						
						
						// Fading In Showcase Slider elements on Finised
						if( !('#canvas-slider').hasClass("active")) {	
							gsap.set(('#canvas-slider'), {opacity:1, scale:1.1});
							gsap.to(('#canvas-slider'), {duration: 0.7, opacity:1, scale:1, delay:0.2, ease:Power2.easeOut});
						}
						gsap.set(("#showcase-slider-holder"), {opacity:0});															
						gsap.to(("#showcase-slider-holder"), {duration: 0.7, opacity:1, delay:0.3, ease:Power2.easeOut});
						gsap.to((".showcase-pagination"), {duration: 0.3, opacity:1, delay:0.1, ease:Power2.easeOut});
						gsap.to((".swiper-pagination-bullet-active").find('.translate-element span'), {duration: 0.5, y:0, opacity:1, delay:0.4, stagger: 0.05, ease:Power2.easeOut});				
						
						
						// Fading In Showcase Carousel elements on Finised
						gsap.set(("#showcase-carousel-holder"), {opacity:0});
						gsap.to(("#showcase-carousel-holder"), {duration: 0.7, opacity:1, delay:0.8, ease:Power2.easeOut});
						var slideWidth = ("#showcase-carousel-holder .swiper-slide").width()*0.5;
						gsap.set(("#showcase-carousel-holder .swiper-slide-active").prev().prev(), {x:-slideWidth, opacity:0});
						gsap.set(("#showcase-carousel-holder .swiper-slide-active").next().next(), {x:slideWidth, opacity:0});
						gsap.set(("#showcase-carousel-holder .swiper-slide-active").prev(), {x:-slideWidth, opacity:0});
						gsap.set(("#showcase-carousel-holder .swiper-slide-active").next(), {x:slideWidth, opacity:0});								
						gsap.to(("#showcase-carousel-holder .swiper-slide-active").prev().prev(), {duration: 0.7, x:0, delay:0.9, opacity:1, ease:Power2.easeOut});
						gsap.to(("#showcase-carousel-holder .swiper-slide-active").next().next(), {duration: 0.7, x:0, delay:0.9, opacity:1, ease:Power2.easeOut});
						gsap.to(("#showcase-carousel-holder .swiper-slide-active").prev(), {duration: 0.7, x:0, scale:1, delay:0.7, opacity:1, ease:Power2.easeOut});
						gsap.to(("#showcase-carousel-holder .swiper-slide-active").next(), {duration: 0.7, x:0, scale:1, delay:0.7, opacity:1, ease:Power2.easeOut});
						
						
						
						gsap.set((".swiper-prev, .swiper-next, .swiper-pagination-bullet"), {opacity:0});	
						gsap.to((".swiper-prev, .swiper-next, .swiper-pagination-bullet"), {duration: 0.3, y:0, opacity:1, rotation:0, delay:0.3, ease:Power2.easeOut});
						
						setTimeout( function(){	
							('#showcase-slider-holder, #showcase-carousel-holder, .showcase-list-holder').addClass("loaded");
						} , 1500 );
						var tlSmallTitles = gsap.timeline();					
						(".slide-small-title span").each(function(index, element) {
							tlSmallTitles.to(element, {duration: 0.5, force3D:true, y:0, opacity:1, delay:1, ease:Power2.easeOut}, index * 0.05)
						});
						
						
						
						var SlideListTitle = gsap.timeline();					
						(".sl-title span, .split-title span").each(function(index, element) {
							SlideListTitle.to(element, {duration: 0.7, force3D:true, y:0, opacity:1, delay:0.5, ease:Power2.easeOut}, index * 0.05)
						});
						
						var SlideListSubtitle = gsap.timeline();					
						(".sl-subtitle span, .split-subtitle span").each(function(index, element) {
							SlideListSubtitle.to(element, {duration: 0.7, force3D:true, y:0, opacity:1, delay:0.6, ease:Power2.easeOut}, index * 0.05)
						});
							
						setTimeout( function(){
							('.slide-list').addClass('show-borders')
						} ,300 );
							
						setTimeout( function(){	
							document.removeClass("load-project-page").removeClass("load-project-page-carousel");
						} , 600 );
						
						setTimeout( function(){	
							document.removeClass("load-next-project");
							document.addClass("header-visible");
							('#showcase-holder').removeClass("disabled");
						} , 1600 );
						
						setTimeout( function(){	
							document.removeClass("show-loader")
						} , 800 );	
						
					} , 600 );
				},
			waitForAll: true
		});
				
		}
		
		
		if (!document.hasClass("disable-ajaxload")) {
			
			
			
			var swapOpts = {
				slides: document.querySelectorAll('.preloader-list'),
				list: document.querySelector('.preloader-intro'),
				duration: 0,
				lineHeight: ('.preloader-intro').height()
			}
			
			var swapSlide = gsap.timeline({
				paused: true,
				repeat: -1
			});
			
			swapOpts.slides.forEach(function(slide, i) {
				// Create a label
				let label = "slide" + i;
				swapSlide.add(label);
				
				// Move the whole word
				if(i > 0) {
					swapSlide.to(swapOpts.slides, {
					  duration: swapOpts.duration,
					  y: i * -1 * swapOpts.lineHeight,
					}, label);
					
					// Add some blank space before the next animation
					swapSlide.to({}, {duration: 0.15});
				}
			})
			swapSlide.play();
			
			
			var width = 0,
				perfData = window.performance.timing, 
				EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
				time = ((EstimatedTime/100)%500) * 10
				
			// Loadbar Animation
			(".loadbar").animate({
				width: width + "%"
			}, time  );	
			
			// Percentage Increment Animation
			var PercentageID = ("#precent"),
					start = 0,
					end = 100,
					durataion = time + 0;
					animateValue(PercentageID, start, end, durataion);
					
			function animateValue(id, start, end, duration) {
			  
				var range = end - start,
				  current = start,
				  increment = end > start? 1 : -1,
				  stepTime = Math.abs(Math.floor(duration / range)),
				  obj = (id);
				
				var timer = setInterval(function() {
					current += increment;
					(obj).text(current);
				  //obj.innerHTML = current;
					if (current == end) {
						clearInterval(timer);
					}
				}, stepTime);
			}
			
			// Fading Out Loadbar on Finised
			setTimeout(function(){
				swapSlide.pause()
				
				initOnFirstLoad();
		  
			}, time);
		
		} else {
			
			initOnFirstLoad();
		}
		
		
	}// End Page Load

    return (
        <div ref={el => wrap = el} class="preloader-wrap" data-firstline="Stay" data-secondline="Relaxed">
            <div class="outer">
                <div class="inner">
                    <div class="trackbar">
                        <ul class="preloader-intro">
                            <li class="preloader-list">Hello</li>
                            <li class="preloader-list">Bonjour</li>
                            <li class="preloader-list">स्वागत हे</li>
                            <li class="preloader-list">Ciao</li>
                            <li class="preloader-list">Olá</li>
                        </ul>
                        <div class="loadbar"></div>
                    </div>
                    <div class="percentage-wrapper"><div class="percentage" id="precent"></div></div>
                    <div class="percentage-intro">Please Wait</div>
                </div>
            </div>
        </div>
    );
}
