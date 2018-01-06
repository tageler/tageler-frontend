import { Injectable } from '@angular/core';
import { Tageler } from './tageler';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';   // this adds the non-static 'toPromise' operator
import 'rxjs/add/operator/map';         // this adds the non-static 'map' operator
import 'rxjs/add/operator/switchMap';   // this adds the non-static 'switchMap' operator
import { Group } from '../groups/group';

@Injectable()
export class TagelerService {
  private tagelersUrlPost = '/api/v1/tageler/admin/create';
  private tagelersUrlGet = '/api/v1/tageler/getTagelers';
  private tagelersUrlGetByGroup = '/api/v1/tageler/getByGroup';
  private tagelersUrlGetById = '/api/v1/tageler/getById';
  private tagelerUrlDelete = '/api/v1/tageler/admin/delete';
  private tagelerUrlUpdate = '/api/v1/tageler/admin/update';

  // iCal routes
  private iCalForOneTageler = '/api/v1/tageler/calForTageler';
  private iCalForAllTagelersForAGroup = '/api/v1/tageler/calForGroup';


  constructor(private http: Http) { }

  /*
   * CRUD methods
   */

  // get("/api/v1/tageler/getTagelers")
  getTagelers(): Promise<Tageler[]> {
    return this.http.get(this.tagelersUrlGet)
      .toPromise()
      .then(response => response.json() as Tageler[])
      .catch(this.handleError);
  }

  // get("/api/v1/tageler/getByGroup")
  getTagelerByGroupname(groupname: String): Promise<Tageler[]> {
    return this.http.get(this.tagelersUrlGetByGroup + '/' + groupname)
      .toPromise()
      .then(response => response.json() as Tageler[])
      .catch(this.handleError);
  }

  // get("/api/v1/tageler/getById")
  getTageler(id: String): Promise<Tageler> {
    return this.http.get(this.tagelersUrlGetById + '/' + id)
      .toPromise()
      .then(response => response.json() as Tageler)
      .catch(this.handleError);
  }

  // post("/api/v1/tageler/admin/create")
  createTageler(newTageler: Tageler): Promise<JSON> {
    return this.http.post(this.tagelersUrlPost, newTageler, { withCredentials: true })
      .toPromise()
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch(this.handleError);

  }

  // delete("/api/v1/tageler/admin/delete")
  deleteTageler(delTageler: String): Promise<JSON> {
    var fd:FormData = new FormData();
    fd.append('_id', delTageler);

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers, withCredentials: true });

    console.log("delete tageler with ID: "+delTageler);
    return this.http.delete(this.tagelerUrlDelete+'/'+delTageler, options)
      .toPromise()
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch(this.handleError);
  }

  // put("/api/v1/tageler/admin/update")
  updateTageler(putTageler: Tageler): Promise<JSON> {

    const body = JSON.stringify(putTageler);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: headers, withCredentials: true });

    console.log("Update tageler with ID: "+ putTageler._id);
    return this.http.put(this.tagelerUrlUpdate+'/'+putTageler._id, body, options)
       .toPromise()
       .then(res => {
         if (res.ok) {
           return res.json();
         }
       })
      .catch(this.handleError);
  }

  /*
   * iCal
   */

  iCalForTageler(tageler: Tageler): any {
     return this.iCalForOneTageler + '/' + tageler._id;
  }

  iCalForGroup(group: String): any {
    return this.iCalForAllTagelersForAGroup + '/' + group;
  }

  // error handling
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
}
