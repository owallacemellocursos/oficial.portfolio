//alert('js carregado');
//Manipulação de DOM


var btnMenu = document.querySelector('.btn-menu')
var menu = document.querySelector('.menu');

var bgPopup = document.querySelector('.bg-popup');
var closePopup = document.querySelector('.close');

closePopup.addEventListener('click', function(){

    bgPopup.style.display='none';

})

//Exibindo no console do navegador !
//console.log(btnMenu);
//console.log(menu);

//Associando eventos aos elementos selecionados

// toggle = pra adicionar uma função
// remove = retirar uma função 
btnMenu.addEventListener('click', function () {

    menu.classList.toggle('menu-open');
    btnMenu.classList.toggle('x');

});

menu.addEventListener('click', function () {

    menu.classList.remove('menu-open');
    btnMenu.classList.remove('x');
});


