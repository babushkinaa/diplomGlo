'use strict';
import sendData from './sendData';

const calculate = () => {

const calcResult = document.querySelector('#calc-result'),
        constructBtn = document.querySelectorAll('.construct-btn'),
        onoffswitchCheckbox = document.querySelector('#myonoffswitch'),
        twoBox = document.querySelector('#twoBox'),
        twoBoxDiametr = document.querySelector('#twoBox-diametr'),
        twoBoxDiametrSelect = document.querySelector('#twoBox-diametr-select'),
        twoBoxRing = document.querySelector('#twoBox-ring'),
        twoBoxRingSelect = document.querySelector('#twoBox-ring-select'),
        myonoffswitchTwo = document.querySelector('#myonoffswitch-two'),
        countDistance = document.querySelector('#count-distance');

        const hiddenTwoBox = () => {
            twoBox.style.visibility='hidden' ;
            twoBoxDiametr.style.visibility='hidden' ;
            twoBoxDiametrSelect.style.visibility='hidden' ;
            twoBoxRing.style.visibility='hidden' ;
            twoBoxRingSelect.style.visibility='hidden' ;
        };
        hiddenTwoBox();

        const showTwoBox = () => {
            twoBox.style.visibility='visible' ;
            twoBoxDiametr.style.visibility='visible' ;
            twoBoxDiametrSelect.style.visibility='visible' ;
            twoBoxRing.style.visibility='visible' ;
            twoBoxRingSelect.style.visibility='visible' ;
        };

        
        calcResult.value = sendData.priceBox = 10000;
        sendData.bottomBox = true;
        sendData.oneBoxDiametr = '1.4 метра';
        sendData.oneBoxRing = '1 штука';
        sendData.twoBoxDiametr = false;
        sendData.twoBoxRing = false;
        sendData.countDistance = 'Не указана';
        sendData.priceBoxResult = 0;

        const showPrice = () => {
            let result ;
            const oneBoxDiametr = parseFloat( sendData.oneBoxDiametr ),
                    twoBoxDiametr = sendData.twoBoxDiametr ? parseFloat( sendData.twoBoxDiametr ) : false,
                    oneBoxRing = parseFloat( sendData.oneBoxRing ),
                    twoBoxRing = sendData.twoBoxRing ? parseFloat( sendData.twoBoxRing ) : false,
                    bottomBox = sendData.bottomBox;
            let oneBoxDiametrPrice = 0,
                twoBoxDiametrPrice = 0,
                oneBoxRingPrice = 0,
                twoBoxRingPrice = 0,
                bottomBoxPrice = 0,
                twobottomBoxPrice = 0;


            if (sendData.priceBox === 10000) {
                result = sendData.priceBox;

                if (oneBoxDiametr === 2) {
                    oneBoxDiametrPrice = +sendData.priceBox * 0.2;
                }
                if (oneBoxRing === 2) {
                    oneBoxRingPrice = +sendData.priceBox * 0.3;
                } else if (oneBoxRing === 3) {
                    oneBoxRingPrice = +sendData.priceBox * 0.5;
                }
                bottomBoxPrice = bottomBox ? 1000 : 0;
            }
            if (sendData.priceBox === 15000) {
                result = sendData.priceBox;

                if (oneBoxDiametr === 2) {
                    oneBoxDiametrPrice = +sendData.priceBox * 0.2;
                }
                if (twoBoxDiametr === 2) {
                    twoBoxDiametrPrice = +sendData.priceBox * 0.2;
                }
                if (oneBoxRing === 2) {
                    oneBoxRingPrice = +sendData.priceBox * 0.3;
                } else if (oneBoxRing === 3) {
                    oneBoxRingPrice = +sendData.priceBox * 0.5;
                }
                if (twoBoxRing === 2) {
                    twoBoxRingPrice = +sendData.priceBox * 0.3;
                } else if (twoBoxRing === 3) {
                    twoBoxRingPrice = +sendData.priceBox * 0.5;
                }
                if (bottomBox) {
                    bottomBoxPrice = 1000;
                    twobottomBoxPrice = 2000;
                }

            }
            sendData.priceBoxResult = calcResult.value = result + oneBoxDiametrPrice + oneBoxRingPrice + bottomBoxPrice + twoBoxDiametrPrice + twoBoxRingPrice + twobottomBoxPrice +' руб.';
        };

        document.addEventListener('change',(event) =>{
            const target = event.target;
            if (target === onoffswitchCheckbox) {
                if ( onoffswitchCheckbox.checked ) {
                    sendData.priceBox = 10000;
                    hiddenTwoBox();
                } else {
                    sendData.priceBox = 15000;
                    showTwoBox();
                }
            } 
            if (target === myonoffswitchTwo) {
                if ( myonoffswitchTwo.checked ) {
                    sendData.bottomBox = true;
                } else {
                    sendData.bottomBox = false;
                }
            }
            if (target === countDistance) {
                    sendData.countDistance = target.value + ' метров';
            }
            showPrice();
        });

        document.addEventListener('input',(event) => {
            const target = event.target;
            if (target.tagName.toLowerCase() === 'select') {
                if (target.closest('#oneBox-diametr-select')) {
                    sendData.oneBoxDiametr = target.value;
                }
                if (target.closest('#oneBox-ring-select')) {
                    sendData.oneBoxRing = target.value;
                }
                if (target.closest('#twoBox-diametr-select')) {
                    sendData.twoBoxDiametr = target.value;
                }
                if (target.closest('#twoBox-ring-select')) {
                    sendData.twoBoxRing = target.value;
                }
            }
            showPrice();
        });

        document.addEventListener('click',(event) => {
            const target = event.target;
            if (target === constructBtn) {
                console.log('target: ', target);
                console.log('***');
                event.preventDefault();
                
            }
        });
       





  
}; 

export default calculate;

