import { Injectable } from '@angular/core';
import { Http,Response } from "@angular/http";


@Injectable()
export class SurfService {
    private baseUrl='http://localhost:8080/prodsrv/product/';
    constructor(private http:Http) { }

    getLastSurf(){
        return new Promise(resolve=>{
            this.http.get('http://localhost:8080/prodsrv/product.json')
                .subscribe(res =>resolve(res.json()));
        });
    }

}