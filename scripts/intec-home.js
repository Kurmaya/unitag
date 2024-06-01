

const navbar = document.querySelector('nav');
const heads = document.querySelectorAll('.head');
const heroImgs = document.querySelectorAll('.hero-img img');
const prodsLinks = document.querySelectorAll('.prods-wrapper a');
prodsLinks.forEach(link=>{
    link.href='./products.html';
})
gsap.registerPlugin(ScrollTrigger);

window.addEventListener('DOMContentLoaded',()=>{
    gsap.from(navbar,{
        y:-100,
        opacity:0,
        duration:.5,
        ease:'power1'
    })
    
    heroAnim();
})
function heroAnim(){
    let tl =gsap.timeline({repeat:-1});

tl

.to(heroImgs[0],{
    left:'0%',
    duration:.5,
    ease:'power1'
})
.to(heads[0],{
   opacity:1, 
    left:'30%',
    translateX:'-50%',
    translateY:'-30%',
    duration:.3,
    ease:'power2'
})
.to(heroImgs[0],{
    left:'100%',
    duration:.5,
    ease:'power1',
    delay:3,
})
.to(heads[0],{
    left:'-100%',
},'<')
.to(heroImgs[1],{
    left:'0%',
    duration:.5,
    ease:'power1'
},'<')
.to(heads[1],{
    opacity:1, 
    left:'70%',
    translateX:'-50%',
    translateY:'-50%',
    duration:.3,
    ease:'power2'
})
.to(heroImgs[1],{
    left:'100%',
    duration:.5,
    ease:'power1',
    delay:3,
})
.to(heads[1],{
    left:'-100%',
},'<')
.to(heroImgs[2],{
    left:'0%',
    duration:.5,
    ease:'power1'
},'<')
.to(heads[2],{
    opacity:1, 
    left:'80%',
    translateX:'-50%',
    translateY:'-50%',
    duration:.3,
    ease:'power2',
})
.to(heads[2],{
    left:'-100%',
    delay:3,   
})
.to(heroImgs[2],{
    left:'-100%',
 
},'<')
}

const items = document.querySelectorAll('.prods-item');
let productsAnim= gsap.timeline({
    scrollTrigger:{
        trigger:'#section2',
        start:'top 70%',
        makers:true,
        // toggleActions: 'play none play reverse'
    }
})
productsAnim.from('#section2 h2',{
    x:-1000,
    duration:.5,
    ease: "elastic.out(.4,0.3)",
})
items.forEach(item=>{
    let tl = gsap.timeline();
    item.addEventListener('mouseover',()=>{
        
        tl.to(item,{
            scale:1.05,
            duration:.1,
            ease:'power1.in'
        })
    })
    item.addEventListener('mouseleave',()=>{
        tl.to(item,{
            scale:1,
            duration:.1,
            ease:'power1.in'
        })
    })
    productsAnim.from(item,{
        scale:0,
        // x:-1000,
        duration:.3,
        ease: "elastic.out(.4,0.3)",
    })
})