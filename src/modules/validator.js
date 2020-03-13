'use strict';

export default class Validator{
    // конструктор
    constructor({selector, pattern ={}, method}){
        this.form = document.querySelector( selector ); // наша форма id class ...
        this.pattern = pattern; // кастомный паттерн для формы
        this.method = method; // настройки какие поля должны валидироваться и какие методы к ним будут применяться
        this.elementsForm = [...this.form.elements].filter(item => {
            return item.tagName.toLowerCase() !== 'button' && item.type.toLowerCase() !== 'button'; // вернем элементы формы за исключением кнопок item.type.toLowerCase() !== 'button'; если верстальщик зделал кнопку типом button
            });
        this.error = new Set();
    }
    

    // метод для запуска валидатора
    init(){
        // console.log(this.form);
        this.applyStyle(); // создадим элемент для вставки стилий в HEAD
        this.elementsForm.forEach(elem => elem.addEventListener('change', this.checkIt.bind(this))); // обязательно нужно bind иначе теряем контекст вызова
        this.setPattern();
        this.form.addEventListener('submit', event => {
            if (this.error.size) { // если size размер коллекции >0 то делаем event.preventDefault();
                event.preventDefault();
            } else {
                this.elementsForm.forEach( elem => {
                    // console.log({target: elem});
                    this.checkIt({target: elem});
                });
            }
        })
    }

    // метод валидации вводимых данных в input
    isValid(elem){

        const validatorMethod = {
            notEmpty(elem) {
                if ( elem.value.trim() === '' ) {
                    return false;
                }
                return true;
            },
            pattern(elem, pattern){
                return pattern.test(elem.value);
            }
        };

        if (this.method) {
            const method = this.method[elem.id]; // проверяем методы проверки
            if (method) { // если методы существуют 
                return method.every( item  => validatorMethod[item[0]](elem, this.pattern[item[1]]));                
             } else {
                 console.warn('необходимо передать id  и методы проверки для этих полей, валидация всегда true')
             }
        }        
        return true;
    }

    // метод для проверки события change в input по патернам
    checkIt(event){
        const target = event.target;

        if ( this.isValid(target) ) {

            this.showSuccess(target);
            this.error.delete(target);     
        } else {
            this.showError(target);
            this.error.add(target);
        }

    }

    // если ошибка
    showError(elem){
        elem.classList.remove('success'); // добавим класс success если валидации произошла
        elem.classList.add('error'); // добавим класс error если произошла ошибка валидации
        if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) { // если у элемента справа есть класс 'validator-error' ничего не делаем
            return
        }
        const errorDiv = document.createElement('div'); // добавим div для отображения под input текста ошибки
        errorDiv.textContent = 'Введенное значение не корректно'; // текст ошибки для div
        errorDiv.classList.add ('validator-error'); // добавим новому div новый class validator-error
        elem.insertAdjacentElement('afterend', errorDiv); // вставим созданный div после элемента elem

    }

    // если валидация прошла
    showSuccess(elem){
        elem.classList.remove('error');
        elem.classList.add('success'); // добавим класс success если валидации произошла
        if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error') ){ // проверим есть ли class ==='validator-error' у элемента справа 
        // nextElementSibling - элемент справа от текущего. 
            elem.nextElementSibling.remove(); // удаляем элемент справа
        }
    }

    // новый элемент HTML в HEAD
    applyStyle(){
        const style = document.createElement('style'); // созданим новый элемент HTML style
        style.textContent = `
            input.success {
                border: 2px solid green
            }
           
            input.error {
                border: 2px solid red!important
            }
            .validator-error {
                font-size: 10px!important;
                color: red;
            }

        `;
        document.head.appendChild(style); // вставим новый элемент в head страницы
    }

    // задаем патерны по умолчанию для проверки
    setPattern(){
        if (!this.pattern.phone) {
            this.pattern.phone = /^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{5,10}$/;
        }
        if (!this.pattern.email) {            
            this.pattern.email = /.+@.+\..+/i;
        }
    }
}