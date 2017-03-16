import { Injectable } from '@angular/core';
import { Unit } from './unit';
import { Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise'; // this adds the non-static 'toPromise' operator
// import 'rxjs/add/operator/map';         // this adds the non-static 'map' operator

@Injectable()
export class UnitService {
  private unitsUrlPost = 'http://127.0.0.1:8080/createUnit';
  private unitsUrlGet = 'http://127.0.0.1:8080/getUnit';

  constructor(private http: Http) { }
// get("/api/units")
  getUnits(): Promise<Unit[]> {
    return this.http.get(this.unitsUrlGet)
      .toPromise()
      .then(response => response.json().units as Unit[])
      .catch(this.handleError);
  }

  // post("/api/Unit")
  createUnit(newUnit: Unit): Promise<Unit> {
    return this.http.post(this.unitsUrlPost, newUnit)
      .toPromise()
      .then(response => response.json() as Unit)
      .catch(this.handleError);
  }

  // get("/api/Unit/:id") endpoint not used by Angular app

  // delete("/api/Unit/:id")
  deleteUnit(delUnitId: String): Promise<String> {
    return null;
  }

  // put("/api/contacts/:id")
  updateUnit(putUnit: Unit): Promise<Unit> {
    return null;
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
}
