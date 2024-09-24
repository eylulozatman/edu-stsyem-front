import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import NewStudent from './Pages/NewStudent';
import NewTeacher from './Pages/NewTeacher';
import StudentLogin from './Pages/StudentLogin';
import TeacherLogin from './Pages/TeacherLogin';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/new-student" element={<NewStudent />} />
        <Route path="/new-teacher" element={<NewTeacher />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/teacher-login" element={<TeacherLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
