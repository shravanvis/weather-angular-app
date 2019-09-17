import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {


  constructor(private http: HttpClient) { }

  getWeather(location){
    return this.http.get(
      'http://api.weatherstack.com/current?access_key=96e843a130dd76c5596c7e65e98f37d8&query=' + location
    );
}

}