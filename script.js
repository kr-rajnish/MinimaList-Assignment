const modal = document.getElementById("myModal");
const openModalButton = document.querySelector("#viewButton");
const closeModalButton = document.getElementById("closeModalButton");
const chooseModalButton = document.getElementById("chooseModalButton");

openModalButton.addEventListener("click", function () {
  modal.style.display = "block";
});

closeModalButton.addEventListener("click", function () {
  modal.style.display = "none";
});

chooseModalButton.addEventListener("click", function () {
  alert("Item selected");
});
