'use strict'

const abrirModal = ()=>{
    const modal = document.getElementById('modal')
    modal.classList.add('active')
}

const fecharModal = ()=>{
    const modal = document.getElementById('modal')
    modal.classList.remove('active')
}

document.getElementById('abrir-modal').addEventListener('click', abrirModal)
document.getElementById('fechar-modal').addEventListener('click', fecharModal)