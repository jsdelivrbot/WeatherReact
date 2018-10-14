import React from 'react';

const WeekWeather = (props) => {
    let week_data = props.getWeekData();
    let city_info = week_data.city;

    // initial value of component
    if (!city_info){
        return <div></div>;
    }

    let weather_list = week_data.list;
    // make and array of list items to render it later
    let list_items = weather_list.map(item => {
        return (
            <li className="list-group-item" key={item.dt}>
                <h6>{item.dt_txt}</h6> 
                <img src={"https://openweathermap.org/img/w/" +item.weather[0].icon +".png"}/>
                <span>
                    {item.weather[0].main}: {item.weather[0].description}
                </span>
                <h6>
                    Temp: {parseInt(item.main.temp - 273.15)}C
                </h6>
            </li>
        );
    })

    return (
        <div className="card" style={{width: 30 +'rem'}}>
            <div className="card-header">
                {city_info.name}'s weather this week      
            </div>
            <ul className="list-group list-group-flush">
                {list_items}
            </ul>
        </div>
    );
}

export default WeekWeather;