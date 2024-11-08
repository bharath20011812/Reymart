// Initiate the wowjs
new WOW().init();

$(function () {
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    margin: 15,
    dots: false,
    slideTransition: "linear",
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    autoplaySpeed: 5000,
    navText: false,
    responsive: {
      0: {
        items: 2
      },
      500: {
        items: 3
      },
      1200: {
        items: 5
      }
    }
  });


  $(document).ready(function () {
    $('.industry-expert').slick({
      rows: 2,
      dots: true, // Enable dots navigation
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 2,
      prevArrow: '<i class="fa-solid fa-angle-left"></i>',
      nextArrow: '<i class="fa-solid fa-angle-right"></i>',
      responsive: [
        {
          breakpoint: 1200, // Adjust for screen widths below 1200px
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });

});

$(".testimonials-slider").owlCarousel({
  loop: true,
  margin: 10,
  items: 1,
  nav: false,
  autoplay: false,
  dots: true,
  navText: [
    '<i class="fa-solid fa-angle-left"></i>',
    '<i class="fa-solid fa-angle-right"></i>'
  ]

});

//  back top Top
window.onscroll = () => {
  toggleTopButton();
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleTopButton() {
  if (document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20) {
    document.getElementById('back-to-up').classList.remove('d-none');
  } else {
    document.getElementById('back-to-up').classList.add('d-none');
  }
}



// Wait until the DOM content is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
  const numbers = document.querySelectorAll('.number');

  numbers.forEach(number => {
    const target = +number.getAttribute('data-target');
    animateCounter(number, target);
  });
});



/**
 * JavaScript Momentum Scroll
 * This will transform the native scroll of the browser into a very smooth scroll with momentum effect
 * https://github.com/iahnn/mScroll/
 * licensed under MIT
 * version 1.0
 */
(function () {

  "use strict";

  var win = window
    , doc = document
    , target = doc.getElementsByTagName('body')[0]
    , children = target.childNodes
    , childTag = 'DIV'
    , easing = "ease-out" //css easing
    , duration = "1.2s" //duration ms(millisecond) or s(second)
    , top = 0
    , wrappers = [];

  for (var i = 0; i < children.length; i++) {
    if (children[i].tagName == childTag) {
      wrappers.push(children[i]);
    }
  }

  var mScroll = {
    _init: function () {
      target.style.height = wrappers[0].offsetHeight + 'px';
      target.style.overflow = 'auto';

      wrappers[0].style.transition = 'transform ' + duration + ' ' + easing;
      wrappers[0].style.position = 'fixed';
      wrappers[0].style.top = '0';
      wrappers[0].style.left = '0';
      wrappers[0].style.width = '100%';
      wrappers[0].style.padding = '0';
      wrappers[0].style.zIndex = '2';
      wrappers[0].style.display = 'block';
      wrappers[0].style.backfaceVisibility = 'hidden';
    },
    _scroll: function () {
      top = -(win.pageYOffset || doc.documentElement.scrollTop);
      wrappers[0].style.transform = 'translateY(' + top + 'px)';
    }
  };

  if (typeof window.ontouchstart == 'undefined' && wrappers.length == 1) {
    win.onload = function () {
      mScroll._init();
    };
    win.onscroll = function () {
      mScroll._scroll();
    };
    win.onresize = function () {
      target.style.height = wrappers[0].offsetHeight + 'px';
    };
  }
})();

// cursor
const cursor = document.querySelector("#cursor");
const cursorBorder = document.querySelector("#cursor-border");
const cursorPos = { x: 0, y: 0 };
const cursorBorderPos = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
  cursorPos.x = e.clientX;
  cursorPos.y = e.clientY;

  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

requestAnimationFrame(function loop() {
  const easting = 8;
  cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
  cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

  cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
  requestAnimationFrame(loop);
});

document.querySelectorAll("[data-cursor]").forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    if (item.dataset.cursor === "pointer") {
      cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)";
      cursorBorder.style.setProperty("--size", "30px");
    }
    if (item.dataset.cursor === "pointer2") {
      cursorBorder.style.backgroundColor = "white";
      cursorBorder.style.mixBlendMode = "difference";
      cursorBorder.style.setProperty("--size", "80px");
    }
  });
  item.addEventListener("mouseout", (e) => {
    cursorBorder.style.backgroundColor = "unset";
    cursorBorder.style.mixBlendMode = "unset";
    cursorBorder.style.setProperty("--size", "50px");
  });
});


// counter

// counter section start
function animateCounter(element, target) {
  let count = 0;
  const screenSize = window.innerWidth;
  const speed = screenSize < 768 ? 100 : 200;

  const increment = target / speed;

  const updateCounter = () => {
    count += increment;
    if (count >= target) {
      element.textContent = target;
    } else {
      element.textContent = Math.ceil(count);
      requestAnimationFrame(updateCounter);
    }
  };

  updateCounter();
}

// faq
$(document).ready(function () {
  $(".faqs-container .faq-singular:first-child").addClass("active").children(".faq-answer").slideDown();//Remove this line if you dont want the first item to be opened automatically.
  $(".faq-question").on("click", function () {
    if ($(this).parent().hasClass("active")) {
      $(this).next().slideUp();
      $(this).parent().removeClass("active");
    }
    else {
      $(".faq-answer").slideUp();
      $(".faq-singular").removeClass("active");
      $(this).parent().addClass("active");
      $(this).next().slideDown();
    }
  });
});


// pagination

var items = $(".faqs-container .faq-singular");
var numItems = items.length;
var perPage = 5;

items.slice(perPage).hide();

if (numItems > perPage) {
  $('.question-main #pagination-container').pagination({
    items: numItems,
    itemsOnPage: perPage,
    prevText: "&laquo;",
    nextText: "&raquo;",
    onPageClick: function (pageNumber) {
      var showFrom = perPage * (pageNumber - 1);
      var showTo = showFrom + perPage;
      items.hide().slice(showFrom, showTo).show();
    }
  });
} else {
  $('.question-main #pagination-container').hide(); // Hides pagination if not needed
}

// read more
$('.moreless-button').click(function () {
  // Slide up all other open 'moretext' elements except the one being clicked
  $('.moretext').not($(this).closest('.read-moremain').find('.moretext')).slideUp();

  // Toggle the 'moretext' within the clicked section
  $(this).closest('.read-moremain').find('.moretext').slideToggle();

  // Update the text of all other 'moreless-button' elements
  $('.moreless-button').not(this).text("Read more");

  // Update the text of the clicked button
  if ($(this).text() == "Read less") {
    $(this).text("Read more");
  } else {
    $(this).text("Read less");
  }
});
