//$(document).ready(function(){
//    $('.ye-class').slick({
//        vertical: true,
//        accessibility:false,
//        slidesToShow:2,
//        infinite: true,
//        slidesToScroll: 1,
//        centerMode: true,
//        centerPadding: '50px',
//        autoplay: false,
//        autoplaySpeed: 3000,
//        responsive: [
//            {
//                breakpoint: 768,
//                settings: {
//                    slidesToShow: 1,
//                    vertical: false,
//                    centerMode: false
//                }
//            }
//      // You can unslick at a given breakpoint now by adding:
//      // settings: "unslick"
//      // instead of a settings object
//    });
//});


        $(document).ready(function(){
            $('.vertical_slider').slick({
                vertical: true,
                accessibility:false,
                slidesToShow:1,
                infinite: true,
                slidesToScroll: 2,
                centerMode: true,
                /* 컨텐츠의 위아래 여백조절*/
                centerPadding: '0px',
                autoplay: false,
                autoplaySpeed: 1500,
                
                arrows: false,
                /* 반응형 */
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            vertical: false,
                            centerMode: false
                        }
                    }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
                ]
                
            });
 
                       
            $('.slick-prev').click(function(){
               $('.vertical_slider').slick('slickPrev'); 
            });
            
            $('.slick-next').click(function(){
               $('.vertical_slider').slick('slickNext'); 
            });
            
            
                
//            
//                 // custom vertical slider highlight center slide
//
//        $(".slick-slide.slick-center").prev().addClass("slide-highlight");
//        $('.vertical_slider').on('afterChange', function(){
//            $(".slick-slide").removeClass("slide-highlight");
//            $(".slick-center").prev().addClass("slide-highlight");
//
//        });

 

    });