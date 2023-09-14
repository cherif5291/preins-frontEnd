import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  test=19;
  liste:any=["livre1","livre2"]

  constructor() { }
}
