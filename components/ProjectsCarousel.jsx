import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import { useEffect } from 'react';

import ProjectTipton from './ProjectTipton';
import MaxJoyRacing from './ProjectMJR';
import Shedex from './ProjectShedex';

const ProjectsCarousel = () => {
    useEffect(() => {
      new Glide('.projects-carousel', {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        gap: 20,
        breakpoints: {
          1024: { perView: 2 },
          600: { perView: 1 }
        }
      }).mount();
    }, []);
  
    return (
      <div className="glide projects-carousel">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide"> <ProjectTipton /> </li>
            <li className="glide__slide"> <MaxJoyRacing /> </li>
            <li className="glide__slide"> <Shedex /> </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default ProjectsCarousel;