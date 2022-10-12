import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../../services/api-service.service';
import StorageHelper from '../../libs/helpers/storage.helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';


  constructor(public httpAPI: ApiServiceService, public router: Router) { }

  ngOnInit(): void {
  }

  onclick() {

    this.httpAPI.login(this.username, this.password).subscribe(
      {
        next: (resp: any) => {
          StorageHelper.setItem('session', resp)
          // console.log(resp);
          this.router.navigate(['search'])
        }
      });
  }

}
