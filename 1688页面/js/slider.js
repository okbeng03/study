var main=function(){
var content=$('.banner-content'),
    oli=$('.banner-content li')[0].offsetWidth,
    len=$('.banner-img').find('li').length,
    index= 0,
    offset= 0,
    time=300,
    currentIndex=0;
    content.css('width',oli*len+'px');

    timer=setInterval(function() {
        if (index < len - 1) {
            index++;
        }
        else {
            index = 0;
        }
        console.log(index);
        $('.banner-click li').removeClass('current').eq(index).addClass('current');
        $('.banner-img').animate({
                "left": "-" + oli * index + 'px'
            },
            time);
    },3000);

        $('.banner-click li').hover(function () {
            clearInterval(timer);
            $('.banner-click li').removeClass('current');
            $(this).addClass('current');
            currentIndex = $(this).index();
            offset = (currentIndex - index) * oli;
            console.log(offset);
            $('.banner-img').animate({left: '-'+offset + 'px'}, time);
        });
    };
    //×Ô¶¯²¥·Å
    //setInterval(function(){
    //    console.log(index);
    //     if(index<3) {
    //         if (index ===len - 1) {
    //             $('.banner-img li:first').css( 'left', oli * (len+1) + 'px');
    //             console.log($('.banner-img li:first').position());
    //             console.log($('.banner-img li:first'));
    //         }
    //         $('.banner-click li').removeClass('current').eq(index).addClass('current');
    //         $('.banner-img').animate({left: '-'+oli*index+'px'}, time);
    //         index++;
    //     }
    //    else {
    //
    //         index=0;
    //     }
    //
    //},3000)



$(document).ready(main);