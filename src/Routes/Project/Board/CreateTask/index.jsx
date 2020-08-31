import React, { useState } from 'react';

const CreateTask = ({ col, prj }) => {
  const [formData, setFormData] = useState({
    taskname: '',
    column: col._id,
    project: prj._id,
  });

  const { taskname, column, project } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, 2, null));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={taskname}
        onChange={handleChange}
        name='taskname'
        required
        placeholder='add task'
      />
      <button type='submit'>Add Task</button>
    </form>
  );
};

export default CreateTask;
