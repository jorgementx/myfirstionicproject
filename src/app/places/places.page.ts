import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, ViewWillEnter } from '@ionic/angular';
import { present } from '@ionic/core/dist/types/utils/overlays';
import { PlacesService } from './places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit, ViewWillEnter {
  places = [];

  constructor(
    public toastController: ToastController,
    private placeService: PlacesService,
    private router: Router
    ) { }

  ngOnInit() {
    this.places = this.placeService.getPlaces();
  }

  ionViewWillEnter() {
    this.places = this.placeService.getPlaces();
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

  deleteItem(itemId: string) {
    this.placeService.deletePlace(itemId);
    this.places = this.placeService.getPlaces();
    this.presentToast('Element deleted');
  }

  reorderItems() {
    // todo
  }

  addNewPlace() {
    this.router.navigate(['/new-place']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

}
