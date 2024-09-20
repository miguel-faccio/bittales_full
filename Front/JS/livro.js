document.addEventListener('DOMContentLoaded', function() {
    const bookContainer = document.querySelector('.book-container');

    function scrollLeft() {
        bookContainer.scrollBy({ left: -300, behavior: 'smooth' });
    }

    function scrollRight() {
        bookContainer.scrollBy({ left: 300, behavior: 'smooth' });
    }

    document.getElementById('scroll-left').addEventListener('click', scrollLeft);
    document.getElementById('scroll-right').addEventListener('click', scrollRight);
});