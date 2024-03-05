const linkArr = document.querySelectorAll('.header_links');
console.log(linkArr)
linkArr.forEach(link => {
    link.addEventListener('click', (event) => event.preventDefault())
})