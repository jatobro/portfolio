import { H1 } from "@/components/typography/h1";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-background text-foreground">
        <H1>My App</H1>
      </div>
    </ThemeProvider>
  );
}

export default App;
