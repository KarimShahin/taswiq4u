const accountDetails = document.querySelector(".account__details");
const accountPopup = document.querySelector(".account__popup");

accountDetails.addEventListener("click", (e) => {
  e.stopPropagation();
  if (accountPopup.style.display == "none") {
    accountPopup.style.display = "block";
  } else {
    accountPopup.style.display = "none"
  }
})

document.body.addEventListener("click", () => {
  accountPopup.style.display = "none"
})