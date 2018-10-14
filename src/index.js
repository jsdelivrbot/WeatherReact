import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import DayWeather from './components/day_weather';
import WeekWeather from './components/week_weather';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            dayData: {},
            weekData: {}
        };
    }

    render() {
        return (
            <div>
                <div style={{padding: 20 +'px'}}>
                    <SearchBar getWeatherData={(day, week) => this.getWeatherData(day, week)}/>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div style={{paddingRight: 20 +'px'}}>
                        <DayWeather onTextChange={this.changeTextDay} getDayData={this.dayData}/>
                    </div>
                    <WeekWeather onTextChange={this.changeTextWeek} getWeekData={this.weekData}/>
                </div>
            </div>
        );
    }
    // callback function to get the state from search_bar.js
    getWeatherData = (day, week) => {
        this.setState(() => {
            return {
                dayData: day,
                weekData: week
            };
        });
        // call functions to pass state
        this.changeTextDay();
        this.changeTextWeek();
    }
    // get current state
    dayData = () => {
        return this.state.dayData;
    }
    // get current state
    weekData = () => {
        return this.state.weekData;
    }
    // pass state to day_weather component
    changeTextDay = () => {
        return (
            this.state.dayData
        );
    }
    // pass state to week_weather component
    changeTextWeek = () => {
        return (
            this.state.weekData
        );
    }
}

ReactDOM.render( <App />, document.querySelector('.container'));
