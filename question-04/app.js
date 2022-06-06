$(function(){
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
        dataType: "json",
        success: function(result, status, xhr){
            for(let user of result){
                $("ul").append(`<li>${user.name}</li>`)
            }
        },
        error: function(xhr, status, error){
            alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
        }
    })
})