document.addEventListener('DOMContentLoaded', function() {
    const book = document.querySelector('.book');
    const toggleLinks = document.querySelectorAll('.toggle-page');

    toggleLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (this.dataset.page === 'login') {
                book.classList.remove('opened');
            } else {
                book.classList.add('opened');
            }
        });
    });
});
