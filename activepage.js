
const activepage =  window.location.pathname;
const navlinks = document.querySelectorAll('nav a').forEach(link => {
    if(link.href.includes('${activepage}')){
        link.classList.add('active');
    }
})
