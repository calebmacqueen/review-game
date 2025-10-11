import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ScoreChange } from '../score/score.component';

export type Team = 'blue' | 'red';

@Component({
    selector: 'question-modal',
    standalone: true,
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
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
        this.awarded.emit({team: team, delta: this.points});
        this.onClose();
    }
}
