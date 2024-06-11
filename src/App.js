import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const inter = setInterval(() => (
      setIndex(index + 1)
    ), 3000)

    return () => clearInterval(inter)
  }, [index])

  if (index < 0) {
    setIndex(people.length - 1);
  }
  else if (index > people.length - 1) {
    setIndex(0);
  }


  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const {id, name, image, title, quote} = {...person};
          let value = "nextSlide"

          if (personIndex === index ) {
            value = "activeSlide"
          }
          else if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
            value = "lastSlide"
          }
          return (
            <article key={id} className={value}>
              <img src={image} alt="name" className="person-img"/>
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
            </article>
          )
        })}
          <button 
            className="btn prev"
            onClick={() => setIndex(index - 1)}
              >
              <FiChevronLeft />
          </button>
          <button 
            className="btn next"
            onClick={() => setIndex(index + 1)}
            >
            <FiChevronRight />
          </button>

      </div>
    </section>
  )
}

export default App;
