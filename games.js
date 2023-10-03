

//once page was uploaded
$(document).ready(function() {
    //add rows to table and return their number
    const stadiums = $('.stadium');

    //for each row added
    stadiums.click(function() {
        $('.popup').css('display', 'flex');
        $('#popup_title').text($(this).text().trim());
    });    
});

$('.close').click(function() {
    $('.popup').css('display', 'none');
});