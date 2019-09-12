
  const logo = document.querySelector('.logo')
  const header = document.querySelector('header')
  const firstRow = document.querySelectorAll('.row-1 p')
  const secondRow = document.querySelectorAll('.row-2 p')
  console.log(logo)

window.addEventListener('scroll', function(){
  
if(window.pageYOffset > 200){

  header.style.borderBottom ="0.01em solid #3f3f3f"
    logo.style.width = '7em'

    firstRow.forEach(item =>{
      item.style.fontSize = '1.2rem'
      item.style.fontWeight = '600'
    })
    secondRow.forEach(item =>{
      item.style.fontSize = '1.2rem'
      item.style.fontWeight = '600'
    })

    }
    
else if(window.pageYOffset < 200){
    header.style.borderBottom =""
    logo.style.width = '70vw'

    firstRow.forEach(item =>{
      item.style.fontSize = ''
      item.style.fontWeight = ''
    })
    secondRow.forEach(item =>{
      item.style.fontSize = ''
      item.style.fontWeight = ''
    })
}
})
