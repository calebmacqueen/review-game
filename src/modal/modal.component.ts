import { Component, EventEmitter, Input, Output } from '@angular/core';

export type Award = 'blue' | 'red' | null;

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
    @Output() awarded = new EventEmitter<Award>();

    onClose() {
        this.close.emit();
    }

    award(team: Award) {
        this.awarded.emit(team);
        this.onClose();
    }
}
