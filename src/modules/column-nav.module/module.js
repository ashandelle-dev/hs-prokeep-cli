const dropMenus = Array.prototype.slice.call( document.querySelectorAll(".dropdown-menu") );
dropMenus.forEach(sub => {
if(window.innerWidth < 1024) {
  sub.querySelector('a').addEventListener("click", function(e) {
    sub.querySelector(".sub-menu-caret").classList.toggle("left-3");
    sub.querySelector(".sub-menu-caret").classList.toggle("right-3");
    sub.querySelector('a').classList.toggle('pl-8');
    sub.querySelector(".sub-menu-caret svg").classList.toggle("rotate-180");
    //let subNext = sub.nextElementSibling;
    sub.querySelector('.menu-container').classList.toggle("translate-x-full");
    sub.classList.toggle('active');
  });
  } else {
  	sub.querySelector('a').addEventListener("click", function(e) {
  		var desktopDropdown = e.target.parentNode.nextElementSibling;
  		desktopDropdown.style.display = 'none';
  	});
  	sub.querySelector('a').addEventListener('mouseenter', function(e){
  		var desktopDropdown = e.target.nextElementSibling;
  		desktopDropdown.removeAttribute('style');
  	});
  }
});

const accordions = Array.prototype.slice.call(document.querySelectorAll('.column-menu'));

	accordions.forEach(accordion => {
		if(window.innerWidth < 1024) {
			accordion.addEventListener('click', function(){
				var otherAccordions = accordions.filter(function(otherAccordion){
					return otherAccordion !== accordion;
				});
				otherAccordions.forEach(otherMenu => {
					otherMenu.classList.remove('expand');
				});

				accordion.classList.toggle('expand');
			});
		}
	
});

document.addEventListener('DOMContentLoaded', function(){
	const ctaTitles = document.querySelectorAll('.cta-title');
	ctaTitles.forEach(ctaTitle =>{
		ctaTitle.innerHTML = ctaTitle.innerHTML.replace(/^\s*\w+/, '<span class="text-[#2A7991]">$&</span>');
	});
	
});

