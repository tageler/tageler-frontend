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
  getUnit(): Promise<Unit[]> {
    return this.http.get(this.unitsUrlGet)
      .toPromise()
      .then(response => response.json().unit as Unit[]
        // {
        //   console.log(response.json());
        //   response.json() as Tageler[];
        //   console.log(response.json() as Tageler[]);
        // }
      )
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
    // return this.http.delete(this.unitsUrl + '/' + delContactId)
    //   .toPromise()
    //   .then(response => response.json() as String)
    //   .catch(this.handleError);
  }

  // put("/api/contacts/:id")
  updateUnit(putUnit: Unit): Promise<Unit> {
    return null;
    // var putUrl = this.unitsUrl + '/' + putContact._id;
    // return this.http.put(putUrl, putContact)
    //   .toPromise()
    //   .then(response => response.json() as Contact)
    //   .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
}
