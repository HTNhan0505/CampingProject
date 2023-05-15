let navbtn = document.querySelectorAll('.line-pink');
let navbtn2 = document.querySelectorAll('.line-pink2');
let navbtn3 = document.querySelectorAll('.line-pink3');
for(let index = 0 ; index <navbtn.length ; index++) {
    let btn = navbtn[index];
    btn.addEventListener('click',(e)=> {
        e.preventDefault();
        if(btn.classList.contains('active')) {
            btn.classList.remove('active')
        } else {
            btn.classList.add('active')
        }
    })
}
for(let index = 0 ; index <navbtn2.length ; index++) {
    let btn = navbtn2[index];
    btn.addEventListener('click',(e)=> {
        e.preventDefault();
        if(btn.classList.contains('active')) {
            btn.classList.remove('active')
        } else {
            btn.classList.add('active')
        }
    })
}
for(let index = 0 ; index <navbtn3.length ; index++) {
    let btn = navbtn3[index];
    btn.addEventListener('click',(e)=> {
        e.preventDefault();
        if(btn.classList.contains('active')) {
            btn.classList.remove('active')
        } else {
            btn.classList.add('active')
        }
    })
}