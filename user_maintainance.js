//static data - should be remove after having a database access
//active users
/*const jsonData = [
    { "name": "avi", "last_name": "yahoo", "mail": "lucyhaim@gmail.com", "d_o_b": "28/09/1996", "picture":"../pictures/man1.jpg" },
    { "name": "yossi", "last_name": "benaiun", "mail": "balazor@gmail.com", "d_o_b": "23/04/1995","picture":"../pictures/man2.jpg" },
    { "name": "benni", "last_name": "bann", "mail": "n1baarez@gmail.com", "d_o_b": "21/04/1992", "picture":"../pictures/man3.jpg" }
];
//joining requests
const jsonData2 = [
    { "name": "arbel", "last_name": "yahoo", "mail": "lucyhaim@gmail.com", "d_o_b": "28/09/1999", "picture":"../pictures/man1.jpg", "when":"1998", "who":"vered","did":"no" },
    { "name": "reut", "last_name": "benaiun", "mail": "balazor@gmail.com", "d_o_b": "23/04/1999","picture":"../pictures/man2.jpg", "when":"1999", "who":"shua","did":"no!" },
    { "name": "daniel", "last_name": "bann", "mail": "n1baarez@gmail.com", "d_o_b": "21/04/1999", "picture":"../pictures/man3.jpg", "when":"התשב", "who":"glazer","did":"maybe" }
];*/
//table item access
const gridContainer = $("#grid");
const gridContainer2 = $("#grid2");

function generateBorder() {
    //add a border outside the table
    gridContainer.addClass("bord");
    gridContainer2.addClass("bord");
}

//once page was uploaded
$(document).ready(function() {
    //add rows to table and return their number
    //countrows = 
    generateBorder();
    const rowCountGrid2 = $('#grid2 .row').length - 2; //without the title and search fields
    //for each row added
    for (let index = 0; index < rowCountGrid2; index++) {
        //once clicking th plus image
        $('#plus' + index).click(async function() {
            const Email = $(this).closest('.row').find('.mail').text();
            console.log(Email);
            //display popup with the data from the specipic line
            //when connecting the page to database, these lines to be adjusted
            $('.popup').css('display', 'flex');
            try {
                const response = await fetch('/user_maintainance/quiz', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        Email: Email
                    }),
                });
        
                if (response.ok) {
                    // User status changed
                    const responseData = await response.json();
                    const when = $('#love');
                    const who = $('#player');
                    const did = $('#red');
                    console.log(responseData);
                    when.val(responseData.When);
                    who.val(responseData.Who);
                    did.val(responseData.Did);
                } else {
                    // Changing status failed
                    const errorData = await response.json();
                    alert(errorData.message);
                }
            } catch (error) {
                console.error(error);
            }
        });

    }

    $('.crud').click(function() {
        const action = $(this).attr('id').charAt(0);
        console.log(action);
        const EmailInput = $(this).attr('id').substring(1);
        console.log(EmailInput);
        const rowHTML = $(this).closest('.row');
        console.log(rowHTML.find('.mail').text());
        switch (action) {
            case 'A':
                changeUserStatus(EmailInput, 'Active', rowHTML)
                break;
            case 'R':
                changeUserStatus(EmailInput, 'Denied', rowHTML)
                break;

            default:
                break;
        }
    });
    
});

// once clicking the close button close the popup
$('.close').click(function() {
    $('.popup').css('display', 'none');
});

async function changeUserStatus(Email, Status, Row) {
    try {
        const response = await fetch('/user_maintainance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Email: Email,
                Status: Status
            }),
        });

        if (response.ok) {
            // User status changed
            const responseData = await response.json();
            if (Status == 'A') {
                // Clone the row
                const clonedRow = Row.clone();
                // Remove the original row from the second grid
                Row.remove();
                // Append the cloned row to the first grid
                gridContainer.append(clonedRow);
            } else if (Status == 'R') {
                // Remove the row from the second grid
                Row.remove();
            }
        } else {
            // Changing status failed
            const errorData = await response.json();
            alert(errorData.message);
        }
    } catch (error) {
        console.error(error);
    }
}
/*
function UpdateGrids() {
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
}*/