import { useState } from "react";
import {
  CalendarDays,
  Check,
  Heart,
  House,
  Smile,
  SquareCheck,
  Target,
  Wallet,
} from "lucide-react";
import { adventure, people, sampleTasks } from "../helpers/sample";
import { countdown, greeting, useNow } from "../helpers/time";

// Same items and icons as the app's Sidebar.
const navItems = [
  { label: "Home", icon: House },
  { label: "Our Goals", icon: Heart },
  { label: "Tasks", icon: SquareCheck },
  { label: "Calendar", icon: CalendarDays },
  { label: "Finances", icon: Wallet },
  { label: "Our Space", icon: Smile },
];

const RING_R = 21;
const RING_C = 2 * Math.PI * RING_R;

// Its own component so only this text re-renders each second.
function AdventureCountdown() {
  const { big, rest } = countdown(adventure.targetDate, useNow());
  return (
    <p className="pv-countdown">
      <span className="pv-countdown-big">{big}</span>
      {rest && <span className="pv-countdown-rest">{rest}</span>}
    </p>
  );
}

// A recreation of the app's Home overview (dark theme), not a screenshot.
export default function AppPreview() {
  const [hello] = useState(() => greeting(Date.now()));
  const tasksLeft = sampleTasks.filter((t) => !t.done).length;

  return (
    <div className="pv" role="img" aria-label="A look at Ourly's Home page">
      <aside className="pv-sidebar">
        <img src="/ourly-logo-dark-sidebar.png" alt="" width={404} height={120} />
        <div className="pv-nav">
          {navItems.map(({ label, icon: Icon }, i) => (
            <div key={label} className={i === 0 ? "pv-nav-item active" : "pv-nav-item"}>
              <Icon size={20} /> {label}
            </div>
          ))}
        </div>
      </aside>

      <div className="pv-main">
        <div className="pv-segmented">
          <span className="active">Overview</span>
          <span>
            Recent activity <i className="pv-seg-dot" />
          </span>
        </div>

        <div className="pv-greeting">
          <p>
            {hello}, {people.owner.name}
          </p>
          <p className="pv-headline">
            <strong>Same team,</strong> brighter tomorrows.
          </p>
        </div>

        <div className="pv-stats">
          <div className="pv-stat">
            <span className="pv-stat-icon tint-accent">
              <Target size={22} />
            </span>
            <div>
              <strong>3</strong>
              <span>Active goals</span>
            </div>
          </div>
          <div className="pv-stat">
            <span className="pv-stat-icon tint-sage">
              <Check size={22} strokeWidth={2.4} />
            </span>
            <div>
              <strong>{tasksLeft}</strong>
              <span>Tasks to do</span>
            </div>
          </div>
          <div className="pv-stat">
            <span className="pv-stat-icon tint-accent">
              <CalendarDays size={22} />
            </span>
            <div>
              <strong>4</strong>
              <span>Upcoming events</span>
            </div>
          </div>
          <div className="pv-stat">
            <svg className="pv-ring" width="48" height="48" viewBox="0 0 52 52">
              <circle cx="26" cy="26" r={RING_R} className="pv-ring-track" />
              <circle
                cx="26"
                cy="26"
                r={RING_R}
                className="pv-ring-value"
                strokeDasharray={`${(adventure.progress / 100) * RING_C} ${RING_C}`}
                transform="rotate(-90 26 26)"
              />
            </svg>
            <div>
              <strong>{adventure.progress}%</strong>
              <span>{adventure.title}</span>
            </div>
          </div>
        </div>

        <div className="pv-adventure">
          <div className="sheen" />
          <p className="pv-kicker">Our next adventure</p>
          <p className="pv-adventure-title">{adventure.title}</p>
          <AdventureCountdown />
          <p className="pv-date">
            <CalendarDays size={16} /> {adventure.targetLabel}
          </p>
          <div className="pv-progress">
            <div className="pv-bar">
              <div style={{ width: `${adventure.progress}%` }} />
            </div>
            <span>{adventure.progress}% planned</span>
          </div>
        </div>
      </div>
    </div>
  );
}
