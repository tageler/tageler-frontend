import { Injectable } from '@angular/core';
import { Tageler } from './tageler';
import { Http, Headers, RequestOptions} from '@angular/http';
import { Group } from "../groups/group";
import 'rxjs/add/operator/toPromise';    // this adds the non-static 'toPromise' operator
import 'rxjs/add/operator/map';         // this adds the non-static 'map' operatorimport 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/switchMap';   // this adds the non-static 'map' operatorimport 'rxjs/add/operator/switchMap';



@Injectable()
export class TagelerService {
  private tagelersUrlPost = '/api/v1/tageler/admin/create';
  private tagelersUrlGet = '/api/v1/tageler/getTagelers';
  private tagelersUrlGetById = '/api/v1/tageler/getById';
  private tagelerUrlDelete = '/api/v1/tageler/admin/delete';
  private tagelerUrlUpdate = '/api/v1/tageler/admin/update';

  // iCal routes
  private iCalForOneTageler = '/api/v1/tageler/calForTageler';
  private iCalForAllTagelersForAGroup = '/api/v1/tageler/calForGroup';


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
  // TODO: return JSON promise for all crud functions, fix tests
  createTageler(newTageler: Tageler): Promise<JSON> {
    // console.log(JSON.stringify(newTageler));
    // let formData:FormData = new FormData();
    // formData.append('_id', "123456789");
    // formData.append('tageler', JSON.stringify(newTageler));

    return this.http.post(this.tagelersUrlPost, newTageler)
      .toPromise()
      .then(res => {
          // console.log('json response from api: ' + res.json().msg);
        if (res.ok) {
          return res.json();
        }
      })
      .catch(this.handleError);

  }

  // get("/api/Tageler/:id") endpoint not used by Angular app

  // delete("/api/Tagelers/:id")
  deleteTageler(delTageler: String): Promise<JSON> {
    var fd:FormData = new FormData();
    fd.append('_id', delTageler);

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });
    console.log("delete tageler with ID: "+delTageler);
    return this.http.delete(this.tagelerUrlDelete+'/'+delTageler,options)
      .toPromise()
      .then(res => {
        // console.log('json response from api: ' + res.json().msg);
        if (res.ok) {
          return res.json();
        }
      })
      .catch(this.handleError);
  }

  // put("/api/contacts/:id")
  updateTageler(putTageler: Tageler): Promise<JSON> {

    const body = JSON.stringify(putTageler);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    console.log("Update tageler with ID: "+ putTageler._id);
    return this.http.put(this.tagelerUrlUpdate+'/'+putTageler._id, body, { headers: headers })
       .toPromise()
       .then(res => {
         // console.log('json response from api: ' + res.json().msg);
         if (res.ok) {
           return res.json();
         }
       })
      .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

  // iCal
  iCalForTageler(tageler: Tageler): Promise<Tageler> {
    return this.http.get(this.iCalForOneTageler + '/' + tageler._id)
      .toPromise()
      .then(response => response.json() as Tageler)
      .catch(this.handleError);
  }

  iCalForGroup(group: String): Promise<Tageler> {
    return this.http.get(this.iCalForAllTagelersForAGroup + '/' + group)
      .toPromise()
      .then(response => response.json() as Tageler)
      .catch(this.handleError);
  }

}
