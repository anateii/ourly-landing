const EXAMPLE_CODE = "LISB0N27"; // invite codes are 8 letters/digits

// The app's three onboarding steps.
const steps = [
  {
    title: "Name your space",
    text: "One of you starts the space and gives it a name. It's where your goals, tasks and countdown will live.",
  },
  {
    title: "Pick your check-in rhythm",
    text: "Choose how often you check in and on which day. Ourly shows when the first one lands.",
  },
  {
    title: "Invite your partner",
    text: "Share your invite code. Your partner enters it and you're both in the same space.",
    code: EXAMPLE_CODE,
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="section">
      <div className="section-head reveal">
        <p className="kicker">How it works</p>
        <h2 className="display">
          Set up your shared space <span className="serif accent">in three steps.</span>
        </h2>
      </div>

      <ol className="steps">
        {steps.map((s, i) => (
          <li key={s.title} className="reveal">
            <div className="card step">
              <span className={`step-num serif step-num-${i + 1}`} aria-hidden="true">
                {i + 1}
              </span>
              <span className="step-of">
                Step {i + 1} of {steps.length}
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              {s.code && (
                <p className="invite-code" aria-label={`Example invite code: ${s.code}`}>
                  {[...s.code].map((ch, n) => (
                    <span key={n} aria-hidden="true">
                      {ch}
                    </span>
                  ))}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
