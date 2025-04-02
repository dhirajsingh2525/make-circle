var img = document.querySelector("img")
var btn = document.querySelector("button")
btn.addEventListener("click",function(){
   var x = Math.random()*100
   var y = Math.random()*100
   img.style.left = x+'%'
   img.style.top = y+'%'
})