import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { FavoritesListComponent } from './components/favorites-list/favorites-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PokemonListComponent, FavoritesListComponent],
  template: `
    <div class="app-container">
      <h1>PokeFusion</h1>
      <app-pokemon-list></app-pokemon-list>
      <app-favorites-list></app-favorites-list>
    </div>
  `,
  styles: [`
    .app-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: Arial, sans-serif;
    }

    h1 {
      text-align: center;
      color: #ff0000;
    }
  `]
})
export class AppComponent {}
