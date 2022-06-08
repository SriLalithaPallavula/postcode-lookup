import { Component, OnInit, Input, Output, EventEmitter, ViewChild, SimpleChanges, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { SearchPostcodeService } from '../../services/search-postcode.service';
import { Suburb } from '../../models/suburb.model';

@Component({
  selector: 'app-suburbs-list',
  templateUrl: './suburbs-list.component.html',
  styleUrls: ['./suburbs-list.component.less']
})
export class SuburbsListComponent implements OnInit, AfterViewInit {

  @Input() suburbs: Array<Suburb> = [];
  @Input() viewType!: string;
  @Output() emitOnSelectSuburb = new EventEmitter();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  suburbsPaginated: Array<Suburb> = [];
  selectedSuburb : Suburb;
  length = 0;
  pageSize = 10;
  paginatorSubscriber!: Subscription;

  ngOnInit():void{
  }

  constructor(public searchPostcodeService : SearchPostcodeService) {
      this.selectedSuburb = this.searchPostcodeService.getSelectedSuburb();
  }

  ngAfterViewInit(){
    if(this.paginator) this.paginator.firstPage();
    this.subscribePaginator();
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes['suburbs']){
      this.length = this.suburbs.length;
      this.suburbsPaginated = this.suburbs.slice(0, this.pageSize);
      if(this.paginator) this.paginator.firstPage();
      this.subscribePaginator();
    }
  }


  onSuburbSelect(suburb: Suburb){
    if(this.viewType === "SEARCH_RESULTS") {
     this.emitOnSelectSuburb.next(suburb);
     this.selectedSuburb = suburb;
    }
  }

  isSuburbSelected(suburb : Suburb){
    if(this.selectedSuburb){
      return suburb.name === this.selectedSuburb.name;
    }
    return false;
  }

  subscribePaginator(){
    if(!this.paginator) return;
    if(this.paginatorSubscriber) this.paginatorSubscriber.unsubscribe();
    this.paginatorSubscriber = this.paginator.page.subscribe((eventObj) => {
      const { pageIndex, pageSize } = eventObj;
      this.suburbsPaginated = this.suburbs.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize);
      this.length = this.suburbs.length;
    });
  }

}
