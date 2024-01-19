import React from 'react';

const Project = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div className='mb-8'>
        <img className='rounded-2xl h-64' src={item.image} alt='' />
      </div>
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3'><a href={item.link} target='_blank'>{item.name}</a></h3>
      <p className='text-base max-w-md h-40'>
        {item.description.slice(0,280)}...
      </p>
    </div>
  );
};

export default Project;
