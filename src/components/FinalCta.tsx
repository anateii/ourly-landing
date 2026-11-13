import { ArrowRight, KeyRound, Plus } from "lucide-react";
import { JOIN_URL, SIGN_UP_URL, footerLinks } from "../helpers/links";

const YEAR = new Date().getFullYear();

// The closing call to action mirrors the app's onboarding welcome screen:
// the same two choices, with the same wording.
export default function FinalCta() {
  return (
    <section id="start" className="cta">
      <div className="orb orb-violet cta-orb-1" aria-hidden="true" />
      <div className="orb orb-coral cta-orb-2" aria-hidden="true" />

      <div className="cta-inner reveal">
        <h2 className="cta-title">
          Let's set up <span className="serif grad-a">your shared</span>{" "}
          <span className="serif grad-b">space.</span>
        </h2>
        <p className="lead">
          Goals, tasks and your countdown all live in one space the two of you share.
        </p>
        <div className="choices">
          <a className="choice" href={SIGN_UP_URL}>
            <span className="choice-icon choice-white" aria-hidden="true">
              <Plus size={22} strokeWidth={2.2} />
            </span>
            <span className="choice-text">
              <strong>Start our space</strong>
              <span>I'm setting things up first</span>
            </span>
            <ArrowRight className="arrow" aria-hidden="true" size={20} />
          </a>
          <a className="choice" href={JOIN_URL}>
            <span className="choice-icon tint-sage" aria-hidden="true">
              <KeyRound size={22} />
            </span>
            <span className="choice-text">
              <strong>Join with an invite code</strong>
              <span>My partner already started one</span>
            </span>
            <ArrowRight className="arrow" aria-hidden="true" size={20} />
          </a>
        </div>
      </div>

      <footer className="footer">
        <div>
          <img src="/ourly-logo-dark-sidebar.png" alt="Ourly" width={404} height={120} />
          <p>Same team, brighter tomorrows.</p>
        </div>
        <div className="footer-links">
          {footerLinks.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
          <span>© {YEAR} Ourly</span>
        </div>
      </footer>
    </section>
  );
}
