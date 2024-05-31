const left = document.querySelector('.hero-left');
const right = document.querySelector('.hero-right');

window.addEventListener('DOMContentLoaded',()=>{
        let tl= gsap.timeline();
        tl
        .from(left,{
            x:'-50vw',
            background:'rgba(0,0,0,1)',
            duration:1.5,
            ease:'power1'
        })
        .from(right,{
            x:'50vw',
            background:'rgba(255,255,255,1)',
            duration:1.5,
            ease:'power1'
        },'<')  
        .to('.hero-left img',{
            opacity:1,
            duration:.5,
            ease:'power2'
        })
        .to('.hero-right img',{
            opacity:1,
            duration:.5,
            ease:'power2'
        },'<')
});
let arr = [left,right];
function scaleUp(e){
if(e.target = left || right || left.querySelector('img') || right.querySelector('img')){
    let tl = gsap.timeline()
    
        tl.to(e.target.querySelector('img'),{
            scale:1.05,
            duration:0.5,
            ease:'power2'
        })
        
    
    
    // console.log(e.target)
}
}
function scaleDown(e){
    if(e.target = left || right || left.querySelector('img') || right.querySelector('img')){
        let tl = gsap.timeline()
        
            tl.to(e.target.querySelector('img'),{
                scale:1,
                duration:0.5,
                ease:'power2'
            })
            
        
        
        // console.log(e.target)
    }
    }
arr.forEach(element => {
    element.addEventListener('mouseover',scaleUp)
    element.addEventListener('mouseleave',scaleDown)
});
arr[0].addEventListener('click',()=>{
    window.location.href='./intec/intec.html'
});
arr[1].addEventListener('click',()=>{
    window.location.href='./leonis/leonis.html'
});
