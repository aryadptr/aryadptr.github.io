function animasiIntro(){
    $("#text #judul").velocity(
        "transition.slideLeftIn",
        {stagger: 150,
        complete: function(){
            animasiBtnStart();
            }   
        }
    );
}

function animasiBtnStart(){
    $("#btn-start").velocity("transition.bounceUpIn")
    .mouseenter(function(){
        $(this).velocity({width: 100});
    })
    .mouseleave(function(){
        $(this).velocity({width: 125});
    });
}

function animasiIntroOut(){
    $("#btn-start").attr('disabled', true).css({"color":"black"});
    $("#btn-start").velocity(
        "transition.whirlOut",
        {stagger: 150,
        complete: function(){
            $("#text").velocity({
                "font-size":"20px",
                "top":"95%"
                }, {
                duration: 1000,
                complete: function(){
                    callMenu();
                    $("#menu ul li a[href='whatWeDo']").trigger("click");
                    $("#btn-start").attr('disabled', false).css({"color":"black"});
                }
                });
            }   
        }
    );
}

function callMenu(){
    $("#menu ul li").velocity(
        "transition.slideLeftIn",
        {stagger: 250
        }
    );
    $("#menu ul li a").off().click(function(event){
        event.preventDefault();
        $(this).parent("li").addClass("active");
        $(this).parent("li").siblings().removeClass("active");

        var hrefString = $(this).attr("href");
        if(hrefString == "backToIntro"){
            backToIntro();
        }else{    
            if(!$("#"+hrefString).is(":visible")){
                $(".container-content").fadeOut(1000);
                setTimeout(function(){
                    
                    $("#"+hrefString).show();
                    window[hrefString]();
                }, 1000);
            }
        }
    });
}

function whatWeDo(){
    $("#whatWeDo img").velocity("transition.flipYIn", {duration: 1500});
    $("#whatWeDo .title").velocity("transition.slideUpIn", {duration: 1500});
    $("#whatWeDo div").velocity("transition.slideDownIn", {duration: 1500});
}

function myPortfolio(){
    $(".project.top240").velocity("transition.slideUpIn", {stagger: 100});
    $(".project.top170").velocity("transition.slideDownIn", {stagger: 100});
}

function backToIntro(){
    $("#menu ul li").hide();
    $(".container-content").hide();
    $("#text").velocity({
        "font-size":"90px",
        "top":"40%"
    }, {
        duration: 1000,
        complete: function(){
            $("#btn-start").velocity("transition.whirlIn");
        }
    });
}

$(document).ready(function(){
    animasiIntro();
});