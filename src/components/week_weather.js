import React from 'react';

const WeekWeather = (props) => {
    let week_data = props.getWeekData();
    let city_info = week_data.city;
    return (
        <div>Week : {week_data.cod}</div>
    );
}

export default WeekWeather;