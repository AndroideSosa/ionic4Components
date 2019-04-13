import { DataService } from './../../services/data.service';
import { Component, OnInit,ViewChild } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('list') list: IonList;

  usuarios: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    
    this.usuarios = this.dataService.getUsers();

  }

  favorite(user){
    console.log('favorite', user);
    this.list.closeSlidingItems();
  }

  share(user){
    console.log('share', user);
  }

  delete(user){
    console.log('delete', user);
  }

}
