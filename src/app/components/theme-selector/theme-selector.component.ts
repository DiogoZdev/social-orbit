import { Component, OnInit } from '@angular/core';

type Theme = "light" | "dark";
type Accent = "blue" | "red" | "gold";

@Component({
  selector: 'orb-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss']
})
export class ThemeSelectorComponent implements OnInit {

  isMenuOpened = false;

  ngOnInit() {
    const theme = localStorage.getItem('theme') as Theme;
    const accent = localStorage.getItem('accent') as Accent;

    this.setTheme(theme ?? "light")
    this.setAccent(accent ?? "blue")
  }

  toggleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }

  setTheme(theme: Theme) {
    document.body.classList.remove('dark');
    document.body.classList.remove('light');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }

  setAccent(accent: Accent) {
    document.body.classList.remove('blue');
    document.body.classList.remove('red');
    document.body.classList.remove('gold');
    document.body.classList.add(accent);
    localStorage.setItem('accent', accent)
  }
}
