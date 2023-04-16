console.log('Hello World');

AOS.init();

// Accordion Logic
// TODO: Problema cu max-height-ul la responsive - fixat
// TODO: trebuie ales un max-height potrivit mai mare decat orice
var acc = document.getElementsByClassName('accordion-header');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = '800px';
    }
  });
}
// End of Accordion Logic

// Smooth Slider

// End of Smooth Slider
