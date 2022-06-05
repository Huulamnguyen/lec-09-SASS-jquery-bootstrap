$(function(){
   $(".tabLinks").click(function(){
    for(let i = 0; i < $(".content").length; i++){
        $(".content")[i].style.display = "none";
    }
    let targetCity = `#${$(this).text()}`
    if(targetCity === "#London"){
        $(`${targetCity}`).css("display", "block")
    } else if (targetCity === "#Paris"){
        $(`${targetCity}`).css("display", "block")
    } else {
        $(`${targetCity}`).css("display", "block")
    }
   })
})