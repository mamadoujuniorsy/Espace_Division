import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';

const initialTasks = {
  todo: [],
  inProgress: [],
  done: [],
};

const Kanban = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState({ title: '', category: 'todo' });
  const [draggingTask, setDraggingTask] = useState(null);

  const handleDragStart = (task, category) => {
    setDraggingTask({ task, category });
  };

  const handleDrop = (category) => {
    if (draggingTask) {
      const { task, category: sourceCategory } = draggingTask;
      setTasks((prevTasks) => {
        const updatedSourceTasks = prevTasks[sourceCategory].filter(t => t.id !== task.id);
        const updatedTargetTasks = [...prevTasks[category], task];
        return {
          ...prevTasks,
          [sourceCategory]: updatedSourceTasks,
          [category]: updatedTargetTasks,
        };
      });
      setDraggingTask(null);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newTask.title && newTask.category) {
      const newTaskObj = { id: Date.now(), title: newTask.title };
      setTasks(prevTasks => ({
        ...prevTasks,
        [newTask.category]: [...prevTasks[newTask.category], newTaskObj],
      }));
      setNewTask({ title: '', category: 'todo' });
    }
  };

  return (
    <div className="flex h-screen">
      <AdminSidebar className="w-1/4 h-full" />
      <div className="flex-1 p-4">
        <div className="mb-4">
          <form onSubmit={handleFormSubmit} className="flex space-x-4">
            <input
              type="text"
              name="title"
              value={newTask.title}
              onChange={handleInputChange}
              placeholder="New task title"
              required
              className="p-2 border rounded w-full"
            />
            <select
              name="category"
              value={newTask.category}
              onChange={handleInputChange}
              className="p-2 border rounded"
            >
              <option value="todo">To Do</option>
              <option value="inProgress">In Progress</option>
              <option value="done">Done</option>
            </select>
            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded"
            >
              Add Task
            </button>
          </form>
        </div>
        <div className="flex space-x-4">
          {['todo', 'inProgress', 'done'].map(category => (
            <div
              key={category}
              className="w-1/3 bg-gray-100 p-4 rounded-lg"
              onDrop={() => handleDrop(category)}
              onDragOver={handleDragOver}
            >
              <h2 className="text-lg font-bold mb-4 capitalize">{category}</h2>
              <div className="space-y-4">
                {tasks[category].map(task => (
                  <div
                    key={task.id}
                    draggable
                    onDragStart={() => handleDragStart(task, category)}
                    className="p-4 bg-white rounded-lg shadow-md cursor-grab"
                  >
                    {task.title}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kanban;
