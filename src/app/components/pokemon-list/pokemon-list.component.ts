import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FusionCardComponent } from '../fusion-card/fusion-card.component';
import { FavoritesListComponent } from '../favorites-list/favorites-list.component';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, FusionCardComponent, FavoritesListComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'] // agrega un CSS dedicado
})
export class PokemonListComponent implements OnInit {
  fusion: any;
  loading = false;

  constructor(private http: HttpClient, private favoritesService: FavoritesService) {}

  ngOnInit() {
    this.generateFusion(); // generar al inicio
  }

  async generateFusion() {
    this.loading = true; // empieza carga
    const ids = Array.from({ length: 3 }, () => Math.floor(Math.random() * 151) + 1);

    const pokemons = await Promise.all(
      ids.map(id => this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${id}`).toPromise())
    );

    this.fusion = {
      name: pokemons.map(p => p.name).join('-'),
      types: [...new Set(pokemons.flatMap(p => p.types.map((t: any) => t.type.name)))],
      stats: pokemons[0].stats.reduce((acc: any, stat: any, i: number) => {
        acc[stat.stat.name] = Math.floor(
          (pokemons[0].stats[i].base_stat + pokemons[1].stats[i].base_stat + pokemons[2].stats[i].base_stat) / 3
        );
        return acc;
      }, {}),
      moves: pokemons.flatMap(p => p.moves.slice(0, 1).map((m: any) => m.move.name)).slice(0, 2),
      images: pokemons.map(p => p.sprites.front_default)
    };

    this.loading = false; // termina carga
  }

  addToFavorites() {
    if (this.fusion) {
      this.favoritesService.addFavorite(this.fusion);
    }
  }
}
