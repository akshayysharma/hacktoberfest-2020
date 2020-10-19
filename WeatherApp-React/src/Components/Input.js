import React from "react";
function Input(props){
    function changeloc(e){
        console.log('reached');
        let name=e.target.value;
        props.handleChange(name);
      }
   function searchLoc(e){
       props.changeWeather(props.value);
     e.preventDefault();
   }
    return <form onSubmit={searchLoc}>
         <div className="search-box">
        <input type="text" className="search-bar" placeholder="Search.." value={props.value} onChange={changeloc}></input>
        
    </div>
    </form>
}
export default Input;