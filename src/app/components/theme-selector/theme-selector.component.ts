import { Component, Input, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

type Theme = "light" | "dark";
type Accent = "blue" | "red" | "green" | "gold";

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss']
})
export class ThemeSelectorComponent {

  constructor(
    private themeService: ThemeService
  ) {}

  public isMenuOpened = false;
  @Input() showIcon = true;

  toggleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }

  setTheme(theme: Theme) {
    this.themeService.setTheme(theme)
  }

  setAccent(accent: Accent) {
    this.themeService.setAccent(accent)
  }
}
