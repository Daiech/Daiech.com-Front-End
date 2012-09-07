$(document).on("ready",main);

function main(){
    $("#members > ul li").hover(function(){
        $("#members > ul li a div").addClass("font-white")
    },function(){
        $("#members > ul li a div").removeClass("font-white")
    })
}