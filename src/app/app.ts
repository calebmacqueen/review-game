import { Component } from '@angular/core';
import { GameBoardComponent } from '../game-board/game-board.component';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-root',
  imports: [GameBoardComponent, ThemeToggleComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
