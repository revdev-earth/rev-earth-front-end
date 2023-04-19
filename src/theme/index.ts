type RecognizedsThemes = "light" | "dark"

class theme {
  localStorageTheme = localStorage.theme as RecognizedsThemes
  osTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : ("light" as RecognizedsThemes)

  constructor() {
    this.setTheme(this.localStorageTheme || this.osTheme)
  }

  getTheme() {
    return this.localStorageTheme
  }

  setTheme(theme: RecognizedsThemes) {
    this.localStorageTheme = theme
    localStorage.theme = theme
    document.querySelector("body")?.classList.remove("dark")
    document.querySelector("body")?.classList.remove("light")
    document.querySelector("body")?.classList.add(theme)
  }

  setOsTheme() {
    this.setTheme(this.osTheme)
  }

  setDarkTheme() {
    this.setTheme("dark")
  }

  isDark() {
    return this.localStorageTheme === "dark"
  }

  setLightTheme() {
    this.setTheme("light")
  }

  cleanThemaFromLocalStorage() {
    localStorage.removeItem("theme")
  }
}

export default new theme()
