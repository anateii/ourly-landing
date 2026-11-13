import { CalendarDays, Heart, House, SquareCheck, Wallet } from "lucide-react";

// The five items of the app's bottom bar on small screens.
const tabs = [
  { label: "Home", icon: House },
  { label: "Our Goals", icon: Heart },
  { label: "Tasks", icon: SquareCheck },
  { label: "Calendar", icon: CalendarDays },
  { label: "Finances", icon: Wallet },
];

export default function PhoneCard() {
  return (
    <article className="card feature feature-small">
      <h3>At home on your phone</h3>
      <p className="feature-text">
        On small screens the menu becomes a bottom bar, so everything stays a thumb away.
      </p>
      <div className="mock tabbar" aria-hidden="true">
        {tabs.map(({ label, icon: Icon }, i) => (
          <span key={label} className={i === 0 ? "active" : undefined}>
            <Icon size={20} />
          </span>
        ))}
      </div>
    </article>
  );
}
