import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../services/exercise.service';

declare var googleyolo: any;
declare var FB: any;
declare var window: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _Exercise: ExerciseService) { 
    window.fbAsyncInit = () => {
      FB.init({
        appId      : '2060883297484199',
        cookie     : true,
        xfbml      : true,
        version    : 'v2.12'
      });
          
      FB.AppEvents.logPageView();   
    };

    (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = <HTMLScriptElement>d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  ngOnInit() {
  }

  login(name: string, password: string){
    this._Exercise.login(name, password);
  }

  fblogin(){
    FB.login((credentials:any)=>{
        console.log(credentials);
    })
  }
  googlelogin(){
    googleyolo.hint({
      supportedAuthMethods: [
      "https://accounts.google.com"
      ],
      supportedIdTokenProviders: [
          {
              uri: "https://accounts.google.com",
              clientId: "342554795791-5j13n6ug7akp10r6k6np2454qppboctq.apps.googleusercontent.com"
          }
      ]
    }).then((credentials: any) =>{
      this._Exercise.oAuthLogin(credentials.displayName, credentials.idToken, credentials.profilePicture);
      console.log(credentials);
    })
  }

}
