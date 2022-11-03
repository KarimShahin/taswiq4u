const menuLink = document.querySelectorAll(".all-category__modal .menu__link")
const submenuLink = document.querySelectorAll(".all-category__modal .submenu__link")
const submenu2Link = document.querySelectorAll(".all-category__modal .submenu2__link")
const submenu3Link = document.querySelectorAll(".all-category__modal .submenu3__link")
const submenu = document.querySelector(".all-category__modal .submenu")
const submenu2 = document.querySelector(".all-category__modal .submenu2")
const submenu3 = document.querySelector(".all-category__modal .submenu3")
const submenu4 = document.querySelector(".all-category__modal .submenu4")
const modal = document.querySelector(".all-category__modal")
const modalContainer = document.querySelector(".all-category__modal .modal__container")
const back = document.querySelectorAll(".all-category__modal .back")
const allCategory = document.querySelectorAll(".navbar__link")[1]

allCategory.addEventListener("click", () => {
  console.log(allCategory,modal)
  modal.style.display = "flex"
})

menuLink.forEach(link => {
  link.addEventListener("click", (e) => {
    if (link.classList.contains("active")) {
      link.classList.remove("active")
      submenu.style.display = "none"
      submenu2.style.display = "none"
      submenu3.style.display = "none"
      submenu4.style.display = "none"
      submenuLink.forEach(link => {
        link.classList.remove("active")
      })
      submenu2Link.forEach(link => {
        link.classList.remove("active")
      })
      submenu3Link.forEach(link => {
        link.classList.remove("active")
      })
    } else {
      menuLink.forEach(link => link.classList.remove("active"))
      link.classList.add("active")
      submenu.style.display = "block"
      submenu2.style.display = "none"
      submenu3.style.display = "none"
      submenu4.style.display = "none"
    }
  })
})

submenuLink.forEach(link => {
  link.addEventListener("click", (e) => {
    if (link.classList.contains("active")) {
      link.classList.remove("active")
      submenu2.style.display = "none"
      submenu3.style.display = "none"
      submenu4.style.display = "none"
      submenu2Link.forEach(link => {
        link.classList.remove("active")
      })
      submenu3Link.forEach(link => {
        link.classList.remove("active")
      })
    } else {
      submenuLink.forEach(link => link.classList.remove("active"))
      link.classList.add("active")
      submenu2.style.display = "block"
      submenu3.style.display = "none"
      submenu4.style.display = "none"
    }
  })
})

submenu2Link.forEach(link => {
  link.addEventListener("click", (e) => {
    if (link.classList.contains("active")) {
      link.classList.remove("active")
      submenu3.style.display = "none"
      submenu4.style.display = "none"
      submenu3Link.forEach(link => {
        link.classList.remove("active")
      })
    } else {
      submenu2Link.forEach(link => link.classList.remove("active"))
      link.classList.add("active")
      submenu3.style.display = "block"
      submenu4.style.display = "none"
    }
  })
})

submenu3Link.forEach(link => {
  link.addEventListener("click", (e) => {
    if (link.classList.contains("active")) {
      link.classList.remove("active")
      submenu4.style.display = "none"
    } else {
      submenu3Link.forEach(link => link.classList.remove("active"))
      link.classList.add("active")
      submenu4.style.display = "block"
    }
  })
})

back.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("submenu__back")) {
      submenu.style.display = "none"
      menuLink.forEach(link => link.classList.remove("active"))
      submenuLink.forEach(link => link.classList.remove("active"))
    } else if (btn.classList.contains("submenu2__back")) {
      submenu2.style.display = "none"
      submenuLink.forEach(link => link.classList.remove("active"))
      submenu2Link.forEach(link => link.classList.remove("active"))
    } else if (btn.classList.contains("submenu3__back")) {
      submenu3.style.display = "none"
      submenu2Link.forEach(link => link.classList.remove("active"))
      submenu3Link.forEach(link => link.classList.remove("active"))
    } else if (btn.classList.contains("submenu4__back")) {
      submenu4.style.display = "none"
      submenu3Link.forEach(link => link.classList.remove("active"))
      submenu4Link.forEach(link => link.classList.remove("active"))
    }
  })
})

modal.addEventListener("click", (e) => {
  e.stopPropagation()
  modal.style.display = "none"
})

modalContainer.addEventListener("click", (e) => {
  e.stopPropagation()
})