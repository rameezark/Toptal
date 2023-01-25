import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Helpers } from 'src/app/helpers/helpers';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private helpers: Helpers, private router: Router, private tokenService: TokenService) {

  }
  ngOnInit(): void {

  }
  
  login():void{
    let authValues={"Username":"Pablo", "Password":"secret"};
    this.tokenService.auth(authValues).subscribe(token=>{
          this.helpers.setToken(token);
          this.router.navigate(['/dashboard']);
    });
  }

}
