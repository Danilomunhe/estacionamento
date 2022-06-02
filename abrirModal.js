'use strict'

const abrirModal = ()=>{
    const modal = document.getElementById('modal')
    modal.classList.add('active')
}

const fecharModal = ()=>{
    const modal = document.getElementById('modal')
    modal.classList.remove('active')
}

function abrir() {
    document.querySelector(".menu-burger-container").classList.toggle("active");
  }
  function fechar() {
    document.querySelector(".menu-burger-container").classList.remove("active");
  }
  
document.querySelector(".menu-burger-container").addEventListener("click", abrir);
document.getElementById('abrir-modal').addEventListener('click', abrirModal)
document.getElementById('fechar-modal').addEventListener('click', fecharModal)
// document.getElementById('modal').addEventListener('click', fecharModal)