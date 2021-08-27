import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { WeatherApiService } from 'src/app/Services/weather-api.service';
import { Report } from './model/weather';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})

export class WeatherComponent implements OnInit {
data$ !: Observable<Report>;
icon!:string;
  constructor(private service:WeatherApiService) { }
searchItem:string="";
  faSearch=faSearch;
  ngOnInit(): void {

  }

  onSubmit(){
   this.data$ = this.service.getWeather(this.searchItem)
/* 

  let {location:{name,country,region,localtime}}=this.data;
  let {current:{temperature,weather_icons,weather_description,humidity,wind_dir}}=this.data
  this.current.temperature=temperature;
  this.current.humidity=humidity;
  this.current.weather_descriptions=weather_description[0];
  this.current.weather_icons=weather_icons[0];
  this.current.wind_dir=wind_dir;
  this.location.country=country;
  this.location.localtime=localtime;
  this.location.name=name;
  this.location.region=region;  */


  


  }

}
