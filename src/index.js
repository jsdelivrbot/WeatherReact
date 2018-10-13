import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import DayWeather from './components/day_weather';
import WeekWeather from './components/week_weather';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            input: '',
            dayData: {},
            weekData: {}
        };
    }

    render() {
        return (
            <div>
                <div>
                    <SearchBar
                        getWeatherData={(day, week) => this.getWeatherData(day, week)}
                    />
                </div>
                <div>
                    <DayWeather onTextChange={this.changeTextDay} getDayData={this.dayData}/>
                    <WeekWeather onTextChange={this.changeTextWeek} getWeekData={this.weekData}/>
                </div>
            </div>
        );
    }
    getWeatherData = (day, week) => {
        this.setState(() => {
            return {dayData: day,
            weekData: week}
        });
        this.changeTextDay();
        this.changeTextWeek();
    }

    dayData = () => {
        return this.state.dayData;
    }
    weekData = () => {
        return this.state.weekData;
    }
    
    changeTextDay = () => {
        return (
            this.state.dayData
        );
    }

    changeTextWeek = () => {
        return (
            this.state.weekData
        );
    }
}

ReactDOM.render( <App />, document.querySelector('.container'));
