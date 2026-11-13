import { useState } from "react";
import { Check, SquareCheck } from "lucide-react";
import { sampleTasks } from "../../helpers/sample";
import Avatar from "../Avatar";

// A working mini task list: tick things off and "Left for today" follows.
export default function TasksCard() {
  const [tasks, setTasks] = useState(sampleTasks);
  const toggle = (id: string) =>
    setTasks((list) => list.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  const left = tasks.filter((t) => !t.done).length;

  return (
    <article className="card feature">
      <div className="feature-copy">
        <span className="feature-icon tint-sage" aria-hidden="true">
          <SquareCheck size={20} />
        </span>
        <h3>Tasks</h3>
        <p className="feature-tag serif sage">The little things that move us forward.</p>
      </div>

      <div className="mock tasks">
        <p className="tasks-head">
          <span>Left for today</span>
          <span>{left}</span>
        </p>
        <ul>
          {tasks.map((t) => (
            <li key={t.id} className={t.done ? "task done" : "task"}>
              <button
                type="button"
                className="task-check"
                aria-pressed={t.done}
                aria-label={`${t.done ? "Mark as not done" : "Mark as done"}: ${t.title}`}
                onClick={() => toggle(t.id)}
              >
                <span>
                  <Check aria-hidden="true" size={14} strokeWidth={3.2} />
                </span>
              </button>
              <div className="task-text">
                <span>{t.title}</span>
                <small>{t.meta}</small>
              </div>
              <Avatar who={t.who} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
