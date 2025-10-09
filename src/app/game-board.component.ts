import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameBoard } from '../../Data';
import { Directive } from '@angular/core';

interface QuestionCell {
  points: number;
  question: string;
}

@Component({
  selector: 'game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class GameBoardComponent {
  // expose the imported game board data to the template
  board = GameBoard;

  onTileClick(categoryIndex: number, questionIndex: number, cell: QuestionCell) {
    // placeholder interaction - for now just log to console
    // later this could open a modal or navigate to a question view
    // Keep logic minimal for this change
    // eslint-disable-next-line no-console
    console.log('Tile clicked', { categoryIndex, questionIndex, cell });
  }
}
