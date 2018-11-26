
// document.addEventListener('mousemove', function(e){
//     const x = e.pageX
//     const y = e.pageY

//     document.querySelectorAll('section div').forEach(div =>{
//         const dx = div.offsetLeft + 50 - x
//         const dy = div.offsetTop + 50 - y
//         const dist = Math.sqrt(dx*dx + dy*dy)
//         const score = Math.exp(dist*-0.003)

//         //div.innerHTML = score.toFixed(2)
//         div.style.transform ="scale(" + score + ")" + " rotate(" + 0 + "deg)"
//         div.style.opacity = score
//     })

// })

var g1 = document.querySelector('.g-part-1')
var g2 = document.querySelector('.g-part-2')
var g3 = document.querySelector('.g-part-3')
var g4 = document.querySelector('.g-part-4')
var g5 = document.querySelector('.g-part-5')
var logo = document.querySelector('.logo')
var section01 = document.querySelector('.section-01')



document.addEventListener('DOMContentLoaded', function(){
    setTimeout(function(){
        g1.style.width ="100%"
    }, 1000)
    setTimeout(function(){
        g2.style.height ="100%"
    }, 1300)
    setTimeout(function(){
        g3.style.width ="100%"
    }, 1600)
    setTimeout(function(){
        g4.style.height ="50%"
    }, 1900)
    setTimeout(function(){
        g5.style.width ="33%"
    }, 2200)
    setTimeout(function(){
        logo.classList.remove("logoAnimation");
    }, 2300)

})

// document.addEventListener('DOMContentLoaded', function(){
//     document.querySelectorAll('.int-01 div').forEach(div =>{
//         div.style.transform ="rotate(" + Math.round(Math.random()*100) + "deg)"
//     })
    
//     setTimeout(function(){
//         document.querySelector('.section-01', function(){
//             this.style.height="0vh"
//         })
//     }, 3000)
// })

