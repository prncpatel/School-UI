import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
// Layouts
import DashboardLayout from './components/layout/DashboardLayout';
// Auth Pages
import Login from './pages/auth/Login';
// Dashboard Pages
import AdminDashboard from './pages/dashboard/AdminDashboard';
import TeacherDashboard from './pages/dashboard/TeacherDashboard';
import StudentDashboard from './pages/dashboard/StudentDashboard';
import StaffDashboard from './pages/dashboard/StaffDashboard';
// Student Pages
import StudentList from './pages/students/StudentList';
import AddStudent from './pages/students/AddStudent';
import StudentDetails from './pages/students/StudentDetails';
import StudentPromotion from './pages/students/StudentPromotion';
// Teacher Pages
import TeacherList from './pages/teachers/TeacherList';
import AddTeacher from './pages/teachers/AddTeacher';
import TeacherDetails from './pages/teachers/TeacherDetails';
// Subject Pages
import SubjectList from './pages/subjects/SubjectList';
import AddSubject from './pages/subjects/AddSubject';
// Class Pages
import ClassList from './pages/classes/ClassList';
import AddClass from './pages/classes/AddClass';
// Exam Pages
import ExamList from './pages/exams/ExamList';
import AddExam from './pages/exams/AddExam';
// Library Pages
import LibraryList from './pages/library/LibraryList';
import AddLibrary from './pages/library/AddLibrary';
// Transport Pages
import TransportList from './pages/transport/TransportList';
import AddTransport from './pages/transport/AddTransport';
// Fees Pages
import FeesList from './pages/fees/FeesList';
import AddFees from './pages/fees/AddFees';
// Events Pages
import EventsList from './pages/events/EventsList';
import AddEvent from './pages/events/AddEvent';
// Attendance Pages
import AttendanceList from './pages/attendance/AttendanceList';
import AddAttendance from './pages/attendance/AddAttendance';
import CheckAttendance from './pages/attendance/CheckAttendance';
// Salary Pages
import SalaryList from './pages/salary/SalaryList';
import AddSalary from './pages/salary/AddSalary';
// Assignment Pages
import AssignmentsList from './pages/Assignments/AssignmentsList';
import AddAssignment from './pages/Assignments/AddAssignment';
// Leave Pages
import LeavesList from './pages/Leaves/LeavesList';
import AddLeave from './pages/Leaves/AddLeave';
// Notice Pages
import NoticeBoard from './pages/notices/NoticeBoard';
import AddNotice from './pages/notices/AddNotice';

interface User {
  isAuthenticated: boolean;
  role: string | null;
}

export function App() {
  const [user, setUser] = useState<User>({
    isAuthenticated: false,
    role: null
  });
  const login = (role: string) => {
    setUser({
      isAuthenticated: true,
      role
    });
  };
  const logout = () => {
    setUser({
      isAuthenticated: false,
      role: null
    });
  };
  const renderProtectedRoute = (element: React.ReactNode, allowedRoles: string[] = []) => {
    if (!user.isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    if (allowedRoles.length > 0 && !allowedRoles.includes(user.role || '')) {
      return <Navigate to="/dashboard" replace />;
    }
    return <DashboardLayout user={user} onLogout={logout}>{element}</DashboardLayout>;
  };
  return <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={user.isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login onLogin={login} />} />
          <Route path="/dashboard" element={renderProtectedRoute(
            <>
              {user.role === 'admin' && <AdminDashboard />}
              {user.role === 'teacher' && <TeacherDashboard />}
              {user.role === 'student' && <StudentDashboard />}
              {user.role === 'staff' && <StaffDashboard />}
            </>
          )} />
          <Route path="/students" element={renderProtectedRoute(<StudentList />, ['admin', 'teacher'])} />
          <Route path="/students/add" element={renderProtectedRoute(<AddStudent />, ['admin'])} />
          <Route path="/students/:id" element={renderProtectedRoute(<StudentDetails />, ['admin', 'teacher', 'student'])} />
          <Route path="/students/promotion" element={renderProtectedRoute(<StudentPromotion />, ['admin'])} />
          <Route path="/teachers" element={renderProtectedRoute(<TeacherList />, ['admin', 'teacher'])} />
          <Route path="/teachers/add" element={renderProtectedRoute(<AddTeacher />, ['admin'])} />
          <Route path="/teachers/:id" element={renderProtectedRoute(<TeacherDetails />, ['admin', 'teacher'])} />
          <Route path="/subjects" element={renderProtectedRoute(<SubjectList />, ['admin', 'teacher'])} />
          <Route path="/subjects/add" element={renderProtectedRoute(<AddSubject />, ['admin', 'teacher'])} />
          <Route path="/classes" element={renderProtectedRoute(<ClassList />, ['admin', 'teacher'])} />
          <Route path="/classes/add" element={renderProtectedRoute(<AddClass />, ['admin', 'teacher'])} />
          <Route path="/exams" element={renderProtectedRoute(<ExamList />, ['admin', 'teacher', 'student'])} />
          <Route path="/exams/add" element={renderProtectedRoute(<AddExam />, ['admin', 'teacher'])} />
          <Route path="/library" element={renderProtectedRoute(<LibraryList />, ['admin', 'teacher', 'student'])} />
          <Route path="/library/add" element={renderProtectedRoute(<AddLibrary />, ['admin', 'teacher'])} />
          <Route path="/transport" element={renderProtectedRoute(<TransportList />, ['admin', 'staff', 'student'])} />
          <Route path="/transport/add" element={renderProtectedRoute(<AddTransport />, ['admin', 'staff'])} />
          <Route path="/fees" element={renderProtectedRoute(<FeesList />, ['admin', 'staff', 'student'])} />
          <Route path="/fees/add" element={renderProtectedRoute(<AddFees />, ['admin', 'staff'])} />
          <Route path="/events" element={renderProtectedRoute(<EventsList />, ['admin', 'teacher', 'student', 'staff'])} />
          <Route path="/events/add" element={renderProtectedRoute(<AddEvent />, ['admin', 'teacher'])} />
          <Route path="/attendance" element={renderProtectedRoute(<AttendanceList />, ['admin', 'teacher', 'student'])} />
          <Route path="/attendance/add" element={renderProtectedRoute(<AddAttendance />, ['admin', 'teacher'])} />
          <Route path="/attendance/check" element={renderProtectedRoute(<CheckAttendance />, ['admin', 'teacher', 'student'])} />
          <Route path="/salary" element={renderProtectedRoute(<SalaryList />, ['admin'])} />
          <Route path="/salary/add" element={renderProtectedRoute(<AddSalary />, ['admin'])} />
          <Route path="/activities" element={renderProtectedRoute(<EventsList />, ['admin'])} />
          <Route path="/schedule" element={renderProtectedRoute(<ClassList />, ['teacher'])} />
          <Route path="/assignments" element={renderProtectedRoute(<AssignmentsList />, ['admin', 'teacher', 'student'])} />
          <Route path="/assignments/add" element={renderProtectedRoute(<AddAssignment />, ['admin', 'teacher'])} />
          <Route path="/leaves" element={renderProtectedRoute(<LeavesList />, ['admin', 'teacher', 'staff'])} />
          <Route path="/leaves/add" element={renderProtectedRoute(<AddLeave />, ['admin', 'teacher', 'staff'])} />
          <Route path="/notices" element={renderProtectedRoute(<NoticeBoard />, ['admin', 'teacher', 'student', 'staff'])} />
          <Route path="/notices/add" element={renderProtectedRoute(<AddNotice />, ['admin', 'teacher'])} />
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>;
}