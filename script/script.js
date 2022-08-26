document.querySelector('.c-hamburger').addEventListener('click', function (e) {
    e.preventDefault();
    if (this.classList.contains('is-active')) {
        this.classList.remove('is-active');
        document.querySelector('.aside').classList.remove('nav-active');
    }
    else {
        this.classList.add('is-active');
        document.querySelector('.aside').classList.add('nav-active');
    }
})



