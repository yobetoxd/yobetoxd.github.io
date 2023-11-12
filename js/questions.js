(function(){
    const tittleQuestions = [...document.querySelectorAll('.questions__tittle')];
    

    tittleQuestions.forEach(questions =>{
        questions.addEventListener('click', ()=>{
            let height = 0;
            let answer = questions.nextElementSibling;
            let addPadding = questions.parentElement.parentElement;


            addPadding.classList.toggle('questions__padding--add');
            questions.children[0].classList.toggle('questions__arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }
            answer.style.height = `${height}px`;
        });
    });



})();