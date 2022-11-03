const likeIcons = document.querySelectorAll(".like__icon");
const accountDetails = document.querySelector(".account__details");
const accountPopup = document.querySelector(".account__popup");
const cards = document.querySelectorAll(".card");
const adModal = document.querySelector(".report__ad__modal");
const closeModalBtn = document.querySelector(".close__modal__btn")

likeIcons.forEach(likeIcon => likeIcon.addEventListener("click", (e) => {
	e.stopPropagation()
	if (e.target.src.split("/")[5] === "like.png") {
		e.target.src = "../assets/images/active_like.png"
	} else if (e.target.src.split("/")[5] === "active_like.png") {
		e.target.src = "../assets/images/like.png"
	}
}))

cards.forEach(card => card.addEventListener("click", e => {
	e.stopPropagation()
	document.body.style.overflow = "hidden";
	adModal.style.display = "flex"
}))

// closeModalBtn.addEventListener("click", (e) => {
// 	adModal.style.display = "none";
// 	document.body.style.overflow = "auto"
// })

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