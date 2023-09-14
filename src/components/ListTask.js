import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);
  const [showDone, setShowDone] = useState(true);

  const filteredTasks = showDone ? tasks : tasks.filter((task) => !task.isDone);

  return (
    <div>
      <div>
        <label>Show Done Tasks:</label>
        <input
          type="checkbox"
          checked={showDone}
          onChange={() => setShowDone(!showDone)}
        />
      </div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;