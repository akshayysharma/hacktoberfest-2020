import React from "react";
function Weather(props){
    let date=new Date();
    const days=["Sunday 😉",'Monday 😐',"Tuesday 😶","Wednesday 😊","Thursday 😌","Friday 😍","Saturday 😝"];
    let day=days[date.getDay()];
    const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month=months[date.getMonth()];
    let no=date.getDate();
    let year=date.getFullYear();
let sdate=no+" "+month+', '+ year;
    return <div className="weather-box">
        <div className="place">{props.location}{props.country}</div>
        <div className="date"><i>{sdate}</i></div> 
        <div className="date day">{day}</div>
        <div className={props.weath!=null?"temp":null}>{props.weath}</div>
        <div className="weath">{props.wtype}</div>
       
    </div>
}
export default Weather;