
//when clicking the quiz button the popup will be shown
//when clicking the close it will disappear
document.getElementById("button").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "flex";
});
document.querySelector(".close").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none";

});