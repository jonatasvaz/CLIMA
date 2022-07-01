import "./app.css"
import { useState } from "react";
import { HiSearch } from "react-icons/hi";

function App() {
 const [ city,setCity] =useState("brasilia")
 const [weatherForecast, setWeatherForecast] = useState(null);

const  handleChange = (e)=>{
setCity(e.target.value)
}
const hadleSearch= ()=>{
  fetch(`http://api.weatherapi.com/v1/current.json?key=b99cfb7550f74145923235454223006&q=${city}&lang=pt`)
  .then((response )=>{
  
     if(response.status===200){
  
       return response.json()
     }
  })
  .then((data)=>{
    console.log(data)
    setWeatherForecast(data);
    
  })
}


  return (
    <div className="App">


       <div className="container">
           <nav className="nav">
             <button className="btn-search" onClick={hadleSearch}><HiSearch/></button>  
             <input type="text" onChange={handleChange} value={city}/> 
            </nav>
            
            
            <main>
       
            {weatherForecast ? (
            <>
              <div className="geral">
                 <div>
                   <h1 className="name-city">
                   {weatherForecast.location.region}
                 </h1>
                 </div>
                 
                <div className="img">
                  <img
                    src={`${weatherForecast.current.condition.icon}`}
                    alt="Weather Icon"
                  />
                </div>
                <div>
                <h3 className="clima">
                     {weatherForecast.current.condition.text}
                  </h3>
                  <p className="lead">
                    Temperatura: {weatherForecast.current.temp_c}&#8451;
                  </p>
                  <h3 className="humidity">
                  humidade: {weatherForecast.current.humidity}
                  </h3>
                  <h3 className="pressao"> pressão: {weatherForecast.current.pressure_mb}mbar</h3>
                </div>
              </div>
            </>
          ) : null}
   
            
            </main>
       </div>

            

     </div>
  );
}

export default App;
