import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameBoard } from '../../Data';
import { ModalComponent } from '../modal/modal.component';

interface QuestionCell {
  points: number;
  question: string;
}

@Component({
  selector: 'game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css'],
  standalone: true,
  imports: [CommonModule, ModalComponent]
})
export class GameBoardComponent {
  board = GameBoard;

  // modal state
  selectedQuestion: QuestionCell | null = null;
  selectedId: string | null = null;
  modalOpen = false;

  onTileClick(categoryIndex: number, questionIndex: number, cell: QuestionCell) {
    this.selectedQuestion = cell;
    // if the question has an id, capture it for reference
    // @ts-ignore
    this.selectedId = (cell as any).id ?? `${categoryIndex}-${questionIndex}`;
    this.modalOpen = true;
  }

  onModalClose() {
    this.modalOpen = false;
    this.selectedQuestion = null;
    this.selectedId = null;
  }

  onAward(team: 'blue' | 'red' | null) {
    // For now we simply log which team was awarded then close the modal
    // In a real app you'd update scores/state here
    // eslint-disable-next-line no-console
    console.log('Awarded', { team, id: this.selectedId });
    this.onModalClose();
  }
}
