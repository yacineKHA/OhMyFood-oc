const elements = document.querySelectorAll(".menu__card");

elements.forEach((element) =>{
    element.addEventListener('click', (event)=>{

        const border = event.target.closest('.menu__card').querySelector('.menu__card-border');

        if(border.classList.contains('active')){
            border.classList.remove('active')
        } else {
            border.classList.add('active');
        }
    });
});