import React, {useState} from 'react';
import './App.css';
// import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config()
const api = {

key:  import.meta.env.VITE_API_KEY ,
  base: "https://api.openweathermap.org/data/2.5/"
}
function App() {
  console.log()



  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const search = evt => {
    if (evt.code === "Enter") {
      const url = `${api.base}weather?q=${query}&units=metric&APPID=${api.key}`
      console.log(url);
      fetch(url)
      .then(res => res.json())
      .then(result => {
        setWeather(result)
        setQuery('');
        console.log(result);
      });
    }
  }
  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="app warm">
     <main>
      <div className="search-box">
       <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        onChange={e => setQuery(e.target.value)}
        value={query}
        onKeyDown={search}
        
        />
      </div>
      <div className="location-box">
        <div className="location">Thessaloniki, Greece</div>
        <div className="date">{dateBuilder(new Date())}</div>
      </div>
      <div className="weather-box">
        <div className="temp">
          19°C
        </div>
        <div className="weather">Sunny</div>
      </div>
     </main>
    </div>
  );
}

export default App;
