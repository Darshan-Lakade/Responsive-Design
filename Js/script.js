const navSlider = () => {

    const burger = document.querySelector(".burger");
    const navBar = document.querySelector(".main-nav");

    burger.addEventListener('click', () => {
        navBar.classList.toggle('active');
    })
}

const scrollBtn = () => {
    const backBtn = document.querySelector(".backBtn");

    window.addEventListener('scroll', () => {
        let ypos = window.pageYOffset;

        if(ypos >= 300){
            backBtn.classList.add('visible');
        } else {
            backBtn.classList.remove('visible');
        }
    })
}

navSlider();
scrollBtn();
