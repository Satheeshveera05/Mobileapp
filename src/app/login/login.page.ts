import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(public router:Router ,public loadingController: LoadingController,public alertController: AlertController) { }
 

  // logins(){
  //   this.router.navigate(['/home'])
  // }
  username : string =""
  password : string =""
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: 'Invalid User...',
      buttons: ['OK']
    });
    await alert.present();
  }
  async presentLoading() {
    if(this.username == "boodskap" && this.password == "welcome123" ){
      const loading = await this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        duration: 2000
      });
      await loading.present();
      this.router.navigate(['/home'])
  
      const { role, data } = await loading.onDidDismiss();
      console.log('Loading dismissed!');
    }else{
      this.presentAlert();
      this.router.navigate(['/login'])
    }
    
  }

}
