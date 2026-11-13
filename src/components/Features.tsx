import GoalsCard from "./features/GoalsCard";
import TasksCard from "./features/TasksCard";
import CalendarCard from "./features/CalendarCard";
import FinancesCard from "./features/FinancesCard";
import ActivityCard from "./features/ActivityCard";
import PhoneCard from "./features/PhoneCard";
import ThemeCard from "./features/ThemeCard";

// The bento grid. Each cell is a `.reveal` wrapper (rises in on scroll) around a
// `.card` (lifts on hover): two elements, because a scroll-driven animation on
// transform would otherwise override the hover transform.
export default function Features() {
  return (
    <section id="features" className="section">
      <div className="section-head reveal">
        <p className="kicker">What's inside</p>
        <h2 className="display">
          Everything you plan together, <span className="serif accent">in one calm place.</span>
        </h2>
      </div>

      <div className="bento">
        <div className="reveal span-4">
          <GoalsCard />
        </div>
        <div className="reveal span-2">
          <TasksCard />
        </div>
        <div className="reveal span-3">
          <CalendarCard />
        </div>
        <div className="reveal span-3">
          <FinancesCard />
        </div>
        <div className="reveal span-2">
          <ActivityCard />
        </div>
        <div className="reveal span-2">
          <PhoneCard />
        </div>
        <div className="reveal span-2">
          <ThemeCard />
        </div>
      </div>
    </section>
  );
}
