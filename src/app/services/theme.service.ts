import { Injectable } from "@angular/core";

export interface IThemeSettings {

}

type Theme = "light" | "dark";
type Accent = "blue" | "red" | "green" | "gold";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  execute() {
    const theme = localStorage.getItem('theme') as Theme;
    const accent = localStorage.getItem('accent') as Accent;

    this.setTheme(theme ?? "light")
    this.setAccent(accent ?? "blue")
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
    document.body.classList.remove('green');
    document.body.classList.add(accent);
    localStorage.setItem('accent', accent)
  }
}