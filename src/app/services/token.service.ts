import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, from, Observable } from 'rxjs';
import { AppConfig } from '../config/config';
import { Helpers } from '../helpers/helpers';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService extends BaseService {
  private pathAPI=this.config.get('path');
  public errorMessage:string;
  constructor(private http:HttpClient,
              private config:AppConfig,
              private helpers:Helpers)
  {
    super();
  }

  auth(authValues:any):any{
    let body=JSON.stringify(authValues);
    return this.getToken(body);
  }

  private getToken(body:any):Observable<any>{
    return this.http.post<any>(this.pathAPI+'token',body,super.header()).pipe(
      catchError(super.handleError)
    )
  }
}
