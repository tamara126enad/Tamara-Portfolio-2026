import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function Router() {
  const pagesBase = import.meta.env.BASE_URL;
  return <Switch><Route path={pagesBase} component={Home} /><Route path="/Tamara-Portfolio-2026" component={Home} /><Route path="/Tamara-Portfolio-2026/" component={Home} /><Route path="/" component={Home} /><Route path={`${pagesBase}404`} component={NotFound} /><Route path="/404" component={NotFound} /><Route component={NotFound} /></Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
