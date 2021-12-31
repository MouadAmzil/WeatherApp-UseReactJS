import { useState } from 'react'
import axios from 'axios';

const CoustomData = () => {
    const [IsData, setIsData] = useState(true);
    const [Isloading, setIsloading] = useState(false);
    const [IsError, setIsIsError] = useState(false);
    // const [ShowData, setIsIsError] = useState(false);
    const [Getdata, setGetdata] = useState({});

    const GenreateApi = async (value, key) => {
        // let Data = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=f043489a9e771bfe7902f758316ab3b7`);
        let Data = await axios(`https://api.openweathermap.org/data/2.5/weather?`, { params: { q: value, appid: key } }).catch(error => {
            setIsloading(false); setIsIsError(true); setIsData(true);
        });
        if (!Data || Data.length === 0) { return; }
        return Data;
    };
    const GetInputData = async value => {
        let key = "f043489a9e771bfe7902f758316ab3b7";
        setIsloading(true);
        setIsData(false);
        const reponse = await GenreateApi(value, key);
        setIsloading(false);
        setIsIsError(false);
        if (!reponse || reponse.length === 0) { setIsIsError(true); setIsData(true); return; }
        else { setGetdata(reponse); return reponse; }

    }


    return { IsData, IsError, Isloading, GetInputData, Getdata };
}

export default CoustomData;


























// var b = ({
//     "coord": {
//         "lon": -6.8401,
//         "lat": 33.9911
//     },
//     "weather": [
//         {
//             "id": 802,
//             "main": "Clouds",
//             "description": "scattered clouds",
//             "icon": "03n"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 284.61,
//         "feels_like": 284.32,
//         "temp_min": 283.19,
//         "temp_max": 286.51,
//         "pressure": 1014,
//         "humidity": 96
//     },
//     "visibility": 5000,
//     "wind": {
//         "speed": 0,
//         "deg": 0
//     },
//     "clouds": {
//         "all": 40
//     },
//     "dt": 1637106344,
//     "sys": {
//         "type": 1,
//         "id": 2402,
//         "country": "MA",
//         "sunrise": 1637132517,
//         "sunset": 1637169782
//     },
//     "timezone": 3600,
//     "id": 2538474,
//     "name": "Rabat",
//     "cod": 200
// });