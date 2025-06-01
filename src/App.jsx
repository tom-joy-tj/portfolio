import React from 'react';
import './App.css'
import Header from '../components/Header';
import Signature from '../components/Signature';
import ProjectsCarousel from '../components/ProjectsCarousel';
import Footer from '../components/Footer';



function App() {
    return (
      <div id="root">
        <Header />
        <main>
            <section className="signature-section">
                <Signature />
            </section>
            <section className="carousel-section">
                <ProjectsCarousel />
            </section>
        </main>
        <Footer />
      </div>
    )
  }
  
  export default App;