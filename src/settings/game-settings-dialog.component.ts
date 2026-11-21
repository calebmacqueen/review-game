import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Category } from '../interfaces/category';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { TEAM_COLORS, TeamConfiguration } from '../interfaces/team';

export interface GameSettingsDialogData {
  board: Category[];
  teams: TeamConfiguration[];
}

export interface GameSettingsDialogResult {
  board: Category[];
  teams: TeamConfiguration[];
}

@Component({
  selector: 'game-settings-dialog',
  imports: [FormsModule, MatDialogModule, MatButtonModule, ThemeToggleComponent],
  templateUrl: './game-settings-dialog.component.html',
  styleUrls: ['./game-settings-dialog.component.css']
})
export class GameSettingsDialogComponent {
  readonly dialogRef = inject(MatDialogRef<GameSettingsDialogComponent>);
  readonly data = inject<GameSettingsDialogData>(MAT_DIALOG_DATA);
  readonly teamColors = TEAM_COLORS;

  save() {
    this.dialogRef.close(this.data);
  }
}
