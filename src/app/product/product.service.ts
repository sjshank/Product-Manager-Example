import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class ProductService{

    url: any = {
        save : 'http://localhost:4000/api/save',
        list : 'http://localhost:4000/api/list',
        delete : 'http://localhost:4000/api/delete/'
    }

    constructor(private _http: Http){

    }

    save(model): Observable<any>{
        return this._http.post(`${this.url.save}`, model)
                .map((res: Response) => <any>res.json());
    };

    list(): Observable<any>{
        return this._http.get(`${this.url.list}`)
                .map((res: Response) => <any>res.json());
    };

    delete(model): Observable<any>{
        return this._http.delete(`${this.url.delete}`, model)
               .map((res: Response) => <any>res.json());
    };
}