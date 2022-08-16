const card = document.querySelector('#card');
const btnOpen = document.querySelector('#btn-open');
const form = document.querySelector('#card-form');
const cardNumber = document.querySelector('#card .number');
const cardName = document.querySelector('#card .fullname');
const brandLogo = document.querySelector('#brand-logo');
const signature = document.querySelector('#card .signature p');
const monthExpire = document.querySelector('#card .month');
const yearExpire = document.querySelector('#card .year');
const ccv = document.querySelector('#card .ccv')

/* voltear tarjeta para el frente */
const showFront = () => {
    if(card.classList.contains('active')){
        card.classList.remove('active')
    }
};

/*evento de la tarjeta*/
card.addEventListener('click', () => {
    card.classList.toggle('active');
})

/*evento del boton*/
btnOpen.addEventListener('click', () => {
    btnOpen.classList.toggle('active');
    form.classList.toggle('active');
})


/*ciclo fecha mes */
for(let i = 1; i <= 12; i++){
    let option = document.createElement('option');
    option.value = i;
    option.innerText = i;

    form.selectMonth.appendChild(option);
};

/*ciclo fecha año */
for(let i = 2022; i <= 2030; i++){
    let option = document.createElement('option');
    option.value = i;
    option.innerText = i;

    form.selectYear.appendChild(option);
};



/* validacion input numero con expresiones regulares  */
form.inputNumber.addEventListener('keyup', (e) => {

    let valueInput = e.target.value;

    
    form.inputNumber.value = valueInput
    /* eliminar espacios en blanco */
    .replace(/\s/g, '')
    /* eliminar letras */
    .replace(/\D/g, '')
    /* agrupar cada 4 digitos */
    .replace(/([0-9]{4})/g, '$1-' )
    /* quitar el ultimo espaciado */
    .trim();

    cardNumber.textContent = valueInput;

    if(valueInput == ''){
        cardNumber.textContent = 'XXXX XXXX XXXX XXXX';

        brandLogo.innerHTML = '';
    }

    /* validar tarjetas visa */
    if(valueInput[0] == 4){
        brandLogo.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = 'img/logos/visa.png';
        brandLogo.appendChild(imagen);
    }

    /* validar tarjetas Mastercard */
    if(valueInput[0] == 5){
        brandLogo.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = 'img/logos/mastercard.png';
        brandLogo.appendChild(imagen);
    }


    /* voltear tarjeta para el frente */
    showFront();
});


/* validacion input nombre con expresiones regulares  */
form.inputName.addEventListener('keyup', (e) => {

    let valueInput = e.target.value;

    form.inputName.value = valueInput
    /* eliminar numeros */
    .replace(/[0-9]/g, '')

    cardName.textContent = valueInput;

    if(valueInput == ''){
        cardName.textContent = 'Crow Jones';

    }

    signature.textContent = valueInput;

    /* voltear tarjeta para el frente */
    showFront();

});


/* validacion input mes de expiracion  */
form.selectMonth.addEventListener('change', (e) => {

    let valueInput = e.target.value;
  
    monthExpire.textContent = valueInput;

    /* voltear tarjeta para el frente */
    showFront();
});

/* validacion input año de expiracion  */
form.selectYear.addEventListener('change', (e) => {

    let valueInput = e.target.value.slice(2);
  
    yearExpire.textContent = valueInput;

    /* voltear tarjeta para el frente */
    showFront();
});

/* validacion input CVV*/

form.inputCvv.addEventListener('keyup', () => {

    if(!card.classList.contains('active')){
        card.classList.toggle('active');
    }

    form.inputCvv.value = form.inputCvv.value
    /* eliminar espacios en blanco */
    .replace(/\s/g, '')
    /* eliminar letras */
    .replace(/\D/g, '');

    ccv.textContent = form.inputCvv.value;
});
