
import loc from "./localizacao"



const API_KEY = "f513209bdb0890ce3722a8b63edbb556"

export const api =  `https://api.openweathermap.org/data/2.5/onecall?lat=-9.2717123&lon=32.2930725&exclude=daily,minutely&cnt=24&units=metric&appid=${API_KEY}`


export default async() => {
    let cord = await loc().then(response=>response).then(data=>{cord = data})
    const latitude =  cord.latitude;
    const longitude = cord.longitude
    const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=daily,minutely&cnt=24&units=metric&appid=${API_KEY}`
    return api;

}


