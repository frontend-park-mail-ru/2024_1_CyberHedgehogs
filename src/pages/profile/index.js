const linkArr = document.querySelectorAll('.header_links');
linkArr.forEach(link => {
    link.addEventListener('click', (event) => event.preventDefault())
})