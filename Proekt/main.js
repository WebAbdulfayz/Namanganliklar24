let closeBtn = document.querySelector(".btn-close")
let obekt = document.querySelector('.modal')
let openBtn = document.querySelector(".nav-btn")
let box = document.querySelector('.box')

closeBtn.addEventListener('click',()=>{
    obekt.style.display='none'
    box.style.background='#fff'
})
openBtn.addEventListener('click',()=> {
    obekt.style.display='block'
})