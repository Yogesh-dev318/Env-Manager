"use client"
import { Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"
import { useTheme } from "next-themes";

const ThemeButton=()=>{
    const { theme,setTheme } = useTheme();
    return(
        <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full h-12 w-12 relative m-5 transparent"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
    )
}
export default ThemeButton;