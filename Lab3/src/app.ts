import { Weather } from './weather'

export class App {

    cityInput: HTMLInputElement;
    cityName: string;
    cities: string[] = [];
    cityWeather: Weather;
    opwApiKey = '38b9db4de440d4358facd2e774de1a44';

    constructor() {
        this.cityInput = document.querySelector('#city');
        document.querySelector('#add').addEventListener('click', () => this.performAction())

    }

    performAction() {
        this.getCity();
        this.getCityInfo(this.cityName)
        this.createBox(this.cityWeather);
    }


    getCity() {
        this.cityName = this.cityInput.value;
        this.cities.push(this.cityName);
        this.saveData(this.cities); //Zapisanie w local storage
    }



    async getCityInfo(city: string) {
        const weather = await this.getWeather(city);
        let name:string=weather.name;
        let temp:number=weather.main.temp;
        let wind :number =weather.wind.speed;
        let press:number =weather.main.pressure;
        this.cityWeather = new Weather(name,temp,wind,press);
    }
    async getWeather(city: string): Promise<any> {
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.opwApiKey}`;
        const weatherResponse = await fetch(openWeatherUrl);
        const weatherData = await weatherResponse.json();
        return weatherData;
    }
    saveData(data: any) {
        localStorage.setItem('weatherData', JSON.stringify(data));
    }
    getData() {
        const data = localStorage.getItem('weatherData');
        if (data) {
            return JSON.parse(data);
        } else {
            return {};
        }
    }

    createBox(obj:Weather){
        const div = document.querySelector('.weather-line');
        const element=document.createElement('div');
        element.className='weatherBox';

        div.appendChild(element);

    }

}