import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const CreateProject = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    projectname: '',
  });

  const { projectname } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, 2, null));
  };
  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
      <input
        type='text'
        name='projectname'
        value={projectname}
        onChange={handleChange}
        required
      />
      <button type='submit'>CREATE</button>
    </form>
  );
};

export default CreateProject;
