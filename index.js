$(document).ready(function(){
    var $button =$(".s_cover").find("span");
    var $active =$(".s_header").find("#h_title");

    $button.on("click", function(ev){
        $active.toggleClass(".active");
    })

})
