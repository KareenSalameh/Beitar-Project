const error = document.getElementById('error-massage');

if(location.href.endsWith("?error=1"))
{
    error.style.display = "block";
    $("#error-massage").find(".modal-header").html('@ViewBag.UserMessage');
    $("#error-massage").find(".modal-body").html('@ViewBag.UserMessage');
    $("#error-massage").modal('show');
}

function closeModal() {
    error.style.display = "none";
}
$("#btnHideModal").click(function () {
    $("#error-massage").modal('hide');
});
