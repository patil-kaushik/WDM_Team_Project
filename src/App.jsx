import { useState } from 'react'
import './App.css'
import Home from './pages/static/home/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './pages/static/about/About';
import Services from './pages/static/services/Services';
import Contact from './pages/static/contact/Contact';
import Login from './pages/static/login/Login';
import Register from './pages/static/register/Register';
import Forgot from './pages/static/forgot/Forgot';
import Student from './pages/student/dashboard/Dashboard';
import Instructor from './pages/instructor/dashboard/Dashboard';
import AdminDashboard from './pages/admin/adminDashboard/AdminDashboard';
import QaDashboard from './pages/quantity/qaDashboard/QaDashboard';
import CorDashboard from './pages/cordinator/corDashboard/CorDashboard';
import Chat from './pages/chat/Chat';
import Profile from './pages/profile/Profile';
import Exams from './pages/student/exams/Exams';
import Assignment from './pages/student/assignment/Assignment';

function App() {
  const router = createBrowserRouter([
    {
      path: "/", 
      element: <Home />
    },
    {
      path: "/about", 
      element: <About />
    },
    {
      path: "/services", 
      element:  <Services />
    },
    {
      path: "/contact", 
      element:  <Contact />
    },
    {
      path: "/login", 
      element:  <Login />
    },
    {
      path: "/register", 
      element:  <Register />
    },
    {
      path: "/forgot", 
      element:  <Forgot />
    },
    {
      path: "/student/home", 
      element:  <Student />
    },
    {
      path: "/instructor/home", 
      element:  <Instructor />
    },
    {
      path: "/admin/home", 
      element:  <AdminDashboard />
    },
    {
      path: "/qa/home", 
      element:  <QaDashboard />
    },
    {
      path: "/cor/home", 
      element:  <CorDashboard />
    },
    {
      path: "/chat", 
      element:  <Chat />
    },
    {
      path: "/profile", 
      element:  <Profile />
    },
    {
      path: "/student/exams", 
      element:  <Exams />
    },
    {
      path: "/student/assignment", 
      element:  <Assignment />
    },
  ]);
  
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App
