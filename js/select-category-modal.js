const selectmenuLink = document.querySelectorAll(".select-category__modal .menu__link")
const selectsubmenuLink = document.querySelectorAll(".select-category__modal .submenu__link")
const selectsubmenu2Link = document.querySelectorAll(".select-category__modal .submenu2__link")
const selectsubmenu3Link = document.querySelectorAll(".select-category__modal .submenu3__link")
const selectsubmenu = document.querySelector(".select-category__modal .submenu")
const selectsubmenu2 = document.querySelector(".select-category__modal .submenu2")
const selectsubmenu3 = document.querySelector(".select-category__modal .submenu3")
const selectsubmenu4 = document.querySelector(".select-category__modal .submenu4")
const selectmodal = document.querySelector(".select-category__modal")
const selectmodalContainer = document.querySelector(".select-category__modal .modal__container")
const selectback = document.querySelectorAll(".select-category__modal .back")
const selectCategory = document.querySelector(".change__category")
const addBtnModal = document.querySelector(".add__ads__btn")

selectCategory?.addEventListener("click", () => {
  selectmodal.style.display = "flex"
  console.log(selectmodal)
})

addBtnModal?.addEventListener("click", () => {
  selectmodal.style.display = "flex"
  console.log(selectmodal)
})

selectmenuLink.forEach(link => {
  link.addEventListener("click", (e) => {
    if (link.classList.contains("active")) {
      link.classList.remove("active")
      selectsubmenu.style.display = "none"
      selectsubmenu2.style.display = "none"
      selectsubmenu3.style.display = "none"
      selectsubmenu4.style.display = "none"
      selectsubmenuLink.forEach(link => {
        link.classList.remove("active")
      })
      selectsubmenu2Link.forEach(link => {
        link.classList.remove("active")
      })
      selectsubmenu3Link.forEach(link => {
        link.classList.remove("active")
      })
    } else {
      selectmenuLink.forEach(link => link.classList.remove("active"))
      link.classList.add("active")
      selectsubmenu.style.display = "block"
      selectsubmenu2.style.display = "none"
      selectsubmenu3.style.display = "none"
      selectsubmenu4.style.display = "none"
    }
  })
})

selectsubmenuLink.forEach(link => {
  link.addEventListener("click", (e) => {
    if (link.classList.contains("active")) {
      link.classList.remove("active")
      selectsubmenu2.style.display = "none"
      selectsubmenu3.style.display = "none"
      selectsubmenu4.style.display = "none"
      selectsubmenu2Link.forEach(link => {
        link.classList.remove("active")
      })
      selectsubmenu3Link.forEach(link => {
        link.classList.remove("active")
      })
    } else {
      selectsubmenuLink.forEach(link => link.classList.remove("active"))
      link.classList.add("active")
      selectsubmenu2.style.display = "block"
      selectsubmenu3.style.display = "none"
      selectsubmenu4.style.display = "none"
    }
  })
})

selectsubmenu2Link.forEach(link => {
  link.addEventListener("click", (e) => {
    if (link.classList.contains("active")) {
      link.classList.remove("active")
      selectsubmenu3.style.display = "none"
      selectsubmenu4.style.display = "none"
      selectsubmenu3Link.forEach(link => {
        link.classList.remove("active")
      })
    } else {
      selectsubmenu2Link.forEach(link => link.classList.remove("active"))
      link.classList.add("active")
      selectsubmenu3.style.display = "block"
      selectsubmenu4.style.display = "none"
    }
  })
})

selectsubmenu3Link.forEach(link => {
  link.addEventListener("click", (e) => {
    if (link.classList.contains("active")) {
      link.classList.remove("active")
      selectsubmenu4.style.display = "none"
    } else {
      selectsubmenu3Link.forEach(link => link.classList.remove("active"))
      link.classList.add("active")
      selectsubmenu4.style.display = "block"
    }
  })
})

selectback.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("submenu__back")) {
      selectsubmenu.style.display = "none"
      selectmenuLink.forEach(link => link.classList.remove("active"))
      selectsubmenuLink.forEach(link => link.classList.remove("active"))
    } else if (btn.classList.contains("submenu2__back")) {
      selectsubmenu2.style.display = "none"
      selectsubmenuLink.forEach(link => link.classList.remove("active"))
      selectsubmenu2Link.forEach(link => link.classList.remove("active"))
    } else if (btn.classList.contains("submenu3__back")) {
      selectsubmenu3.style.display = "none"
      selectsubmenu2Link.forEach(link => link.classList.remove("active"))
      selectsubmenu3Link.forEach(link => link.classList.remove("active"))
    } else if (btn.classList.contains("submenu4__back")) {
      selectsubmenu4.style.display = "none"
      selectsubmenu3Link.forEach(link => link.classList.remove("active"))
    }
  })
})

selectmodal.addEventListener("click", (e) => {
  console.log("event")
  e.stopPropagation()
  selectmodal.style.display = "none"
})

selectmodalContainer.addEventListener("click", (e) => {
  e.stopPropagation()
})