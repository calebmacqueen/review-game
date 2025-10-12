import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ScoreChange } from '../score/score.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

export type Team = 'blue' | 'red';

@Component({
    selector: 'question-modal',
    standalone: true,
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css'],
    imports: [
        MatButtonModule,
        MatDialogModule,
        MatCardModule,
        MatProgressBarModule,
        MatIconModule,
        MatToolbarModule
    ]
})
export class ModalComponent {
    @Input() open = false;
    @Input() questionText!: string;
    @Input() points!: number;
    @Output() close = new EventEmitter<void>();
    @Output() awarded = new EventEmitter<ScoreChange>();

    onClose() {
        this.close.emit();
    }

    award(team: Team) {
        this.awarded.emit({ team: team, delta: this.points });
        this.onClose();
    }
}
