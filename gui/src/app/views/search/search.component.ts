import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { SearchPostcodeService } from '../../services/search-postcode.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  postcode: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.pattern(/^-?(0|[1-9]\d*)?$/),
  ]);
  searchForm = new FormGroup({ postcode: this.postcode });
  isFormSubmitted: boolean = false;

  @Output() emitSuburbResults = new EventEmitter<[]>();

  constructor(private searchPostcodeService: SearchPostcodeService) {}

  ngOnInit(): void {
  }

  onSubmit() {
    this.isFormSubmitted = true;
    if (this.searchForm.valid) {
      this.searchPostcodeService
        .getAllSuburbsByPostcode(this.searchForm.controls.postcode.value)
        .subscribe(
          (response) => {
            console.log(response);
            this.emitSuburbResults.next(response);
          }
        );
    }
  }

}
