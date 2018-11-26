
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

document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.int-01 div').forEach(div =>{
        div.style.transform ="rotate(" + Math.round(Math.random()*100) + "deg)"
    })
    console.log('👋')
})

