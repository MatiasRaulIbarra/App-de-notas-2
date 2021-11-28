let moduloTareas = require('./funcionesDeTareas');
let process = require('process');
let comando = process.argv[2] ? process.argv[2].toLowerCase() : undefined;

switch(comando){
    case "listar":
        let tareas = moduloTareas.leerJSON();
        if(tareas.length === 0){
            console.log("La lista de tareas está vacía");
        } else {
            console.log("----------------------------");
            console.log("Este es tu listado de tareas");
            console.log("----------------------------");
            tareas.forEach(tarea => console.log(tarea));
        }
        break;
    case "agregar":
        let titulo = process.argv[3];
        let estado = "pendiente";
        moduloTareas.escribirJSON(titulo, estado);
        break;
    case "deshacer":
        moduloTareas.deshacer();
        break;
    case "filtrar":
        let estado1 = process.argv[3];
        let tareasFiltradas = moduloTareas.filtrar(estado1);
        if(tareasFiltradas.length === 0){
            console.log("La lista de tareas está vacía");
        } else {
            console.log("----------------------------");
            console.log("Este es tu listado de tareas");
            console.log("----------------------------");
            tareasFiltradas.forEach(tarea => console.log("Título: " + tarea.titulo + " - estado: " + tarea.estado));
        }
        break;
    case undefined:
        console.log("Atención - Tienes que pasar una acción");
        break;
    default:
        console.log("No entiendo qué quieres hacer");
        break;
}