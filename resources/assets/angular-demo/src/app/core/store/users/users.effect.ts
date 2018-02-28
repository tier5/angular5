import { Actions, Effect } from '@ngrx/effects'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { of } from 'rxjs/observable/of'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/switchMap'

import * as UsersActions from  './users.actions';
import {environment} from "../../../../environments/environment";


@Injectable()
export class UsersEffects {

    constructor(private actions$:Actions,
                private httpClient:HttpClient) {
    }

    @Effect()
    getUsers = this.actions$
        .ofType(UsersActions.GET_USERS)
        .switchMap((action: UsersActions.GetUsers) => {
            const apiUrl =  environment.API_BASE_URL + 'get-users'
            const headers = new HttpHeaders().set('X-Requested-With', 'XMLHttpRequest')
            const config = {
                headers: headers
            }
            return this.httpClient.get(apiUrl, config)
                .mergeMap((res: any) => {
                    if (res.status) {
                        console.log("resss");
                        return [
                            {
                                type: UsersActions.GET_USERS_SUCCESS,
                                payload: res.response
                            }
                        ]
                    } else {
                        return [
                            {
                                type: UsersActions.GET_USERS_SUCCESS,
                                payload: {message: res.message, type: 'danger'}
                            }
                        ]
                    }
                })
                .catch((err: HttpErrorResponse) => {
                    return of(
                        {
                            type: UsersActions.GET_USERS_SUCCESS,
                            payload: {message: err.error, type: 'danger'}
                        }
                    )
                })
        })


}