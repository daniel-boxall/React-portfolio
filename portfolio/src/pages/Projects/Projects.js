import React from 'react';
import './Projects.css';
import Navbar from '../../components/nav/Navbar.js';
import Footer from '../../components/footer/Footer.js';
import GlobalGazette from '../../assets/images/GlobalGazette.png';

function Projects() {
    
    return (
        <>
            <div className="body">
                <Navbar />
                <div className="projects-container">
                    <div className="title">
                        <h2>My Projects</h2>
                    </div>
                    <div className="grid">
                        <article className="cardP P1 grid-col-span-2">
                            <img src={ GlobalGazette } alt="project screenshot"/>
                            <h2>Global Gazette</h2>
                            <p>This was a group a group project created during a Front-End Dev bootcamp</p>
                             <ul>
                                <li>Utilizing three external Api's</li>
                                <li>Vanilla JavaScript</li>
                                <li>Local Storage</li>
                            </ul>
                            <a target="_blank" href="https://dearbojack.github.io/Global-Gazette/"><button>Visit Deployment</button></a>
                        </article>
                       <article className="cardP P1 grid-col-span-2">
                            <img src={ GlobalGazette } alt="project screenshot"/>
                            <h2>Global Gazette</h2>
                            <p>This was a group a group project created during a Front-End Dev bootcamp</p>
                             <ul>
                                <li>Utilizing three external Api's</li>
                                <li>Vanilla JavaScript</li>
                                <li>Local Storage</li>
                            </ul>
                            <a target="_blank" href="https://dearbojack.github.io/Global-Gazette/"><button>Visit Deployment</button></a>
                        </article>
                        <article className="cardP">
                            <h2>hello</h2>
                        </article>
                        <article className="cardP">
                            <h2>hello</h2>
                        </article>
                        <article className="cardP">
                            <h2>hello</h2>
                        </article>
                        <article className="cardP">
                               <h2>hello</h2>
                        </article>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}



export default Projects;
