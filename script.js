const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.navigation_links');

// hamburger.addEventListener('click', () => {
//     if (navLinks.style.display === 'flex'){
//         navLinks.style.display = 'none'
//     }else{
//         navLinks.style.display = 'flex'
//     }
// })
hamburger.addEventListener('click', () => {
    if (navlinks.style.display === 'flex'){
        navlinks.style.display = 'none';
    }else{
        navlinks.style.display= 'flex';
    }
});