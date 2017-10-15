import { Injectable } from '@angular/core';
import { Group } from './group';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise'; // this adds the non-static 'toPromise' operator

@Injectable()
export class GroupService {
  private groupsUrlGet = '/api/v1/group/getGroups';
  private groupsUrlGetByName = '/api/v1/group/getByName';

  constructor(private http: Http) { }

  // get("/api/v1/group/getGroups")
  getGroups(): Promise<Group[]> {
    return this.http.get(this.groupsUrlGet)
      .toPromise()
      .then(response => response.json() as Group[])
      .catch(this.handleError);
  }

  // get("/api/v1/group/getById")
  getGroup(name: String): Promise<Group> {
    return this.http.get(this.groupsUrlGetByName + '/' + name)
      .toPromise()
      .then(response => response.json() as Group)
      .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

  /*
   * The following methods are currently not used.
   */

  // post("/api/group")
  createGroup(newGroup: Group): Promise<Group> {
    return null;
  }

  // delete("/api/group/:id")
  deleteGroup(delGroupId: String): Promise<String> {
    return null;
  }

  // put("/api/contacts/:id")
  updateGroup(putGroup: Group): Promise<Group> {
    return null;
  }
}
