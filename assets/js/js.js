var menu = document.querySelector(".menu i");
var navbar = document.querySelector(".nav");
var navitem = document.querySelectorAll(".nav a")
menu.addEventListener('click',function(){
    navbar.classList.toggle("show-menu")
})
for(var i=0 ; i<navitem.length ; i++){
    navitem[i].addEventListener('click',function(){
        navbar.classList.remove("show-menu")
    })
}
function scrollHeader(){
    const nav = document.querySelector('header')
    
    if(this.scrollY >= 100) {
        nav.classList.add('shadow'); 
       
        
}
    else {
        nav.classList.remove('shadow')
        
    }
}
window.addEventListener('scroll', scrollHeader);
