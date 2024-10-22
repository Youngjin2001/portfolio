$(document).ready(function(){
    let win = $(window).width();
    if(win < 800){
        mobile()
    }else{
        tab_pc()
    }

    function mobile(){
        $(".nav").children("li").on("click",function(){
            let i = $(this).index()
            let offTop = $("section").children(".art").eq(i+1).offset().top;
            $("html,body").animate({"scrollTop" : offTop})
        })

        let a = true
        $(".bookmark").on("click",function(){
            a = !a;
            if(a == false){
                $(".book").animate({'left' : '0%'},1000);
            }else{
                $(".book").animate({'left' : '95.2%'},1000);
            }
        })

        $(".art").on("mousewheel",function(e){
            let O = $(window).scrollTop()
            let Top = $("section").children(".art").eq(2).offset().top;
            // let offTop = $("section").children(".art").eq(i).offset().top;
            // let col = $('.nav').children('li').eq(i-1).text();
            // let foTop = $("section").children(".art").eq(6).offset().top;
            
            // 글자 나타나기
            if(O > (Top - 150)){
                $("h2").addClass("af");
                $("h2").removeClass("bf");
            
            }else{
                $("h2").addClass("bf");
                $("h2").removeClass("af");
            }
            // // 글자 바꾸기
            // if(i >= 1 && i <= 5 && a > offTop && a < (foTop - 300)){
            //     $("h2").text(col)
            // }else if(i >= 0 && i < 1 && a > (foTop - 300)){
            //     $("h2").css('display', 'none')
            // }

        })


    }// mobile

    function tab_pc(){

        $(".nav").children("li").on("click",function(){
            let i = $(this).index()
            let offTop = $("section").children(".art").eq(i + 1).offset().top;
            $("html,body").animate({"scrollTop" : offTop})
        })
        $(".art").on("mousewheel",function(e,d){
            let a = $(window).scrollTop()
            let Top = $("section").children(".art").eq(1).offset().top;

            if(d<0){
                // 마우스 휠을 내렸을 때 이벤트
                let nxt = $(this).next().offset().top;
                $("html,body").stop().animate({"scrollTop":nxt})
            }else if(d>0){
                // 마우스 휠을 올렸을 때 이벤트
                let prv = $(this).prev().offset().top;
                $("html, body").stop().animate({"scrollTop":prv})
            }

            if(a > (Top - 150)){
                $("h2").addClass("af");
                $("h2").removeClass("bf");
            
            }else{
                $("h2").addClass("bf");
                $("h2").removeClass("af");
            }
        })

        var tl = gsap.timeline();
        tl.from("h1",{x:300,y:-300,duration:2,opacity:0})
        tl.from(".y_string",{y:300,duration:2,opacity:0})
        tl.from(".text",{x:300,duration:2,opacity:0})
        tl.from(".nav",{x:-300,duration:2,opacity:0})
        tl.from(".skill",{x:-300,duration:2,opacity:0})
        tl.from(".txt_box",{x:300,duration:2,opacity:0})
        tl.from(".button",{x:300,duration:2,opacity:0})

    }



    $(window).on("resize",function(){
        document.location.reload()
    })

})