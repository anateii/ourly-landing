import { Plus } from "lucide-react";
import { faqs } from "../helpers/sample";

// Native <details>: keyboard and screen-reader friendly with no JS. The smooth
// open/close is CSS (::details-content), where the browser supports it.
export default function Faq() {
  return (
    <section id="faq" className="section section-narrow">
      <h2 className="display reveal faq-title">
        Good questions, <span className="serif accent">short answers.</span>
      </h2>
      <div className="faq">
        {faqs.map((f, i) => (
          <details key={f.q} open={i === 0}>
            <summary>
              {f.q}
              <Plus className="faq-icon" aria-hidden="true" size={20} />
            </summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
