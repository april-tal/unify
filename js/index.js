var galleryTop = new Swiper('.gallery-top', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10,
        loop:true,
        slidesPerView: 'auto',
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 3,
        loop:true,
        slidesPerView: 'auto',
        loopedSlides:3,
        touchRatio: 0.2,
        slideToClickedSlide: true,
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;

    var mySwiper = new Swiper ('.swiper-container2', {
    loop: true,
   
    
    // 如果需要分页器
    pagination: '.swiper-pagination',
    
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
    
  })
    var mySwiper = new Swiper ('.swiper-container5', {
    loop: true,
   
    
    // 如果需要分页器
    pagination: '.swiper-pagination',
    
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
    
  })

    var mySwiper = new Swiper ('.swiper-container3', {
    loop: true,
    autoplay : 2000,
    
    // 如果需要分页器
    pagination: '.swiper-pagination',
    
 
    
  })

    var mySwiper = new Swiper ('.swiper-container4', {
    loop: true,
    autoplay : 2000,
    
    // 如果需要分页器
    pagination: '.swiper-pagination',
    
 
    
  })

		$(".g-brd-y:first span img").click(function(){
			$(".collapse").toggle()
		})

		$(".g-brd-y ul li").click(function(){
			$(this).css("border-color","#777")
		})

		$(".size ul li").click(function(){
			var ind = $(this).index()
			$(this).eq(ind).addClass("color").siblings().removeClass("color")			
		})
		$(".quanti .jia").click(function(){
			  var n = $(".quanti>input").val()
			  var num = Number(n) + 1
			 $(".quanti>input").val(num)
			 console.log(num)

		});
		$(".quanti .jian").click(function(){
			  var n = $(".quanti>input").val()
			  var num = Number(n) - 1		
			  if(num <= 1){
			 	num = 1
			 }
			 $(".quanti>input").val(num)
		});

		$(".tablist li a").click(function(){
			var ind = $(this).parent().index()
			$(".tab-b>div").eq(ind).addClass("active")
			$(".tab-b>div").eq(ind).siblings().removeClass("active")
		})

		$(".u-basket a").click(function(){
			$(".gwc").slideToggle(300)
		})
		

		$(".nav-bar>li:eq(1)").mouseenter(function(){
			$(".grid").css("display","block")
		})
		$(".nav-bar>li:eq(1)").mouseleave(function(){
			$(".grid").css("display","none")
		})

		$(".nav-bar>li:nth-child(3) a").mouseenter(function(){
			$(".pic-2").css("display","block")
		})
		$(".nav-bar>li:nth-child(3)").mouseleave(function(){
			$(".pic-2").css("display","none")
		})

		$(".nav-bar>li:nth-child(4) a").mouseenter(function(){
			$(".pic-3").css("display","block")
		})
		$(".nav-bar>li:nth-child(4)").mouseleave(function(){
			$(".pic-3").css("display","none")
		})

		$(".nav-bar>li:nth-child(5) a").mouseenter(function(){
			$(".pic-4").css("display","block")
		})
		$(".nav-bar>li:nth-child(5)").mouseleave(function(){
			$(".pic-4").css("display","none")
		})

		$(".nav-bar>li:nth-child(6) a").mouseenter(function(){
			$(".pic-5").css("display","block")
		})
		$(".nav-bar>li:nth-child(6)").mouseleave(function(){
			$(".pic-5").css("display","none")
		})

		$(".nav-bar>li:nth-child(7) a").mouseenter(function(){
			$(".pic-6").css("display","block")
		})
		$(".nav-bar>li:nth-child(7)").mouseleave(function(){
			$(".pic-6").css("display","none")
		})
		$(".menu").click(function(){
			if($(".nav-bar").hasClass("visuallyhidden")){
				$('.nav-bar').removeClass("visuallyhidden");
				$(".menu").addClass("closer");
			} else {
				$('.nav-bar').addClass("visuallyhidden");
				$(".menu").removeClass("closer")
			}
		})

		$(".pic-d a").click(function(){
			var ind = $(this).index()	
			$(".picbox>a").eq(ind).find("img").addClass("show")
			$(".picbox>a").eq(ind).siblings("a").find("img").removeClass("show")
		})
		$(".g-brd-y>ul>li").click(function(){
			var index = $(this).index()
			$(this).css("border","black")
		})

		$(".color1").mouseenter(function(){
			$(this).find(".sport").css("bottom",7+'%')
			$(this).find(".sport h2").css("color","#58c7a7")
			$(".pic-44 img").css("width","calc(100% + 60px)")
		})

		$(".color1").mouseleave(function(){
			$(this).find(".sport").css("bottom",-7+'%')
			$(this).find(".sport h2").css("color","#fff")
		})
		
		$(".search").click(function(){
			$(".searchform").slideToggle(200)
		})

		$(".footer-down li").hover(function(){
			var ind = $(this).index()
			$(".footer-down li").eq(ind).find("img").css("display","block")
		},function(){
			$(".footer-down li").children("img").css("display","none")
		})