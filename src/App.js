import React from 'react';
import Clients from './components/Clients/Clients';
import Services from './components/Services/Services';
import Navbar from './components/Navbar/Navbar';
import AboutUs from './components/AboutUs/AboutUs';
import AboutCompany from './components/AboutCompany/AboutCompany'
import Flowprocess from './components/Flowprocess/Flowprocess'
import Client1 from './components/Client1/Client1'
import DownloadPage from './components/DownloadPage/DownloadPage'
import Footer from './components/Footer/Footer';



const App = () => {
  return (
    <>
    <Navbar/>
    <AboutUs/>
    <AboutCompany/>
    <Flowprocess/>
    <Flowprocess/>
    <Services/>
     <Clients/>
     <Client1/>
     <DownloadPage/>
     <Footer/>
    
    </>
  );
};

export default App;
