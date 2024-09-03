// Intersection observer
function createIntersectionObserver(
  callback, 
  opts = { 
    root: null, // viewport
    rootMargin: '0px', 
    threshold: 0.5 // at 50% visible
  }) {
    var previousY = new Map();
    var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function (entry) {
        var currY = entry.boundingClientRect.y;
        var prevY = previousY.get(entry.target);
        if ( currY < prevY ) { /* scroll down */ entry.scrollDirectionY = 'down'; }
        if ( currY > prevY ) { /* scroll up */ entry.scrollDirectionY = 'up'; }
        callback(entry, observer, entries);
        previousY.set(entry.target, currY);
      });
    }, opts)
  
    return observer;
}

// Observer
var observer = createIntersectionObserver(function(entry){
    const sectionNumber = entry.target.dataset.sectionNumber;
    const sectionImage = document.getElementById('stickyScrollerImage' + sectionNumber);
    const sectionTab = document.getElementById('stickyScrollerTab' + sectionNumber);
    const numberOfSections = entry.target.dataset.numberOfSections;
    if (entry.isIntersecting) {
      sectionImage.classList.remove('is-hidden');
      sectionTab.classList.add('is-selected');
    }
    else {
      if ((sectionNumber === "1") && (entry.scrollDirectionY == 'up')) { 
        // scrolling up past first section
        sectionImage.classList.remove('is-hidden');
        sectionTab.classList.add('is-selected');
      } else if ((sectionNumber === numberOfSections) && (entry.scrollDirectionY == 'down')) { 
        // scrolling down past last section
        sectionImage.classList.remove('is-hidden');
        sectionTab.classList.add('is-selected');
      } else {
        sectionImage.classList.add('is-hidden');
        sectionTab.classList.remove('is-selected');
      }
    }
});
  
document.querySelectorAll('.sticky-scroller__section').forEach(function(el) { observer.observe(el); })