'use strict';
//поддержка IE 11
import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';

import AOS from 'aos';


import toglePopup from './modules/toglePopup';
import accordion from './modules/accordion';
import addMore from './modules/addMore';
import calculate from './modules/calculate';
import maskPhone from './modules/maskPhone';
import sendForm from './modules/sendForm';
import Validator from './modules/validator';

// popup
toglePopup();
//аккордион
accordion();
// кнопка Больше...
addMore();
// калькулятор 
calculate();
//send-ajax-form
sendForm();

//маска для ввода телефона

//  форма heder
maskPhone('#phone_3');
//  форма portfolio
maskPhone('#phone_2');
//  форма call-popup
maskPhone('#phone_1');
// форма discount-popup
maskPhone('#phone_11');
// форма check-popup
maskPhone('#phone_12');
// форма consultation-popup
maskPhone('#phone_13');

// валидатор формы
//    форма heder
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
//    call-popup
const validatorForms4 = new Validator({
    selector: '.call-popup', // что валидируем
    pattern: { 
        youName: /^[А-ЯЁа-яё]*$/,

    },
    method: {
        'phone_1':[ 
            ['notEmpty'], 
            ['pattern', 'phone'] 
        ],
        'name_1':[
            ['notEmpty'], 
            ['pattern', 'youName'] 
        ]
    }
});
validatorForms4.init();
//    discount-popup
const validatorForms5 = new Validator({
    selector: '.discount-popup', // что валидируем
    pattern: { 
        youName: /^[А-ЯЁа-яё]*$/,

    },
    method: {
        'phone_11':[ 
            ['notEmpty'], 
            ['pattern', 'phone'] 
        ],
        'name_11':[
            ['notEmpty'], 
            ['pattern', 'youName'] 
        ]
    }
});
validatorForms5.init();
//    check-popup
const validatorForms6 = new Validator({
    selector: '.check-popup', // что валидируем
    pattern: { 
        youName: /^[А-ЯЁа-яё]*$/,

    },
    method: {
        'phone_12':[ 
            ['notEmpty'], 
            ['pattern', 'phone'] 
        ],
        'name_12':[
            ['notEmpty'], 
            ['pattern', 'youName'] 
        ]
    }
});
validatorForms6.init();
//    consultation-popup
const validatorForms7 = new Validator({
    selector: '.consultation-popup', // что валидируем
    pattern: { 
        youName: /^[А-ЯЁа-яё]*$/,

    },
    method: {
        'phone_13':[ 
            ['notEmpty'], 
            ['pattern', 'phone'] 
        ],
        'name_13':[
            ['notEmpty'], 
            ['pattern', 'youName'] 
        ]
    }
});
validatorForms7.init();

AOS.init({
    // offset: 200,
    duration: 2000,
    // easing: 'ease-in-quad',
    // delay: 100,
    disable: function () {
        var maxWidth = 768;
        return window.innerWidth < maxWidth;
      }
});
