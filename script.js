// Get references to the modal and buttons
var modal = document.getElementById("myModal");
var openModalButton = document.querySelector("#viewButton");
var closeModalButton = document.getElementById("closeModalButton");
var chooseModalButton = document.getElementById("chooseModalButton");

// Event listener to open the modal
openModalButton.addEventListener("click", function () {
  modal.style.display = "block";
});

// Event listeners to close the modal
closeModalButton.addEventListener("click", function () {
  modal.style.display = "none";
});

chooseModalButton.addEventListener("click", function () {
  //   modal.style.display = "none";
  alert("Item selected");
});
