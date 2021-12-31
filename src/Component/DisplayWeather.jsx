import React from 'react'
import logo from './Img/WeatherImage.jpg'
import sunrise from './Img/sunrise.png';
import sunset from './Img/sunset.png';


function DisplayWeather({ DATA }) {
    //time
    let mydate = new Date();
    let day = mydate.getDate();
    let Month = mydate.toLocaleString("default", { month: "long" });
    let dayofweek = mydate.toLocaleString("default", { weekday: "long" });
    ///Carte Image
    let temp, town, symboleCountry, description;
    ///Carte info
    let Temp_min, Temp_max, visibility, Pressure, humidity, wind, TimeRise, Timeset, weather, timezone, GMT = "";
    if (DATA.length !== 0) {
        let Data = DATA;
        if (typeof Data.data !== "undefined") {
            temp = (Data.data.main.temp - 273.15).toFixed(2);
            Temp_min = (Data.data.main.temp_min - 273.15).toFixed(2);
            Temp_max = (Data.data.main.temp_max - 273.15).toFixed(2);
            humidity = Data.data.main.humidity
            Pressure = Data.data.main.pressure;
            wind = Data.data.main.pressure;
            town = Data.data.name;
            symboleCountry = Data.data.sys.country;
            description = Data.data.weather[0].description;
            weather = Data.data.weather[0].main;
            timezone = (Data.data.timezone) / 3600;
            visibility = (Data.data.visibility / 1000);
            var date = new Date((Data.data.sys.sunrise) * 1000);
            TimeRise = date.toLocaleTimeString([], { timeStyle: 'short' });
            date = new Date((Data.data.sys.sunset) * 1000);
            Timeset = date.toLocaleTimeString([], { timeStyle: 'short' });
            if (timezone > 0) {
                GMT = "+"
            }
        }

    }
    return (
        <div className="card max-width  backgroundCard rounded   ">
            <div className="row g-0">
                <div className="col-md-4 ">
                    <div className="position-relative">
                        <img src={logo} className="img-fluid rounded " alt="..." />
                        <div className="overlay rounded p-2">
                            <h4><b>{dayofweek}</b></h4>
                            <small>{Month} , {day}</small> <br />
                            <small>{town},{symboleCountry} <i className="fas fa-map-marker-alt"></i></small>
                            <div className="absolute">
                                <h2><strong>
                                    {temp} C°
                                </strong></h2>
                                <small>{description}</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="Parent">
                            <div className="Element-left">
                                Visibility :
                            </div>
                            <div className="Element-right">
                                {visibility} km
                            </div>
                        </div>
                        <div className="Parent">
                            <div className="Element-left">
                                Pressure  :
                            </div>
                            <div className="Element-right">
                                {Pressure} hPa
                            </div>
                        </div>
                        <div className="Parent">
                            <div className="Element-left">
                                Min temperature  :
                            </div>
                            <div className="Element-right">
                                {Temp_min} C°
                            </div>
                        </div>
                        <div className="Parent">
                            <div className="Element-left">
                                Max temperature  :
                            </div>
                            <div className="Element-right">
                                {Temp_max} C°
                            </div>
                        </div>
                        <div className="Parent">
                            <div className="Element-left">
                                humidity  :
                            </div>
                            <div className="Element-right">
                                {humidity} %
                            </div>
                        </div>
                        <div className="Parent">
                            <div className="Element-left">
                                wind  :
                            </div>
                            <div className="Element-right">
                                {wind} m/s
                            </div>
                        </div>
                        <div className="Parent">
                            <div className="Element-left">
                                Weather  :
                            </div>
                            <div className="Element-right">
                                {weather}
                            </div>
                        </div>
                        <div className="Parent">
                            <div className="Element-left">
                                time GMT  :
                            </div>
                            <div className="Element-right">
                                {GMT} {timezone} hours
                            </div>
                        </div>
                        <div className="Parent">
                            <div className="Element-left-sun">
                                <img src={sunset} alt="sun" /><br />
                                {Timeset}
                            </div>
                            <div className="Element-left-sun">
                                <img src={sunrise} alt="sun" /><br />
                                {TimeRise}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayWeather
