import React, { useState } from 'react';
import './NewStudent.css';

const NewStudent = () => {
  // State for form inputs
  const [sName, setSName] = useState('');
  const [sSurname, setSSurname] = useState('');
  const [sEmail, setSEmail] = useState('');
  const [sPassword, setSPassword] = useState('');
  const [sPasswordConf, setSPasswordConf] = useState('');
  const [birthday, setBirthday] = useState('');

  // Function to handle form submission
  const createNewStudentRequest = (e) => {
    e.preventDefault(); 
    const NewStudentRequest = {
      name: sName,
      surname: sSurname,
      email: sEmail,
      password: sPassword,
      passwordConfirm: sPasswordConf,
      birthday: birthday
    };

    sendNewRequest(NewStudentRequest);
  };

  // Function to send API request
  const sendNewRequest = async (NewStudentRequest) => {
    try {
      const response = await fetch('/api/auth/student-register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(NewStudentRequest),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Student registered successfully:', result);
      } else {
        console.log('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error while registering student:', error);
    }
  };

  return (
    <div>
      <form id='newStudentForm' onSubmit={createNewStudentRequest}>
        <input
          type='text'
          id='sName'
          value={sName}
          onChange={(e) => setSName(e.target.value)}
          placeholder='Name'
        />

        <input
          type='text'
          id='sSurname'
          value={sSurname}
          onChange={(e) => setSSurname(e.target.value)}
          placeholder='Surname'
        />

        <input
          type='email'
          id='sEmail'
          value={sEmail}
          onChange={(e) => setSEmail(e.target.value)}
          placeholder='Email'
        />

        <input
          type='password'
          id='sPassword'
          value={sPassword}
          onChange={(e) => setSPassword(e.target.value)}
          placeholder='Password'
        />

        <input
          type='password'
          id='sPasswordConf'
          value={sPasswordConf}
          onChange={(e) => setSPasswordConf(e.target.value)}
          placeholder='Password Confirm'
        />

        <input
          type='date'
          id='birthday'
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default NewStudent;
