import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameBoard } from '../../Data';
import { QuestionDialogComponent } from '../modal/question-dialog.component';
import { ScoreChange, ScoreComponent } from '../score/score.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

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
  board = GameBoard;

  // default question to guaruntee not null
  selectedId: string | null = null;

  constructor(private dialog: MatDialog) {}

  // score state
  blueScore = 0;
  redScore = 0;

  // map of question id -> 'blue'|'red' to mark awarded tiles
  awarded: Record<string, 'blue' | 'red'> = {};

  onTileClick(cell: QuestionCell) {
    // capture id if present
    // @ts-ignore
    const qid = (cell as any).id ?? null;
    this.selectedId = qid;

    const ref = this.dialog.open(QuestionDialogComponent, {
      data: {
        questionText: cell.question,
        points: cell.points,
        id: qid,
      }
    });

    ref.afterClosed().subscribe((result: 'blue' | 'red' | null) => {
      if (!result) { return; }

      // create a ScoreChange-like object
      const change: ScoreChange = { team: result, delta: cell.points };
      this.onAward(change);
    });
  }

  onAward(scoreChange: ScoreChange) {
    if (scoreChange.team === 'blue') {
      this.blueScore += scoreChange.delta;
    } else {
      this.redScore += scoreChange.delta;
    }

    if (this.selectedId) {
      this.awarded[this.selectedId] = scoreChange.team;
    }

    // eslint-disable-next-line no-console
    console.log('Awarded', { team: scoreChange.team, id: this.selectedId, points: scoreChange.delta });
    this.selectedId = null;
  }
}
