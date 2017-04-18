import { Injectable } from '@angular/core';
import { Tageler } from './tageler';
import {Http, HttpModule, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
// import {Observable} from "RxJS/Rx";
import 'rxjs/add/operator/toPromise'; // this adds the non-static 'toPromise' operator
import 'rxjs/add/operator/map';         // this adds the non-static 'map' operatorimport 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/switchMap';         // this adds the non-static 'map' operatorimport 'rxjs/add/operator/switchMap';



@Injectable()
export class TagelerService {
  private tagelersUrlPost = '/api/v1/tageler/admin/create';
  private tagelersUrlGet = '/api/v1/tageler/getTagelers';
  private tagelersUrlGetById = '/api/v1/tageler/getById';
  private tagelerUrlDelete = '/api/v1/tageler/admin/delete/';
  private tagelerUrlUpdate = '/api/v1/tageler/admin/update/';
  private createdTageler:Tageler;

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
    console.log(JSON.stringify(newTageler));
    // let formData:FormData = new FormData();
    // formData.append('_id', "123456789");
    // formData.append('tageler', JSON.stringify(newTageler));

    return this.http.post(this.tagelersUrlPost, newTageler)
      .toPromise()
      .then(res => {
          return res.json() as Tageler;
      })
      .catch(this.handleError);

  }

  // get("/api/Tageler/:id") endpoint not used by Angular app

  // delete("/api/Tagelers/:id")
  deleteTageler(delTageler: String): Promise<String> {
    var fd:FormData = new FormData();
    fd.append('_id', delTageler);

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });

    console.log("delete tageler with ID: "+delTageler);
     return this.http.delete(this.tagelerUrlDelete+'?_id='+delTageler,options)
       .toPromise()
       .then(response => response.json() as String)
       .catch(this.handleError);
  }

  // put("/api/contacts/:id")
  updateTageler(putTageler: Tageler): Promise<Tageler> {
    console.log("Update ID: " + putTageler._id);
     var putUrl = this.tagelerUrlUpdate;// + '?_id=' + putTageler._id;
     return this.http.put(putUrl, putTageler)
       .toPromise()
       .then(res => {
          return res.json() as Tageler;
      })
      .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
}
