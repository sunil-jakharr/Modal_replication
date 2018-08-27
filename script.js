$(document).ready(function(){

    $(".button").click(function(){
        $(".modal").show();
    });

     $(".closebtn").click(function(){
        $(".modal").hide();
    });
    
    $("document").click(function(){
        $(".modal").hide();
    });

});