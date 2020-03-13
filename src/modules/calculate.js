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



        const showPrice = () => {
            calcResult.value = sendData.priceBox + ' руб.';
        };
        


        document.addEventListener('change',(event) =>{
            const target = event.target;
            if (target === onoffswitchCheckbox) {
                if ( onoffswitchCheckbox.checked ) {
                    sendData.priceBox = 10000;
                    sendData.twoBoxDiametr = 0;
                    sendData.twoBoxRing = 0;
                } else {
                    sendData.priceBox = 15000;
                    showTwoBox();
                }
            } 

            if (target === true) {
                
            }
            
            showPrice();
        });





    // const calcBlock =  document.querySelector('.calc-block'), // общий блок калькулятора
    //     calcType = document.querySelector('.calc-type'), // тип помещения
    //     calcSquare = document.querySelector('.calc-square'), // площадь помещения
    //     calcDay = document.querySelector('.calc-day'), // количество дней
    //     calcCount = document.querySelector('.calc-count'), // количество помещений
    //     totalValue = document.querySelector('#total'); // результат
    //     let opacity = undefined;


    // // доп задание    
    // const showPrice = (totalCalc) => {
    //     cancelAnimationFrame(opacity);
    //     let op = 0;
    //     totalValue.textContent = op;
    //             const setOpacity = () => {
    //                 opacity = requestAnimationFrame(setOpacity);;
    //                     if( op < totalCalc ) {
    //                         // let opacity = requestAnimationFrame(setOpacity);
    //                         op +=50;
                            
    //                         totalValue.textContent = op;
                        
    //                     } else{
    //                         cancelAnimationFrame(opacity);
    //                     }
    //             }
    //             setOpacity();
    // };    

    // const coutnSum = ( price ) =>{

    //     let total = 0, // результат
    //         countValue = 1, // помещений по умолчанию 
    //         dayValue = 1; // дней по умолчанию
    //     const typeValue = calcType.options[calcType.selectedIndex].value,
    //           squareValue = +calcSquare.value;

    //         if( calcCount.value > 1){
    //             countValue += ( calcCount.value - 1 )/ 10;
    //         }

    //         if (calcDay.value && calcDay.value < 5) {
    //             dayValue *= 2;
    //         } else if (calcDay.value && calcDay.value <10) {
    //             dayValue *= 1.5;
    //         }


    //         if (typeValue &&  squareValue) {
    //             total = price * typeValue * squareValue * countValue * dayValue;
    //         } 
           
       
    //     showPrice(total);
    // };    

    // calcBlock.addEventListener('change', event => {
    //     const target = event.target;

    //     if (target === calcType || target === calcSquare || target === calcDay || target === calcCount ) {
    //         // более короткий способ if (target.matches('select') || target.matches('input'))
    //         coutnSum(price);
    //     }

    // });

    // document.addEventListener('input', event => {
    //     let target = event.target;
    //     if (target === calcType || target === calcSquare || target === calcDay || target === calcCount) {
    //         target.value = target.value.replace(/[^0-9]/,'');
    //     }
    // })
}; 

export default calculate;

