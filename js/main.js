$(document).ready(function () {  
    // 侧边栏收起功能  
    $("#sidebarToggle").click(function () {  
        $("#sidebar").toggleClass("collapsed");  
        $("#sidebarToggle").toggle(); // 隐藏当前按钮  
        $("#sidebarExpand").toggle(); // 显示展开按钮  
    });  

    // 侧边栏展开功能  
    $("#sidebarExpand").click(function () {  
        $("#sidebar").removeClass("collapsed");  
        $("#sidebarToggle").show(); // 显示收起按钮  
        $("#sidebarExpand").hide(); // 隐藏展开按钮  
    });  

    // 平滑滚动  
    $(".scroll-link").click(function (e) {  
        e.preventDefault();  
        var target = $(this).attr("href");  
        $("html, body").animate({  
            scrollTop: $(target).offset().top  
        }, 800);  
    });  

    $('.types__image-items').slick({  
        dots: true,          // 显示导航点  
        infinite: true,     // 无限循环  
        speed: 500,         // 切换速度  
        slidesToShow: 1,    // 显示的幻灯片数量  
        slidesToScroll: 1,  // 切换的幻灯片数量  
        autoplay: true,     // 自动播放  
        autoplaySpeed: 3000, // 每次播放间隔（毫秒）  
    });  
});  