
// for specialized area animation
var bars = [...document.querySelectorAll('.progress-bar')]

bars.forEach((bar) => {
    var initial = 0
    var width = bar.getAttribute('data-percent')
    bar.style.width = width + '%' 
    setInterval(()=>{
        // console.log(bar.style.width)
        if(bar.style.width == width+'%'){
            setTimeout(()=>{ bar.style.width = 0}, 10000)
        }else{
            bar.style.width = width + '%'
        }
    }, 5000)
})

// for hide vertical-nav
const verticalNav = document.querySelector('.vertival-nav')

window.addEventListener('scroll', () => {
    if(window.scrollY > 100){
        verticalNav.style.display = 'block'
    }else{
        verticalNav.style.display = 'none'
    }
    if(window.innerWidth <= 768){
        verticalNav.style.display = 'block'
    }
})

window.addEventListener('scroll', () => {
    if(window.scrollY > 500){
      document.getElementById('to-top').style.display = 'block'
    }else{
        document.getElementById('to-top').style.display = 'none'
    }
})
 



 // Portfolio Popp Up
 $('.portfolio-gallery').each(function () {
    $(this).find('.popup-gallery').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

  $('.counter').countTo();






// navabr toggler
const bar = document.getElementById('bar')

bar.addEventListener('click', (e) => {
    if(document.querySelector('.vertical-nav-links').style.display == 'none'){
        document.querySelector('.vertical-nav-links').style.display = 'block'
    }else{
        document.querySelector('.vertical-nav-links').style.display = 'none'
    }
})
var navLinks = [...document.querySelectorAll('.navlink')]
navLinks.forEach((navLink) => {
    navLink.addEventListener('click', ()=>{
        if(document.documentElement.clientWidth < 480)
        document.querySelector('.vertical-nav-links').style.display = 'none'
    })
})



