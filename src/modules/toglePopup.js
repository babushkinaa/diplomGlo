'use strict';

const toglePopup = () =>{
    const popUp = document.querySelector('.popup-call');
    const showPopup = () =>{
        popUp.style.display = 'block';
        popUp.style.opacity = 0;
        let op = 0;
        const setOpacity = () => {
            let opacity;
                if( op < 1 ) {
                    opacity = requestAnimationFrame(setOpacity);
                    op +=0.04;
                    popUp.style.opacity = op;
                
                } else{
                    cancelAnimationFrame(opacity);
                }
        }
        setOpacity();
    };

    const closePopup = () => {
        let op = 1;
        const setOpacity = () => {
            let opacity;
                if( op > 0 ) {
                    opacity = requestAnimationFrame(setOpacity);
                    op -=0.08;
                    popUp.style.opacity = op;
                
                } else{
                    cancelAnimationFrame(opacity);
                    popUp.style.display = 'none';
                }
        }
        setOpacity();
    };

    const closePopupBg = () => {
        let op = 1;
        const setOpacity = () => {
            let opacity;
                if( op > 0 ) {
                    opacity = requestAnimationFrame(setOpacity);
                    op -=0.3;
                    popUp.style.opacity = op;
                
                } else{
                    cancelAnimationFrame(opacity);
                    popUp.style.display = 'none';
                }
        }
        setOpacity();
    };

    document.addEventListener('click',(event)=>{
        const target = event.target;
        if (target.closest('.call-btn')) {
            showPopup();
        }
        if (target.closest('.popup-close')) {
            closePopup();
        }
        if (target.closest('.popup-call') && !target.closest('.capture-form')) {
            closePopupBg();
        }
    });

}

export default toglePopup;