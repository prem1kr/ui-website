import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import WelcomePage from './components/WelcomePage/WelcomePage';
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
import Process from './components/Process/Process';
import TrustedPage from './components/TrustedPage/TrustedPages';
import VerificationCodePage from './components/VerificationCodePage/VerificationCodePage';


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
        <Route path="/services" element={<Process/>} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/verification-code" element={<VerificationCodePage/>} />
        {/* Add other routes here */}
      </Routes>
    </div>
    <Navbar/>
    <WelcomePage/>
     <About/>
     <Process/>
    <Opportunity/>
     <Clients/>
     <ClientsTestimonial/>
     <CanidateTestimonial/>
     <TrustedPage/>
     <EasyJobApp/>
     <ContactUs/>
     <Footer/>
     
    </>
  );
};

export default App;
