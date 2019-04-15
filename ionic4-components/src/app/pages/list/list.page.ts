import { DataService } from './../../services/data.service';
import { Component, OnInit,ViewChild } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IonList,ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('list') list: IonList;

  usuarios: Observable<any>;

  constructor(private dataService: DataService,
              private toastCtrl: ToastController) { }

  ngOnInit() {
    
    this.usuarios = this.dataService.getUsers();

  }

  favorite(user){
    console.log('favorite', user);
    this.list.closeSlidingItems();
    this.presentToast('Favorite Option');
  }

  share(user){
    console.log('share', user);
    this.list.closeSlidingItems();
    this.presentToast('Share Option');
  }

  delete(user){
    console.log('delete', user);
    this.list.closeSlidingItems();
    this.presentToast('Delete Option');
  }

  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}
