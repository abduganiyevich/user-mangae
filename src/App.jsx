import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const users = useSelector((state) => state.users.users);
  const nameRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();
  const jobRef = useRef();
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
   
   
      const newUser = {
        id: Math.trunc(Math.random() * 1000),
       name: nameRef.current.value,
        surname: surnameRef.current.value,
        email: emailRef.current.value,
        job: jobRef.current.value,
      };
      dispatch({ type: 'USER_ADD', payload: newUser });
      nameRef.current.value = '';
      surnameRef.current.value = '';
      emailRef.current.value = '';
      jobRef.current.value = '';

  };

  const handleDelete = (id) => {
    dispatch({ type: 'USER_REMOVE', payload: id });
  };

  return (
    <div className='container'>
      <h1>User Management</h1>
      <form className='form-wrapper' onSubmit={handleAdd}>
        <input ref={nameRef} type='text' placeholder='Name' required />
        <input ref={surnameRef} type='text' placeholder='Surname' required />
        <input ref={emailRef} type='email' placeholder='Email' required />
        <input ref={jobRef} type='text' placeholder='Job' required />
        <button type='submit'>Add User</button>
      </form>

      {users.length === 0 && (
        <div>
          <h4>Hech qanday ma'luot yo'q</h4>
        </div>
      )}

      {users.length > 0 &&
        users.map((user) => (
          <div className='card-item' key={user.id}>
            <p>Name: {user.name}</p>
            <p>Surname: {user.surname}</p>
            <p>Email: {user.email}</p>
            <p>Job: {user.job}</p>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </div>
        ))}
    </div>
  );
}

export default App;
