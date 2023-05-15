import Curso from './classes/Curso.js'

const html = new Curso('HTML desde cero','https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fbig%2F927f5294-45af-4593-a52f-f437bf16d811.png&w=1920&q=75',10)
const css = new Curso('CSS desde cero','https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fbig%2F82daef93-44b7-4a0a-9910-42aa609c6eee.png&w=1920&q=75',8)

const elem = document.getElementById('curso')

elem.innerHTML = `
  <img src="${html.getPoster()}"/>
  <h3>${html.getNombre()}</h3>
  <span>Cantidad de clases: ${html.getClases()}</span>
`