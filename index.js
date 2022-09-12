// Importaciones
import getFetchData from "./src/controllers/fetch-data.controller.js";
import Post from "./src/models/post.model.js";

// Extrae la información desde la función del controlador
const dataAPIRest = await getFetchData();

/**
 * Pregunta número 1
 */

//Se imprime por consola el tamaño del arreglo otorgado por el fetch
console.log("Número total de post: ", dataAPIRest.length);

/**
 * Pregunta número 2
 */

//Se crea un nuevo arreglo para dejar los post extraídos desde una api rest
let postArray = [];

/* 
 * Se verifica las condiciones dadas en el ejercicio dónde el postId debe ser
 * mayor que 5 y menor que 8, y que el tamaño del nuevo arreglo no sea mayor a 20
 * a través del método "filter"
 */
postArray = dataAPIRest.filter(
  (x) => x.postId > 5 && x.postId < 8 && postArray.length <= 20
);

/**
 * Pregunta número 4
 */

//Se crea un nuevo post con datos
const newPost = new Post(
  1,
  1,
  "id labore ex et quam laborum",
  "Eliseo@gardner.biz",
  "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
);

//Se agrega el nuevo Post en el arreglo al principio del arreglo
postArray.unshift(newPost);

/**
 * Pregunta número 5
 */

//Se imprime por consola el nuevo tamaño del arreglo trás el nuevo elemento insertado
console.log("El arreglo actualizado es: ", postArray);
