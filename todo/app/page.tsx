'use client';

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={styles.input}
          placeholder="task"
        />
        <div className={styles.ctas}>
          <button
            onClick={() => {
              setTasks([...tasks, inputValue]);
              setInputValue("");
            }}
            className={styles.addButton}
          >
            Add Task
          </button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className={styles.task}>
              <div className={styles.taskInput} onClick={() => {
                const newTasks = [...tasks];
                newTasks[index] = prompt("Edit task", task) || task;
                setTasks(newTasks);
              }} >{task}</div>
              <button
                onClick={() => {
                  setTasks(tasks.filter((_, i) => i !== index));
                }}
                className={styles.deleteButton}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}