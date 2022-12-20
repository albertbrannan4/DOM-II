import e from 'cors';
import './less/index.less'

// Your code goes here!

const body = document.querySelector('body')
const navLinks = document.querySelectorAll('.nav-link');
const h1 = document.querySelector('h1');

navLinks.forEach(link=>{

    link.addEventListener("mouseover",(e)=>{
    
    e.target.style.color = 'red';
    
    setTimeout(()=>{
        e.target.style.color = '';
    },500)


},false)})


document.addEventListener('keydown',(e)=>{

    if(e.key ==='Escape'){
        document.querySelector('h1').textContent='You CANNOT ESCAPE!'
        navLinks[0].textContent='Your'
        navLinks[1].textContent='Mine'
        navLinks[2].textContent='Now'
        navLinks[3].textContent= '!'
        document.querySelector('body').style.backgroundColor ='black'
        document.querySelector('body').style.color='red'
    }
})

window.addEventListener("load", (event) => {

    console.log('this page is fully loaded');
    

});





