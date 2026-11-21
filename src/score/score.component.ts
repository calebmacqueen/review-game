import { Component, computed, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DEFAULT_TEAMS, TEAM_COLORS, Team, TeamConfiguration } from '../interfaces/team';

export interface ScoreChange {
  team: Team;
  delta: number;
}

@Component({
  selector: 'score-board',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
  imports: [MatCardModule, MatButtonModule]
})
export class ScoreComponent {
  readonly teams = input<TeamConfiguration[]>(DEFAULT_TEAMS);
  readonly scores = input.required<Record<Team, number>>();
  readonly enabledTeams = computed(() => this.teams().filter((team) => team.enabled));
  readonly teamColors = TEAM_COLORS;
  readonly change = output<ScoreChange>();

  add(team: Team, amount = 100) {
    this.change.emit({ team, delta: amount });
  }

  sub(team: Team, amount = 100) {
    this.change.emit({ team, delta: -amount });
  }
}
