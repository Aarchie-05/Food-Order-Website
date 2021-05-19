import React, { useState } from 'react';
import people from './data';
import '../css/review.css';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
      <div id="dibbi">
    <main style={{marginLeft:'500px'}}>
    <section className='a container' >
      <div className='b title'>
        <h2>our reviews</h2>
        <div className='c underline'></div>
      </div>

     

    <article className='d review'>
      <div className='img-container e'>
        <img src={image} alt={name} className='f person-img' />
        <span className='g quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='h author'>{name}</h4>
      <p className='i job'>{job}</p>
      <p className='k info'>{text}</p>
      <div className='l button-container'>
        <button className='m prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='n next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      
    </article>
    
          
    </section>
    </main>
    </div>
  );
};

export default Review;
