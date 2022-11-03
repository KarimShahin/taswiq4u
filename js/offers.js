const likeIcons = document.querySelectorAll(".like__icon");
const accountDetails = document.querySelector(".account__details");
const accountPopup = document.querySelector(".account__popup");
const cards = document.querySelectorAll(".card");
const adModal = document.querySelector(".ad__modal");
const closeModalBtn = document.querySelector(".close__modal__btn")

const swiper = new Swiper('.swiper', {
	// Default parameters
	slidesPerView: 9,
	spaceBetween: 10,
	// Optional parameters
	direction: 'horizontal',
	// slidesPerGroup: 1,
	// centeredSlidesBounds: true,
	// loop:true,
	// slidesOffsetAfter: 200,
	// slidesOffsetBefore:200,
	// Responsive breakpoints
	breakpoints: {
		360: {
			slidesPerView: 2.3,
			slidesPerGroup: 1,
		},
		400: {
			slidesPerView: 2.575,
			slidesPerGroup: 1,
		},
		500: {
			slidesPerView: 3.05,
			slidesPerGroup: 1,
		},
		600: {
			slidesPerView: 3.7,
			slidesPerGroup: 1,
		},
		700: {
			slidesPerView: 4.4,
			slidesPerGroup: 1,
		},
		800: {
			slidesPerView: 5.05,
			slidesPerGroup: 1,
		},
		900: {
			slidesPerView: 5.75,
			slidesPerGroup: 1,
		},
		1000: {
			slidesPerView: 6.4,
			slidesPerGroup: 1,
		},
		1100: {
			slidesPerView: 6.2,
			slidesPerGroup: 1,
		},
		1200: {
			slidesPerView: 6.8,
			slidesPerGroup: 1,
		},
		1300: {
			slidesPerView: 6.8,
			slidesPerGroup: 1,
		},
		1400: {
			slidesPerView: 7.4,
			slidesPerGroup: 1,
		},
		1500: {
			slidesPerView: 7.45,
			slidesPerGroup: 1,
		},
		1600: {
			slidesPerView: 7.45,
			slidesPerGroup: 1,
		},
		1700: {
			slidesPerView: 8.05,
			slidesPerGroup: 1,
		},
		1800: {
			slidesPerView: 8.65,
			slidesPerGroup: 1,
		},
		1900: {
			slidesPerView: 9.25,
			slidesPerGroup: 1,
		},
	},
	// Navigation arrows
	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev',
	// },
	scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});

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

closeModalBtn.addEventListener("click", (e) => {
	adModal.style.display = "none";
	document.body.style.overflow = "auto"
})

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