import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const DARK_THEME_CLASS = 'dark-theme';
const LIGHT_THEME_CLASS = 'light-theme';
const CURRENT_THEME_KEY = 'CURRENT_THEME';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  public isDark$ = new BehaviorSubject<boolean>(this.isDefaultDark());

  public setDefaultTheme() {
    this.setTheme(this.isDefaultDark());
  }

  public toggleTheme() {
    this.setTheme(!this.isDark$.value);
  }

  public setTheme(isDark: boolean) {
    const currentThemeClass = isDark ? DARK_THEME_CLASS : LIGHT_THEME_CLASS;

    document.body.classList.remove(DARK_THEME_CLASS);
    document.body.classList.remove(LIGHT_THEME_CLASS);
    document.body.classList.add(currentThemeClass);

    this.isDark$.next(isDark);
    localStorage.setItem(CURRENT_THEME_KEY, currentThemeClass);
  }

  private isDefaultDark(): boolean {
    const saved = localStorage.getItem(CURRENT_THEME_KEY);
    if (saved && saved === DARK_THEME_CLASS) {
      return true;
    }

    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return true;
    }

    return document.body.classList.contains(DARK_THEME_CLASS);
  }
}
