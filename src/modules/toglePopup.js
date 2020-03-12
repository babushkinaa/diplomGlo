'use strict';

const toglePopup = () =>{
    const popUp = document.querySelector('.popup-call');
    const popDiscount = document.querySelector('.popup-discount');
    const popupCheck = document.querySelector('.popup-check');

    const showPopup = (elem) => {
        elem.style.display = 'block';
        elem.style.opacity = 0;
        let op = 0;
        const setOpacity = () => {
            let opacity;
                if( op < 1 ) {
                    opacity = requestAnimationFrame(setOpacity);
                    op +=0.04;
                    elem.style.opacity = op;
                
                } else{
                    cancelAnimationFrame(opacity);
                }
        }
        setOpacity();
    };

    const closePopup = (elem) => {
        let op = 1;
        const setOpacity = () => {
            let opacity;
                if( op > 0 ) {
                    opacity = requestAnimationFrame(setOpacity);
                    op -=0.08;
                    elem.style.opacity = op;
                
                } else{
                    cancelAnimationFrame(opacity);
                    elem.style.display = 'none';
                }
        }
        setOpacity();
    };

    const closePopupBg = (elem) => {
        let op = 1;
        const setOpacity = () => {
            let opacity;
                if( op > 0 ) {
                    opacity = requestAnimationFrame(setOpacity);
                    op -=0.3;
                    elem.style.opacity = op;
                
                } else{
                    cancelAnimationFrame(opacity);
                    elem.style.display = 'none';
                }
        }
        setOpacity();
    };

    document.addEventListener('click',(event)=>{
        
        const target = event.target;
        console.dir( target);

        if (target.closest('.call-btn')) {
            showPopup(popUp);
        }
        if (target.closest('.discount-btn')) {
            showPopup(popDiscount);
        }
        if (target.closest('.check-btn')) {
            showPopup(popupCheck);
        }
        if (target.closest('.popup-close')) {
            if (target.closest('.popup-call')) {
                closePopup(popUp);
            }
            if (target.closest('.popup-discount')) {
                closePopup(popDiscount);
            }
            if (target.closest('.popup-check')) {
                closePopup(popupCheck);
            }
        }
        if (target.closest('.popup-call') && !target.closest('.capture-form')) {
            closePopupBg(popUp);
        }
        if (target.closest('.popup-discount') && !target.closest('.capture-form')) {
            closePopupBg(popDiscount);
        }
        if (target.closest('.popup-check') && !target.closest('.capture-form')) {
            closePopupBg(popupCheck);
        }
    });

}

export default toglePopup;