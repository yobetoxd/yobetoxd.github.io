(function(){

    const sliders = [...document.querySelectorAll('.memes__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });
    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
    const currentMemes = document.querySelector('.memes__body--show').dataset.id;
        value = Number(currentMemes);
        value+= add;

        sliders[Number(currentMemes)-1].classList.remove('memes__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;

        }
        

        sliders[value-1].classList.add('memes__body--show');
    }


})();