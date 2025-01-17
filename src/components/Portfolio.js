import React from 'react';

// import components
import Projects from './Projects';

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary min-h-[1400px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
            My latest work
          </h2>
          <p className='subtitle'>
          I am currently pursuing my B.Tech degree while concurrently leveraging my skills and knowledge as a Frontend Web Developer through an internship at KMD Company.
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
