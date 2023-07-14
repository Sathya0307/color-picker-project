const btn = document.querySelector('button')
const body = document.querySelector('body')
const color = ['red','green','purple','yellow','orange','blue']
body.style.backgroundColor = 'grey';
document.addEventListener('click',function(){
    const a =parseInt( Math.random()*color.length);
    body.style.backgroundColor = color[a];
})