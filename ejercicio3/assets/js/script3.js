//Selecciona los input del HTML con el ID
let inpValor1 = document.getElementById('valor1')
let inpValor2 = document.getElementById('valor2')
//Selecciona los button del HTML con el ID
let btnSumar = document.getElementById('btn-sumar')
let btnRestar = document.getElementById('btn-restar')

//Mediante un click permite realizar la suma
btnSumar.addEventListener('click', function(){
    const sumar = parseInt(inpValor1.value) + parseInt(inpValor2.value)
    document.querySelector('.resultado').innerHTML = sumar //Se escribe el resultado de la suma
})
//Mediante un click permite realizar la resta
btnRestar.addEventListener('click', function(){
    const restar = parseInt(inpValor1.value) - parseInt(inpValor2.value)
    document.querySelector('.resultado').innerHTML = restar //Se escribe el resultado de la resta
    if (restar < 0){
        document.querySelector('.resultado').innerHTML = 0 //De ser un número < 0, el resultado será 0
    }
})