import React from 'react';

const DayWeather = (props) => {
    let day_data = props.getDayData();
    return(
        <div> 
            Day : 
            <p>{day_data.id}</p>
            <p>{day_data.name}</p>
        </div>
    );
}

export default DayWeather;