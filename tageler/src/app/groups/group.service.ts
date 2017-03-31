import { Injectable } from '@angular/core';
import { Group } from './group';
import { Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise'; // this adds the non-static 'toPromise' operator
// import 'rxjs/add/operator/map';         // this adds the non-static 'map' operator

@Injectable()
export class GroupService {
  private groupsUrlPost = 'http://127.0.0.1:3000/v1/group/admin/create';
  private groupsUrlGet = 'http://127.0.0.1:3000/v1/group/getGroups';
  private groupsUrlGetById = 'http://127.0.0.1:3000/v1/group/getById';

  constructor(private http: Http) { }
// get("/api/groups")
  getGroups(): Promise<Group[]> {
    return this.http.get(this.groupsUrlGet)
      .toPromise()
      .then(response => response.json() as Group[])
      .catch(this.handleError);
  }

  // get a group by id
  getGroup(id: String): Promise<Group> {
    return this.http.get(this.groupsUrlGetById + '/' + id)
      .toPromise()
      .then(response => response.json() as Group)
      .catch(this.handleError);
  }

  // post("/api/group")
  createGroup(newGroup: Group): Promise<Group> {
    return this.http.post(this.groupsUrlPost, newGroup)
      .toPromise()
      .then(response => response.json() as Group)
      .catch(this.handleError);
  }

  // get("/api/group/:id") endpoint not used by Angular app

  // delete("/api/group/:id")
  deleteGroup(delGroupId: String): Promise<String> {
    return null;
  }

  // put("/api/contacts/:id")
  updateGroup(putGroup: Group): Promise<Group> {
    return null;
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
}
