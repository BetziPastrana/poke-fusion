import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favCollection;

  constructor(private firestore: Firestore) {
    this.favCollection = collection(this.firestore, 'favorites');
  }

  getFavorites(): Observable<any[]> {
    return collectionData(this.favCollection, { idField: 'id' });
  }

  addFavorite(fusion: any) {
    return addDoc(this.favCollection, fusion);
  }
}
