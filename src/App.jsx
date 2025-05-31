import React from 'react';
import './App.css'
import Header from '../components/Header';
import Signature from '../components/Signature';
import ProjectsCarousel from '../components/ProjectsCarousel';



function App() {
    return (
      <div>
        <Header />
        <main>
            <section className="signature-section">
                <Signature />
            </section>
            <section className="carousel-section">
                <ProjectsCarousel />
            </section>
        </main>
      </div>
    )
  }
  
  export default App;