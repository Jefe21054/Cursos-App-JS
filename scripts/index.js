import Curso from './classes/Curso.js'

// Instanciacion de objetos de la clase Curso
const html = new Curso('HTML desde cero','https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fbig%2F927f5294-45af-4593-a52f-f437bf16d811.png&w=1920&q=75',10)
const css = new Curso('CSS desde cero','https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fbig%2F82daef93-44b7-4a0a-9910-42aa609c6eee.png&w=1920&q=75',8)

const elem = document.getElementById('cursos')

/**
 * Imprime un curso en el DOM
 * Recibe un objeto de tipo curso
 */
const mostrarCurso = curso => {
  const hijo = document.createElement('div')
  hijo.classList.add('card')
  hijo.innerHTML = `
    <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src="${curso.getPoster()}" alt="${curso.getNombre}"/>
    </div>
    <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 class="t5 s-mb-2 s-center">${curso.getNombre()}</h3>
      <div class="s-mb-2 s-main-center">
        <div class="card__teacher s-cross-center">
          <div class="card__avatar s-mr-1">
            <div class="circle img-container">
              <img src="./icons/learn.png" alt="Learn">
            </div>
          </div>
          <span class="small">Cantidad de clases: ${curso.getClases()}</span>
        </div>
      </div>
    </div>
  `
  elem.appendChild(hijo)
}

mostrarCurso(html)
mostrarCurso(css)