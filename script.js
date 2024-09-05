const modal = document.querySelector('.modalWindow')
const modal2 = document.querySelector('.modalWindow2')
const modal3 = document.querySelector('.modalWindow3')
const modal4 = document.querySelector('.modalWindow4')
const modalBg = document.querySelector('.modalBackground')
const modalTrigger = document.querySelector('.nav-link')
const modalTrigger2 = document.getElementById('nav-link')
const modalTrigger3 = document.getElementById('nav-link3')
const modalTrigger4 = document.getElementById('nav-link4')
const modalBtn = document.querySelector('.modalClose')
const modalBtn2 = document.querySelector('.modalClose2')
const modalBtn3 = document.querySelector('.modalClose3')
const modalBtn4 = document.querySelector('.modalClose4')

modalTrigger.addEventListener('click', () => {
 if (modal.style.display = 'none') {
    modal.style.display = 'flex'
 }
 else {
    modal.style.display = 'none'
 }
})

modalBtn.addEventListener('click', (event) => {
    modal.style.display = 'none'
    
})

modalTrigger2.addEventListener('click', () => {
    if (modal2.style.display = 'none') {
       modal2.style.display = 'flex'
    }
    else {
       modal2.style.display = 'none'
    }
   })
   
   modalBtn2.addEventListener('click', (event) => {
       modal2.style.display = 'none'
       
   })

   modalTrigger3.addEventListener('click', () => {
    if (modal3.style.display = 'none') {
       modal3.style.display = 'flex'
    }
    else {
       modal3.style.display = 'none'
    }
   })
   
   modalBtn3.addEventListener('click', (event) => {
       modal3.style.display = 'none'
       
   })

   modalTrigger4.addEventListener('click', () => {
    if (modal4.style.display = 'none') {
       modal4.style.display = 'flex'
    }
    else {
       modal4.style.display = 'none'
    }
   })
   
   modalBtn4.addEventListener('click', (event) => {
       modal4.style.display = 'none'
       
   })