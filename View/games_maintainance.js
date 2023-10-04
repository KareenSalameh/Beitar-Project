//once page was uploaded
$(document).ready(function() {
    //for each row in the grid add a click function on the stadium
    // that opens the popup and write the name of the stadium  
    const stadiums = $('.stadium');
    stadiums.click(function() {
        $('.popup').css('display', 'flex');
        $('#popup_title').text($(this).text().trim());
    });    
});

$('.close').click(function() {
    $('.popup').css('display', 'none');
});