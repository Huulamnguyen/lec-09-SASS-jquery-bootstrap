$(function(){
    $("#submitBtn").click(function(e){
        e.preventDefault();
        let newRow = `<tr>
                            <td>${$("#name").val()}</td>
                            <td>${$("#category").val()}</td>
                            <td>${$("#price").val()}</td>
                            <td><button class="delete">Delete</button></td>
                        </tr>`

        // Add new row to the table
        $("#mainTable").children()[0].innerHTML += newRow;
        for (let i = 0; i < $("input").length - 1; i++) {
            $("input")[i].value = "";
        }

        // handle delete button
        $(".delete").click(function(){
            $(this).parent().parent().hide()
        })
    })
})