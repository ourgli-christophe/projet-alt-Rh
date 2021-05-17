// responsive menu function
const openNav = document.querySelector(".hamburger");
const closeNav = document.querySelector(".close");
const menu = document.querySelector(".menu");

const leftPosition = menu.getBoundingClientRect().left;
openNav.addEventListener("click", () => {
  if (leftPosition < 0) {
    menu.classList.add("show");
  }
});

closeNav.addEventListener("click", () => {
  if (leftPosition < 0) {
    menu.classList.remove("show",);
  }
});


// scroll function
window.onscroll = function() {
  var navBer = document.getElementById('nav-bar');
  if ( window.pageXOffset < 25 ) {
    navBer.classList.remove("nav-bar");
} else {
    nav.classList.add("nav-bar");
}

  if ( window.pageYOffset > 25 ) {
      navBer.classList.add("nav-bar");
  } else {
      nav.classList.remove("nav-bar");
  }
}

// // button to scroll to top
// //Get the button:
// myButton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     myButton.style.display = "block";
//   } else {
//     myButton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }





// auto slide function

var index=0;
show();


function show(){
  let slide= document.getElementsByClassName('slide');
    for(i=0; i < slide.length; i++) {
      slide[i].style.display='none';
    }
    index=index+1;
    if(index>slide.length){
      index=1;
    }
    slide[index-1].style.display='block';
    // $(this).show("slide", { direction: "left" }, 1000);
    setTimeout(show, 3000);
}

