import React,{useState} from 'react';
//import logo from './logo.svg';
import '../App.css';
import Input from "./Input.js";
import Weather from "./Weather.js";
const api={
  key:"23191435961671614ff7c98df88a55a8",
  baseurl: "http://api.openweathermap.org/data/2.5/"
}
function App() {
  const [location,setLocation]=useState('');
  const [temp,setTemp]=useState('');
  const [finalLoc,setFinalLoc]=useState('');
  const [weather,setWeather]=useState({});
  function changingLocation(loc){
   setLocation(loc);
  }
  function changingWeather(loc){
    setFinalLoc(loc);
    fetch('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q='+loc+'&appid=23191435961671614ff7c98df88a55a8',{headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
}).then(response=>response.json()).then(result=>{setWeather(result);console.log(result)});
                                                                                        
  
    setLocation('');
  }
  return (
    <div className={weather.main!=null?"app-cold":"app-warm"}>
    <main>  
    <Input handleChange={changingLocation} value={location} changeWeather={changingWeather}/>
    <Weather weath={weather.main!=null?Math.round(weather.main.temp-273.15)+"°c":null} 
    location={weather.name!=null?weather.name:"Weather App"}
    country={weather.name!=null?", "+weather.sys.country:null}
   wtype={weather.main!=null?weather.weather[0].main:null}
    />
    </main>
            
    </div>
  );
}

export default App;
