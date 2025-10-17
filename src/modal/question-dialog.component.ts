import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

export interface QuestionDialogData {
  questionText: string;
  points: number;
  id?: string;
}

@Component({
  selector: 'question-dialog',
  standalone: true,
  templateUrl: './question-dialog.component.html',
  styleUrls: ['./question-dialog.component.css'],
  imports: [MatButtonModule, MatCardModule, MatCheckboxModule]
})
export class QuestionDialogComponent {
  verseReference = false;
  constructor(
    public dialogRef: MatDialogRef<QuestionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: QuestionDialogData
  ) {}

  onVerseChange(event: any) {
    // MatCheckboxChange has 'checked' property
    this.verseReference = !!event?.checked;
  }

  // award with optional verse reference bonus
  award(team: 'blue' | 'red', verseRef: boolean) {
    const points = this.data.points + (verseRef ? 100 : 0);
    this.dialogRef.close({ team, points });
  }

  close() {
    this.dialogRef.close(null);
  }
}
