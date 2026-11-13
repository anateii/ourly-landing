import { ArrowRight } from "lucide-react";
import { SIGN_UP_URL } from "../helpers/links";

const links = [
  { label: "Features", href: "#features" },
  { label: "Check-ins", href: "#space" },
  { label: "How it works", href: "#how" },
  { label: "Questions", href: "#faq" },
];

// The floating glass pill that stays with you down the page.
export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-pill">
        <a className="nav-brand" href="#top">
          <img src="/ourly-logo-dark-sidebar.png" alt="Ourly" width={404} height={120} />
        </a>
        <nav className="nav-links" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a className="btn-white btn-sm" href={SIGN_UP_URL}>
          Start our space <ArrowRight className="arrow" aria-hidden="true" size={16} />
        </a>
      </div>
    </header>
  );
}
