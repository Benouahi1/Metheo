
import loc from "./localizacao"

const API_KEY = "f513209bdb0890ce3722a8b63edbb556"
const location = 'Safi'
export const api = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&units=metric&cnt=8&appid=${API_KEY}`


export default async() => {
    let cord = await loc().then(response=>response).then(data=>{cord = data})
    const lat =  cord.latitude;
    const long = cord.longitude
    
    const api = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&units=metric&cnt=8&appid=${API_KEY}`
    return api;
}

