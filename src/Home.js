import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h3>Home page</h3>
    <Link to="/message">Message</Link>
  </div>
);

export default Home;
