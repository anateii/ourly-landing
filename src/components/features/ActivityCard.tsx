import { people } from "../../helpers/sample";
import Avatar from "../Avatar";

export default function ActivityCard() {
  return (
    <article className="card feature feature-small">
      <h3>Recent activity</h3>
      <p className="feature-text">
        See what your partner got done, with what's new since your last visit marked.
      </p>
      <div className="activity">
        <p className="activity-new">
          <i aria-hidden="true" /> New since your last visit
        </p>
        <p>
          <Avatar who="partner" />
          <span>
            <b>{people.partner.name}</b> finished Renew passports
          </span>
        </p>
        <p>
          <Avatar who="partner" />
          <span>
            <b>{people.partner.name}</b> cheered your win
          </span>
        </p>
      </div>
    </article>
  );
}
