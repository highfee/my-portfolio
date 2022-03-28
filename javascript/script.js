
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




// $('.counter').counterUp({
//     delay: 10,
//     time: 1000
// });

  $('.counter').countTo();



// $('.portfolio-popup').magnificPopup({
//     delegate: 'a',
//     type: 'image',
//     gallery: {
//         enabled: true
//     },
//     mainClass: 'mfp-with-zoom',
//     navigateByImgClick: true,
//     arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
//     tPrev: 'Previous (Left arrow key)',
//     tNext: 'Next (Right arrow key)',
//     tCounter: '<span class="mfp-counter">%curr% of %total%</span>',
//     zoom: {
//         enabled: true,
//         duration: 300,
//         easing: 'ease-in-out',
//         opener: function (openerElement) {
//             return openerElement.is('img') ? openerElement : openerElement.find('img');
//         }
//     }
// });

// var submitBtn = document.querySelector('#submit')

// submitBtn.onclick = function () {
//     return false;
// }



