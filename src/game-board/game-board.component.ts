import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionDialogComponent } from '../modal/question-dialog.component';
import { ScoreChange, ScoreComponent } from '../score/score.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { Category } from '../interfaces/category';
import { DEFAULT_TEAMS, Team, TeamConfiguration } from '../interfaces/team';

interface QuestionCell {
  points: number;
  question: string;
}

@Component({
  selector: 'game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css'],
  standalone: true,
  imports: [CommonModule, ScoreComponent, MatButtonModule, MatDialogModule]
})
export class GameBoardComponent {
  board = input.required<Category[]>();
  teams = input<TeamConfiguration[]>(DEFAULT_TEAMS);

  // default question to guaruntee not null
  selectedId: string | null = null;

  constructor(private dialog: MatDialog) { }

  // score state
  scores: Record<Team, number> = {
    blue: 0,
    red: 0,
    green: 0,
    orange: 0,
    purple: 0
  };

  // map of question id to the team that awarded it
  awarded: Record<string, Team> = {};

  onTileClick(cell: QuestionCell) {
    // capture id if present
    // @ts-ignore
    const qid = (cell as any).id ?? null;
    this.selectedId = qid;

    const ref = this.dialog.open(QuestionDialogComponent, {
      data: {
        questionText: cell.question,
        points: cell.points,
        teams: this.teams().filter((team) => team.enabled),
        id: qid,
      }
    });

    ref.afterClosed().subscribe((result: { team: Team; points: number } | null) => {
      if (!result) { return; }

      const change: ScoreChange = { team: result.team, delta: result.points };
      this.onAward(change);
    });
  }

  onAward(scoreChange: ScoreChange) {
    this.scores[scoreChange.team] += scoreChange.delta;

    if (this.selectedId) {
      this.awarded[this.selectedId] = scoreChange.team;
    }

    // eslint-disable-next-line no-console
    console.log('Awarded', { team: scoreChange.team, id: this.selectedId, points: scoreChange.delta });
    this.selectedId = null;
  }
}
