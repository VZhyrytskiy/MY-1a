import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EnglishHomeTasksService {
  constructor(
    private http: HttpClient
  ) { }

  getTasks(): Observable<Array<string>> {
    const url = 'http://1a.vitava.com.ua/server/api/get-english-home-tasks.php';

    return this.http.get(url, {observe: 'body'})
      .map(this.handleData)
      .catch(this.handleError);

    // return Observable.of(["2017-10-16 - 2017-10-20.jpg", "2017-10-09-13.jpg", "2017-10-02-06.jpg", "2017-09-25-29.jpg", "2017-09-18-22.jpg", "2017-09-11-15.jpg", "2017-09-04-08.jpg"]);
  }

  private handleData(response: HttpResponse<Array<string>>) {
    const body = response;
    return body || {};
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage: string;

    // A client-side or network error occurred.
    if (err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    }
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    else {
      errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
    }

    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }
}
