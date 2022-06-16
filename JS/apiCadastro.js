'use strict'

const url = 'http://localhost/danilo/Projeto-Estacionamento/api/registros'
const getDados = ()=>{
    const nome = document.getElementById('nome').value
    const modelo = document.getElementById('modelo').value
    const cor = document.getElementById('cor').value
    const placa = document.getElementById('placa').value
    const entrada = document.getElementById('entrada').value + ":00"
    const saida = document.getElementById('saida').value + ":00"
    const conversorEntrada = entrada.split(":", 2)
    const conversorSaida = saida.split(":", 2)
    const tempoEntrada = conversorEntrada[0]*3600 + conversorEntrada[1]*60
    const tempoSaida = conversorSaida[0]*3600 + conversorSaida[1]*60
    console.log(conversorEntrada[0]*3600)
    
    const tempoTotal = tempoSaida - tempoEntrada 

    console.log(tempoTotal/3600)

    // entrada*60
    // saida*60
}

const createClients = async(client) =>{

    const options = {
        method: 'POST',
        body:   JSON.stringify(client),
        headers:{
                'content-type': 'application/json'
        }
    }

    const response = await fetch(url, options)
    console.log(response.ok)
}

const saveClient = async () =>{

    const client = {
    "nome" : document.getElementById('nome').value,
    "modelo" : document.getElementById('modelo').value,
    "cor" : document.getElementById('cor').value,
    "placa" : document.getElementById('placa').value,
    "entrada" : document.getElementById('entrada').value + ":00",
    "saida" : document.getElementById('saida').value + ":00",
    }

    await createClients(client)
}

const sendClient = async(event) =>{

    const method = event.target.textContent.toUpperCase()

    if(method == 'SALVAR'){
        await saveClient()

    }else if(method == 'EDITAR'){
        console.log("CHORAR")
    }

}
document.getElementById('botao-salvar').addEventListener('click', saveClient)
