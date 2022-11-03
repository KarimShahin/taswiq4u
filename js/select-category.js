const mainCategories = document.querySelectorAll('.category')
const allCategories = document.querySelectorAll('.categories')
const modal = document.getElementById("modal")
const backBtns = document.querySelectorAll('.back')
const modalContainer = document.querySelector('#modal-container')
const addBtn = document.querySelector(".add__ads__btn")
const changeCategory = document.querySelector(".change__category")

const option1 = document.querySelectorAll('.option1')
const option2 = document.querySelectorAll('.option2')
const option3 = document.querySelectorAll('.option3')

const options = document.querySelectorAll('.options')
const options1 = document.querySelectorAll('.options1')
const options2 = document.querySelectorAll('.options2')


let hideState = null
let hideStat2 = null
let hideStat3 = null

let focuState = null
let focuState2 = null
let focuState3 = null

let showState = null
let showState2 = null
let showState3 = null

let clicked = null
let count = 1


let clicked2 = null
let count2 = 1


let clicked3 = null
let count3 = 1





mainCategories.forEach((item, index) => {

    item.addEventListener('click', (e) => {

        hideState = index
        focuState = index

        //! to toggle visablity of block on clicking same btn again

        count++;

        if (clicked === index && count === 2) {

            allCategories[1].classList.toggle('hideBlock')
            count = 1
            console.log(item);
        } else if (clicked !== index) {
            count = 1

            allCategories[1].classList.remove('hideBlock')
        } else {
            allCategories[1].classList.remove('hideBlock')

        }

        clicked = index

        //! show only next list
        option3.forEach((opt, ind) => {
            opt.classList.add('hide')

        })
        option2.forEach((opt, ind) => {
            opt.classList.add('hide')

        })

        //! set active state to highlight clicked button
        mainCategories.forEach((opt, ind) => {
            focuState === ind ? opt.classList.toggle('active') : opt.classList.remove('active')

        })
        option1.forEach((opt, ind) => {
            hideState === ind ? opt.classList.remove('hide') : opt.classList.add('hide')

        })



        allCategories[1].classList.add('show')


    })
})
options.forEach((item, index) => {

    item.addEventListener('click', (e) => {



        hideStat2 = index
        focuState2 = index


        count2++;
        if (clicked2 === index && count2 === 2) {

            allCategories[2].classList.toggle('hideBlock')
            count2 = 1
        } else if (clicked2 !== index) {
            count2 = 1
            allCategories[2].classList.remove('hideBlock')
        } else {
            allCategories[2].classList.remove('hideBlock')
        }

        clicked2 = index
            //! show only next list
        option3.forEach((opt, ind) => {
            opt.classList.add('hide')

        })

        //! set active state to highlight clicked button
        options.forEach((opt, ind) => {
            focuState2 === ind ? opt.classList.toggle('active') : opt.classList.remove('active')

        })

        option2.forEach((opt, ind) => {
            hideStat2 === ind ? opt.classList.remove('hide') : opt.classList.add('hide')

        })
        allCategories[2].classList.add('show')

    })
})

options1.forEach((item, index) => {

    item.addEventListener('click', (e) => {


        hideStat3 = index
        focuState3 = index
        count3++;
        if (clicked3 === index && count3 === 2) {
            allCategories[3].classList.toggle('hideBlock')
            count3 = 1
        } else if (clicked3 !== index) {
            count3 = 1

            allCategories[3].classList.remove('hideBlock')
        } else {
            allCategories[3].classList.remove('hideBlock')
        }

        clicked3 = index

        //! set active state to highlight clicked button
        options1.forEach((opt, ind) => {
            focuState3 === ind ? opt.classList.toggle('active') : opt.classList.remove('active')

        })
        option3.forEach((opt, ind) => {
            hideStat3 === ind ? opt.classList.remove('hide') : opt.classList.add('hide')


        })
        allCategories[3].classList.add('show')
    })
})



backBtns.forEach((item, index) => {

    item.addEventListener('click', (e) => {


        allCategories[index + 1].classList.remove('show')
    })
})


document.body.addEventListener('click', (e) => {

    allCategories.forEach((item, index) => {

        item.classList.remove('show')

    })
    mainCategories.forEach((item, index) => {

        item.classList.remove('active')

    })
    options.forEach((item, index) => {

        item.classList.remove('active')

    })
    options1.forEach((item, index) => {

        item.classList.remove('active')

    })
    options2.forEach((item, index) => {

        item.classList.remove('active')

    })

})


//! prevent event bubbling when clicking on body
modalContainer.addEventListener('click', (e) => {
    e.stopPropagation()
})

modal.addEventListener("click", (e) => {
    modal.style.display = "none"
})

addBtn?.addEventListener("click", () => {
    modal.style.display = "flex"
})

changeCategory?.addEventListener("click", () => {
    modal.style.display = "flex"
})