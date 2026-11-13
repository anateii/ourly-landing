import { useState } from "react";
import { CalendarDays } from "lucide-react";
import { agenda } from "../../helpers/sample";
import { upcomingDays } from "../../helpers/time";

export default function CalendarCard() {
  const [days] = useState(() => upcomingDays(14));

  return (
    <article className="card feature">
      <div className="feature-copy">
        <span className="feature-icon tint-amber" aria-hidden="true">
          <CalendarDays size={20} />
        </span>
        <h3>Calendar</h3>
        <p className="feature-tag serif amber">Plans for the two of us.</p>
        <p className="feature-text">
          Events, task due dates and goal target dates share one view, so the next two weeks are
          never a surprise.
        </p>
      </div>

      <div className="mock fortnight" aria-hidden="true">
        <p className="mock-title">Next two weeks</p>
        <div className="fortnight-grid">
          {days.map((d) => (
            <div key={d.offset} className={d.offset === 0 ? "day today" : "day"}>
              <span className="day-name">{d.weekday}</span>
              <span className="day-num">{d.day}</span>
              <span className="day-dots">
                {(agenda[d.offset] ?? []).map((kind) => (
                  <i key={kind} className={`dot-${kind}`} />
                ))}
              </span>
            </div>
          ))}
        </div>
        <div className="legend">
          <span>
            <i className="dot-event" /> Events
          </span>
          <span>
            <i className="dot-task" /> Tasks
          </span>
          <span>
            <i className="dot-goal" /> Goal dates
          </span>
        </div>
      </div>
    </article>
  );
}
