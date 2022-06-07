import { Component } from '@angular/core';
import { SearchPostcodeService } from '../app/services/search-postcode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'postcode lookup';
  range = 4000;
  suburbsList = [];
  suburbsListInRange = [];

  constructor(private searchPostcodeService: SearchPostcodeService){}

  setSuburbResults(data : any){
    this.suburbsList = data;
    this.suburbsListInRange = [];
  }

  handleOnSuburbSelect(data : any){
    this.searchPostcodeService.getAllSuburbsInRange(data, this.range).subscribe(data => {
      this.suburbsListInRange = data;
    });
  }
}
