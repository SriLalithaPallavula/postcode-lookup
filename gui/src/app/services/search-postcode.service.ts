import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Suburb } from '../models/suburb.model';

const SERVER_URL = environment.backendUrl;

@Injectable({
  providedIn: 'root',
})
export class SearchPostcodeService {
  private selectedSuburb!: Suburb;

  constructor(private http: HttpClient) {}

  getAllSuburbsByPostcode(postcode: string): Observable<any> {
    return this.http.get<any>(`${SERVER_URL}/${postcode}`)
  }

  getAllSuburbsInRange(suburb: Suburb, distance: number): Observable<any> {
    const {latitude, longitude } = suburb;
    return this.http.get<any>(`${SERVER_URL}/${latitude}/${longitude}/${distance}`);
  }

  getSelectedSuburb() {
    return this.selectedSuburb;
  }

  setSelectedSuburb(suburb: Suburb) {
    this.selectedSuburb = suburb;
  }
}
