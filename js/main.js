$(document).ready(function () {  
    // 平滑滚动  
    $(".scroll-link").click(function (e) {  
        e.preventDefault();  
        var target = $(this).attr("href");  
        $("html, body").animate({  
            scrollTop: $(target).offset().top  
        }, 800);  
    });  
});  
