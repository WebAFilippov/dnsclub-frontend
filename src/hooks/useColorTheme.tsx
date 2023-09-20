import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

export type Theme = "system" | "light" | "dark"

export default function useColorTheme() {
  const [colorTheme, setColorTheme] = useLocalStorage<Theme>("colorTheme", "system");

  useEffect(() => {
    if (colorTheme === "system") {
      window.matchMedia("(prefers-color-scheme: light)").matches
        ? (document.documentElement.dataset.theme = "light")
        : (document.documentElement.dataset.theme = "dark");      
    } else if (colorTheme === "light") {
      document.documentElement.dataset.theme = "light";
    } else if (colorTheme === "dark") {
      document.documentElement.dataset.theme = "dark";
    }
  }, [colorTheme]);

  return [colorTheme, setColorTheme] as const;
}
