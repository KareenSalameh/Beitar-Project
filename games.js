const keys = require('./Config/keys');

var stadiums_locations = [
    { "stadium": "טדי", "latitude": "31.751152", "longitude": "35.190834" },
    { "stadium": "בלומפילד", "latitude": "32.051458", "longitude": "34.760413" },
    { "stadium": "נתניה", "latitude": "32.293820", "longitude": "34.864610" },
    { "stadium": "סמי עופר", "latitude": "32.783533", "longitude": "34.964782" },
  ];
var map;

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
        const location = findStadiumByName(my_stadium);
        console.log(location);
        GetMap(location);
    });
});

$('.close').click(function () {
    if (map) {
        map.dispose();
    }
    $('.popup').css('display', 'none');
});

function GetMap(location) {
    if (Microsoft && Microsoft.Maps) {
        console.log(location.latitude, location.longitude);
        var apiKey = keys.bingMapsApiKey;
        console.log(apiKey);
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


