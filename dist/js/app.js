

// Section 01 / Load animation


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
    }, 2250)
})


// Section 02 // Hover effect


// Randomly assign rotation to each plus
document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.int-plus').forEach(div =>{
        div.style.transform ="rotate(" + Math.round(Math.random()*180) + "deg)"
    })
})


// Interactive behaviour on mouse move

document.addEventListener('mousemove', function(e){

    const x = e.clientX
    const y = e.clientY
    
    document.querySelectorAll('.int-plus-container').forEach(div =>{
        // calculate the position of the cursor relative to the div (Up + Down)
        const dx = div.offsetLeft + 25 - x
        const dy = div.offsetTop + 25 - y
        // calculate the position of the cursor diagonally (Trig / Pythagoras)
        const dist = Math.sqrt(dx * dx + dy * dy)

        const score = Math.exp(dist * -0.0025)

        div.style.opacity = score
        div.style.transform="scale(" + score + ")"
        if(score > 0.5){
            div.firstChild.style.transform="rotate(0deg)"
        }
    })
})


// // Scrollify

$(function() {
	$.scrollify({
		section:".panel",
		scrollSpeed:1100,
		after:function(i) {
		}
	});
});
