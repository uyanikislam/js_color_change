const button=document.querySelector("button")
const body= document.querySelector("body")
const color= ['red','brown','blue','green','pink','white']

body.style.backgroundColor = 'green'
button.addEventListener('click', degistir)
function degistir(){
    const colorIndex= parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]
}