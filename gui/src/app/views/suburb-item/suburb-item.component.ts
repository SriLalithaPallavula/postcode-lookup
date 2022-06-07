import { Component, Input, OnInit } from '@angular/core';
import { Suburb } from 'src/app/models/suburb.model';

@Component({
  selector: 'app-suburb-item',
  templateUrl: './suburb-item.component.html',
  styleUrls: ['./suburb-item.component.less']
})
export class SuburbItemComponent implements OnInit {

  @Input() suburb!: Suburb;

  constructor() {
  }

  ngOnInit() {
  }

}
