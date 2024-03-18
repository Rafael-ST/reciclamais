const accordionarrowspin = () => {
        const accordionButtons = document.querySelectorAll('.accordion-button');

        accordionButtons.forEach(accordionButton => {


            accordionButton.addEventListener('click', function () {
                const arrowImage = this.querySelector('.accordion-arrow-img');
                arrowImage.classList.toggle('rotate');
            });
        });
    };
    

export { accordionarrowspin }
