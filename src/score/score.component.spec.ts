import { TestBed } from '@angular/core/testing';
import { DEFAULT_TEAMS } from '../interfaces/team';
import { ScoreChange, ScoreComponent } from './score.component';

describe('ScoreComponent', () => {
  it('renders all five teams and supports score changes for the new teams', async () => {
    await TestBed.configureTestingModule({
      imports: [ScoreComponent]
    }).compileComponents();

    const fixture = TestBed.createComponent(ScoreComponent);
    fixture.componentRef.setInput('scores', {
      blue: 0,
      red: 0,
      green: 0,
      orange: 0,
      purple: 0
    });
    const changes: ScoreChange[] = [];
    fixture.componentInstance.change.subscribe((change) => changes.push(change));
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelectorAll('.team').length).toBe(5);
    expect(element.textContent).toContain('Green Team');
    expect(element.textContent).toContain('Orange Team');
    expect(element.textContent).toContain('Purple Team');

    const addGreen = element.querySelector(
      '.team[data-team="green"] .controls button:last-child'
    ) as HTMLButtonElement;
    addGreen.click();

    expect(changes).toEqual([{ team: 'green', delta: 100 }]);
  });

  it('uses configured names and hides disabled teams', async () => {
    await TestBed.configureTestingModule({
      imports: [ScoreComponent]
    }).compileComponents();

    const fixture = TestBed.createComponent(ScoreComponent);
    fixture.componentRef.setInput('scores', {
      blue: 0,
      red: 0,
      green: 0,
      orange: 0,
      purple: 0
    });
    fixture.componentRef.setInput(
      'teams',
      DEFAULT_TEAMS.map((team) => ({
        ...team,
        name: team.id === 'green' ? 'Forest' : team.name,
        enabled: team.id !== 'orange'
      }))
    );
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelectorAll('.team').length).toBe(4);
    expect(element.querySelector('[data-team="orange"]')).toBeNull();
    expect(element.textContent).toContain('Forest Team');
  });
});
