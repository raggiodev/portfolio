import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Hero: React.FC = () => {
  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Fernando Andres Raggio</h2>;
  const three = <h3 className="big-heading">PALABRAS QUE CAMBIAN.</h3>;
  const four = (
    <>
      <p>
        I’m a software lorem ipsum y tal y cual.
      </p>
    </>
  );
  const five = (
    <a
      className="link"
      href="https://www.github.com/JoeTheorium"
      target="_blank"
      rel="noreferrer"
    >
      Know me!
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <section>
      {items.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </section>
  );
};

export default Hero;
