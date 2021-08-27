import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { WeatherApiService } from 'src/app/Services/weather-api.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})

export class WeatherComponent implements OnInit {
public data !: any;
icon!:string;
  constructor(private service:WeatherApiService) { }
searchItem:string="";
  faSearch=faSearch;
  ngOnInit(): void {

  }

  onSubmit(){
   this.service.getWeather(this.searchItem).subscribe((data)=>{this.data=data;console.log(this.data)});
  }

}
