
$(function (){

    var galleryImage = $(".visual-imgs").find('img').first();
    var images = [
        "imgs/19.jpg",
        "imgs/18.jpg",
        "imgs/17.jpg",
        'imgs/16.jpg',
        'imgs/15.jpg',
        'imgs/13.jpg'
    ];

    var i = 0 ;
    setInterval(function(){
        i = (i+1) % images.length;
        galleryImage.slideUp(function(){
            $(this).attr('src', images[i]);
            $(this).fadeIn();
        });

        console.log(galleryImage.attr('src'));

    }, 2000);

    // $('.header-text').on('', function moveText() {
        
    //     $('.header-text').fadeOut(2000).fadeIn();
    // })

    $('.header-text').mouseover(function () { 
        $('.header-text').slideUp(2000).fadeIn();
    });

    $('.box2').mouseover(function () { 
            $('.box2').animate({
                "margin-left":"+285px"
            },1000).animate({
                "margin-left":"-185px"

            },1000).animate({
                "margin-left":"-8px"
            },1000)
    });
    $('.box5').mouseover(function () { 
            $('.box5').animate({
                "margin-left":"+285px"
            },1000).animate({
                "margin-left":"-185px"

            },1000).animate({
                "margin-left":"-8px"
            },1000)
    });

    

    var galleryMenu = $('.gallery-menu');
    var isHide = 'is-hide';
    var hideAll = $('.hideAll') ;

    $('.gallery-btn').on('click', function(){
        galleryMenu.removeClass(isHide);
        hideAll.css({"display":"none"});
    })


    galleryMenu.on('click', hideFunc);
    function hideFunc(){
        
        galleryMenu.addClass(isHide);
        hideAll.css({"display":"block"})

}

    
    

    })




    