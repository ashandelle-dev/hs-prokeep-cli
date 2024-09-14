// ACCORDION
const accordionTabs = document.querySelectorAll('.vertical-tabber__tab');
const accordionHeaders = document.querySelectorAll('.vertical-tabber__tab-toggle');
const accordionContent = document.querySelectorAll('.vertical-tabber__tab-content');
const accordionImage = document.querySelectorAll('.vertical-tabber__image');

function openAccordion(accordionHeader) { 
  let parent = accordionHeader.parentElement;
  let target = accordionHeader.nextElementSibling;
  accordionHeader.onclick = () => {
    let expanded = accordionHeader.getAttribute('aria-expanded') === 'true' || false;
    let image = document.getElementById(accordionHeader.dataset.imageId);
    accordionHeader.setAttribute('aria-expanded', !expanded);
    target.hidden = expanded;
    parent.classList.add('is-active');
    if (!expanded) {
      image.classList.remove('hidden');
    }
    accordionHeaders.forEach(function (item) {
      if (item !== accordionHeader) {
        item.setAttribute('aria-expanded', 'false');
      }
    });
    accordionTabs.forEach(function (item) {
      if (item !== parent) {
        item.classList.remove('is-active');
      }
    });
    accordionContent.forEach(function (item) {
      if (item !== target) {
        item.hidden = 'true';
      }
    });
    accordionImage.forEach(function (item) {
      if (item !== image) {
        item.classList.add('hidden');
      }
    });
  }
}

accordionHeaders.forEach(function (item) {
  openAccordion(item);
});