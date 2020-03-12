'use strict';

const accordion = () => {
    const accordion = document.querySelectorAll('a.collapsed');
    
    const selectItem = (event) =>{
        const target = event.target;
        event.preventDefault();


        if (target.closest('.questions')) {
            const questionArr = [];
            for(const i of accordion){
                if (i.closest('.questions')) {
                    questionArr.push(i);
                }
            }

            for (const i of questionArr) {
                if (target.textContent.trim() === i.textContent.trim()) {
                    const targetItem = i.href.substring(i.href.indexOf("#"));
                    const targetHref = document.querySelector(targetItem);
                    targetHref.classList.add('in');
                }else {
                    const targetItem = i.href.substring(i.href.indexOf("#"));
                    const targetHref = document.querySelector(targetItem);
                    targetHref.classList.remove('in');
                }
            }
        }
        if (target.closest('.constructor')) {
            
            const questionArr = [];
            for(const i of accordion){
                if (i.closest('.constructor')) {
                    questionArr.push(i);
                }
            }

            for (const i of questionArr) {
                if (target.textContent.trim() === i.textContent.trim()) {
                    const targetItem = i.href.substring(i.href.indexOf("#"));
                    const targetHref = document.querySelector(targetItem);
                    targetHref.classList.add('in');
                }else {
                    const targetItem = i.href.substring(i.href.indexOf("#"));
                    const targetHref = document.querySelector(targetItem);
                    targetHref.classList.remove('in');
                }
            }
        }
        
    };
    for(let i of accordion){
        i.addEventListener('click',selectItem);
    }
    
};


export default accordion;