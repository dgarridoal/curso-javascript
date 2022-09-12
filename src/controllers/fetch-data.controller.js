// Se importa la librería "node-fetch" para hacer peticiones HTTP
import fetch from "node-fetch";

const getFetchData = async () => {
  // Se hace una petición GET a la url y se espera a su resultado
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  // Se espera a que se tranforme en un json la peticion anteriormente hecha
  const post = await response.json();
  return post;
};

export default getFetchData;
