import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

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
  imports: [MatButtonModule, MatCardModule]
})
export class QuestionDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<QuestionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: QuestionDialogData
  ) {}

  award(team: 'blue' | 'red') {
    this.dialogRef.close(team);
  }

  close() {
    this.dialogRef.close(null);
  }
}
