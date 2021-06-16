const peso = document.querySelector('#peso')
const resultado = document.querySelector('#resultado')

const altura = document.querySelector('#altura')
const botao = document.querySelector('#button')

if (localStorage.getItem("peso")) {
    peso.value = localStorage.getItem("peso")
    altura.value = localStorage.getItem("altura")

    connect()

}

botao.addEventListener('click', function() {
    connect()
})


function connect() {
    fetch(`https://apiimc.herokuapp.com/imc?peso=${peso.value}&altura=${altura.value * 100}`)
        .then(response => response.json())
        .then(data => {
            resultado.innerHTML = `
        <p>Resultado</p>
        <div id="resultado-container" >
            <p>IMC: ${(data.imc_result).toFixed(2)}</p>
            <p>${data.diagnosis}</p>
        </div>
      `

            localStorage.setItem('peso', peso.value)
            localStorage.setItem('altura', altura.value)



        });

    resultado.classList.add('resultado')

}