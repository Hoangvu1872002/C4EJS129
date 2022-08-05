// let navbarDiv = document.querySelector('.navbar');
// window.addEventListener('scroll', () => {
//     if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
//         navbarDiv.classList.add('navbar-cng');
//     } else {
//         navbarDiv.classList.remove('navbar-cng');
//     }
// });


// const navbarCollapseDiv = document.getElementById('navbar-collapse');
// const navbarShowBtn = document.getElementById('navbar-show-btn');
// const navbarCloseBtn = document.getElementById('navbar-close-btn');
// // show navbar
// navbarShowBtn.addEventListener('click', () => {
//     navbarCollapseDiv.classList.add('navbar-collapse-rmw');
// });

// // hide side bar
// navbarCloseBtn.addEventListener('click', () => {
//     navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
// });

// document.addEventListener('click', (e) => {
//     if(e.target.id != "navbar-collapse" && e.target.id != "navbar-show-btn" && e.target.parentElement.id != "navbar-show-btn"){
//         navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
//     }
// });







const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

// SonDN fixed - Active size wrong size on first load.
// Original post: https://www.facebook.com/groups/649972919142215/?multi_permalinks=1175881616551340
requestIdleCallback(function () {
  line.style.left = tabActive.offsetLeft + "px";
  line.style.width = tabActive.offsetWidth + "px";
});

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});



// $(document).ready(function(){
//   $(window).scroll(function(){
//     if ($(this).scrollTop()){
//       $('#backtop').fadeIn();
//     } else{
//       $('#backtop').fadeOut();
//     }
//   });
//   $("backtop").click(function(){
//     $('html, body').animate({
//       scrollTop:0
//     },1000);
//   })
// });

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("backtop").style.display = "block";
  } else {
      document.getElementById("backtop").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}