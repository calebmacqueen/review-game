import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameBoard } from '../../Data';
import { ModalComponent } from '../modal/modal.component';
import { ScoreChange, ScoreComponent } from '../score/score.component';

interface QuestionCell {
  points: number;
  question: string;
}

@Component({
  selector: 'game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css'],
  standalone: true,
  imports: [CommonModule, ModalComponent, ScoreComponent]
})
export class GameBoardComponent {
  board = GameBoard;

  // modal state
  //default question to guaruntee not null
  selectedQuestion: QuestionCell = { points: 0, question: '' };
  selectedId: string | null = null;
  modalOpen = false;

  // score state
  blueScore = 0;
  redScore = 0;

  // map of question id -> 'blue'|'red' to mark awarded tiles
  awarded: Record<string, 'blue' | 'red'> = {};

  onTileClick(cell: QuestionCell) {
    this.selectedQuestion = cell;
    // if the question has an id, capture it for reference
    // @ts-ignore
    this.selectedId = (cell as any).id;
    this.modalOpen = true;
  }

  onModalClose() {
    this.modalOpen = false;
    // this.selectedQuestion = null;
    this.selectedId = null;
  }

  onAward(scoreChange: ScoreChange) {
    if (!this.selectedQuestion) {
      this.onModalClose();
      return;
    }

    // const points = this.selectedQuestion.points;
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
    this.onModalClose();
  }
}
