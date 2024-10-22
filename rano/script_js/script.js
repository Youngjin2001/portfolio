$(document).ready(function(){

    let a = true;

        $(".h_wrap").children(".row2").children(".iq").on("click",function(){
            a = !a;
            if(a == false){
                $(".input").stop().slideDown(500);
            }else{
                $(".input").stop().slideUp(500);
            }
        })
})