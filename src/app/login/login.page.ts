import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(public router:Router ,public loadingController: LoadingController) { }
 

  // logins(){
  //   this.router.navigate(['/home'])
  // }
  
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
    this.router.navigate(['/home'])

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}
