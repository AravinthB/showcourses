import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScService } from '../../app/services/sc.service';
;

@Component({
  selector: 'sc',
  templateUrl: 'sc.html'
})
export class Showcourses {
  items: any;
  constructor(public navCtrl: NavController,private scservice:ScService ) {

  }
  ngOnInit()
  {
    this.getCourses('java',5);
  }
  getCourses(category,limit){

this.scservice.getCourses(category,limit).subscribe(response => {

  this.items = response.results;
  console.log(this.items);
});
 }
}
