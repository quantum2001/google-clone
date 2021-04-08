let searchInput = document.getElementById("search");
let cancelButton = document.getElementById("cancel");
searchInput.addEventListener("keyup", () => {
  if (searchInput.value.length > 0) {
    cancelButton.style.opacity = "1";
  } else {
    cancelButton.style.opacity = "0";
  }
});
cancelButton.addEventListener("click", () => {
  searchInput.value = "";
  cancelButton.style.opacity = "0";
});

let serviceButton = document.getElementById("service-button");
let serviceNav = document.getElementById("service");
let userButton = document.getElementById("user-button");
let userNav = document.getElementById("user");

serviceButton.addEventListener("click", () => {
  if (serviceNav.style.display == "flex") {
    serviceNav.style.display = "none";
  } else {
    serviceNav.style.display = "flex";
    userNav.style.display = "none";
  }
});
userButton.addEventListener("click", (event) => {
  if (userNav.style.display == "flex") {
    userNav.style.display = "none";
  } else {
    userNav.style.display = "flex";
    serviceNav.style.display = "none";
  }
  console.log(event.target);
});
