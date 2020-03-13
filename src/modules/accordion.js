'use strict';

const accordion = () => {
    const accordion = document.querySelectorAll('a.collapsed');
    const nextStep = document.querySelectorAll('#next-step');
    
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
            if (target.closest('.construct-btn')) {
                return;
            }
            
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

    const nextItem = (event) =>{
        const target = event.target;
        event.preventDefault();
        let nextShow;
        if (target.closest('#next-step')) {
            nextStep.forEach((item,index)=>{
                if (item.parentNode.parentNode.closest('.in')) {
                    nextShow = index+1;
                    item.parentNode.parentNode.classList.remove('in');
                }
                if (nextShow === index) {
                    item.parentNode.parentNode.classList.add('in');
                }
                if (nextShow === nextStep.length ) {
                    const btnCheck = document.querySelector('#calc-btn-send');
                    btnCheck.parentNode.parentNode.classList.add('in');
                }
            });
        }
    };

    for(let i of nextStep){
        i.addEventListener('click',nextItem);
    }

   
    
};


export default accordion;