//static data - should be remove after having a database access
//active users
const jsonData = [
    { "name": "avi", "last_name": "yahoo", "mail": "lucyhaim@gmail.com", "d_o_b": "28/09/1996", "picture":"man1.jpg" },
    { "name": "yossi", "last_name": "benaiun", "mail": "balazor@gmail.com", "d_o_b": "23/04/1995","picture":"man2.jpg" },
    { "name": "benni", "last_name": "bann", "mail": "n1baarez@gmail.com", "d_o_b": "21/04/1992", "picture":"man3.jpg" }
];
//joining requests
const jsonData2 = [
    { "name": "arbel", "last_name": "yahoo", "mail": "lucyhaim@gmail.com", "d_o_b": "28/09/1999", "picture":"man1.jpg", "when":"1998", "who":"vered","did":"no" },
    { "name": "reut", "last_name": "benaiun", "mail": "balazor@gmail.com", "d_o_b": "23/04/1999","picture":"man2.jpg", "when":"1999", "who":"shua","did":"no!" },
    { "name": "daniel", "last_name": "bann", "mail": "n1baarez@gmail.com", "d_o_b": "21/04/1999", "picture":"man3.jpg", "when":"התשב", "who":"glazer","did":"maybe" }
];

function generateGridRows(active_users, request_users) {
    //table item access
    const gridContainer = $("#grid");
    const gridContainer2 = $("#grid2");

    //for each object from the db
    active_users.forEach(item => {
        //create a bootstrap row with an image, name, last name, mail, date of birth and a delete button
        const rowHtml = `
        <div class="row">
            <div class="col-1 text-center fs-5 my-2">
                    <div class="pics">
                    <img src="${item.picture}">
                </div>
            </div>
            <div class="col-2 text-center my-2">${item.name}</div>
            <div class="col-2 text-center my-2">${item.last_name}</div>
            <div class="col-2 text-center my-2">${item.mail}</div>
            <div class="col-2 text-center my-2 date">${item.d_o_b}</div>
            <div class="col-1 d-flex align-items-center justify-content-center">
                <button class="crud"><b>מחק</b></button>
            </div>
        </div>
        `;
        //add the row to the table item
        gridContainer.append(rowHtml);
    });

    var i = 0;
    //for each object from the db
    request_users.forEach(item => {
        //create a bootstrap row with an image, name, last name, mail, date of birth and buttons for accepting, denying and
        //showing the quiz answers
        const rowHtml = `
        <div class="row">
            <div class="col-1 text-center fs-5 my-2">
                    <div class="pics">
                    <img src="${item.picture}">
                </div>
            </div>
            <div class="col-2 text-center my-2">${item.name}</div>
            <div class="col-2 text-center my-2">${item.last_name}</div>
            <div class="col-2 text-center my-2 mail">${item.mail}</div>
            <div class="col-2 text-center my-2 date">${item.d_o_b}</div>
            <div class="col-1 plus">
                <img src="plus.jpg" id="plus${i}">
            </div>
            <div class="col-1 d-flex align-items-center accept">
                <button class="crud"><b>אשר</b></button>
            </div>
            <div class="col-1 d-flex align-items-center deny">
                <button class="crud"><b>דחה</b></button>
            </div>
        </div>
        `;
        i++;
        //add the row to the table item
        gridContainer2.append(rowHtml);
    });
    //add a border outside the table
    gridContainer.addClass("bord");
    gridContainer2.addClass("bord");

    //return number of rows added
    return i;
}

var countrows;
//once page was uploaded
$(document).ready(function() {
    //add rows to table and return their number
    countrows = generateGridRows(jsonData, jsonData2);

    //for each row added
    for (let index = 0; index < countrows; index++) {
        //once clicking th plus image
        $('#plus' + index).click(function() {
            //moving the counter to different variable for preventing ambguity
            const dataIndex = index;

            //display popup with the data from the specipic line
            //when connecting the page to database, these lines to be adjusted
            $('.popup').css('display', 'flex');
            $('#love').val(jsonData2[dataIndex]["when"]);
            $('#player').val(jsonData2[dataIndex]["who"]);
            $('#red').val(jsonData2[dataIndex]["did"]);
        });
    }
    
});

// once clicking the close button close the popup
$('.close').click(function() {
    $('.popup').css('display', 'none');
});