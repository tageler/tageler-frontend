import { Injectable } from '@angular/core';
import { Tageler } from './tageler';
import {Http, HttpModule, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise'; // this adds the non-static 'toPromise' operator
// import 'rxjs/add/operator/map';         // this adds the non-static 'map' operator

@Injectable()
export class TagelerService {
  private tagelersUrlPost = 'http://127.0.0.1:3000/v1/tageler/admin/create';
  private tagelersUrlGet = 'http://127.0.0.1:3000/v1/tageler/getTagelers';
  private tagelersUrlGetById = 'http://127.0.0.1:3000/v1/tageler/getById';
  private tagelerUrlDelete = 'http://127.0.0.1:3000/v1/tageler/admin/delete';
  private tagelerUrlUpdate = 'http://127.0.0.1:3000/v1/tageler/admin/update';

  constructor(private http: Http) { }
// get("/api/tagelers")
  getTagelers(): Promise<Tageler[]> {
    return this.http.get(this.tagelersUrlGet)
      .toPromise()
      .then(response => response.json() as Tageler[]
      // {
      //   console.log(response.json());
      //   response.json() as Tageler[];
      //   console.log(response.json() as Tageler[]);
      // }
      )
      .catch(this.handleError);
  }

  // get a Tageler by id
    getTageler(id: String): Promise<Tageler> {
      return this.http.get(this.tagelersUrlGetById + '/' + id)
        .toPromise()
        .then(response => response.json() as Tageler)
        .catch(this.handleError);
  }

  // post("/api/Tagelers")
  createTageler(newTageler: Tageler): Promise<Tageler> {
    return this.http.post(this.tagelersUrlPost, newTageler)
      .toPromise()
      .then(response => response.json() as Tageler)
      .catch(this.handleError);

  }

  // get("/api/Tageler/:id") endpoint not used by Angular app

  // delete("/api/Tagelers/:id")
  deleteTageler(delTageler: String): Promise<String> {
     return this.http.delete(this.tagelerUrlDelete + '/?_id=' + delTageler)
       .toPromise()
       .then(response => response.json() as String)
       .catch(this.handleError);
  }

  // put("/api/contacts/:id")
  updateTageler(putTageler: Tageler): Promise<Tageler> {
     var putUrl = this.tagelerUrlUpdate + '/?_id=' + putTageler._id;
     return this.http.put(putUrl, putTageler)
       .toPromise()
       .then(response => response.json() as Tageler)
       .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
}
