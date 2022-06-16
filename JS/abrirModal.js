'use strict'

const abrirModal = ()=>{
    const modal = document.getElementById('modal')
    modal.classList.add('active')
}

const fecharModal = ()=>{
    const modal = document.getElementById('modal')
    modal.classList.remove('active')
}

document.getElementById('fechar-modal').addEventListener('click', fecharModal)

export{
    abrirModal, 
    fecharModal
}