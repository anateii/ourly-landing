import { useState } from "react";
import { Moon } from "lucide-react";

// A working switch: flips this one card between the app's light and dark tokens.
export default function ThemeCard() {
  const [dark, setDark] = useState(false);

  return (
    <article className={`card feature feature-small theme-card ${dark ? "theme-dark" : ""}`}>
      <h3>Light and dark</h3>
      <p className="feature-text">
        Ourly follows your system setting, or switch themes yourself for late-night planning.
      </p>
      <button
        type="button"
        className="theme-switch"
        aria-pressed={dark}
        aria-label="Show this card in dark mode"
        onClick={() => setDark((d) => !d)}
      >
        <span>
          <Moon aria-hidden="true" size={18} />
        </span>
      </button>
    </article>
  );
}
