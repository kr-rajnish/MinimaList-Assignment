var modal = document.getElementById("myModal");
var openModalButton = document.querySelector("#viewButton");
var closeModalButton = document.getElementById("closeModalButton");
var chooseModalButton = document.getElementById("chooseModalButton");

openModalButton.addEventListener("click", function () {
  modal.style.display = "block";
});

closeModalButton.addEventListener("click", function () {
  modal.style.display = "none";
});

chooseModalButton.addEventListener("click", function () {
  alert("Item selected");
});
