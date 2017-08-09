import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ScService{
http:any;
baseUrl: String;

constructor(http:Http)
{
this.http = http;
this.baseUrl = 'https://courses.edx.org/api/courses/v1/courses'}

getCourses(category,limit){
return this.http.get(this.baseUrl)
 .map(res => res.json());
}
}
