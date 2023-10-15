//when clicking the close it will disappear
document.getElementById("createGroup").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "flex";
});
document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
});
const nameInput = $("#name");
const descInput = $("#description");
const imgInput = $("#image");
const user = 'avi.98@gmail.com';
$('#send').click(async function () {
    if (!nameInput || !user) {
        alert("Name is empty or session expired");
        return;
    }
    try {
        const response = await fetch('/fid/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Name: nameInput.val(),
                Manager: user,
                Description: descInput.val(),
                Image: imgInput.val()
            }),
        });

        if (response.ok) {
            // Group creation succeeded
            const responseData = await response.json();
            alert(responseData.message);
        } else {
            // Game creation failed
            const errorData = await response.json();
            alert(errorData.message);
        }
    } catch (error) {
        console.error(error);
    }
});