'use strict'

let formDia = document.getElementById('formulario-dia')
let formMes = document.getElementById('formulario-mensal')
let formAnual = document.getElementById('formulario-anual')

const abrirFormDiario = () =>{
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

document.getElementById('ano').addEventListener("click", abrirFormAnual)
document.getElementById('dia').addEventListener("click", abrirFormDiario)
document.getElementById('mes').addEventListener("click", abrirFormMensal)