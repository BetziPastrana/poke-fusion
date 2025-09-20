import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesService } from '../../services/favorites.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorites-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>⭐ Favoritos</h3>
    <ul>
      <li *ngFor="let fav of favorites$ | async">
        {{ fav.name }} ({{ fav.types.join(', ') }})
      </li>
    </ul>
  `
})
export class FavoritesListComponent {
  favorites$: Observable<any[]>;

  constructor(private favService: FavoritesService) {
    this.favorites$ = this.favService.getFavorites();
  }
}