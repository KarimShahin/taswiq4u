const governmentInput = document.querySelector('#government-input');
const governments = document.querySelector('#government');
const categoriesInput = document.querySelector("#categories-input");
const categories = document.querySelector("#categories");
const heartIcon = document.querySelectorAll(".wishlist__icon");

const swiper = new Swiper('.swiper', {
	// Default parameters
	slidesPerView: 1,
	spaceBetween: 10,
	// Optional parameters
	direction: 'horizontal',
	slidesPerGroup: 1,
	autoplay: {
    delay: 3000,
	},
	// centeredSlidesBounds: true,
	// loop:true,
	// slidesOffsetAfter: 200,
	// slidesOffsetBefore:200,
	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 480px
		480: {
			slidesPerView: 1,
			slidesPerGroup: 1,
		},
		// when window width is >= 640px
		600: {
			slidesPerView: 1,
			slidesPerGroup: 1,
		},
		800: {
			slidesPerView: 1,
			slidesPerGroup: 1,
		},
		1000: {
			slidesPerView: 1,
			slidesPerGroup: 1,
		},
	},
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});




governmentInput.onfocus = function () {
  categories.style.display = "none"
	governments.style.display = 'block';
	governmentInput.style.borderRadius = '0.25rem';
};

categoriesInput.onfocus = function () {
  governments.style.display = "none"
  categories.style.display = 'block';
	categoriesInput.style.borderRadius = '0.25rem';
};

for (let option of governments.options) {
  option.addEventListener("click", function (e) {
    e.preventDefault()
		governmentInput.value = option.value;
    governments.style.display = "none";
	})
}

for (let option of categories.options) {
  option.addEventListener("click", function (e) {
    e.preventDefault()
		categoriesInput.value = option.value;
    categories.style.display = "none";
	})
}

governmentInput.onclick = function (e) {
  e.stopPropagation();
  const text = e.target.value;
  for (let option of governments.options) {
		option.classList.remove("active")
  }

  for (let option of governments.options) {
		if (option.value.indexOf(text) > -1 && text !== "") {
			option.classList.add("active")
    }
  }
}

categoriesInput.onclick = function (e) {
  e.stopPropagation();
  const text = e.target.value;
  for (let option of categories.options) {
		option.classList.remove("active")
  }

  for (let option of categories.options) {
		if (option.value.indexOf(text) > -1 && text !== "") {
			option.classList.add("active")
    }
  }
}

governmentInput.oninput = function () {
	currentFocus = -1;
	var text = governmentInput.value.toUpperCase();
	for (let option of governments.options) {
		if (option.value.toUpperCase().indexOf(text) > -1) {
			option.style.display = 'block';
		} else {
			option.style.display = 'none';
		}
  }
  for (let option of governments.options) {
    if (option.value.toUpperCase().indexOf(text) > -1) {
      governments.style.display = "block"
      return;
    } else {
      governments.style.display = "none"
    }
  }
};

categoriesInput.oninput = function () {
	currentFocus = -1;
	var text = categoriesInput.value.toUpperCase();
	for (let option of categories.options) {
		if (option.value.toUpperCase().indexOf(text) > -1) {
			option.style.display = 'block';
		} else {
			option.style.display = 'none';
		}
  }
  for (let option of categories.options) {
    if (option.value.toUpperCase().indexOf(text) > -1) {
      categories.style.display = "block"
      return;
    } else {
      categories.style.display = "none"
    }
  }
};

var currentFocus = -1;
governmentInput.onkeydown = function (e) {
	if (e.keyCode == 40) {
		currentFocus++;
		addActive(governments.options);
	} else if (e.keyCode == 38) {
		currentFocus--;
		addActive(governments.options);
	} else if (e.keyCode == 13) {
		e.preventDefault();
		if (currentFocus > -1) {
			/*and simulate a click on the "active" item:*/
			if (governments.options) governments.options[currentFocus].click();
		}
	}
};

categoriesInput.onkeydown = function (e) {
	if (e.keyCode == 40) {
		currentFocus++;
		addActive(categories.options);
	} else if (e.keyCode == 38) {
		currentFocus--;
		addActive(categories.options);
	} else if (e.keyCode == 13) {
		e.preventDefault();
		if (currentFocus > -1) {
			/*and simulate a click on the "active" item:*/
			if (categories.options) categories.options[currentFocus].click();
		}
	}
};

function addActive(x) {
	if (!x) return false;
	removeActive(x);
	if (currentFocus >= x.length) currentFocus = 0;
	if (currentFocus < 0) currentFocus = x.length - 1;
	x[currentFocus].classList.add('active');
}
function removeActive(x) {
	for (var i = 0; i < x.length; i++) {
		x[i].classList.remove('active');
	}
}

document.addEventListener("click", () => {
  governments.style.display = "none";
  categories.style.display = "none"
})

heartIcon.forEach(heart => heart.addEventListener("click", (e) => {
	console.log(e.target.src.split("/")[e.target.src.split("/").length -1])
	if (e.target.src.split("/")[e.target.src.split("/").length -1] == "heart.svg")
		e.target.src = "../assets/images/heart-fill.svg"
	else
		e.target.src = "../assets/images/heart.svg"
}))