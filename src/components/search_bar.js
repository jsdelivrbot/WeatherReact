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
            <div className="input-group">
                <input 
                    className="form-control"
                    value={this.state.term} 
                    onChange={this.handleChange} />
                <span className="input-group-btn">
                    <button className="btn btn-primary" onClick={() => this.handleClick()}>Search</button>
                </span>
            </div>
        ); 
    }

    // change state value when the user types something
    handleChange = (event) => {
        this.setState({term: event.target.value});
    }
    // call the method that get's the weather information when the button is clicked
    handleClick = () => {
        this.getWeather();
    }

    getWeather = async () => {
        const PROXY = 'https://cors.io/?';
        const API_KEY = 'd77a01bf5b4188c9f53a6bdc1b9391ce';

        let city = this.state.term;
        let urlDay = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+API_KEY;
        let urlWeek = 'http://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid='+API_KEY;

        try {
            // call api and get current day weather
            let dayResponse = await fetch(PROXY + urlDay);
            let dayJson = await dayResponse.json();
            // set fetched json object to state
            this.setState(() => {
                return {day: dayJson};
            });
            // call api and get next days weather
            let weekResponse = await fetch(PROXY + urlWeek);
            let weekJson = await weekResponse.json();
            // set fetched json object to state
            this.setState(() => {
                return {week: weekJson};
            });
        } catch(err){
            console.log('Unexpected error :(',err,') ,Please try again.')
        }

        // pass state to index.js
        this.props.getWeatherData(this.state.day, this.state.week);   
    }   
}

export default SearchBar;