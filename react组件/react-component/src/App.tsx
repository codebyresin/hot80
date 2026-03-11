import { useEffect, useState, type ComponentType } from "react";
import CounterComponent from "./Counter/index";
import ThrottleComponent from "./Throttle/index";
import TodoComponent from "./TodoList/index";

type ComponentKey = "counter" | "throttle" | "todo" | null;

const COMPONENT_MAP: Record<NonNullable<ComponentKey>, ComponentType> = {
  counter: CounterComponent,
  throttle: ThrottleComponent,
  todo: TodoComponent,
};

const COMPONENT_LABELS: Record<NonNullable<ComponentKey>, string> = {
  counter: "计数器",
  throttle: "节流组件",
  todo: "待办事项",
};

function App() {
  const [activeComponent, setActiveComponent] = useState<ComponentKey>(null);

  const ActiveComponent = activeComponent
    ? COMPONENT_MAP[activeComponent]
    : null;

  return (
    <div className="App">
      <div className="button-group">
        {(Object.keys(COMPONENT_LABELS) as NonNullable<ComponentKey>[]).map(
          (key) => (
            <button
              key={key}
              onClick={() =>
                setActiveComponent(activeComponent === key ? null : key)
              }
              style={{
                ...(activeComponent === key && {
                  borderColor: "#646cff",
                  backgroundColor: "rgba(100, 108, 255, 0.2)",
                }),
              }}
            >
              {COMPONENT_LABELS[key]}
            </button>
          ),
        )}
      </div>

      <div className="component-container">
        {ActiveComponent ? (
          <ActiveComponent />
        ) : (
          <div className="read-the-docs">点击上方按钮切换组件</div>
        )}
      </div>
    </div>
  );
}

export default App;
