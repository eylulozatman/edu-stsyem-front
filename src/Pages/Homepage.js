import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';  // Stil dosyası ayrı olacak


const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
    
      <div className='registerCard' onClick={() => navigate('/new-student')}>
        New Student
      </div>

     
      <div className='registerCard' onClick={() => navigate('/new-teacher')}>
        New Teacher
      </div>

   
      <div className='loginCard' onClick={() => navigate('/student-login')}>
        Student Login
      </div>


      <div className='loginCard' onClick={() => navigate('/teacher-login')}>
        Teacher Login
      </div>
    </div>
  );
}

export default Homepage;
