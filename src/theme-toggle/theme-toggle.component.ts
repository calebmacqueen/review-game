import { Component, effect, signal } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'theme-toggle',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.css']
})
export class ThemeToggleComponent {
  dark = signal(false);

  constructor() {
    const saved = localStorage.getItem('app-dark-theme');
    if (saved === 'true') { this.dark.set(true); document.body.classList.add('dark-theme'); }

    effect(() => {
      const isDark = this.dark();
      if (isDark) {
        document.body.classList.add('dark-theme');
      } else {
        document.body.classList.remove('dark-theme');
      }
      localStorage.setItem('app-dark-theme', isDark.toString());
    });
  }
}
