const jsonData = [
    { "name": "avi", "last_name": "yahoo", "mail": "lucyhaim@gmail.com", "d_o_b": "28/09/1996", "picture":"man1.jpg" },
    { "name": "yossi", "last_name": "benaiun", "mail": "balazor@gmail.com", "d_o_b": "23/04/1995","picture":"man2.jpg" },
    { "name": "benni", "last_name": "bann", "mail": "n1baarez@gmail.com", "d_o_b": "21/04/1992", "picture":"man3.jpg" }
];

function generateGridRows(data) {
    const gridContainer = $("#grid");

    data.forEach(item => {
        const rowHtml = `
        <div class="row">
            <div class="col-2 text-center fs-5 my-2">
                    <div class="pics">
                    <img src="${item.picture}">
                </div>
            </div>
            <div class="col-2 text-center fs-5 my-2">${item.name}</div>
            <div class="col-2 text-center fs-5 my-2">${item.last_name}</div>
            <div class="col-2 text-center fs-5 my-2">${item.mail}</div>
            <div class="col-2 text-center fs-5 my-2 date">${item.d_o_b}</div>
            <div class="col-2 d-flex align-items-center">
                <button class="crud"><b>מחק</b></button>
            </div>
        </div>
        `;
        gridContainer.append(rowHtml);
    });
    gridContainer.addClass("bord");
}

generateGridRows(jsonData);