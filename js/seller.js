const accountDetails = document.querySelector(".account__details");
const accountPopup = document.querySelector(".account__popup");
const heartIcon = document.querySelectorAll(".wishlist__icon");

accountDetails.addEventListener("click", (e) => {
  e.stopPropagation();
  if (accountPopup.style.display == "none") {
    accountPopup.style.display = "block";
  } else {
    accountPopup.style.display = "none"
  }
})

heartIcon.forEach(heart => heart.addEventListener("click", (e) => {
	console.log(e.target.src.split("/")[e.target.src.split("/").length -1])
	if (e.target.src.split("/")[e.target.src.split("/").length -1] == "heart.svg")
		e.target.src = "../assets/images/heart-fill.svg"
	else
		e.target.src = "../assets/images/heart.svg"
}))

document.body.addEventListener("click", () => {
  accountPopup.style.display = "none"
})