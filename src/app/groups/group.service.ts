import { Injectable } from '@angular/core';
import { Group } from './group';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise'; // this adds the non-static 'toPromise' operator

@Injectable()
export class GroupService {
  private groupsUrlPost = '/api/v1/group/admin/create';
  private groupsUrlGet = '/api/v1/group/getGroups';
  private groupsUrlGetById = '/api/v1/group/getById';

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
