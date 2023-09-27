//static data - should be remove after having a database access
//games data
const jsonData = [
    { "date": "18/09/2023", "rival": "הפועל ירושלים", "stadium": "טדי", "result": "-", "summary":"https://www.youtube.com/embed/3W2BpOxguyA" },
    { "date": "12/09/2023", "rival": "מכבי תל אביב", "stadium": "בלומפילד", "result": "3-1","summary":"https://www.youtube.com/embed/bnv2w9ugs3A" },
    { "date": "31/08/2023", "rival": "בני יהודה", "stadium": "טדי", "result": "10-0", "summary":"https://www.youtube.com/embed/fdAabNAi0Xk" }
];

function generateGridRows(games) {
    //table item access
    const gridContainer = $("#grid");

    var i = 0;
    //for each object from the db
    games.forEach(item => {
        //create a bootstrap row with a date, rival name, stadium, result and a summary video
        const rowHtml = `
        <div class="row">
            <div class="col-1">
        
            </div>
            <div class="col-2 text-right my-2 fs-4 d-flex align-items-center justify-content-center">${item.date}</div>
            <div class="col-2 text-right my-2 fs-4 d-flex align-items-center justify-content-center">${item.rival}</div>
            <div class="col-2 text-right my-2 fs-4 d-flex align-items-center justify-content-center">${item.stadium}</div>
            <div class="col-2 text-right my-2 fs-4 d-flex align-items-center justify-content-center">${item.result}</div>
            <div class="col-2">
            <iframe width="170" height="103" src="${item.summary}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
        `;
        i++;
        //add the row to the table item
        gridContainer.append(rowHtml);
    });

    //return number of rows added
    return i;
}

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