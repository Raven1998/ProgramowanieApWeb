export class Weather{

    cityName:string
    temperature: number
    windSpeed:number
    pressure:number

    constructor(city:string,temp:number,wind:number,press:number) {
        this.cityName=city;
        this.temperature=temp;
        this.windSpeed=wind;
        this.pressure = press;
       
    }


}