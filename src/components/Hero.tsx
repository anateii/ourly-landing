import type { CSSProperties } from "react";
import { ArrowRight, Check, Heart, Wallet } from "lucide-react";
import { SIGN_UP_URL } from "../helpers/links";
import AppPreview from "./AppPreview";
import Marquee from "./Marquee";

const delay = (seconds: number): CSSProperties => ({ animationDelay: `${seconds}s` });

export default function Hero() {
  return (
    <section className="hero">
      <div className="orb orb-violet hero-orb-1" aria-hidden="true" />
      <div className="orb orb-coral hero-orb-2" aria-hidden="true" />
      <div className="orb orb-amber hero-orb-3" aria-hidden="true" />

      <div className="hero-copy">
        <p className="eyebrow-pill fade-up">
          <span className="live-dot" aria-hidden="true" />A shared space for the two of you
        </p>
        <h1 className="hero-title">
          <span className="word" style={delay(0.05)}>
            Same
          </span>{" "}
          <span className="word" style={delay(0.14)}>
            team,
          </span>
          <br />
          <span className="word serif grad-a" style={delay(0.28)}>
            brighter
          </span>{" "}
          <span className="word serif grad-b" style={delay(0.38)}>
            tomorrows.
          </span>
        </h1>
        <p className="hero-sub fade-up" style={delay(0.55)}>
          Ourly keeps your goals, tasks, calendar, finances and check-ins in one place, so
          planning your next chapter is something you do together.
        </p>
        <div className="hero-actions fade-up" style={delay(0.7)}>
          <a className="btn-white" href={SIGN_UP_URL}>
            Start our space <ArrowRight className="arrow" aria-hidden="true" size={20} />
          </a>
          <a className="btn-outline" href="#features">
            See what's inside
          </a>
        </div>
      </div>

      {/* The app, tilted back; it flattens as you scroll (see .tilt in App.css). */}
      <div className="stage">
        <div className="chip chip-1 bob" aria-hidden="true">
          <span className="chip-icon chip-rose">
            <Heart size={15} fill="currentColor" />
          </span>
          Leo cheered your win
        </div>
        <div className="chip chip-2 bob" aria-hidden="true">
          <span className="chip-icon chip-sage">
            <Check size={15} strokeWidth={3} />
          </span>
          Check-in saved. See you next time.
        </div>
        <div className="chip chip-3 bob" aria-hidden="true">
          <span className="chip-icon chip-teal">
            <Wallet size={15} />
          </span>
          You're all square
        </div>
        <div className="tilt">
          <AppPreview />
        </div>
      </div>

      <Marquee />
    </section>
  );
}
