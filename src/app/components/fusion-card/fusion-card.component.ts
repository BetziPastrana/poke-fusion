import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fusion-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fusion-card.component.html',
  styleUrls: ['./fusion-card.component.css']
})
export class FusionCardComponent {
  @Input() fusion: any;
}
