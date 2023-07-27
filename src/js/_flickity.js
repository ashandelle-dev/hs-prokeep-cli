import Flickity from "flickity";

if( document.querySelector(".carousel-ticker") ) {

    // Play with this value to change the speed
    let tickerSpeed = 1.1;

    let flickity = null;
    let isPaused = false;
    const slideshowEl = document.querySelector(".carousel-ticker");

    const update = () => {
        if (isPaused) return;
        if (flickity.slides) {
            flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
            flickity.selectedIndex = flickity.dragEndRestingSelect();
            flickity.updateSelectedSlide();
            flickity.settle(flickity.x);
        }
        window.requestAnimationFrame(update);
    };

    flickity = new Flickity(slideshowEl, {
        autoPlay: false,
        prevNextButtons: false,
        pageDots: false,
        draggable: false,
        wrapAround: true,
        selectedAttraction: 0.015,
        friction: 0.25,
        cellAlign: 0,
    });

    flickity.x = 0;

    flickity.on("dragStart", () => {
        isPaused = true;
    });

    // Start Ticker
    update();


}
if( document.querySelector(".text-carousel") ) {

    const tcFlickity = new Flickity( document.querySelector(".text-carousel"), {
        
        pageDots: false,
    });

}

if( document.querySelector(".integrations-carousel") ) {

    const integrationsFlickity = new Flickity( document.querySelector(".integrations-carousel"), {
        
        autoPlay:3000,
        adaptiveHeight: true,
        prevNextButtons: false,
       

    });

}
