import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { ICount } from './count';

@Injectable()
export class CounterService {

    constructor(private _http: Http) { }

    getCount(): Observable<ICount> {
        return this._http.get('./src/app/counter/count.json')
            .map((response) => response.json())
            .do((response) => { console.log(JSON.stringify(response)) })
            .catch(this.handleError);
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}