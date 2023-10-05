//once page was uploaded
$(document).ready(function () {
    //for each row in the grid add a click function on the stadium
    // that opens the popup and write the name of the stadium  
    const stadiums = $('.stadium');
    stadiums.click(function () {
        $('.popup').css('display', 'flex');
        $('#popup_title').text($(this).text().trim());
    });
});

$('.close').click(function () {
    $('.popup').css('display', 'none');
});

$('#plus').click(function () {
    $('#add_button').css('display', 'none');
    $('#add_details').css('display', 'flex');
});

$('#add_close').click(function () {
    $('#add_button').css('display', 'flex');
    $('#add_details').css('display', 'none');
});

const dateInput = $("#date");
const rivalInput = $("#rival");
const stadiumInput = $("#stadium");
const resultInput = $("#result");
const linkInput = $("#link");

document.addEventListener('keydown', async function (event) {
    var x = 1;
    // Check if the pressed key is Enter (key code 13)
    if (event.key === 'Enter') {
        // Prevent the default form submission behavior
        event.preventDefault();
        // Check if any of the input fields are empty
        if (!date || !rival || !stadium || !result) {
            alert("Please fill in all fields");
            return;
        }
        const regex = /^\d{1}-\d{1}$/;;
        if (regex.test(result))
        {
            alert("Please fill in all fields");
            return;
        }
        try {
            const response = await fetch('/games_maitianance/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Date: dateInput.val(),
                    Rival: rivalInput.val(),
                    Stadium: stadiumInput.val(),
                    Result: resultInput.val(),
                    Summary: linkInput.val(),
                }),
            });

            if (response.ok) {
                // Game creation succeeded
                const responseData = await response.json();
                addGridRow(); // You can call this function to update the UI
            } else {
                // Game creation failed
                const errorData = await response.json();
                alert(errorData.message);
            }
        } catch (error) {
            console.error(error);
        }
    }
});

function addGridRow() {
    // Get values from input fields
    const originalDate = dateInput.val().replace(/-/g, '.');
    // Split the date string into parts using the forward slash as the separator
    const parts = originalDate.split('.');
    // Rearrange the parts in the desired order (day, month, year)
    const reversedDate = `${parts[2]}.${parts[1]}.${parts[0]}`;

    const rival = rivalInput.val();
    const stadium = stadiumInput.val();
    const result = resultInput.val();
    const link = linkInput.val();

    // Table item access
    const gridContainer = $("#grid");

    // Create a bootstrap row with a date, rival, stadium, result and a summary link
    var rowHtml;
    if (link != null)
        rowHtml = `
        <div class="row">
            <div class="col-1">
            </div>
            <div class="col-2 text-right my-2 fs-4 d-flex align-items-center justify-content-center">
                ${reversedDate}
            </div>
            <div class="col-2 text-right my-2 fs-4 d-flex align-items-center justify-content-center">
                ${rival}
            </div>
            <div class="stadium col-2 my-2 fs-4 d-flex align-items-center justify-content-center">
                ${stadium}
            </div>
            <div class="col-2 text-right my-2 fs-4 d-flex align-items-center justify-content-center">
                ${result}
            </div>
            <div class="col-2">
                <iframe width="170" height="103" src="${link}" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>
        </div>`;
    else
        rowHtml = `
        <div class="row">
            <div class="col-1">
            </div>
            <div class="col-2 text-right my-2 fs-4 d-flex align-items-center justify-content-center">
                ${date}
            </div>
            <div class="col-2 text-right my-2 fs-4 d-flex align-items-center justify-content-center">
                ${rival}
            </div>
            <div class="stadium col-2 text-right my-2 fs-4 d-flex align-items-center justify-content-center">
                ${stadium}
            </div>
            <div class="col-2 text-right my-2 fs-4 d-flex align-items-center justify-content-center">
                ${result}
            </div>
        </div>`;
    // Add the row to the table item
    gridContainer.prepend(rowHtml);

    const stadiums = $('.stadium');
    stadiums.click(function () {
        $('.popup').css('display', 'flex');
        $('#popup_title').text($(this).text().trim());
    });

    // Clear input fields after adding the row
    dateInput.val('');
    rivalInput.val('');
    stadiumInput.val('');
    resultInput.val('');
    linkInput.val('');

    // Hide the input fields
    $('#add_button').css('display', 'flex');
    $('#add_details').css('display', 'none');
}