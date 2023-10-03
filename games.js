
var countrows;
//once page was uploaded
$(document).ready(function() {
    //add rows to table and return their number
    countrows = generateGridRows(jsonData);

    //for each row added
    for (let index = 0; index < countrows; index++) {
        //once clicking th plus image
        $('#plus' + index).click(function() {
            //moving the counter to different variable for preventing ambguity
            const dataIndex = index;

            $('.popup').css('display', 'flex');
            $('#love').val(jsonData2[dataIndex]["when"]);
            $('#player').val(jsonData2[dataIndex]["who"]);
            $('#red').val(jsonData2[dataIndex]["did"]);
        });
    }
    
});

$('.close').click(function() {
    $('.popup').css('display', 'none');
});