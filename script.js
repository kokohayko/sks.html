document.addEventListener('DOMContentLoaded', function() {
    // Добавим плавную прокрутку к разделам при клике на меню
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scroll({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});