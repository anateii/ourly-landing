import { Heart, Plane, Star } from "lucide-react";
import { adventure, people } from "../../helpers/sample";
import Avatar from "../Avatar";

export default function GoalsCard() {
  return (
    <article className="card feature feature-wide">
      <div className="feature-copy">
        <span className="feature-icon tint-accent" aria-hidden="true">
          <Heart size={20} />
        </span>
        <h3>Our Goals</h3>
        <p className="feature-tag serif accent">Big plans, small steps.</p>
        <p className="feature-text">
          Turn a trip, a move or a savings target into steps, pick who's leading, and feature one
          on Home with a countdown.
        </p>
      </div>

      {/* A goal card, as on the app's Our Goals page */}
      <div className="goal">
        <div className="goal-cover">
          <Plane className="bob" aria-hidden="true" size={46} strokeWidth={1.6} />
          <span className="goal-status">In progress</span>
          <span className="goal-featured">
            <Star aria-hidden="true" size={13} fill="currentColor" /> On Home
          </span>
        </div>
        <div className="goal-body">
          <p className="goal-title">{adventure.title}</p>
          <p className="goal-meta">Travel · by 2 Apr 2027</p>
          <div className="goal-progress">
            <div className="bar">
              <div className="grow" style={{ width: `${adventure.progress}%` }} />
            </div>
            <span>{adventure.progress}%</span>
          </div>
          <p className="goal-steps">
            3 of 5 steps done · Next: <b>Book the flights</b>
          </p>
          <div className="goal-lead">
            <Avatar who="owner" />
            <span>{people.owner.name} is leading</span>
          </div>
        </div>
      </div>
    </article>
  );
}
