import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { BoitedeVitesseService } from '../boitede-vitesse.service';


@Component({
   selector: 'app-vitesse',
   templateUrl: './vitesse.component.html',
   styleUrls: ['./vitesse.component.css']
})
export class VitesseComponent implements OnInit {

   constructor(private vitesse: BoitedeVitesseService) { }


   currentVitesse: string;
   resultAction: string;

   ngOnInit() {
      this.currentVitesse = ('Vitesse Neutre');
      this.resultAction = ('OK');
   }


   /// Condition d'utilisation des boutons
   /*  if(currentVitesse = 'Vitesse Neutre') {
      this.onBtClickV1();
      this.onBtClickV2();
   }

   if(currentVitesse = 'Vitesse 1') {
      this.onBtClickVn();
      this.onBtClickV2();
   }

   if(currentVitesse = 'Vitesse 2') {
      this.onBtClickVr();
      this.onBtClickV3();
   }

   if(currentVitesse = 'Vitesse 3') {
       this.onBtClickV4(); /// 10 secondes
      this.onBtClickV1();
   }

   if(currentVitesse = 'Vitesse 4') {
      this.onBtClickV1();
      this.onBtClickV5();
   }

   if(currentVitesse = 'Vitesse 5') {
      this.onBtClickV3();
      this.onBtClickVn();
   }

   if(currentVitesse = 'Vitesse Neutre') {
      this.onBtClickV1();
      this.onBtClickV2();
    } */

   /// liens boutons
   onBtClickVn() {
      console.log('VN -> Ca marche !!!');
      this.currentVitesse = ('Vitesse Neutre');
   }

   onBtClickVr() {
      console.log('VR -> Ca marche !!!');
      this.currentVitesse = ('Vitesse Arrière');
   }

   onBtClickV1() {
      console.log('V1 -> Ca marche !!!');
      this.currentVitesse = ('Vitesse 1');
   }

   onBtClickV2() {
      console.log('V2 -> Ca marche !!!');
      this.currentVitesse = ('Vitesse 2');
   }

   onBtClickV3() {
      console.log('V3 -> Ca marche !!!');
      this.currentVitesse = ('Vitesse 3');
   }

   onBtClickV4() {
      console.log('V4 -> Ca marche !!!');
      this.currentVitesse = ('Vitesse 4');
   }

   onBtClickV5() {
      console.log('V5 -> Ca marche !!!');
      this.currentVitesse = ('Vitesse 5');
   }

}
