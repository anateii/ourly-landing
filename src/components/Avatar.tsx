import { people, type Who } from "../helpers/sample";

// The small initial circle used across the mocks (owner = lilac, partner = sage).
export default function Avatar({ who }: Readonly<{ who: Who }>) {
  return (
    <span className={`avatar avatar-${who}`} aria-hidden="true">
      {people[who].initial}
    </span>
  );
}
