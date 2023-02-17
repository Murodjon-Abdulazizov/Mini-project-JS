let color = ['red', 'black', 'orange', '#e12738', '#363027']


let bgColor =  document.querySelector('body')
let bgValue =  document.querySelector('.colorValue')



let clickColor = document.querySelector('.button_click')

clickColor.addEventListener('click', function(){
  let numberRandom = Math.floor(Math.random() * (color.length+1))
  bgColor.style.backgroundColor = color[numberRandom]
  bgColor.style.color = color[numberRandom+1]
  console.log(numberRandom)
  bgValue.innerHTML = color[numberRandom]
})