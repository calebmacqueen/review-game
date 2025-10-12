import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

export interface ScoreChange {
  team: 'blue' | 'red';
  delta: number;
}

@Component({
  selector: 'score-board',
  standalone: true,
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
  imports: [MatCardModule, MatButtonModule]
})
export class ScoreComponent {
  @Input() blueScore = 0;
  @Input() redScore = 0;
  @Output() change = new EventEmitter<ScoreChange>();

  add(team: 'blue' | 'red', amount = 100) {
    this.change.emit({ team, delta: amount });
  }

  sub(team: 'blue' | 'red', amount = 100) {
    this.change.emit({ team, delta: -amount });
  }
}
