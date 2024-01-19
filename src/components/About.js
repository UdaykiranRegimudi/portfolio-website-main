import React from 'react';

// import img
import Image from '../assets/img/about.webp';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Uday Kiran
              </h2>
              <p className='mb-4 text-accent'>
              Welcome to My World of Web Development!
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
              

              Hello there! I'm Uday, a passionate and versatile full-stack web developer with a love for crafting clean, functional, and visually appealing digital experiences. My journey in the world of web development began with a fascination for turning ideas into interactive and dynamic websites.    <br />
                <br />
                As a full-stack developer, I have hands-on experience in both front-end and back-end technologies. I specialize in creating seamless user interfaces using HTML, CSS, and JavaScript, React Js. I believe that a well-designed front-end is not just about aesthetics but also about providing an intuitive and delightful user experience.

                On the back-end, I'm proficient in using technologies such as Node js , Express Js, SQL, Firebase ensuring that the server-side of the applications I build is robust, efficient, and scalable. 
              </p>
            </div>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
