const fields = document.querySelectorAll('[required]')
//console.log(validation);

function customValidation(event) {
    const field = event.target

     field.setCustomValidity("Esse campo é obrigatorio")
}

for (let field of fields) {
    field.addEventListener('invalid', event => {
    })
}























































document.querySelector('form').addEventListener('submit', event => {
    console.log('enviar formulario')
    event.preventDefault()
});
