var box = document.querySelector("#box")
var btn = document.querySelector("button")
var clutter = 0
btn.addEventListener("click",function(){
  if(clutter === 0){
      box.style.borderRadius = '50%'
    box.style.backgroundColor = 'red'
    box.style.rotate = '360deg'
    clutter = 1
  }else{
    box.style.width = '25%'
    box.style.height = '50%'
    box.style.border = '1px solid #000'
    box.style.backgroundColor = 'blue'
    box.style.borderRadius = '0%'
    clutter = 0
  }
})