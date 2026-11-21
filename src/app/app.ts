import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { Category } from '../interfaces/category';
import { GameBoard } from '../../Data';
import { GameBoardComponent } from '../game-board/game-board.component';
import {
  GameSettingsDialogComponent,
  GameSettingsDialogData,
  GameSettingsDialogResult
} from '../settings/game-settings-dialog.component';
import { DEFAULT_TEAMS, TeamConfiguration } from '../interfaces/team';

@Component({
  selector: 'app-root',
  imports: [GameBoardComponent, MatButtonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  board = signal(this.copyBoard(GameBoard));
  teams = signal(this.copyTeams(DEFAULT_TEAMS));
  private readonly dialog = inject(MatDialog);

  openSettings() {
    const dialogRef = this.dialog.open<
      GameSettingsDialogComponent,
      GameSettingsDialogData,
      GameSettingsDialogResult
    >(GameSettingsDialogComponent, {
      width: 'min(900px, 94vw)',
      maxHeight: '90vh',
      data: {
        board: this.copyBoard(this.board()),
        teams: this.copyTeams(this.teams())
      },
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.board.set(result.board);
        this.teams.set(result.teams);
      }
    });
  }

  private copyBoard(board: Category[]): Category[] {
    return board.map((category) => ({
      ...category,
      questions: category.questions.map((question) => ({ ...question }))
    }));
  }

  private copyTeams(teams: TeamConfiguration[]): TeamConfiguration[] {
    return teams.map((team) => ({ ...team }));
  }
}
