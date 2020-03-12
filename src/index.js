'use strict';
//поддержка IE 11
// import '@babel/polyfill';
// import 'nodelist-foreach-polyfill';
// import elementClosest from 'element-closest';
// elementClosest(window);
// import 'formdata-polyfill';
// import 'es6-promise';
// import 'fetch-polyfill';


import toglePopup from './modules/toglePopup';
import accordion from './modules/accordion';
import addMore from './modules/addMore';
// import slowScroll from './modules/slowScroll';
// import tabs from './modules/tabs';
// import calculate from './modules/calculate';
import maskPhone from './modules/maskPhone';
import sendForm from './modules/sendForm';
import Validator from './modules/validator';


// popup
toglePopup();
//аккордион
accordion();
// кнопка Больше...
addMore();

//прокрутка до услуг
// slowScroll();
//табы наши услуги
// tabs();
// калькулятор не знаю это работе не мешает но изначально в верстке уже есть проверка - может через css
// calculate( 100 );

//send-ajax-form
sendForm();
//маска для ввода телефона
	//форма heder
maskPhone('#phone_3');
    //форма portfolio
maskPhone('#phone_2');
    //форма question
// maskPhone('#phone_13');

// валидатор формы
	//форма heder
const validatorForms = new Validator({
        selector: '.main-form', // что валидируем
        pattern: { 
            // youName: /^[А-ЯЁа-яё]*$/
        },
        method: {
            'phone_3':[ 
                ['notEmpty'], 
                ['pattern', 'phone'] 
            ]
        }
});
validatorForms.init();
//    форма получить расчет
const validatorForms2 = new Validator({
        selector: '#sectionForm', // что валидируем
        pattern: { 
            youName: /^[А-ЯЁа-яё]*$/,
            // youMessage: /^[А-ЯЁа-яё]*$/,
        },
        method: {
            'phone_2':[ 
                ['notEmpty'], 
                ['pattern', 'phone'] 
            ],
            'name_2':[
                ['notEmpty'], 
                ['pattern', 'youName'] 
            ]
        }
});
validatorForms2.init();
//    форма остались вопросы
const validatorForms3 = new Validator({
    selector: '.director-form', // что валидируем
    pattern: { 
        youMessage: /^[А-ЯЁа-яё]*$/,
    },
    method: {
        'question':[ 
            ['notEmpty'], 
            ['pattern', 'youMessage'] 
        ]
    }
});
validatorForms3.init();

