
$(function(){
    // $(".slideBox").hover(function(){
    //     $(this).children().stop().slideToggle(2000);
    // })
    $(".slideBox").click(function(){
        $(this).children().slideToggle();
    })

    $(".userBox").click(function(){
        $(".container2").toggle();
    })

    $(".container2").click(function(){
        $(".container2").toggle();
    })

    $(".btn1").click(function(){
        // give();
        sum();

    })

    $(".btn2").click(function(){
        rst();
        
    })
})