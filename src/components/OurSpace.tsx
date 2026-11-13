import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { checkInSteps, moods, people, type Mood, type Who } from "../helpers/sample";
import Avatar from "./Avatar";

const STEP_MS = 4500;
const both: Who[] = ["owner", "partner"];

function WinCard() {
  const [cheered, setCheered] = useState(false);
  return (
    <div className="space-card win">
      <div className="space-card-head">
        <span>Wins</span>
        <small>Small or big, they count</small>
      </div>
      <p className="win-text">Booked the flights. Lisbon is really happening.</p>
      <div className="win-foot">
        <span>
          <Avatar who="partner" /> {people.partner.name} · today
        </span>
        <button
          type="button"
          className="cheer"
          aria-pressed={cheered}
          aria-label={`${cheered ? "Remove your cheer for" : "Cheer for"} this win`}
          onClick={() => setCheered((c) => !c)}
        >
          <Heart aria-hidden="true" size={16} fill={cheered ? "currentColor" : "none"} />
          {cheered ? 2 : 1}
        </button>
      </div>
    </div>
  );
}

// The check-in card plays through the four questions on its own. Picking a
// question or a mood stops it, so it never changes under someone's finger.
export default function OurSpace() {
  const [step, setStep] = useState(0);
  const [auto, setAuto] = useState(true);
  const [mood, setMood] = useState<Record<Who, Mood>>({ owner: "Great", partner: "Good" });

  useEffect(() => {
    if (!auto) return;
    // No auto-advance for people who asked for less motion.
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setStep((s) => (s + 1) % checkInSteps.length), STEP_MS);
    return () => clearInterval(id);
  }, [auto]);

  const show = (i: number) => {
    setAuto(false);
    setStep(i);
  };
  const current = checkInSteps[step];

  return (
    <section id="space" className="section section-wide">
      <div className="reveal">
        <div className="space theme-dark">
          <div className="orb orb-violet space-orb-1" aria-hidden="true" />
          <div className="orb orb-rose space-orb-2" aria-hidden="true" />

          <div className="space-copy">
            <p className="kicker">Our Space</p>
            <h2 className="display display-md">
              Check in together{" "}
              <span className="serif grad-b">and celebrate the wins.</span>
            </h2>
            <p className="lead">
              Four short questions, about 10 minutes, together. Pick a rhythm that suits you and
              look back on how the weeks went.
            </p>
            <div className="questions">
              {checkInSteps.map((s, i) => (
                <button
                  key={s.q}
                  type="button"
                  className={i === step ? "question active" : "question"}
                  aria-pressed={i === step}
                  onClick={() => show(i)}
                >
                  <i aria-hidden="true" />
                  <span className="serif">{s.q}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-cards theme-light">
            <div className="space-card checkin">
              <div className="space-card-head">
                <span>Weekly check-in</span>
                <small className="checkin-progress">
                  {step + 1} of {checkInSteps.length}
                  <span aria-hidden="true">
                    {checkInSteps.map((s, i) => (
                      <i key={s.q} className={i <= step ? "on" : undefined} />
                    ))}
                  </span>
                </small>
              </div>

              {/* key = remount per step, so the entrance animation replays */}
              <div key={step} className="checkin-step step-in">
                <div>
                  <p className="prompt">{current.q}</p>
                  <p className="prompt-hint">{current.hint}</p>
                </div>
                {both.map((who) =>
                  current.answers ? (
                    <div key={who} className="answer">
                      <Avatar who={who} />
                      <p>{current.answers[who]}</p>
                    </div>
                  ) : (
                    <fieldset key={who} className="moods">
                      <legend>
                        <Avatar who={who} /> {people[who].name}
                      </legend>
                      <div>
                        {moods.map((m) => (
                          <button
                            key={m}
                            type="button"
                            aria-pressed={mood[who] === m}
                            onClick={() => {
                              setAuto(false);
                              setMood((all) => ({ ...all, [who]: m }));
                            }}
                          >
                            {m}
                          </button>
                        ))}
                      </div>
                    </fieldset>
                  ),
                )}
              </div>
            </div>

            <WinCard />
          </div>
        </div>
      </div>
    </section>
  );
}
