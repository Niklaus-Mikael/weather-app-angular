import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  report$ !:Observable<any>;
  constructor(private http:HttpClient) { }

   API_Key='6f06a0c24f45e1c684316c32e47d2c02';
  

  getWeather(city:string):Observable<any>{
    let API_Url=`http://api.weatherstack.com/current?access_key=${this.API_Key}&query=${city}`;
    return  this.http.get<any>(API_Url);
  }

}
