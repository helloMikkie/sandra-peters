const openTag = document.querySelector('.open--overlay')
const overlay = document.querySelector('.wrapper--overlay')

openTag.addEventListener('click', function(){
    overlay.classList.toggle('show--overlay')

})