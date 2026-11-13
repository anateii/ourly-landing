import { marqueeItems } from "../helpers/sample";

function Group() {
  return (
    <div className="marquee-group">
      {marqueeItems.map((item) => (
        <span key={item} className="marquee-item serif">
          {item}
        </span>
      ))}
    </div>
  );
}

// Two identical groups slide left by half the track, so the loop is seamless.
// Decorative: hidden from assistive tech.
export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <Group />
        <Group />
      </div>
    </div>
  );
}
