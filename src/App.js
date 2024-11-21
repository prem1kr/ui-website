import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import WelcomePage from './components/WelcomePage/WelcomePage';
import CompanyProcess from './components/CompanyProcess/CompanyProcess';
import CanidateProcess from './components/CanidateProcess/CanidateProcess';
import Opportunity from './components/Opportunity/Opportunity';
import EasyJobApp from './components/EasyJobApp/EasyJobApp';
import ContactUs from './components/ContactUs/ContactUs'
// Import your Lottie animation
import Clients from './components/Clients/Clients';
import CanidateTestimonial from './components/CanidateTestimonial/CanidateTestimonial';
import ClientsTestimonial from './components/ClientTestimonial/ClientTestimonial';
import { Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignupPage/SignupPage';
import { Home } from '@mui/icons-material';
import VerificationPage from './components/VerificationPage/VerificationPage';


const App = () => {
  
  return (
    
    <>
      <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<CanidateProcess/>} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/verification" element={<VerificationPage/>} />
        {/* Add other routes here */}
      </Routes>
    </div>
    <Navbar/>
    <WelcomePage/>
     <About/>
    <CompanyProcess/>
    <CanidateProcess/>
    <Opportunity/>
     <Clients/>
     <ClientsTestimonial/>
     <CanidateTestimonial/>
     <EasyJobApp/>
     <ContactUs/>
     <Footer/>
     
    </>
  );
};

export default App;
