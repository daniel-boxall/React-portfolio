import React from 'react';
import Navbar from '../../components/nav/Navbar.js';
import Footer from '../../components/footer/Footer.js';
import './Home.css';


function Home() {
    return (
        <>
            <div className="body">
            <Navbar />
                <div className="container">
                    <div className="card">
                        <p>Hi, my name is
                        <h2>Daniel Boxall.</h2>
                        I'm a Web Developer based in Hampshire, UK.</p>
                        <p1>Currently studying BSc Computing and IT with the Open University</p1>
                    </div>  
                </div>  
                <Footer /> 
            </div>
        </>
    );
}

export default Home;