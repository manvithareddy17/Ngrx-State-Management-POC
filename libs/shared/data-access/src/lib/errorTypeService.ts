import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ErrorType } from './errorType';

@Injectable()
export class ErrorTypeService {
  protected URL = 'http://localhost:3000/api/errorsss';

  constructor(protected http: HttpClient) {
  }
  /**
   * Find an object by its identifier
   * @param id the object identifier
   * @returns gets the object found
   */
  public findById(id: any): Observable<ErrorType> {
    return this.http.get<ErrorType>(this.URL + '/' + id);
  }

  /**
   * Find all the elements
   * @returns gets the list of objects found
   */
  public findAll(params?): Observable<ErrorType[]> {
    return this.http.get<ErrorType[]>(this.URL, {params: params});
  }

  /**
   * Delete an object by its identifier field
   * @param id the object identifier
   * @returns gets the response
   */
  public delete(id): Observable<ErrorType> {
    return this.http.delete<ErrorType>(this.URL + '/' + id);
  }

  /**
   * Insert the data
   * @param data the object containing the data to be inserted
   * @returns gets the response
   */
  public insert(data: ErrorType): Observable<ErrorType> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.http.post<ErrorType>(this.URL, data, {headers: headers});
  }

  /**
   * Update specific object into DB
   * @param game the object to be updated
   * @returns gets the response
   */
  public update(data: ErrorType): Observable<ErrorType> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.http.put<ErrorType>(this.URL + '/' + data.Id, data, {headers: headers});
  }
}
