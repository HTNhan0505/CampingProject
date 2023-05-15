let heart = document.querySelectorAll('.explore-item__heading--heart');
for(let index = 0 ; index <heart.length ; index++) {
    let btn = heart[index];
    btn.addEventListener('click',(e)=> {
        if(btn.classList.contains('active')) {
            btn.classList.remove('active')
            e.preventDefault();
        } else {
            btn.classList.add('active')
            e.preventDefault();

        }
    })
}
