import axios from "axios";



//URL de la API
const URL = "https://67e306ee97fc65f535387f55.mockapi.io/api/stockproducts";


// Create an instance of axios sirve para crear una instancia de axios con una configuración personalizada para la instancia
//axios es una librería que sirve para hacer peticiones http a un servidor y obtener una respuesta del servidor con una api
//va create para crear una instancia de axios
export const axiosInstance = axios.create({
    baseURL: URL
})

