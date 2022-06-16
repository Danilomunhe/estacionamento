'use strict'

import {abrirModal, fecharModal} from './abrirModal.js'

const url = 'http://localhost/danilo/Projeto-Estacionamento/api/precos'

const readPrecos = async() =>{

    const response = await fetch(url)
    const data = await response.json()

    return data;
}

const exibirprecos = async ()=>{
    const primeiraHora = document.getElementById('valor-primeira-hora')
    const demaisHoras = document.getElementById('valor-demais-horas')

    const precos =  await readPrecos()

    primeiraHora.textContent = 'R$' + precos[0].valorprimeirahora + ',00'
    demaisHoras.textContent = 'R$' + precos[0].valordemaishoras + ',00'
}

const updatePrecos = async(preco) =>{

    const options = {
        method: 'PUT',
        body:   JSON.stringify(preco),
        headers:{
                'content-type': 'application/json'
        }
    }
    
    const response = await fetch(`${url}/1`, options)
    console.log(response.ok)
}

const readPrecoById = async(id) =>{

    const response = await fetch(`${url}/1`)
    return await response.json()
}
const fillFormPrecos = async(preco) =>{

    const horaInicial = document.getElementById('preco-hora-inicial')
    const DemaisHoras = document.getElementById('preco-demais-horas')

    horaInicial.dataset.id = preco.idpreco
    horaInicial.value = preco.valorprimeirahora
    DemaisHoras.value = preco.valordemaishoras

}
globalThis.editPreco = async (id) => {
    //armazenar as informações

    const precos = await readPrecoById(id)

    //preencher formulario com as informações
    // fillFormClients(client[0]) quando tiver no banco
    fillFormPrecos(precos)
    //abri a modal no estado de ediçao
    abrirModal()
}

const savePreco= async () =>{

    const preco = {
        "valorprimeirahora":   document.getElementById('preco-hora-inicial').value,
        "valordemaishoras":    document.getElementById('preco-demais-horas').value,
    }

    await updatePrecos(preco)
    fecharModal()
}

const sendPreco = async(event) =>{

    const method = event.target.textContent.toUpperCase()
        
    method == 'EDITAR'
    await savePreco()
}
document.getElementById('salvar').addEventListener('click', sendPreco)
document.getElementById('editar').addEventListener('click', editPreco)
exibirprecos()
