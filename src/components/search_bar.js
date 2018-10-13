import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: 'skikda',
            day: {},
            week: {}
        };
    }

    render(){
        return (
            <div>
                <input value={this.state.term} onChange={this.handleChange} />
                <button onClick={() => this.handleClick()}>Search</button>
            </div>
        ); 
    }

    handleChange = (event) => {
        this.setState({term: event.target.value});
    }
    handleClick = () => {
        this.getWeather();
    }

    getWeather = async () => {
        const PROXY = 'https://cors.io/?';
        const API_KEY = 'd77a01bf5b4188c9f53a6bdc1b9391ce';

        let city = this.state.term;
        let urlDay = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+API_KEY;
        let urlWeek = 'http://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid='+API_KEY;

        let dayResponse = await fetch(PROXY + urlDay);
        let dayJson = await dayResponse.json();
        this.setState(() => {
            return {day: dayJson};
        });

        let weekResponse = await fetch(PROXY + urlWeek);
        let weekJson = await weekResponse.json();
        this.setState(() => {
            return {week: weekJson};
        });

        console.log('week search log :', this.state.week);
        console.log('day search log :', this.state.day);

        this.props.getWeatherData(this.state.day, this.state.week);
        
    }
    
}

export default SearchBar;