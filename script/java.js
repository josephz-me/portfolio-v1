$(document).ready(function(){
  $(this).scrollTop(0);
});

// Typed.JS //
// var typed = new Typed('#typed', {
//   stringsElement: '#typed-strings',
//   smartBackspace: true, // Default value
//   typeSpeed: 70,
//   backSpeed: 70,
// });


// Header Fade //
// $(window).scroll(function(){
//   $(".header-container").css("opacity", 1 - $(window).scrollTop() /220);
//   $(".nav-container-main").css("opacity", 0 + $(window).scrollTop() /270);
//   $(".main-grid-container").css("opacity", 0.3 + $(window).scrollTop() /100);
// });


// Mobile Menu Bar //
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// Page Transitions //
function fadeInPage() {
  if (!window.AnimationEvent) {
    return;
  }
  var fader = document.getElementById('fader');
  fader.classList.add('fade-out');
}

document.addEventListener('DOMContentLoaded', function() {
  if (!window.AnimationEvent) { return; }
  var anchors = document.getElementsByTagName('a');
  for (var idx=0; idx<anchors.length; idx+=1) {
    if (anchors[idx].hostname !== window.location.hostname) {
      continue;
    }
    anchors[idx].addEventListener('click', function(event) {
      var fader = document.getElementById('fader'),
          anchor = event.currentTarget;
      
      var listener = function() {
          window.location = anchor.href;
          fader.removeEventListener('animationend', listener);
      };
      fader.addEventListener('animationend', listener);
      
      event.preventDefault();
      fader.classList.add('fade-in');
    });
}
});

window.addEventListener('pageshow', function (event) {
  if (!event.persisted) {
    return;
  }
  var fader = document.getElementById('fader');
  fader.classList.remove('fade-in');
});
