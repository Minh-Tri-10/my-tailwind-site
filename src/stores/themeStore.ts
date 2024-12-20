import { makeAutoObservable } from "mobx";

type ThemeMode = "light" | "dark";

const STORAGE_KEY = "@theme";

class ThemeStore {
  private _themeMode: ThemeMode =
    (localStorage.getItem(STORAGE_KEY) as ThemeMode) || "light";

  constructor() {
    makeAutoObservable(this);
  }

  get themeMode() {
    return this._themeMode;
  }

  toggle() {
    this._themeMode = this._themeMode === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_KEY, this._themeMode);
    document.body.setAttribute("data-mode", this._themeMode);
  }

  get mode() {
    return this._themeMode === "dark" ? "dark" : "light";
  }
}

export const themeStore = new ThemeStore();
