import e from 'cors';
import './less/index.less'

// Your code goes here!

const body = document.querySelector('body')
const h1 = document.querySelector('h1');
const navLinks = document.querySelectorAll('.nav-link');
const contentImgOne = document.querySelector('.content-section:nth-of-type(1) img');
const plist = document.querySelectorAll('p')

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



contentImgOne.addEventListener('dblclick',()=>{
   let value = prompt("What is your secret?")
    alert(`You said, "${value}"!`)
})




window.addEventListener('scroll', (event) => {
 console.log('scrolling')
    body.style.color = 'blue';
    setTimeout(()=>{
        body.style.color = '';
    },500)
  });


  window.addEventListener("resize",()=>{
    h1.textContent ='resizing';
    setTimeout(()=>{
        h1.textContent = 'Fun Bus';
    },1000)
  });

  
    body.addEventListener("copy", (e)=>{
    plist.forEach(p=>{
        p.textContent ='You Do Not Have The Rights To This Product. Do Not Copy'
    })
    console.log('copying');
  });
  


contentImgOne.addEventListener('drag', (event) => {
    document.querySelector('h2').textContent ='What a drag!'
});


navLinks.forEach(link=>{

    link.addEventListener("click",(e)=>{
        console.log('prevented!');
    e.preventDefault();


},false)})

const contentImgtwo = document.querySelector('.content-section:nth-of-type(2) img');
const contenth2two = document.querySelector('.content-section:nth-of-type(2) h2');



contentImgtwo.addEventListener('dragend', (event) => {
    console.log('You dropped me!');
    contenth2two.textContent = 'You dropped me!!'

});

