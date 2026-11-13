import { Wallet } from "lucide-react";
import { budget } from "../../helpers/sample";

const euro = new Intl.NumberFormat("en", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

export default function FinancesCard() {
  return (
    <article className="card feature">
      <div className="feature-copy">
        <span className="feature-icon tint-teal" aria-hidden="true">
          <Wallet size={20} />
        </span>
        <h3>Finances</h3>
        <p className="feature-tag serif teal">Saving and spending, together.</p>
        <p className="feature-text">
          Set a monthly budget, log shared expenses, settle up, and watch your savings funds grow.
        </p>
      </div>

      <div className="fin">
        <div className="fin-top">
          <div className="mock fin-tile">
            <span>Saved Together</span>
            <strong>{euro.format(4200)}</strong>
          </div>
          <div className="fin-tile fin-square">
            <span>Balance</span>
            <strong>You're all square</strong>
          </div>
        </div>
        <div className="mock fin-budget">
          <p className="mock-title">Shared Budget</p>
          {budget.map((b) => (
            <div key={b.label} className="fin-row">
              <p>
                <span>{b.label}</span>
                <span>
                  {euro.format(b.spent)} of {euro.format(b.planned)}
                </span>
              </p>
              <div className="bar">
                <div
                  className="grow"
                  style={{ width: `${(b.spent / b.planned) * 100}%`, background: b.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
