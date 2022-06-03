'use strict'

let formDia = document.getElementById('formulario-dia')
let formMes = document.getElementById('formulario-mensal')
let formAnual = document.getElementById('formulario-anual')

const abrirModal = ()=>{
    const modal = document.getElementById('modal')
    modal.classList.add('active')
}

const fecharModal = ()=>{
    const modal = document.getElementById('modal')
    modal.classList.remove('active')
}
const abrirFormDiario = () =>{
  const formDia = document.getElementById('formulario-dia')
  formMes.classList.remove('active')
  formAnual.classList.remove('active')
  formDia.classList.add('active')
}
const abrirFormMensal = () =>{
  formDia.classList.remove('active')
  formAnual.classList.remove('active')
  formMes.classList.add('active')
}
const abrirFormAnual = () =>{
  formDia.classList.remove('active')
  formMes.classList.remove('active')
  formAnual.classList.add('active')
}
function abrir() {
    document.querySelector(".menu-burger-container").classList.toggle("active");
  }
function fechar() {
    document.querySelector(".menu-burger-container").classList.remove("active");
  }
  
document.getElementById('ano').addEventListener("click", abrirFormAnual)
document.getElementById('dia').addEventListener("click", abrirFormDiario)
document.getElementById('mes').addEventListener("click", abrirFormMensal)
document.querySelector(".menu-burger-container").addEventListener("click", abrir);
document.getElementById('abrir-modal').addEventListener('click', abrirModal)
document.getElementById('fechar-modal').addEventListener('click', fecharModal)
// document.getElementById('modal').addEventListener('click', fecharModal)