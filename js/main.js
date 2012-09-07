$(document).on("ready",main);

function main(){
    $("#members > ul li").hover(function(){
        $(this).find("div").addClass("font-white");
    },function(){
        $(this).find("div").removeClass("font-white");
    })
}