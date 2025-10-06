let drawer=document.getElementById("drawer");
let banner=document.getElementById("banner");
let serch=document.getElementById("search-bar");
let header=document.getElementById("header");
let navigation=document.getElementById("header-navigation");
let menu=document.getElementById("menu");
let cancel_menu=document.getElementById("cancel-menu");
let link_darwer=document.getElementById("drwar-link");
//cart-functions
function cart(){
 drawer.classList.remove("none")
document.body.style.overflow = 'hidden';
}
// cancel-cart
function cancel_cart(){
    drawer.classList.add("none")
    document.body.style.overflow = 'auto';
}
//search
function search(){
 serch.classList.remove("none")
}
//cancel-search
function cancel_search(){
     serch.classList.add("none")
document.body.style.overflow = 'auto';
}
//responsive-menu
function responsive_nav(){
      menu.classList.remove("none")
      cancel_menu.classList.remove("none");
      link_darwer.classList.add("none");
    document.body.style.position = 'fixed';
    menu.innerHTML=navigation.innerHTML;
}
//cancel-responsive-menu
function cancel_menu_bar(){
    menu.classList.add("none")
      cancel_menu.classList.add("none");
      link_darwer.classList.remove("none")
    document.body.style.position = 'static';
}


