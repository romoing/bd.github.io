const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const edad = document.getElementById("edad");
const materia = document.getElementById("materia");
const calificaciones = document.getElementById("calificaciones");
const grupo = document.getElementById("grupo");

const resultado = document.getElementById("resultado");
const busqueda_nombre = document.getElementById("busqueda_nombre");
const busqueda_apellido = document.getElementById("busqueda_apellido");

const btn = document.getElementById("btn");
const caja = document.getElementById("caja");
/* var alumnonombre = ""; */




class Alumno {
  constructor(nombre, apellido,edad,materia,calificaciones, grupo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.materia = materia;
    this.calificaciones = calificaciones;
    this.grupo = grupo;

  }
}

const db = [
  new Alumno("javier", "romo", 32, "matematicas", 10, "A"),
  new Alumno("kiko", "rosas", 18, "espanol", 9, "A"),
  new Alumno("pedro", "lopez", 22, "ingles", 8, "B"),
  new Alumno("luis", "gomez", 19, "ciencias", 7, "B"),
  new Alumno("zaira", "gonzalez", 21, "ciencias", 6, "A"),
  new Alumno("ana", "perez", 20, "espanol", 5, "A"),
  new Alumno("jose", "anaya", 18, "espanol", 4, "B"),
  new Alumno("francisco", "alvarez", 22, "ingles", 8, "B"),
  new Alumno("luisa", "vazquez", 19, "ciencias", 10, "B"),
  new Alumno("maria", "cervantes", 21, "ciencias", 6, "A"),
  new Alumno("karen", "sanchez", 20, "espanol", 9, "A"),
];




function crear_alumno() {
  // Aqui estamos instanciando/ creando un nuevo objeto
  let alumno = new Alumno(nombre.value, apellido.value, edad.value, materia.value, calificaciones.value, grupo.value);
  db.push(alumno);
  localStorage.setItem("db", db);
  nombre.value = "";
  apellido.value = "";
  edad.value = "";
  materia.value = "";
  calificaciones.value = "";
  grupo.value = "";
  
  
}

function obtener_alumno() {
  const alumno = buscar_por_nombre(busqueda_nombre.value);

  resultado.innerHTML = `
    <div>
      Nombre: ${alumno.nombre}<br>
      Apellido: ${alumno.apellido}<br>
      Edad: ${alumno.edad}<br>
      Materia: ${alumno.materia}<br>
      Calificaciones: ${alumno.calificaciones}<br>
      grupo: ${alumno.grupo}<br>
    </div>
  `;
}

function buscar_por_nombre(nombre) {
  let resultado = null;
  for (let i = 0; i < db.length; i++) {
    // Checar si el valor coincide con el
    if (nombre === db[i].nombre) {
      resultado = db[i];
      
    }
  }
  
    return resultado;
}

function obtener_alumnoapellido() {
  const alumno = buscar_porapellido(busqueda_apellido.value);

  resultado1.innerHTML = `
    <div>
      Nombre: ${alumno.nombre}<br>
      Apellido: ${alumno.apellido}<br>
      Edad: ${alumno.edad}<br>
      Materia: ${alumno.materia}<br>
      Calificaciones: ${alumno.calificaciones}<br>
      grupo: ${alumno.grupo}<br>

    </div>
  `;
}

function buscar_porapellido(apellido) {
  let resultado = null;
  for (let i = 0; i < db.length; i++) {
    // Checar si el valor coincide con el
    if (apellido === db[i].apellido) {
      resultado = db[i];
      
    }
  }
    return resultado;

  }
   

  function listaordenadanombre(a, b) {
    const nombreA = a.nombre.toLowerCase();
    const nombreB = b.nombre.toLowerCase();
  
    if (nombreA < nombreB) {
      return -1;
    }
    if (nombreA > nombreB) {
      return 1;
    }
    return 0;

  }
   // Ordenar el arreglo db por nombre
  db.sort(listaordenadanombre);
  const resultadoDiv = document.getElementById("caja");

  // Crear una lista ordenada
  const listaOrdenada = document.createElement("ol");
  
  // Iterar sobre los elementos ordenados de db y crear elementos de lista para cada uno
  db.forEach(alumno => {
      const listItem = document.createElement("li");
      listItem.textContent = alumno.nombre;
      listaOrdenada.appendChild(listItem);
  });
  
  // Agregar la lista ordenada al div resultado
  resultadoDiv.appendChild(listaOrdenada);

  /* imprimer el arreglo ordenado
  console.log("Arreglo ordenado por nombre:");
  db.forEach(alumno => console.log(alumno.nombre));  */



  function ordenarPorCalificaciones(a, b) {
    return b.calificaciones - a.calificaciones;
  }
  
  // Ordenar el arreglo db por calificación
  db.sort(ordenarPorCalificaciones);
  
  // Mostrar el arreglo ordenado
  /* console.log("Arreglo ordenado por calificaciónes descendentes:");
  db.forEach(alumno => console.log(alumno.nombre, alumno.calificaciones)); */
  
  const caja1 = document.getElementById('caja1');
  let contenido = "<br>";
  db.forEach(alumno => contenido += `${alumno.nombre} - Calificación: ${alumno.calificaciones}<br>`);
  caja1.innerHTML = contenido;


  // Función para ordenar el arreglo de Alumnos por calificación de manera ascendente
function ordenarPorCalificacionesAscendente(a, b) {
  return a.calificaciones - b.calificaciones;
}

// Ordenar el arreglo db por calificación de manera ascendente
db.sort(ordenarPorCalificacionesAscendente);
function mostrarArregloOrdenado(arr, divId) {
  
}
 

function mostrarArregloOrdenado(arr, divId) {

  const div = document.getElementById(divId);
  
  let contenido = "Arreglo ordenado por calificaciones ascendentes:<br>";
  arr.forEach(alumno => contenido += `${alumno.nombre} - Calificación: ${alumno.calificaciones}<br>`);
  
  div.innerHTML = contenido;
}
db.sort(ordenarPorCalificacionesAscendente);

mostrarArregloOrdenado(db, 'caja2');



function calcularPromedio() {
  // Suma de las calificaciones
  let sumaCalificaciones = 0;
  for (let i = 0; i < db.length; i++) {
    sumaCalificaciones += db[i].calificaciones;
  }

  // Calcula el promedio
  const promedio = sumaCalificaciones / db.length;

  // Muestra el promedio en el div "caja3"
  const caja3 = document.getElementById("caja3");
  caja3.innerText = "El promedio es: " + promedio.toFixed(2);
}
window.onload = function() {
  calcularPromedio();
};





// Objeto para almacenar los grupos por materia
const gruposPorMateria = {};

// Recorrer el arreglo db y agrupar por materia
db.forEach(alumno => {
  if (!gruposPorMateria[alumno.materia]) {
    gruposPorMateria[alumno.materia] = [];
  }
  gruposPorMateria[alumno.materia].push(alumno);
});

// Mostrar los grupos
console.log("Grupos por materia:");
for (const materia in gruposPorMateria) {
  if (gruposPorMateria.hasOwnProperty(materia)) {
    console.log(`Materia: ${materia}`);
    gruposPorMateria[materia].forEach(alumno => console.log(alumno.nombre));
  }
}


// Función para dar de alta un nuevo alumno al arreglo db
function darDeAltaAlumno(nombre, apellido, edad, materia, calificacion, grupo) {
  const nuevoAlumno = new Alumno(nombre, apellido, edad, materia, calificacion, grupo);
  db.push(nuevoAlumno);
}

// Ejemplo de uso de la función para dar de alta un nuevo alumno
darDeAltaAlumno("Juan", "Pérez", 20, "historia", 9, "A");


// Convertir el arreglo db y el objeto gruposPorMateria a cadenas JSON
const dbJSON = JSON.stringify(db);
const gruposPorMateriaJSON = JSON.stringify(gruposPorMateria);

// Guardar en localStorage
localStorage.setItem('db', dbJSON);
localStorage.setItem('gruposPorMateria', gruposPorMateriaJSON);

// Recuperar los datos del localStorage
const dbGuardadoJSON = localStorage.getItem('db');
const gruposPorMateriaGuardadoJSON = localStorage.getItem('gruposPorMateria');

// Convertir las cadenas JSON de vuelta a objetos y arreglos
const dbGuardado = JSON.parse(dbGuardadoJSON);
const gruposPorMateriaGuardado = JSON.parse(gruposPorMateriaGuardadoJSON);

 
