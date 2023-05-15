import Curso from './classes/Curso.js'
import Profesor from './classes/Profesor.js'
import Alumno from './classes/Alumno.js'

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

const formulario = document.getElementById('formCursos')
formulario.addEventListener('submit', e => {
  e.preventDefault()
  const target = e.target
  const curso = new Curso(target.nombreCurso.value,target.posterCurso.value,target.clasesCurso.value)
  mostrarCurso(curso)
})

const profe = new Profesor('Ivan','Iglesias','ivan@ed.team',true,['Python desde cero','Desarrollo web con Django','Desarrollo web con Flask','React desde cero'],10)

const alumno1 = new Alumno('Beto','Quiroga','beto@ed.team',false,['JavaScript desde cero','React desde cero'])
const alumno2 = new Alumno('Alexys','Lozada','alexys@ed.team',true,['Go desde cero','Java desde cero','JavaSceript desde cero'])

const cursoReact = new Curso('React desde cero','https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fbig%2F9521c07e-3eb1-4b9a-b1d1-a310d843ece2.png&w=3840&q=75',25)

cursoReact.setInscritos([...cursoReact.getInscritos(),alumno1])