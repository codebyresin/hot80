import { useReducer, useState } from "react";
import "./index.css";

const initialState = { list: [] };

function toDoListReducer(state: any, action: any) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: Date.now(),
            text: action.payload,
            done: false,
          },
        ],
      };
    case "toggle":
      return {
        ...state,
        list: [
          ...state.list.map((item: any) =>
            item.id === action.payload ? { ...item, done: !item.done } : item,
          ),
        ],
      };
    case "delete":
      return {
        ...state,
        list: [...state.list.filter((item: any) => item.id !== action.payload)],
      };
    default:
      return state;
  }
}

const TodoList = () => {
  const [state, dispatch] = useReducer(toDoListReducer, initialState);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    dispatch({ type: "add", payload: input });
    setInput("");
  };
  return (
    <div className="w-400 p-4 border ">
      <h3>待办事项组件</h3>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="请输入待办事物"
        />
        <button onClick={addTask} className="add">
          添加
        </button>
      </div>
      <button onClick={() => setInput("")}>清除</button>
      <div className="content">
        {state.list.map((item: any) => {
          return (
            <div key={item.id}>
              {item.text}
              <button
                className="deleteBtn"
                onClick={() => dispatch({ type: "toggle", payload: item.id })}
              >
                {item.done ? "取消完成" : "标记完成"}
              </button>
              <button
                className="deleteBtn"
                onClick={() => dispatch({ type: "delete", payload: item.id })}
              >
                删除
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TodoList;
