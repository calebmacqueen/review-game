import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameBoard } from '../../Data';

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
  board = GameBoard;

  onTileClick(categoryIndex: number, questionIndex: number, cell: QuestionCell) {
    console.log('Tile clicked', { categoryIndex, questionIndex, cell });
  }
}
