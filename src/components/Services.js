import React from 'react';

// import services data
import { services } from '../data';

const Services = () => {
  return (
    <section id='services' className='section bg-tertiary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block'>
            What I do for clients
          </h2>
          <p className='subtitle'>
          I will play a crucial role as a web developer in creating and maintaining an online presence for my clients. I will work closely with them to understand their vision, goals, and target audience. Using programming languages like HTML, CSS, and JavaScript, I will build the structure and functionality of websites to ensure they are user-friendly, visually appealing, and responsive across various devices. 
          </p>
        </div>
       
      </div>
    </section>
  );
};

export default Services;
