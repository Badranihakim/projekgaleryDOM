// DOM TRAVERSAL

// const close = document.querySelectorAll('.close')

// close.forEach(el => {
//     el.addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//         e.stopPropagation();
//     });
// });

// const cards = document.querySelectorAll('.card');
// cards.forEach(card => {
//     card.addEventListener('click',function(e) {
//         alert('oke')
//     })
// });

// EVENT BUBBLING

const container = document.querySelector('.container');

container.addEventListener('click',function(e) {
    if(e.target.className == 'close'){
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
});

// const nama = document.querySelector('.nama')
// console.log(nama.parentElement);
// console.log(nama.nextElementSibling.nextElementSibling);
// console.log(nama.previousElementSibling);