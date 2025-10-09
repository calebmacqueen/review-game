import { Component } from '@angular/core';
import { GameBoardComponent } from './game-board.component';

@Component({
  selector: 'app-root',
  imports: [GameBoardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
