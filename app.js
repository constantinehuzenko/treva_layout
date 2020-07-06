let mainSection = document.querySelector('header')
let mainContent = document.querySelector('.hero')

function scrollAnimationsMain() {
  // On scroll function variables
  let elementsLibrary = ['.section__inner_text-large', '.tabs', '.section__block_text-large', '.section__block_text-small', '.section__block-bck', '.section__block-img', '.section__block-img.block02', '.section__block-text.block02>.section__block_text-large', '.section__block-text.block02>.section__block_text-small', '.subscribe__text-large', '.subscribe__text-small', '.subscribe__input'];
  let arr = [];

  // add variables from arrey
  for (let i = 0; i < elementsLibrary.length; i++) {
    let variableLoop = document.querySelector(elementsLibrary[i]);
    arr.push(variableLoop);
  }

  // get cordinate of element
  function getCordinateOfElement(el) {
    let c = el.getBoundingClientRect();
    let cord = c.top - window.innerHeight;
    if (cord < 0) {
      el.style.opacity = "0";
    }
    if (cord < -150) {
      el.classList.add("animation");
    }
  }

  // get cordinate of all elements
  function scrollEvent(arrey) {
    for (let i = 0; i < arrey.length; i++) {
      getCordinateOfElement(arrey[i]);
    }
  }

  window.onscroll = function () {
    
    // header scroll fix
    scrollEvent(arr);
    if (
      document.body.scrollTop > 150 ||
      document.documentElement.scrollTop > 150
    ) {
      mainSection.classList.add("fixed");
      mainContent.classList.add("margin");
    } else {
      mainSection.classList.remove("fixed");
      mainContent.classList.remove("margin");
    }
  };
}

scrollAnimationsMain();
// On scroll function end



