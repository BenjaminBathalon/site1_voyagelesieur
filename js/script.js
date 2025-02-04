const btPlus = document.querySelector('.js-plus');
const colTransport = document.querySelector('.conteneur-transport');

btPlus.addEventListener('click', fOuvreEtFerme);

function fOuvreEtFerme(){
    colTransport.classList.toggle('conteneur-transport-invisible')

}
