import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DEFAULT_TEAMS } from '../interfaces/team';
import { QuestionDialogComponent } from './question-dialog.component';

describe('QuestionDialogComponent', () => {
  it('shows award buttons only for enabled teams using their configured names', async () => {
    const teams = DEFAULT_TEAMS.map((team) => ({
      ...team,
      name: team.id === 'purple' ? 'Violet' : team.name,
      enabled: team.id !== 'red'
    }));

    await TestBed.configureTestingModule({
      imports: [QuestionDialogComponent],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: { questionText: 'Question', points: 100, teams }
        },
        { provide: MatDialogRef, useValue: { close: () => undefined } }
      ]
    }).compileComponents();

    const fixture = TestBed.createComponent(QuestionDialogComponent);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelectorAll('.award-team').length).toBe(4);
    expect(element.querySelector('[data-team="red"]')).toBeNull();
    expect(element.querySelector('[data-team="purple"]')?.textContent).toContain(
      'Award Violet Team'
    );
  });
});
