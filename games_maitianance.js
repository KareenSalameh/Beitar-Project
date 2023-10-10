var stadiums_locations = [
    { "stadium": "טדי", "latitude": "31.751152", "longitude": "35.190834" },
    { "stadium": "בלומפילד", "latitude": "32.051458", "longitude": "34.760413" },
    { "stadium": "נתניה", "latitude": "32.293820", "longitude": "34.864610" },
    { "stadium": "סמי עופר", "latitude": "32.783533", "longitude": "34.964782" },
  ];

var map;

//const keys = require('./Config/keys');

function findStadiumByName(stadiumName) {
    return stadiums_locations.find(function(location) {
        return location.stadium === stadiumName;
    });
}

//once page was uploaded
$(document).ready(function () {
    //for each row in the grid add a click function on the stadium
    // that opens the popup and write the name of the stadium  
    const stadiums = $('.stadium');
    stadiums.click(function () {
        $('.popup').css('display', 'flex');
        $('#popup_title').text($(this).text().trim());
        my_stadium = $('#popup_title').text();
        //const location = findStadiumByName(my_stadium);
        //console.log(location);
        //GetMap(location);
    });
});
/*
function GetMap(location) {
    if (Microsoft && Microsoft.Maps) {
        console.log(location.latitude, location.longitude);
        var apiKey = keys.bingMapsApiKey;

        // Make a geocoding request
        $.ajax({
            url: 'https://dev.virtualearth.net/REST/v1/Locations?q=' + location.stadium + '&key=' + apiKey,
            method: 'GET',
            dataType: 'json',
            success: function(data) {
                if (map) {
                    // Dispose of the existing map
                    map.dispose();
                }
                // Initialize the map with the obtained coordinates
                map = new Microsoft.Maps.Map('#myMap', {
                    center: new Microsoft.Maps.Location(location.latitude
                        ,location.longitude ),
                    zoom: 16
                });
            },
            error: function(error) {
                // Handle errors here
                console.log(error);
            }
        });
    }
}
*/
$('.close').click(function () {
    if (map) {
        map.dispose();
    }
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
                addGridRow();
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
        my_stadium = $('#popup_title').text();
        //const location = findStadiumByName(my_stadium);
        //console.log(location);
        //GetMap(location);
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