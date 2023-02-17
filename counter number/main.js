let number = 0;

let btnAdd = document.querySelector('.btnAdd')

let btnReset = document.querySelector('.btnReset')

let btnSubtraction = document.querySelector('.btnSubtraction')

btnAdd.addEventListener('click', function(){
  number++
  document.querySelector('.value').innerHTML = number
})


btnReset.addEventListener('click', function(){
  number = 0
  document.querySelector('.value').innerHTML = number
})


btnSubtraction.addEventListener('click', function(){
  number--
  document.querySelector('.value').innerHTML = number
})