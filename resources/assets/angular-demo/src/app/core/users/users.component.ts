import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as UsersActions from '../store/users/users.actions';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usersState : Observable<any>;

  constructor(private store: Store<{usersList : any}>) { }

  ngOnInit() {
    this.store.dispatch(new UsersActions.GetUsers({}));
    this.usersState = this.store.select('usersList');
    console.log(this.usersState);
  }

}
