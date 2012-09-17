$(document).on("ready",main);
var integ = [
        {"nombre":"Lina","twitter":"https://twitter.com/LinaAguirreG","tw-pic":"http://api.twitter.com/1/users/profile_image?screen_name=LinaAguirreG&size=bigger"},
        {"nombre":"Jonathan","twitter":"https://twitter.com/JonathanMG7","tw-pic":"http://api.twitter.com/1/users/profile_image?screen_name=JonathanMG7&size=bigger"},
        {"nombre":"Edwin","twitter":"https://twitter.com/edwinfmesa","tw-pic":"http://api.twitter.com/1/users/profile_image?screen_name=edwinfmesa&size=bigger"},
        {"nombre":"Ana Maria","twitter":"https://twitter.com/morenoanita123","tw-pic":"http://api.twitter.com/1/users/profile_image?screen_name=morenoanita123&size=bigger"},
        {"nombre":"Mauricio","twitter":"https://twitter.com/MaoAiz","tw-pic":"http://api.twitter.com/1/users/profile_image?screen_name=MaoAiz&size=bigger"}
    ];
var integ2=[];

function main(){
    generarOrder()
    $("#members > ul li").hover(function(){
        $(this).find("div").addClass("font-white");
    },function(){
        $(this).find("div").removeClass("font-white");
    })
    
}

function generarOrder(){
    integ2=generarArreglo(integ.length)
    for(i=0;i<integ.length;i++){
        $("#members ul").append("<li style='display:none'>"+
                        "<a href='"+integ[integ2[i]]["twitter"]+"' target='_blank'>"+
                            '<img class="avatar" src="'+integ[integ2[i]]["tw-pic"]+'" />'+
                            "<div>"+
                                integ[integ2[i]]["nombre"]+
                            "</div>"+
                        "</a>"+
                    "</li>")
         $("#members ul li").fadeIn(900)
    }
}
function generarArreglo(n){
    for(i=0;i<n;i++){
        var al=aleatorio(0,n-1)
        if(integ2.indexOf(al)==-1){
            integ2[integ2.length]=al;
        }
        else{
            i--;
        }
    }
    return integ2;
}

function aleatorio(inferior,superior){ 
   	numPosibilidades = superior - inferior 
   	aleat = Math.random() * numPosibilidades 
   	aleat = Math.round(aleat) 
   	return parseInt(inferior) + aleat 
}