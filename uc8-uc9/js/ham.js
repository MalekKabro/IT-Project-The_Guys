let hamBox = document.querySelector(".hambox");

hamBox.addEventListener('click', () => {
    // closed ham
    document.querySelector('.ham-1').classList.toggle('ham-1-after');
    document.querySelector('.ham-2').classList.toggle('ham-2-after');

    // show hamburger
    document.querySelector('.hamburger').classList.toggle('hamburger-show');

})