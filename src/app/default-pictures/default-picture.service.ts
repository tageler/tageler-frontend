import { Injectable } from '@angular/core';
import { DefaultPicture } from './default-picture';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';    // this adds the non-static 'toPromise' operator
import 'rxjs/add/operator/map';         // this adds the non-static 'map' operatorimport 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/switchMap';



@Injectable()
export class DefaultPictureService {

  private defaultPicturesUrl = '/api/v1/picture/getPictures';
  private defaultPictureByIdUrl = '/api/v1/picture/getById';
  private defaultPictureByNameUrl = '/api/v1/picture/getByName';


  constructor(private http: Http) { }

  getDefaultPictures(): Promise<DefaultPicture[]> {
    return this.http.get(this.defaultPicturesUrl)
      .toPromise()
      .then(response => response.json() as DefaultPicture[]
      )
      .catch(this.handleError);
  }

  getDefaultPicture(id: String): Promise<DefaultPicture> {
    return this.http.get(this.defaultPictureByIdUrl + '/' + id)
      .toPromise()
      .then(response => response.json() as DefaultPicture)
      .catch(this.handleError);
  }

  getDefaultPictureByName(name: String): Promise<DefaultPicture> {
    return this.http.get(this.defaultPictureByNameUrl + '/' + name)
      .toPromise()
      .then(response => response.json() as DefaultPicture)
      .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

}
