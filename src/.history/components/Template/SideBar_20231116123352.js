import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src="https://avatars.githubusercontent.com/u/93352394?s=400&u=30ef386c2a0ee507bd92c9a69271c05682aa7dd9&v=4" alt="" />
      </Link>
      <header>
        <h2>Marouane Khoubrane</h2>
        <p><a href="mailto:marouane@khoubrane.me">marouane@khoubrane.me</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>I&apos;m Marouane Khoubrane, a web developer with a passion for crafting
        visually captivating and user-friendly websites. With a focus on optimizing
        performance and effective client communication, I continue to expand my
        skillset and demonstrate adaptability and problem-solving abilities. I
        thrive on learning new things and eagerly embrace new challenges to deliver
        top-notch web solutions.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') && <Link to="/resume" className="button">Learn More</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Marouane Koubrane <Link to="/">khoubrane.me</Link>.</p>
    </section>
  </section>
);

export default SideBar;
